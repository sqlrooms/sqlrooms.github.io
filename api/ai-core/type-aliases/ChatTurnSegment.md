---
url: https://sqlrooms.org/api/ai-core/type-aliases/ChatTurnSegment.md
---
[@sqlrooms/ai-core](../index.md) / ChatTurnSegment

# Type Alias: ChatTurnSegment

> **ChatTurnSegment** = { `kind`: `"other"`; `part`: `UIMessagePart`; `index`: `number`; } | { `kind`: `"agent-tool"`; `part`: [`ToolPartWithId`](ToolPartWithId.md); `index`: `number`; } | { `kind`: `"tool-group"`; `parts`: `object`\[]; }

Interleaved segments used by the SQLRooms default turn recipe.
Consecutive non-agent tools form a tool-group; agents and other parts
break the group.
