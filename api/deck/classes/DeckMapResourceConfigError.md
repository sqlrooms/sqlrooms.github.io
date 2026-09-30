---
url: https://sqlrooms.org/api/deck/classes/DeckMapResourceConfigError.md
---
[@sqlrooms/deck](../index.md) / DeckMapResourceConfigError

# Class: DeckMapResourceConfigError

Error raised before an invalid map resource can be durably written.

## Extends

* `Error`

## Constructors

### Constructor

> **new DeckMapResourceConfigError**(`issues`): `DeckMapResourceConfigError`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `issues` | [`DeckMapResourceConfigIssue`](../type-aliases/DeckMapResourceConfigIssue.md)\[] |

#### Returns

`DeckMapResourceConfigError`

#### Overrides

`Error.constructor`

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
|  `issues` | `readonly` | [`DeckMapResourceConfigIssue`](../type-aliases/DeckMapResourceConfigIssue.md)\[] |
