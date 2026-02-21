---
url: /api/mosaic/mosaic/namespaces/vg/functions/percent_rank.md
---
[@sqlrooms/mosaic](../../../../index.md) / [vg](../index.md) / percent\_rank

# Function: percent\_rank()

> **percent\_rank**(): `WindowNode`

Create a window function that returns the relative rank of the current row.
Computed as (rank() - 1) / (total partition rows - 1).

## Returns

`WindowNode`
