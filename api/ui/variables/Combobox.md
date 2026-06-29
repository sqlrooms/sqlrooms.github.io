---
url: 'https://sqlrooms.org/api/ui/variables/Combobox.md'
---
[@sqlrooms/ui](../index.md) / Combobox

# Variable: Combobox

> `const` **Combobox**: <`T`>(`__namedParameters`) => `Element` & `object`

Compound component for Popover-based combobox selectors.

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Trigger` | `FC`<`PropsWithChildren`<[`ComboboxTriggerProps`](../interfaces/ComboboxTriggerProps.md)>> | `ComboboxTrigger` |
| `Content` | `FC`<`PropsWithChildren`<[`ComboboxContentProps`](../interfaces/ComboboxContentProps.md)>> | `ComboboxContent` |
| `Item` | `FC`<`PropsWithChildren`<[`ComboboxItemProps`](../interfaces/ComboboxItemProps.md)>> | `ComboboxItem` |

## Example

```tsx
<Combobox value={value} onChange={setValue}>
  <Combobox.Trigger>
    <span>{selectedLabel}</span>
  </Combobox.Trigger>
  <Combobox.Content searchable searchPlaceholder="Search...">
    {options.map((option) => (
      <Combobox.Item key={option.value} value={option.value}>
        <span>{option.label}</span>
      </Combobox.Item>
    ))}
  </Combobox.Content>
</Combobox>
```
