---
url: 'https://sqlrooms.org/api/db-settings/type-aliases/ConnectorDriverDiagnostic.md'
---
[@sqlrooms/db-settings](../index.md) / ConnectorDriverDiagnostic

# Type Alias: ConnectorDriverDiagnostic

> **ConnectorDriverDiagnostic** = `object`

Diagnostic info about a connector driver's availability.

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `id` | `string` |
|  `engineId` | `string` |
|  `title` | `string` |
|  `available` | `boolean` |
|  `error?` | `string` |
|  `reason?` | `string` |
|  `requiredPackages?` | `string`\[] |
|  `installCommands?` | { `uvProject?`: `string`; `uvxRelaunch?`: `string`; `uvxWith?`: `string`; } |
