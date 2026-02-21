---
url: /api/ai-core/variables/PromptSuggestions.md
---
[@sqlrooms/ai-core](../index.md) / PromptSuggestions

# Variable: PromptSuggestions

> `const` **PromptSuggestions**: `object`

Composable PromptSuggestions component with Container, Item, and VisibilityToggle subcomponents

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `Container` | `FC`<`PromptSuggestionsContainerProps`> | Container component for prompt suggestions Shows suggestions when visible, returns null when not visible |
|  `Item` | `FC`<`PromptSuggestionsItemProps`> | Individual prompt suggestion item component Displays a single prompt suggestion and handles click events |
|  `VisibilityToggle` | `FC`<`PromptSuggestionsVisibilityToggleProps`> | Toggle button for showing/hiding prompt suggestions Can be placed anywhere in the UI Always shows a Lightbulb icon with styling that changes based on state |

## Example

```tsx
<PromptSuggestions.Container isLoading={false}>
  <PromptSuggestions.Item text="What are the top selling products?" />
  <PromptSuggestions.Item text="Show me the revenue trends" />
</PromptSuggestions.Container>

<PromptSuggestions.VisibilityToggle />
```
