---
url: https://sqlrooms.org/api/deck/type-aliases/PrepareAiDeckMapConfigOptions.md
---
[@sqlrooms/deck](../index.md) / PrepareAiDeckMapConfigOptions

# Type Alias: PrepareAiDeckMapConfigOptions

> **PrepareAiDeckMapConfigOptions** = [`NormalizeAiDeckMapConfigOptions`](NormalizeAiDeckMapConfigOptions.md) & `object`

Validate colorScale fields (optional), then [normalizeAiDeckMapConfig](../functions/normalizeAiDeckMapConfig.md).
Validation first so lon/lat transformSql inject does not disable unknown-field checks.

## Type Declaration

| Name | Type |
| ------ | ------ |
| `resolveTable?` | [`ResolveColorScaleTable`](ResolveColorScaleTable.md) |
