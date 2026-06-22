---
url: 'https://sqlrooms.org/api/python/type-aliases/PythonRuntimeHost.md'
---
[@sqlrooms/python](../index.md) / PythonRuntimeHost

# Type Alias: PythonRuntimeHost

> **PythonRuntimeHost** = `object`

Host bridge exposed to runtime adapters instead of room-store internals.

## Methods

### readTable()

> **readTable**(`input`): `Promise`<[`PythonTabularInput`](PythonTabularInput.md)>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | { `kind`: `"tableRef"`; `name`: `string`; `tableName`: `string`; `maxRows?`: `number`; } |
| `input.kind` | `"tableRef"` |
| `input.name` | `string` |
| `input.tableName` | `string` |
| `input.maxRows?` | `number` |

#### Returns

`Promise`<[`PythonTabularInput`](PythonTabularInput.md)>

***

### runReadonlySql()?

> `optional` **runReadonlySql**(`request`): `Promise`<[`PythonTabularInput`](PythonTabularInput.md)>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | [`ReadonlySqlRequest`](ReadonlySqlRequest.md) |

#### Returns

`Promise`<[`PythonTabularInput`](PythonTabularInput.md)>

***

### readSchema()?

> `optional` **readSchema**(`request`): `Promise`<[`PythonSchemaSummary`](PythonSchemaSummary.md)>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | [`PythonSchemaRequest`](PythonSchemaRequest.md) |

#### Returns

`Promise`<[`PythonSchemaSummary`](PythonSchemaSummary.md)>

***

### writeTable()?

> `optional` **writeTable**(`output`, `data`): `Promise`<{ `tableName`: `string`; `rowCount?`: `number`; }>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `output` | { `type`: `"table"`; `name`: `string`; `tableName?`: `string`; } |
| `output.type` | `"table"` |
| `output.name` | `string` |
| `output.tableName?` | `string` |
| `data` | [`PythonTabularInput`](PythonTabularInput.md) |

#### Returns

`Promise`<{ `tableName`: `string`; `rowCount?`: `number`; }>

***

### writeAsset()?

> `optional` **writeAsset**(`asset`): `Promise`<{ `assetId`: `string`; }>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `asset` | [`PythonAssetOutput`](PythonAssetOutput.md) |

#### Returns

`Promise`<{ `assetId`: `string`; }>

***

### resolvePackages()?

> `optional` **resolvePackages**(`requirements`): `Promise`<[`PythonResolvedPackageSpec`](PythonResolvedPackageSpec.md)\[]>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `requirements` | `object`\[] |

#### Returns

`Promise`<[`PythonResolvedPackageSpec`](PythonResolvedPackageSpec.md)\[]>
