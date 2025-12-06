---
url: /api/ai-core/variables/PromptSuggestions.md
---
[@sqlrooms/ai-core](../index.md) / PromptSuggestions

# Variable: PromptSuggestions

> `const` **PromptSuggestions**: `object`

Composable PromptSuggestions component with Container, Item, and VisibilityToggle subcomponents

## Type declaration

| Name | Type |
| ------ | ------ |
|  `Container` | `FC`<`PromptSuggestionsContainerProps`> |
|  `Item` | `FC`<`PromptSuggestionsItemProps`> |
|  `VisibilityToggle` | `FC`<`PromptSuggestionsVisibilityToggleProps`> |

## Example

```tsx
<PromptSuggestions.Container isLoading={false}>
  <PromptSuggestions.Item text="What are the top selling products?" />
  <PromptSuggestions.Item text="Show me the revenue trends" />
</PromptSuggestions.Container>

<PromptSuggestions.VisibilityToggle />
```
