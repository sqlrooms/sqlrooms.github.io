---
url: >-
  https://sqlrooms.org/api/data-table/type-aliases/ArrowDataTableValueFormatter.md
---
[@sqlrooms/data-table](../index.md) / ArrowDataTableValueFormatter

# Type Alias: ArrowDataTableValueFormatter

> **ArrowDataTableValueFormatter** = [`ArrowCellValueFormatter`](ArrowCellValueFormatter.md)

Formatter for rendering Arrow cell values in data tables.
Return a string to override the default formatting.
If you don't return anything (or return undefined), the default formatter is used.

## Param

The Arrow DataType for the column

## Param

The raw cell value

## Returns

A formatted string, or undefined/nothing to fall back to the default

## Example

```ts
formatValue: (type, value) => {
  if (arrow.DataType.isDecimal(type)) {
    return `$${value}`;
  }
  if (arrow.DataType.isBinary(type) && value instanceof Uint8Array) {
    return `${value.byteLength} bytes`;
  }
}
```
