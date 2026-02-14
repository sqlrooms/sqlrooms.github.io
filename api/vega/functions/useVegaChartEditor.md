---
url: /api/vega/functions/useVegaChartEditor.md
---
[@sqlrooms/vega](../index.md) / useVegaChartEditor

# Function: useVegaChartEditor()

> **useVegaChartEditor**(`__namedParameters`): [`UseVegaChartEditorReturn`](../interfaces/UseVegaChartEditorReturn.md)

Hook for managing Vega chart editor state.

Provides local state management with debounced spec parsing for live preview,
and external callbacks for persisting changes.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`UseVegaChartEditorOptions`](../interfaces/UseVegaChartEditorOptions.md) |

## Returns

[`UseVegaChartEditorReturn`](../interfaces/UseVegaChartEditorReturn.md)

## Example

```tsx
const { state, actions, parsedSpec, canApply } = useVegaChartEditor({
  initialSpec: mySpec,
  initialSql: myQuery,
  onSpecChange: (spec) => saveSpec(spec),
  onSqlChange: (sql) => saveQuery(sql),
});
```
