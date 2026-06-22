---
url: 'https://sqlrooms.org/api/cells/functions/isSqlCellStatus.md'
---
[@sqlrooms/cells](../index.md) / isSqlCellStatus

# Function: isSqlCellStatus()

> **isSqlCellStatus**(`status`): status is { type: "sql"; status: "success" | "idle" | "running" | "cancel" | "error"; lastError?: string; referencedTables: string\[]; resultName?: string; resultView?: string; resultRelationType?: "view" | "table"; lastRunTime?: number }

## Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`CellStatus`](../type-aliases/CellStatus.md) | `undefined` |

## Returns

status is { type: "sql"; status: "success" | "idle" | "running" | "cancel" | "error"; lastError?: string; referencedTables: string\[]; resultName?: string; resultView?: string; resultRelationType?: "view" | "table"; lastRunTime?: number }
