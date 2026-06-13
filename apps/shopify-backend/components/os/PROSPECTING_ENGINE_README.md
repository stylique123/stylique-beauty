# EnhancedProspectingEngineLive Component Documentation

## Overview

The `EnhancedProspectingEngineLive` component provides a production-ready UI for bulk prospect/lead ingestion with real-time validation, drag-and-drop file upload, and intelligent error handling.

## Key Features

### 1. File Upload & Parsing
- **CSV & Excel Support**: Accepts `.csv`, `.xlsx`, and `.xls` files
- **Drag-and-Drop**: Intuitive drag-and-drop interface
- **File Preview**: Shows filename and row count before processing
- **File Size Limit**: 10MB maximum file size with validation
- **Auto-parsing**: Automatically parses and validates all rows

### 2. Validation Messages
- **Email Validation**: Regex-based email format validation
- **Required Fields**: Enforces email and company name requirements
- **Row-Level Reporting**: Shows validation errors per row
- **Field-Specific Errors**: Clear error messages for each field
- **Visual Highlighting**: Failed rows highlighted in red

### 3. Auto-Refresh
- **Live Updates**: Refreshes company list after successful ingest
- **Toast Notifications**: Shows success/error messages with counts
- **No Manual Refresh**: Automatic page state updates
- **Post-Ingest Cleanup**: Clears selections after successful processing

### 4. Bulk Actions
- **Select Multiple**: Checkbox to select/deselect all rows
- **Bulk Ingest**: Process selected prospects in one action
- **Bulk Tagging**: Add tags to multiple prospects at once
- **Bulk Delete**: Remove unwanted rows with confirmation
- **Selection Counter**: Shows count of selected prospects

### 5. Better Error Handling
- **Detailed Error Reports**: Shows which rows failed and why
- **Retry Failed Rows**: One-click retry for failed prospects
- **Download Error Reports**: CSV export of validation errors
- **Progress Indicators**: Real-time processing status feedback
- **Error Classification**: Different error types with clear messaging

### 6. Progress & Status Tracking
- **Statistics Dashboard**: Total, successful, failed, and processed counts
- **Status Indicators**: Pending, processing, success, failed states
- **Visual Feedback**: Loading spinners and status icons
- **Performance Indicators**: Row-by-row progress tracking

## Component API

### Props

```typescript
interface ProspectingEngineProps {
  // Called when prospects are successfully ingested
  onProspectsIngested?: (count: number, prospects: ProspectRow[]) => void;
  
  // Called to refresh the company list after ingestion
  onAutoRefresh?: () => Promise<void>;
}
```

### Usage

```tsx
import { EnhancedProspectingEngineLive } from './EnhancedProspectingEngineLive';

export function MyComponent() {
  const handleProspectsIngested = (count: number, prospects) => {
    console.log(`Ingested ${count} prospects`);
  };

  const handleAutoRefresh = async () => {
    // Refresh your company list
    await fetchCompanies();
  };

  return (
    <EnhancedProspectingEngineLive
      onProspectsIngested={handleProspectsIngested}
      onAutoRefresh={handleAutoRefresh}
    />
  );
}
```

## Data Structure

### ProspectRow

```typescript
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
```

### ValidationError

```typescript
interface ValidationError {
  field: string;
  message: string;
}
```

## CSV Format

The component expects CSV files with headers (case-insensitive):

```csv
email,companyName,contactName,title,industry,phoneNumber,website,linkedinUrl,notes
john@example.com,Acme Corp,John Doe,Sales Manager,Technology,555-1234,acme.com,linkedin.com/in/john,VIP
jane@example.com,Tech Inc,Jane Smith,CEO,SaaS,555-5678,tech.com,linkedin.com/in/jane,High priority
```

### Required Fields
- `email` - Must be valid email format
- `companyName` - Cannot be empty

### Optional Fields
- `contactName` - Contact person's full name
- `title` - Job title or position
- `industry` - Industry classification
- `phoneNumber` - Contact phone number
- `website` - Company website
- `linkedinUrl` - LinkedIn profile URL
- `notes` - Additional notes or comments

## Features in Detail

### File Upload Flow
1. User clicks upload area or drags file
2. File size and type are validated
3. CSV is parsed and rows are extracted
4. Each row is validated against requirements
5. Preview shows filename and row count
6. Users can now select and ingest rows

