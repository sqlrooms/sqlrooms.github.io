---
url: >-
  https://sqlrooms.org/api/webcontainer/type-aliases/WebContainerToolkitResult.md
---
[@sqlrooms/webcontainer](../index.md) / WebContainerToolkitResult

# Type Alias: WebContainerToolkitResult

> **WebContainerToolkitResult** = `object`

## Properties

### bash

> **bash**: `Tool`<[`WebContainerBashToolParameters`](WebContainerBashToolParameters.md), [`WebContainerBashToolOutput`](WebContainerBashToolOutput.md)>

***

### readFile

> **readFile**: `Tool`<[`WebContainerReadFileToolParameters`](WebContainerReadFileToolParameters.md), [`WebContainerReadFileToolOutput`](WebContainerReadFileToolOutput.md)>

***

### writeFile

> **writeFile**: `Tool`<[`WebContainerWriteFileToolParameters`](WebContainerWriteFileToolParameters.md), [`WebContainerWriteFileToolOutput`](WebContainerWriteFileToolOutput.md)>

***

### tools

> **tools**: `Record`<`string`, `Tool`>

***

### toolRenderers

> **toolRenderers**: `Record`<`string`, `ComponentType`<`ToolRendererProps`>>
