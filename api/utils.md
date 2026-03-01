---
url: 'https://sqlrooms.org/api/utils.md'
---
# @sqlrooms/utils

Shared utility functions used across SQLRooms packages and apps.

## Installation

```bash
npm install @sqlrooms/utils
```

## String and formatting helpers

```ts
import {
  capitalize,
  camelCaseToTitle,
  truncate,
  formatBytes,
  formatNumber,
  formatDate,
  formatDateTime,
  formatTimeRelative,
} from '@sqlrooms/utils';

capitalize('hello'); // "Hello"
camelCaseToTitle('tableRowCount'); // "Table Row Count"
truncate('This is a long sentence', 10); // "This is..."

formatBytes(1048576); // "1 MB"
formatNumber(1234567.89); // "1,234,568"
formatDate(new Date()); // "2026-02-23"
formatDateTime(new Date()); // "Mon 2026-02-23 02:15 PM"
formatTimeRelative(Date.now() - 60_000); // "a minute ago"
```

## File/table name helpers

```ts
import {
  convertToValidColumnOrTableName,
  convertToUniqueColumnOrTableName,
  generateUniqueName,
  splitFilePath,
  generateUniquePath,
} from '@sqlrooms/utils';

convertToValidColumnOrTableName('My File.csv'); // "My_File"
convertToUniqueColumnOrTableName('sales.csv', ['sales']); // "sales_1"
generateUniqueName('query', ['query', 'query_1']); // "query_2"

splitFilePath('folder/data.parquet');
// { dir: "folder", name: "data", ext: "parquet", filename: "data.parquet" }

generateUniquePath('results.csv', ['results.csv']); // "results_1.csv"
```

## Network and JSON helpers

```ts
import {safeJsonParse, downloadFile, uploadFile, postData} from '@sqlrooms/utils';

const parsed = safeJsonParse('{"ok": true}'); // { ok: true }
const invalid = safeJsonParse('{'); // undefined

// downloadFile / uploadFile / postData are Promise-based XHR helpers
```

## Other useful exports

* `memoizeOnce`
* `opacifyHex`
* `formatCount`, `formatCountShort`, `shorten`
* decimal helpers:
  * `isNegativeDecimal`
  * `negateDecimal`
  * `toDecimalString`
  * `toDecimalNumber`
  * `fromDecimalString`

## Type Aliases

* [ProgressInfo](type-aliases/ProgressInfo.md)

## Variables

* [formatCount](variables/formatCount.md)
* [formatCount4](variables/formatCount4.md)
* [formatCountShort](variables/formatCountShort.md)
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
