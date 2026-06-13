# Quick Start: EnhancedProspectingEngineLive Integration

## 5-Minute Setup

### Step 1: Component is Ready
The component file `EnhancedProspectingEngineLive.tsx` is already in this directory.

### Step 2: Import in Your Page

```tsx
import { EnhancedProspectingEngineLive } from '@/components/os/EnhancedProspectingEngineLive';
```

### Step 3: Add Callbacks

```tsx
const handleProspectsIngested = async (count: number, prospects: any[]) => {
  console.log(`Ingested ${count} prospects`);
  
  // Send to your API
  const response = await fetch('/api/prospects/ingest', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      prospects,
      timestamp: new Date().toISOString(),
      source: 'csv-upload'
    })
  });
  
  const result = await response.json();
  console.log('API Response:', result);
};

const handleAutoRefresh = async () => {
  // Refresh your company/prospect list
  const response = await fetch('/api/companies');
  const companies = await response.json();
  
  // Update your state management (Redux, Zustand, Context, etc.)
  // dispatch(updateCompanies(companies));
};
```

### Step 4: Use Component

```tsx
export default function ProspectsPage() {
  return (
    <div>
      <EnhancedProspectingEngineLive
        onProspectsIngested={handleProspectsIngested}
        onAutoRefresh={handleAutoRefresh}
      />
    </div>
  );
}
```

## CSV File Format

```csv
email,companyName,contactName,title,industry,phoneNumber,website,linkedinUrl,notes
john@acmecorp.com,Acme Corp,John Doe,Sales Manager,Technology,555-1234,acme.com,linkedin.com/in/john,VIP
jane@techinc.com,Tech Inc,Jane Smith,CEO,Software,555-5678,tech.com,linkedin.com/in/jane,Priority
```

**Required**: email, companyName  
**Optional**: All others

## What Users Can Do

1. **Upload Files**: Drag-drop CSV/Excel files
2. **Validate**: View validation errors before processing
3. **Select**: Check rows to select multiple prospects
4. **Bulk Actions**:
   - Ingest selected prospects
   - Add tags to selected items
   - Delete selected rows
5. **Error Management**:
   - View validation errors
   - Download error reports (CSV)
   - Retry failed prospects
6. **Monitor**: See stats (total, successful, failed, processed)

## Features Included

✅ File upload (CSV, XLSX, XLS)
✅ Drag-and-drop
✅ Auto-parsing
✅ Row validation
✅ Bulk selection
✅ Bulk actions
✅ Error reporting
✅ Retry capability
✅ Auto-refresh
✅ Progress tracking
✅ Toast notifications
✅ Statistics dashboard
✅ Responsive design
✅ Accessibility

## API Endpoints Expected

### Required:
```
POST /api/prospects/ingest
Body: { prospects: ProspectRow[], timestamp: string, source: string }
Response: { success: boolean, ingested: number, failed: number }
```

### For Auto-Refresh:
```
GET /api/companies (or your endpoint)
Response: CompanyData[]
```

## Styling

Uses Tailwind CSS with:
- Blue: Primary/processing
- Green: Success
- Red: Errors
- Slate: Neutral

To customize colors, modify the Tailwind classes in the component.

## Dependencies

The component only needs:
- React 19+
- lucide-react (already in package.json)
- tailwindcss (already configured)

No additional packages required!

## Testing

### Manual Test Steps:
1. Click upload area or drag a CSV file
2. View file preview
3. Check validation messages (if any)
4. Select a row with checkbox
5. Click "Ingest Selected"
6. Watch progress and success message
7. Verify auto-refresh worked

### Sample Test CSV:
```csv
email,companyName,contactName
valid@company.com,Test Company,John Doe
invalid-email,Another Company,Jane Smith
test@example.com,Third Company,Bob Smith
```

Row 2 will show validation error (invalid email).

## Troubleshooting

**File not uploading?**
- Check file is CSV/XLSX/XLS format
- File size under 10MB
- No special characters in field names

**Validation errors showing?**
- Email must be valid format
- Company name cannot be empty

**Auto-refresh not working?**
- Verify onAutoRefresh callback is implemented
- Check API endpoint returns data correctly
- Look for network errors in browser console

## Next Steps

1. Test with sample CSV file
2. Implement your API endpoints
3. Connect to your database
4. Deploy to staging
5. Deploy to production

## Documentation

See these files for more details:
- `PROSPECTING_ENGINE_README.md` - Full documentation
- `EnhancedProspectingEngineLive.example.tsx` - More examples
- `PROSPECTING_ENGINE_IMPLEMENTATION.md` - Technical details

## Questions?

Refer to the complete documentation files for:
- API details
- Error messages
- Data structures
- Accessibility info
- Performance notes
- Troubleshooting

---

**You're ready to go!** The component is production-ready and fully documented.
