---
url: /api/schema-tree/variables/TreeNodeActionsMenu.md
---
[@sqlrooms/schema-tree](../index.md) / TreeNodeActionsMenu

# Variable: TreeNodeActionsMenu

> `const` **TreeNodeActionsMenu**: `FC`<`TreeNodeActionsMenuProps`>

Component that renders a tree node "more actions" menu.
The menu items are passed as children.

The menu is hidden by default and is shown when the user hovers over the node.
For this to work the parent element must have the `group` class.
It should also have classes `relative overflow-hidden`.

## Param

The menu items.
