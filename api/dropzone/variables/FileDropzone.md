---
url: /api/dropzone/variables/FileDropzone.md
---
[@sqlrooms/dropzone](../index.md) / FileDropzone

# Variable: FileDropzone

> `const` **FileDropzone**: `FC`<{ `className?`: `string`; `isInvalid?`: `boolean`; `onDrop`: (`files`) => `Promise`<`void`>; `multiple?`: `boolean`; `acceptedFormats?`: `Record`<`string`, `string`\[]>; `children?`: `React.ReactNode`; }>

A customizable file dropzone component that handles file uploads through drag-and-drop or click interactions.

## Example

```tsx
// Basic usage
<FileDropzone
  onDrop={async (files) => {
    console.log('Dropped files:', files);
    // Handle file upload
  }}
/>

// With file type restrictions and single file upload
<FileDropzone
  multiple={false}
  acceptedFormats={{
    'text/csv': ['.csv'],
    'application/json': ['.json']
  }}
  onDrop={async (files) => {
    const file = files[0];
    // Handle single file upload
  }}
>
  <p>Custom dropzone content</p>
</FileDropzone>
```

## Param

Component props

## Param

Optional CSS class name for styling

## Param

Optional flag to indicate validation error state

## Param

Async callback function called when files are dropped or selected

## Param

Optional flag to allow multiple file selection (default: true)

## Param

Optional object defining accepted MIME types and their extensions

## Param

Optional React nodes to render inside the dropzone
