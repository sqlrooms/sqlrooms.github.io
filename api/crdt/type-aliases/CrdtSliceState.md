---
url: /api/crdt/type-aliases/CrdtSliceState.md
---
[@sqlrooms/crdt](../index.md) / CrdtSliceState

# Type Alias: CrdtSliceState

> **CrdtSliceState** = `object`

## Properties

### crdt

> **crdt**: `object`

| Name | Type | Description |
| ------ | ------ | ------ |
| `status` | `"idle"` | `"ready"` | `"error"` | - |
| `error?` | `string` | - |
| `connectionStatus` | `CrdtConnectionStatus` | Optional sync connection status for UIs. This is intentionally generic and primarily used by websocket-based sync connectors via `onStatus`. |
| `setConnectionStatus()` | (`status`) => `void` | Update `connectionStatus` (typically wired to a sync connector `onStatus` callback). |
| `initialize()` | () => `Promise`<`void`> | - |
| `destroy()` | () => `Promise`<`void`> | - |
