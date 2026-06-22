---
url: 'https://sqlrooms.org/api/app-runtime/type-aliases/HtmlAppRuntimeQueryState.md'
---
[@sqlrooms/app-runtime](../index.md) / HtmlAppRuntimeQueryState

# Type Alias: HtmlAppRuntimeQueryState

> **HtmlAppRuntimeQueryState** = `object`

## Properties

### db?

> `optional` **db?**: `object`

| Name | Type |
| ------ | ------ |
| `sqlSelectToJson()?` | (`sql`) => `Promise`<{ `error`: `boolean`; }> |
| `connectors?` | { `runQuery?`: (`request`) => `Promise`<{ `jsonData?`: `Iterable`<`Record`<`string`, `unknown`>>; }>; } |
