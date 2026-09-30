---
url: >-
  https://sqlrooms.org/api/deck/type-aliases/DeckMapBlockDocumentRegistrationOptions.md
---
[@sqlrooms/deck](../index.md) / DeckMapBlockDocumentRegistrationOptions

# Type Alias: DeckMapBlockDocumentRegistrationOptions\<TState>

> **DeckMapBlockDocumentRegistrationOptions**<`TState`> = `object`

Options for configuring Deck map block document registration. Hosts pass
these to `createDeckMapBlockDocumentType` / `createDeckMapBlockDocumentCommandType`.

## Type Parameters

| Type Parameter |
| ------ |
| `TState` |

## Properties

### label?

> `optional` **label?**: `string`

Product label for the map block (defaults to "Map").

***

### description?

> `optional` **description?**: `string`

Description shown in block pickers.

***

### defaultTitle?

> `optional` **defaultTitle?**: `string`

Default caption/title used when ensuring state.

***

### defaultHeight?

> `optional` **defaultHeight?**: `number`

Default height in pixels for the map block.

***

### minHeight?

> `optional` **minHeight?**: `number`

Minimum resizable height in pixels.

***

### maxHeight?

> `optional` **maxHeight?**: `number`

Maximum resizable height in pixels.

***

### afterEnsureState?

> `optional` **afterEnsureState?**: (`options`) => `void`

Called after Deck map state is ensured. Hosts can add product-specific
side effects; delete/remove stays host-owned.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `state`: `TState`; `blockInstanceId`: `string`; `title`: `string`; } |
| `options.state` | `TState` |
| `options.blockInstanceId` | `string` |
| `options.title` | `string` |

#### Returns

`void`
