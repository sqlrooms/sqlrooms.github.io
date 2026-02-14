---
url: /api/ai/variables/PromptSuggestions.md
---
[@sqlrooms/ai](../index.md) / PromptSuggestions

# Variable: PromptSuggestions

> `const` **PromptSuggestions**: `object`

Composable PromptSuggestions component with Container, Item, and VisibilityToggle subcomponents

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `Container` | `FC` |
|  `Item` | `FC` |
|  `VisibilityToggle` | `FC` |

## Example

```tsx
<PromptSuggestions.Container isLoading={false}>
  <PromptSuggestions.Item text="What are the top selling products?" />
  <PromptSuggestions.Item text="Show me the revenue trends" />
</PromptSuggestions.Container>

<PromptSuggestions.VisibilityToggle />
```
