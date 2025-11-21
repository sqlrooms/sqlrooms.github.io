---
url: /api/recharts/type-aliases/ReferenceLineProps.md
---
[@sqlrooms/recharts](../index.md) / ReferenceLineProps

# Type Alias: ReferenceLineProps

> **ReferenceLineProps**: `Omit`<`SVGProps`<`SVGLineElement`>, `"viewBox"`> & `ReferenceLineProps`

This excludes `viewBox` prop from svg for two reasons:

1. The components wants viewBox of object type, and svg wants string
   * so there's a conflict, and the component will throw if it gets string
2. Internally the component calls `filterProps` which filters the viewBox away anyway
