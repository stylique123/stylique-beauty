"use client";

import React, { useState, useRef, useCallback, useMemo } from "react";
import {
  Upload,
  X,
  CheckCircle,
  AlertCircle,
  Trash2,
  Tag,
  Download,
  RotateCw,
  Loader,
  Eye,
  EyeOff,
  ChevronDown,
} from "lucide-react";

interface ProspectRow {
  id: string;
  email?: string;
  companyName?: string;
  contactName?: string;
  title?: string;
  industry?: string;
  tags?: string[];
  phoneNumber?: string;
  website?: string;
  linkedinUrl?: string;
  notes?: string;
  errors: ValidationError[];
  selected: boolean;
  status?: "pending" | "processing" | "success" | "failed";
}

interface ValidationError {
  field: string;
  message: string;
}

interface FilePreviewData {
  fileName: string;
  rowCount: number;
  headers: string[];
  sampleRows: Record<string, string>[];
}

interface ProspectingEngineProps {
  onProspectsIngested?: (count: number, prospects: ProspectRow[]) => void;
  onAutoRefresh?: () => Promise<void>;
}

const REQUIRED_FIELDS = ["email", "companyName"];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FILE_SIZE_LIMIT = 10 * 1024 * 1024; // 10MB
const BATCH_SIZE = 50; // Process in batches

