---
url: https://sqlrooms.org/api/deck/type-aliases/DeckMapRuntimeIssueReporter.md
---
[@sqlrooms/deck](../index.md) / DeckMapRuntimeIssueReporter

# Type Alias: DeckMapRuntimeIssueReporter

> **DeckMapRuntimeIssueReporter** = `object`

Callback pair for reporting and clearing ephemeral Deck map issues.

## Properties

### reportIssue

> **reportIssue**: (`issue`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `issue` | [`DeckMapRuntimeIssue`](DeckMapRuntimeIssue.md) |

#### Returns

`void`

***

### clearIssue

> **clearIssue**: () => `void`

#### Returns

`void`
