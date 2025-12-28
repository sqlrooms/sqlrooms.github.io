---
url: /api/recharts/type-aliases/TooltipProps.md
---
[@sqlrooms/recharts](../index.md) / TooltipProps

# Type Alias: TooltipProps\<TValue, TName>

> **TooltipProps**<`TValue`, `TName`> = [`DefaultTooltipContentProps`](../interfaces/DefaultTooltipContentProps.md)<`TValue`, `TName`> & `object`

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `accessibilityLayer?` | `boolean` | - |
| `active?` | `boolean` | If true, then Tooltip is always displayed, once an activeIndex is set by mouse over, or programmatically. If false, then Tooltip is never displayed. If active is undefined, Recharts will control when the Tooltip displays. This includes mouse and keyboard controls. |
| `includeHidden?` | `boolean` | If true, then Tooltip will information about hidden series (defaults to false). Interacting with the hide property of Area, Bar, Line, Scatter. |
| `allowEscapeViewBox?` | `AllowInDimension` | - |
| `animationDuration?` | `AnimationDuration` | - |
| `animationEasing?` | `AnimationTiming` | - |
| `content?` | `ContentType`<`TValue`, `TName`> | - |
| `coordinate?` | `Partial`<`Coordinate`> | - |
| `cursor?` | `boolean` | `ReactElement` | `SVGProps`<`SVGElement`> | - |
| `filterNull?` | `boolean` | - |
| `defaultIndex?` | `number` | - |
| `isAnimationActive?` | `boolean` | - |
| `offset?` | `number` | - |
| `payloadUniqBy?` | `UniqueOption`<`Payload`<`TValue`, `TName`>> | - |
| `position?` | `Partial`<`Coordinate`> | - |
| `reverseDirection?` | `AllowInDimension` | - |
| `shared?` | `boolean` | - |
| `trigger?` | `"hover"` | `"click"` | - |
| `useTranslate3d?` | `boolean` | - |
| `viewBox?` | `CartesianViewBox` | - |
| `wrapperStyle?` | `CSSProperties` | - |

## Type Parameters

| Type Parameter |
| ------ |
| `TValue` *extends* `ValueType` |
| `TName` *extends* `NameType` |