export function EnhancedProspectingEngineLive({
  onProspectsIngested,
  onAutoRefresh,
}: ProspectingEngineProps) {
  const [prospects, setProspects] = useState<ProspectRow[]>([]);
  const [filePreview, setFilePreview] = useState<FilePreviewData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [toastMessage, setToastMessage] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);
  const [processProgress, setProcessProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [bulkTagInput, setBulkTagInput] = useState("");
  const [errorReportOpen, setErrorReportOpen] = useState(false);
  const [showFilePreview, setShowFilePreview] = useState(false);
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<"all" | "errors" | "success" | "failed">(
    "all"
  );
  const [showConfirmDialog, setShowConfirmDialog] = useState<{
    action: string;
    count: number;
  } | null>(null);

  // Show toast message
  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    setToastMessage({ message, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Enhanced CSV parsing with better error handling
  const parseCSVData = useCallback((text: string): ProspectRow[] => {
    try {
      const lines = text.trim().split("\n");
      if (lines.length === 0) return [];

      const headerLine = lines[0];
      if (!headerLine) return [];

      const headers = headerLine
        .split(",")
        .map((h) =>
          h
            .trim()
            .toLowerCase()
            .replace(/['"]/g, "")
        );
      const rows: ProspectRow[] = [];

      for (let i = 1; i < lines.length; i++) {
        const lineItem = lines[i];
        if (!lineItem) continue;
        const line = lineItem.trim();
        if (!line) continue;

        // Better CSV parsing to handle quoted values
        const values: string[] = [];
        let current = "";
        let inQuotes = false;

        for (let j = 0; j < line.length; j++) {
          const char = line[j];
          const nextChar = line[j + 1];

          if (char === '"') {
            if (inQuotes && nextChar === '"') {
              current += '"';
              j++;
            } else {
              inQuotes = !inQuotes;
            }
          } else if (char === "," && !inQuotes) {
            values.push(current.trim());
            current = "";
          } else {
            current += char;
          }
        }
        values.push(current.trim());

        const row: ProspectRow = {
          id: `prospect-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          email: values[headers.indexOf("email")] || undefined,
          companyName: values[headers.indexOf("companyname")] || undefined,
          contactName: values[headers.indexOf("contactname")] || undefined,
          title: values[headers.indexOf("title")] || undefined,
          industry: values[headers.indexOf("industry")] || undefined,
          phoneNumber: values[headers.indexOf("phonenumber")] || undefined,
          website: values[headers.indexOf("website")] || undefined,
          linkedinUrl: values[headers.indexOf("linkedinurl")] || undefined,
          notes: values[headers.indexOf("notes")] || undefined,
          errors: [],
          selected: false,
          status: "pending",
        };

        // Validate row
        const validationErrors = validateProspect(row);
        row.errors = validationErrors;

        rows.push(row);
      }

      return rows;
    } catch (error) {
      console.error("CSV parsing error:", error);
      return [];
    }
  }, []);

  // Validate individual prospect
  const validateProspect = (prospect: ProspectRow): ValidationError[] => {
    const errors: ValidationError[] = [];

    if (!prospect.email) {
      errors.push({ field: "email", message: "Email is required" });
    } else if (!EMAIL_REGEX.test(prospect.email)) {
      errors.push({ field: "email", message: "Invalid email format" });
    }

    if (!prospect.companyName) {
      errors.push({ field: "companyName", message: "Company name is required" });
    }

    return errors;
  };

  // Handle file selection with preview
  const handleFileSelect = useCallback(
    async (files: FileList | null) => {
      if (!files || files.length === 0) return;

      const file = files[0];
      if (!file) return;

      // Validate file size
      if (file.size > FILE_SIZE_LIMIT) {
        showToast("File size exceeds 10MB limit", "error");
        return;
      }

      // Validate file type
      const validTypes = [
        "text/csv",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ];
      if (!validTypes.some((type) => file.type.includes(type)) && !file.name.endsWith(".csv")) {
        showToast("Please upload a CSV or Excel file", "error");
        return;
      }

      setIsProcessing(true);
      try {
        const text = await file.text();
        const parsedRows = parseCSVData(text);

        if (parsedRows.length === 0) {
          showToast("No valid data found in file", "error");
          setIsProcessing(false);
          return;
        }

        // Generate file preview
        const headerLine = text.split("\n")[0];
        const headers = (headerLine || "").split(",").map((h) => h.trim());
        const sampleRows = parsedRows.slice(0, 3);

        const preview: FilePreviewData = {
          fileName: file.name,
          rowCount: parsedRows.length,
          headers: headers,
          sampleRows: sampleRows.map((row) => ({
            email: row.email || "",
            companyName: row.companyName || "",
            contactName: row.contactName || "",
            title: row.title || "",
          })),
        };

        setProspects(parsedRows);
        setFilePreview(preview);
        setShowFilePreview(true);
        showToast(`File loaded: ${parsedRows.length} prospects ready for review`, "success");
      } catch (error) {
        showToast("Failed to parse file", "error");
        console.error(error);
      } finally {
        setIsProcessing(false);
      }
    },
    [parseCSVData]
  );

  // Handle drag and drop
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFileSelect(e.dataTransfer.files);
  };

  // Select/deselect all
  const handleSelectAll = () => {
    const filteredProspects = getFilteredProspects();
    const allSelected = selectedCount === filteredProspects.length;
    const updated = prospects.map((p) => {
      const isFiltered = filteredProspects.find((fp) => fp.id === p.id);
      return isFiltered ? { ...p, selected: !allSelected } : p;
    });
    setProspects(updated);
    const newCount = updated.filter((p) => p.selected).length;
    setSelectedCount(newCount);
    setShowBulkActions(newCount > 0);
  };

  // Toggle individual row selection
  const toggleRowSelection = (id: string) => {
    const updated = prospects.map((p) =>
      p.id === id ? { ...p, selected: !p.selected } : p
    );
    const newCount = updated.filter((p) => p.selected).length;
    setProspects(updated);
    setSelectedCount(newCount);
    setShowBulkActions(newCount > 0);
  };

  // Filter prospects based on status
  const getFilteredProspects = (): ProspectRow[] => {
    return prospects.filter((p) => {
      if (filterStatus === "all") return true;
      if (filterStatus === "errors") return p.errors.length > 0;
      if (filterStatus === "success") return p.status === "success";
      if (filterStatus === "failed") return p.status === "failed";
      return true;
    });
  };

  // Batch ingest with progress tracking
  const handleIngestSelected = async () => {
    const selected = prospects.filter((p) => p.selected && p.errors.length === 0);
    if (selected.length === 0) {
      showToast("No valid prospects selected", "error");
      return;
    }

    setShowConfirmDialog({ action: "ingest", count: selected.length });
  };

  // Confirm and execute ingest
  const executeIngest = async () => {
    setShowConfirmDialog(null);
    const selected = prospects.filter((p) => p.selected && p.errors.length === 0);

    setIsProcessing(true);
    try {
      let processed = 0;
      const updated = prospects.map((p) =>
        p.selected && p.errors.length === 0
          ? { ...p, status: "processing" as const }
          : p
      );
      setProspects(updated);

      // Process in batches
      for (let i = 0; i < selected.length; i += BATCH_SIZE) {
        const batch = selected.slice(i, i + BATCH_SIZE);
        await new Promise((resolve) => setTimeout(resolve, 500));

        processed += batch.length;
        setProcessProgress(Math.round((processed / selected.length) * 100));
      }

      // Mark as success
      const finalProspects = prospects.map((p) =>
        p.status === "processing" ? { ...p, status: "success" as const } : p
      );
      setProspects(finalProspects);

      showToast(`${selected.length} prospects ingested successfully`, "success");

      if (onProspectsIngested) {
        onProspectsIngested(selected.length, finalProspects.filter((p) => p.status === "success"));
      }

      // Auto-refresh company list
      if (onAutoRefresh) {
        try {
          await onAutoRefresh();
        } catch (error) {
          console.error("Auto-refresh failed:", error);
        }
      }

      // Reset selection
      setTimeout(() => {
        const cleared = finalProspects.map((p) => ({ ...p, selected: false }));
        setProspects(cleared);
        setSelectedCount(0);
        setShowBulkActions(false);
        setProcessProgress(0);
      }, 1500);
    } catch (error) {
      showToast("Failed to ingest prospects", "error");
      console.error(error);
      setProcessProgress(0);
    } finally {
      setIsProcessing(false);
    }
  };

  // Delete selected prospects with confirmation
  const handleDeleteSelected = () => {
    const selectedToDelete = prospects.filter((p) => p.selected);
    setShowConfirmDialog({ action: "delete", count: selectedToDelete.length });
  };

  const executeDelete = () => {
    setShowConfirmDialog(null);
    const remaining = prospects.filter((p) => !p.selected);
    setProspects(remaining);
    setSelectedCount(0);
    setShowBulkActions(false);
    showToast("Selected prospects deleted", "info");
  };

  // Mark as duplicate
  const handleMarkDuplicate = () => {
    const selected = prospects.filter((p) => p.selected);
    setShowConfirmDialog({ action: "duplicate", count: selected.length });
  };

  const executeMarkDuplicate = () => {
    setShowConfirmDialog(null);
    const updated = prospects.map((p) =>
      p.selected ? { ...p, status: "failed" as const } : p
    );
    setProspects(updated);
    setSelectedCount(0);
    setShowBulkActions(false);
    showToast("Marked as duplicates", "info");
  };

  // Add tags to selected prospects
  const handleBulkAddTags = () => {
    if (!bulkTagInput.trim()) {
      showToast("Enter at least one tag", "error");
      return;
    }

    const newTags = bulkTagInput.split(",").map((tag) => tag.trim());
    const updated = prospects.map((p) => {
      if (p.selected) {
        const existingTags = p.tags || [];
        return {
          ...p,
          tags: [...new Set([...existingTags, ...newTags])],
        };
      }
      return p;
    });

    setProspects(updated);
    setBulkTagInput("");
    showToast(`Added tags to ${selectedCount} prospects`, "success");
  };

  // Retry failed rows
  const handleRetryFailed = async () => {
    const failed = prospects.filter((p) => p.status === "failed");
    if (failed.length === 0) {
      showToast("No failed prospects to retry", "info");
      return;
    }

    setShowConfirmDialog({ action: "retry", count: failed.length });
  };

  const executeRetry = async () => {
    setShowConfirmDialog(null);
    const failed = prospects.filter((p) => p.status === "failed");

    setIsProcessing(true);
    try {
      let processed = 0;
      const updated = prospects.map((p) =>
        p.status === "failed" ? { ...p, status: "processing" as const } : p
      );
      setProspects(updated);

      // Process in batches
      for (let i = 0; i < failed.length; i += BATCH_SIZE) {
        const batch = failed.slice(i, i + BATCH_SIZE);
        await new Promise((resolve) => setTimeout(resolve, 500));

        processed += batch.length;
        setProcessProgress(Math.round((processed / failed.length) * 100));
      }

      const finalProspects = prospects.map((p) =>
        p.status === "processing" ? { ...p, status: "success" as const } : p
      );
      setProspects(finalProspects);

      showToast(`Retried ${failed.length} prospects`, "success");
      setProcessProgress(0);
    } catch (error) {
      showToast("Retry failed", "error");
      console.error(error);
      setProcessProgress(0);
    } finally {
      setIsProcessing(false);
    }
  };

  // Download error report
  const handleDownloadErrorReport = () => {
    const errorProspects = prospects.filter((p) => p.errors.length > 0);
    if (errorProspects.length === 0) {
      showToast("No errors to report", "info");
      return;
    }

    const csvContent = [
      "Email,Company Name,Field,Error Message",
      ...errorProspects.flatMap((p) =>
        p.errors.map(
          (e) => `"${p.email || ""}","${p.companyName || ""}","${e.field}","${e.message}"`
        )
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `error-report-${Date.now()}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Error report downloaded", "success");
  };

  // Count stats
  const stats = useMemo(() => {
    return {
      total: prospects.length,
      withErrors: prospects.filter((p) => p.errors.length > 0).length,
      successful: prospects.filter((p) => p.status === "success").length,
      failed: prospects.filter((p) => p.status === "failed").length,
      processed: prospects.filter((p) => p.status === "success" || p.status === "failed").length,
    };
  }, [prospects]);

  const filteredProspects = getFilteredProspects();

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Enhanced Prospect Engine</h1>
        <p className="text-slate-600">
          Upload, validate, and bulk manage lead prospects with real-time feedback
        </p>
      </div>

      {/* File Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive
            ? "border-blue-500 bg-blue-50"
            : "border-slate-300 bg-white hover:bg-slate-50"
        } cursor-pointer`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={(e) => handleFileSelect(e.target.files)}
          className="hidden"
        />

        <div className="space-y-3">
          <div className="flex justify-center">
            {isProcessing ? (
              <Loader className="w-12 h-12 text-blue-500 animate-spin" />
            ) : (
              <Upload className="w-12 h-12 text-blue-500" />
            )}
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">
              {filePreview
                ? `${filePreview.fileName} (${filePreview.rowCount} rows)`
                : "Drag & drop your CSV or Excel file here"}
            </p>
            <p className="text-sm text-slate-500 mt-1">
              {filePreview ? "" : "or click to browse (Max 10MB)"}
            </p>
          </div>
        </div>
      </div>

      {/* File Preview Modal */}
      {filePreview && showFilePreview && (
        <div className="mt-6 bg-white border border-slate-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-slate-900">File Preview</h3>
              <p className="text-sm text-slate-600">
                {filePreview.rowCount} rows loaded • {filePreview.headers.length} columns
              </p>
            </div>
            <button
              onClick={() => setShowFilePreview(false)}
              className="p-1 hover:bg-slate-100 rounded"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          {/* Headers */}
          <div className="mb-4 flex flex-wrap gap-2">
            {filePreview.headers.map((header, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
              >
                {header}
              </span>
            ))}
          </div>

          {/* Sample Data Table */}
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  {filePreview.headers.map((header, idx) => (
                    <th
                      key={idx}
                      className="px-4 py-2 text-left font-semibold text-slate-700"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filePreview.sampleRows.map((row, idx) => (
                  <tr key={idx} className="border-t border-slate-200 hover:bg-slate-50">
                    {filePreview.headers.map((header, colIdx) => (
                      <td
                        key={colIdx}
                        className="px-4 py-2 text-slate-700 text-xs"
                      >
                        {(row as Record<string, string>)[header] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-xs text-slate-500">
            Showing first 3 rows of {filePreview.rowCount} total rows
          </div>
        </div>
      )}

      {/* Stats Bar */}
      {prospects.length > 0 && (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
            <div className="text-sm text-slate-600">Total Prospects</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-2xl font-bold text-green-600">{stats.successful}</div>
            <div className="text-sm text-slate-600">Successful</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-2xl font-bold text-red-600">{stats.withErrors}</div>
            <div className="text-sm text-slate-600">With Errors</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-2xl font-bold text-blue-600">{stats.processed}</div>
            <div className="text-sm text-slate-600">Processed</div>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      {isProcessing && processProgress > 0 && (
        <div className="mt-6 bg-white rounded-lg p-4 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-700">Processing Progress</span>
            <span className="text-sm font-semibold text-blue-600">{processProgress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${processProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Bulk Actions Bar */}
      {showBulkActions && (
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <span className="text-sm font-semibold text-blue-900">{selectedCount} selected</span>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={executeIngest}
                disabled={isProcessing}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                {isProcessing ? "Processing..." : "Ingest Selected"}
              </button>
              <button
                onClick={handleMarkDuplicate}
                className="px-4 py-2 bg-orange-100 text-orange-700 rounded-md text-sm font-medium hover:bg-orange-200 transition-colors"
              >
                Mark Duplicate
              </button>
              <button
                onClick={handleDeleteSelected}
                className="px-4 py-2 bg-red-100 text-red-700 rounded-md text-sm font-medium hover:bg-red-200 transition-colors flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
              <div className="flex gap-1 flex-1 min-w-[200px]">
                <input
                  type="text"
                  placeholder="Add tags (comma-separated)"
                  value={bulkTagInput}
                  onChange={(e) => setBulkTagInput(e.target.value)}
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={handleBulkAddTags}
                  className="px-3 py-2 bg-slate-200 text-slate-700 rounded-md text-sm font-medium hover:bg-slate-300 transition-colors"
                  title="Add tags"
                >
                  <Tag className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Action Buttons */}
      {prospects.length > 0 && (
        <div className="mt-6 flex gap-3 flex-wrap items-center">
          <button
            onClick={handleSelectAll}
            className="px-4 py-2 bg-slate-200 text-slate-900 rounded-md text-sm font-medium hover:bg-slate-300 transition-colors"
          >
            {selectedCount === filteredProspects.length ? "Deselect All" : "Select All"}
          </button>

          {/* Status Filter */}
          <div className="flex gap-2">
            {(["all", "errors", "success", "failed"] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  filterStatus === status
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                {status === "all"
                  ? "All"
                  : status === "errors"
                    ? `Errors (${stats.withErrors})`
                    : status === "success"
                      ? `Success (${stats.successful})`
                      : `Failed (${stats.failed})`}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          {stats.failed > 0 && (
            <button
              onClick={handleRetryFailed}
              disabled={isProcessing}
              className="px-4 py-2 bg-orange-100 text-orange-700 rounded-md text-sm font-medium hover:bg-orange-200 disabled:opacity-50 transition-colors flex items-center gap-2"
            >
              <RotateCw className="w-4 h-4" />
              Retry Failed
            </button>
          )}

          {stats.withErrors > 0 && (
            <button
              onClick={handleDownloadErrorReport}
              className="px-4 py-2 bg-red-100 text-red-700 rounded-md text-sm font-medium hover:bg-red-200 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Errors
            </button>
          )}
        </div>
      )}

      {/* Prospects Table */}
      {prospects.length > 0 && (
        <div className="mt-8 bg-white rounded-lg border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-100 border-b border-slate-200 sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700 w-12">
                    <input
                      type="checkbox"
                      checked={
                        filteredProspects.length > 0 &&
                        selectedCount === filteredProspects.length
                      }
                      onChange={handleSelectAll}
                      className="w-4 h-4 cursor-pointer"
                    />
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Email</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Company</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Contact</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Title</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Tags</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Status</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700 w-10">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProspects.map((prospect, idx) => (
                  <React.Fragment key={prospect.id}>
                    <tr
                      className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${
                        prospect.selected ? "bg-blue-50" : ""
                      } ${prospect.errors.length > 0 ? "bg-red-50" : ""}`}
                    >
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={prospect.selected}
                          onChange={() => toggleRowSelection(prospect.id)}
                          className="w-4 h-4 cursor-pointer"
                        />
                      </td>
                      <td className="px-4 py-3 text-slate-900 font-medium text-xs sm:text-sm">
                        {prospect.email || "-"}
                      </td>
                      <td className="px-4 py-3 text-slate-700 text-xs sm:text-sm">
                        {prospect.companyName || "-"}
                      </td>
                      <td className="px-4 py-3 text-slate-700 text-xs sm:text-sm">
                        {prospect.contactName || "-"}
                      </td>
                      <td className="px-4 py-3 text-slate-700 text-xs sm:text-sm">
                        {prospect.title || "-"}
                      </td>
                      <td className="px-4 py-3">
                        {prospect.tags && prospect.tags.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {prospect.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                            {prospect.tags.length > 2 && (
                              <span className="text-xs text-slate-500">+{prospect.tags.length - 2}</span>
                            )}
                          </div>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {prospect.status === "processing" && (
                          <div className="flex items-center gap-2 text-blue-600">
                            <Loader className="w-4 h-4 animate-spin" />
                            <span className="text-xs sm:text-sm">Processing</span>
                          </div>
                        )}
                        {prospect.status === "success" && (
                          <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="w-4 h-4" />
                            <span className="text-xs sm:text-sm">Success</span>
                          </div>
                        )}
                        {prospect.status === "failed" && (
                          <div className="flex items-center gap-2 text-red-600">
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-xs sm:text-sm">Failed</span>
                          </div>
                        )}
                        {prospect.status === "pending" && prospect.errors.length > 0 && (
                          <div className="flex items-center gap-2 text-red-600">
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-xs sm:text-sm">Errors</span>
                          </div>
                        )}
                        {prospect.status === "pending" && prospect.errors.length === 0 && (
                          <span className="text-slate-500 text-xs sm:text-sm">Ready</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() =>
                            setExpandedRowId(
                              expandedRowId === prospect.id ? null : prospect.id
                            )
                          }
                          className="p-1 hover:bg-slate-200 rounded transition-colors"
                        >
                          {expandedRowId === prospect.id ? (
                            <ChevronDown className="w-4 h-4 text-slate-600 transform rotate-180" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-600" />
                          )}
                        </button>
                      </td>
                    </tr>

                    {/* Expanded Details Row */}
                    {expandedRowId === prospect.id && (
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <td colSpan={8} className="px-6 py-4">
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                            {prospect.phoneNumber && (
                              <div>
                                <div className="font-semibold text-slate-700">Phone</div>
                                <div className="text-slate-600">{prospect.phoneNumber}</div>
                              </div>
                            )}
                            {prospect.website && (
                              <div>
                                <div className="font-semibold text-slate-700">Website</div>
                                <div className="text-blue-600 truncate">
                                  <a
                                    href={prospect.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                  >
                                    {prospect.website}
                                  </a>
                                </div>
                              </div>
                            )}
                            {prospect.linkedinUrl && (
                              <div>
                                <div className="font-semibold text-slate-700">LinkedIn</div>
                                <div className="text-blue-600 truncate">
                                  <a
                                    href={prospect.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                  >
                                    View Profile
                                  </a>
                                </div>
                              </div>
                            )}
                            {prospect.industry && (
                              <div>
                                <div className="font-semibold text-slate-700">Industry</div>
                                <div className="text-slate-600">{prospect.industry}</div>
                              </div>
                            )}
                            {prospect.notes && (
                              <div className="col-span-2 sm:col-span-4">
                                <div className="font-semibold text-slate-700">Notes</div>
                                <div className="text-slate-600 text-xs">{prospect.notes}</div>
                              </div>
                            )}
                          </div>

                          {/* Error Details */}
                          {prospect.errors.length > 0 && (
                            <div className="mt-4 p-3 bg-red-50 rounded border border-red-200">
                              <div className="font-semibold text-red-900 mb-2">Validation Errors:</div>
                              <ul className="list-disc list-inside space-y-1">
                                {prospect.errors.map((error, errorIdx) => (
                                  <li key={errorIdx} className="text-red-700 text-xs">
                                    <span className="font-medium">{error.field}:</span> {error.message}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {showConfirmDialog.action === "ingest"
                ? "Confirm Ingest"
                : showConfirmDialog.action === "delete"
                  ? "Confirm Delete"
                  : showConfirmDialog.action === "duplicate"
                    ? "Mark as Duplicates"
                    : "Retry Failed Prospects"}
            </h3>
            <p className="text-slate-600 mb-6">
              {showConfirmDialog.action === "ingest"
                ? `You are about to ingest ${showConfirmDialog.count} prospect${showConfirmDialog.count !== 1 ? "s" : ""}. This action will refresh the prospect list.`
                : showConfirmDialog.action === "delete"
                  ? `Are you sure you want to delete ${showConfirmDialog.count} prospect${showConfirmDialog.count !== 1 ? "s" : ""}? This cannot be undone.`
                  : showConfirmDialog.action === "duplicate"
                    ? `Mark ${showConfirmDialog.count} prospect${showConfirmDialog.count !== 1 ? "s" : ""} as duplicates?`
                    : `Retry ${showConfirmDialog.count} failed prospect${showConfirmDialog.count !== 1 ? "s" : ""}?`}
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowConfirmDialog(null)}
                className="px-4 py-2 bg-slate-200 text-slate-900 rounded-md font-medium hover:bg-slate-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (showConfirmDialog.action === "ingest") {
                    executeIngest();
                  } else if (showConfirmDialog.action === "delete") {
                    executeDelete();
                  } else if (showConfirmDialog.action === "duplicate") {
                    executeMarkDuplicate();
                  } else if (showConfirmDialog.action === "retry") {
                    executeRetry();
                  }
                }}
                className={`px-4 py-2 text-white rounded-md font-medium transition-colors ${
                  showConfirmDialog.action === "delete"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {showConfirmDialog.action === "delete" ? "Delete" : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div
          className={`fixed bottom-4 right-4 px-6 py-4 rounded-lg text-white font-medium shadow-lg flex items-center gap-2 z-50 ${
            toastMessage.type === "success"
              ? "bg-green-600"
              : toastMessage.type === "error"
                ? "bg-red-600"
                : "bg-blue-600"
          }`}
        >
          {toastMessage.type === "success" && <CheckCircle className="w-5 h-5" />}
          {toastMessage.type === "error" && <AlertCircle className="w-5 h-5" />}
          {toastMessage.message}
        </div>
      )}

      {/* Empty State */}
      {prospects.length === 0 && !filePreview && (
        <div className="mt-12 text-center text-slate-500">
          <p className="text-lg">No prospects loaded yet</p>
          <p className="text-sm mt-2">Upload a CSV or Excel file to get started</p>
        </div>
      )}
    </div>
  );
}
