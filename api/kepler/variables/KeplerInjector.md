---
url: /api/kepler/variables/KeplerInjector.md
---
[@sqlrooms/kepler](../index.md) / KeplerInjector

# Variable: KeplerInjector

> `const` **KeplerInjector**: `object`

Stable access to Kepler factories. Prefer calling `get()` at module scope
(or in a constant initializer) so the returned component type is reused.

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `get()` | (`factory`) => |
