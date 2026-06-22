---
url: 'https://sqlrooms.org/api/mosaic/variables/ResponsivePlot.md'
---
[@sqlrooms/mosaic](../index.md) / ResponsivePlot

# Variable: ResponsivePlot

> `const` **ResponsivePlot**: `ForwardRefExoticComponent`<`object` & `object` & `RefAttributes`<`HTMLDivElement`>>

Container component that measures its size and notifies parent via callback.
Uses ResizeObserver with debouncing to reduce update frequency.
Exposes ref to the container div for direct DOM access.
