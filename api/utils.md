---
url: /api/utils.md
---
# @sqlrooms/utils

A collection of utility functions and helpers for SQLRooms applications. This package provides common utilities for string manipulation, file handling, color management, formatting, and more.

## Features

* 🔠 **String Utilities**: Functions for string manipulation and formatting
* 📁 **File Path Handling**: Tools for working with file paths and extensions
* 🎨 **Color Utilities**: Color conversion and manipulation functions
* 📊 **Formatting**: Data formatting for display purposes
* 🔄 **XHR Helpers**: Utilities for working with XMLHttpRequests
* 🧰 **General Helpers**: Common helper functions for everyday tasks

## Installation

```bash
npm install @sqlrooms/utils
# or
yarn add @sqlrooms/utils
```

## Basic Usage

### String Utilities

```tsx
import {truncate, capitalize, slugify} from '@sqlrooms/utils';

// Truncate long text
const shortText = truncate(
  'This is a very long text that needs to be shortened',
  20,
);
console.log(shortText); // 'This is a very long...'

// Capitalize text
const capitalized = capitalize('hello world');
console.log(capitalized); // 'Hello world'

// Create a URL-friendly slug
const slug = slugify('Hello World! This is a test');
console.log(slug); // 'hello-world-this-is-a-test'
```

### File Path Utilities

```tsx
import {getFileExtension, joinPaths, normalizePath} from '@sqlrooms/utils';

// Get file extension
const ext = getFileExtension('document.pdf');
console.log(ext); // 'pdf'

// Join path segments
const fullPath = joinPaths('/base/path', 'subfolder', 'file.txt');
console.log(fullPath); // '/base/path/subfolder/file.txt'

// Normalize a path
const normalized = normalizePath('/path//to/../folder/./file.txt');
console.log(normalized); // '/path/folder/file.txt'
```

### JSON Utilities

```tsx
import {safeJsonParse} from '@sqlrooms/utils';

// Safely parse JSON without throwing exceptions
const result = safeJsonParse('{"name": "John", "age": 30}');
console.log(result); // { name: 'John', age: 30 }

// Handle invalid JSON gracefully
const invalid = safeJsonParse('{"name": "John", age: 30}');
console.log(invalid); // undefined
```

### Formatting Utilities

```tsx
import {formatBytes, formatNumber, formatDate} from '@sqlrooms/utils';

// Format file size
console.log(formatBytes(1024)); // '1 KB'
console.log(formatBytes(1048576)); // '1 MB'

// Format numbers
console.log(formatNumber(1234567.89)); // '1,234,567.89'

// Format dates
console.log(formatDate(new Date(), 'yyyy-MM-dd')); // '2023-04-15'
```

## Advanced Features

* **Type Safety**: All utilities are fully typed with TypeScript
* **Browser Compatibility**: Works in all modern browsers
* **Tree-Shakable**: Import only what you need to minimize bundle size
* **No Dependencies**: Zero external runtime dependencies

For more information, visit the SQLRooms documentation.

## Type Aliases

* [ProgressInfo](type-aliases/ProgressInfo.md)

## Variables

* [NUMBER\_FORMAT](variables/NUMBER_FORMAT.md)

## Functions

* [isMacOS](functions/isMacOS.md)
* [opacifyHex](functions/opacifyHex.md)
* [splitFilePath](functions/splitFilePath.md)
* [convertToValidColumnOrTableName](functions/convertToValidColumnOrTableName.md)
* [convertToUniqueColumnOrTableName](functions/convertToUniqueColumnOrTableName.md)
* [generateUniqueName](functions/generateUniqueName.md)
* [generateUniquePath](functions/generateUniquePath.md)
* [convertToUniqueS3ObjectName](functions/convertToUniqueS3ObjectName.md)
* [convertToUniqueS3FolderPath](functions/convertToUniqueS3FolderPath.md)
* [formatCount](functions/formatCount.md)
* [formatCount4](functions/formatCount4.md)
* [formatCountShort](functions/formatCountShort.md)
* [shorten](functions/shorten.md)
* [formatNumber](functions/formatNumber.md)
* [formatDateTime](functions/formatDateTime.md)
* [formatDate](functions/formatDate.md)
* [formatTimeOfDay](functions/formatTimeOfDay.md)
* [formatTimeRelative](functions/formatTimeRelative.md)
* [formatTimestampForFilename](functions/formatTimestampForFilename.md)
* [getErrorMessageForDisplay](functions/getErrorMessageForDisplay.md)
* [safeJsonParse](functions/safeJsonParse.md)
* [memoizeOnce](functions/memoizeOnce.md)
* [genRandomStr](functions/genRandomStr.md)
* [formatBytes](functions/formatBytes.md)
* [camelCaseToTitle](functions/camelCaseToTitle.md)
* [capitalize](functions/capitalize.md)
* [truncate](functions/truncate.md)
* [postData](functions/postData.md)
* [downloadFile](functions/downloadFile.md)
* [uploadFile](functions/uploadFile.md)
