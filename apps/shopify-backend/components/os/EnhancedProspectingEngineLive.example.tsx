/**
 * EnhancedProspectingEngineLive Component - Usage Examples
 *
 * This file demonstrates how to integrate and use the EnhancedProspectingEngineLive
 * component in your application.
 */

import { useState } from "react";
import { EnhancedProspectingEngineLive } from "./EnhancedProspectingEngineLive";

/**
 * Basic Usage Example
 * Simple integration without custom callbacks
 */
export function BasicProspectingExample() {
  return (
    <div>
      <EnhancedProspectingEngineLive />
    </div>
  );
}

/**
 * Complete Integration Example
 * With API calls and company list refresh
 */
export function CompleteProspectingIntegration() {
  const [companyCount, setCompanyCount] = useState(0);

  // Handle successful prospect ingestion
  const handleProspectsIngested = async (count: number, prospects: any[]) => {
    console.log(`Ingested ${count} prospects:`, prospects);

    // Example: Send to your API
    try {
      const response = await fetch("/api/prospects/ingest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prospects,
          timestamp: new Date().toISOString(),
          source: "csv-upload",
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Ingestion successful:", result);
      }
    } catch (error) {
      console.error("Failed to ingest prospects:", error);
    }
  };

  // Auto-refresh company list after ingest
  const handleAutoRefresh = async () => {
    try {
      const response = await fetch("/api/companies/list");
      const data = await response.json();
      setCompanyCount(data.length);
      console.log(`Company list refreshed: ${data.length} total companies`);
    } catch (error) {
      console.error("Failed to refresh company list:", error);
      throw error;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg border">
        <h2 className="font-semibold mb-2">Live Stats</h2>
        <p className="text-sm text-gray-600">Total Companies: {companyCount}</p>
      </div>

      <EnhancedProspectingEngineLive
        onProspectsIngested={handleProspectsIngested}
        onAutoRefresh={handleAutoRefresh}
      />
    </div>
  );
}

/**
 * CSV File Format Expected
 *
 * The component expects CSV files with the following columns (case-insensitive):
 * - email (required)
 * - companyName (required)
 * - contactName (optional)
 * - title (optional)
 * - industry (optional)
 * - phoneNumber (optional)
 * - website (optional)
 * - linkedinUrl (optional)
 * - notes (optional)
 *
 * Example CSV:
 * ```
 * email,companyName,contactName,title,industry,phoneNumber,website,linkedinUrl,notes
 * john.doe@example.com,Acme Corp,John Doe,Sales Manager,Technology,555-1234,acme.com,linkedin.com/in/johndoe,VIP prospect
 * jane.smith@example.com,Tech Innovations,Jane Smith,CEO,SaaS,555-5678,tech-inn.com,linkedin.com/in/janesmith,High priority
 * ```
 */

/**
 * Advanced: Custom Error Handler Example
 */
export function ProspectingWithErrorHandler() {
  const handleProspectsIngested = (count: number, prospects: any[]) => {
    const failed = prospects.filter((p) => p.status === "failed");

    if (failed.length > 0) {
      // Handle failures
      console.warn(`${failed.length} prospects failed to ingest`);

      // Example: Send error report to monitoring service
      fetch("/api/monitoring/error-report", {
        method: "POST",
        body: JSON.stringify({
          failed_prospects: failed,
          timestamp: new Date().toISOString(),
        }),
      });
    }
  };

  return <EnhancedProspectingEngineLive onProspectsIngested={handleProspectsIngested} />;
}

/**
 * Integration with Page Component
 */
export function ProspectingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Lead Management</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <EnhancedProspectingEngineLive
              onProspectsIngested={async (count, prospects) => {
                // Handle ingestion
                console.log(`Ingested ${count} prospects`);
              }}
              onAutoRefresh={async () => {
                // Refresh data
              }}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold mb-4">Import Tips</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>✓ CSV and Excel (.xlsx) formats supported</li>
                <li>✓ File size limit: 10MB</li>
                <li>✓ Email and Company name are required fields</li>
                <li>✓ Drag and drop files for quick upload</li>
                <li>✓ Review validation errors before ingesting</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold mb-4">Actions Available</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• Select multiple prospects</li>
                <li>• Bulk tag prospects</li>
                <li>• Delete unwanted rows</li>
                <li>• Retry failed imports</li>
                <li>• Download error reports</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/**
 * API Endpoints Expected
 *
 * POST /api/prospects/ingest
 * Body: { prospects: ProspectRow[], timestamp: string, source: string }
 * Response: { success: boolean, ingested: number, failed: number }
 *
 * GET /api/companies/list
 * Response: CompanyData[]
 *
 * POST /api/monitoring/error-report
 * Body: { failed_prospects: ProspectRow[], timestamp: string }
 */

/**
 * ProspectRow Interface
 *
 * interface ProspectRow {
 *   id: string;
 *   email?: string;
 *   companyName?: string;
 *   contactName?: string;
 *   title?: string;
 *   industry?: string;
 *   tags?: string[];
 *   phoneNumber?: string;
 *   website?: string;
 *   linkedinUrl?: string;
 *   notes?: string;
 *   errors: ValidationError[];
 *   selected: boolean;
 *   status?: "pending" | "processing" | "success" | "failed";
 * }
 *
 * interface ValidationError {
 *   field: string;
 *   message: string;
 * }
 */
