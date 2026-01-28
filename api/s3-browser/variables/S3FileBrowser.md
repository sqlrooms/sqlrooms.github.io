---
url: /api/s3-browser/variables/S3FileBrowser.md
---
[@sqlrooms/s3-browser](../index.md) / S3FileBrowser

# Variable: S3FileBrowser

> `const` **S3FileBrowser**: `FC`<{ `files?`: [`S3FileOrDirectory`](../type-aliases/S3FileOrDirectory.md)\[]; `selectedFiles`: `string`\[]; `selectedDirectory`: `string`; `onCanConfirmChange`: (`canConfirm`) => `void`; `onChangeSelectedDirectory`: (`directory`) => `void`; `onChangeSelectedFiles`: (`files`) => `void`; `renderFileActions?`: () => `React.ReactNode`; }>

A file browser component for navigating and selecting files from an S3-like storage.

This component provides a familiar file explorer interface with features like:

* Directory navigation with breadcrumbs
* File and directory listing
* Multiple file selection
* File metadata display (size, type, last modified)

![S3 File Browser Interface](https://github.com/user-attachments/assets/dd79fbb9-c487-4050-96ef-81cff39930d3)

## Example

```tsx
const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
const [selectedDirectory, setSelectedDirectory] = useState('');

return (
  <S3FileBrowser
    files={[
      { key: 'documents', isDirectory: true },
      {
        key: 'example.txt',
        isDirectory: false,
        size: 1024,
        contentType: 'text/plain',
        lastModified: new Date()
      }
    ]}
    selectedFiles={selectedFiles}
    selectedDirectory={selectedDirectory}
    onCanConfirmChange={(canConfirm) => console.log('Can confirm:', canConfirm)}
    onChangeSelectedDirectory={setSelectedDirectory}
    onChangeSelectedFiles={setSelectedFiles}
  />
);
```

## Param

The component props

## Param

Array of files and directories to display

## Param

Array of currently selected file keys

## Param

Current directory path (empty string for root)

## Param

Callback fired when selection state changes

## Param

Callback fired when directory navigation occurs

## Param

Callback fired when file selection changes