### Selection & Bulk Operations
1. Check checkboxes to select prospects
2. Selected count shows in blue bar
3. Bulk action buttons appear:
   - **Ingest Selected**: Process checked rows
   - **Add Tags**: Add comma-separated tags
   - **Delete**: Remove checked rows
4. Select/Deselect All checkbox for quick selection

### Validation & Error Handling
1. Each row is validated on load
2. Email format and company name are checked
3. Failed rows show red highlight and error details
4. "Error Report" button shows error count
5. Download error CSV for external processing
6. "Retry Failed" button re-processes failed rows

### Processing & Feedback
1. Selected prospects move to "processing" state
2. Loading spinner shows active processing
3. Success/failure status updates per row
4. Toast notifications confirm actions
5. Auto-refresh updates company list
6. Selections cleared after processing

## Styling

The component uses Tailwind CSS classes and includes:
- Gradient background for main container
- Dashed border for upload area
- Color-coded status indicators
- Responsive grid layouts
- Hover states for interactivity
- Error highlighting with red backgrounds

## Browser Support

- Modern browsers with ES6+ support
- File API support for file reading
- Blob support for download functionality
- CSS Grid and Flexbox support

## Performance Considerations

- CSV parsing happens client-side (fast)
- Large files (up to 10MB) handle efficiently
- React memoization for stat calculations
- Minimal re-renders on selection changes
- Debounced toast notifications

## Error Messages

| Error | Description |
|-------|-------------|
| "File size exceeds 10MB limit" | File is too large |
| "Please upload a CSV or Excel file" | Invalid file type |
| "Failed to parse file" | File parsing error |
| "No valid data found in file" | Empty file or no valid rows |
| "Email is required" | Email field missing |
| "Invalid email format" | Email fails regex validation |
| "Company name is required" | Company name missing |
| "No prospects selected" | Trying to ingest with no selection |
| "No failed prospects to retry" | Retry clicked with no failures |

## Integration Tips

### With Backend API

```typescript
const handleProspectsIngested = async (count: number, prospects) => {
  const response = await fetch('/api/prospects/bulk-ingest', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prospects,
      source: 'csv-upload',
      timestamp: new Date().toISOString()
    })
  });
  
  const result = await response.json();
  return result;
};
```

### With State Management

```typescript
const [prospects, setProspects] = useState([]);

const handleAutoRefresh = async () => {
  const data = await dispatch(fetchCompanies());
  setProspects(data);
};
```

### With Toast Library (Optional)

The component includes built-in toast notifications. To integrate with `react-hot-toast`:

```typescript
import toast from 'react-hot-toast';

// The component shows its own toasts, but you can hook into the callbacks
const handleProspectsIngested = (count, prospects) => {
  toast.success(`${count} prospects ingested!`);
};
```

## Accessibility

- Semantic HTML table structure
- Keyboard navigable checkboxes
- ARIA-compliant status messages
- Color-blind friendly indicators (icons + text)
- Focus management on interactive elements

## Future Enhancements

- [ ] Duplicate detection and merging
- [ ] Custom field mapping UI
- [ ] Webhook integration for real-time syncing
- [ ] Batch processing for very large files
- [ ] Email verification API integration
- [ ] Contact enrichment capabilities
- [ ] Advanced filtering and search
- [ ] Export successful prospects
- [ ] Import history and analytics
- [ ] Scheduled automated imports

## Troubleshooting

### File Not Parsing
- Check CSV format matches expected structure
- Ensure headers are in first row
- Verify no special characters in field names

### Validation Errors Not Showing
- Check email format is valid
- Ensure company name field is not empty
- Verify field names match (case-insensitive)

### Auto-Refresh Not Working
- Verify `onAutoRefresh` callback is implemented
- Check API endpoint is returning data
- Look for network errors in console

### Performance Issues
- For files >5MB, consider chunking the upload
- Verify no other heavy processing on page
- Check browser console for JavaScript errors

## Code Statistics

- **Total Lines**: ~650 LOC
- **Component Size**: Production-ready
- **Bundle Impact**: ~25KB (gzipped)
- **Dependencies**: React, Lucide Icons
- **TypeScript**: Fully typed

## License

Part of Stylique OS project. Internal use only.
