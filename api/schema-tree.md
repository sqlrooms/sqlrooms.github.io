---
url: /api/schema-tree.md
---
# @sqlrooms/schema-tree

This package is part of the SQLRooms framework.

# DuckDB schema tree

A React component library for rendering DuckDB schema trees in a hierarchical view. It provides components to display database schemas, tables, and columns in an interactive tree structure with features like:

* Expandable/collapsible tree nodes
* Column type badges
* Context menus for actions (e.g. copying column names)
* Customizable node rendering
* Hover states and visual feedback

The main components are:

* `TableSchemaTree`: The root tree component that renders the full schema hierarchy
* `ColumnTreeNode`: Specialized node for displaying column information
* `TreeNodeActionsMenu`: Reusable menu component for node actions

This package is used by SQLRooms to provide schema browsing capabilities in the database explorer interface.

## Functions

* [defaultRenderTableSchemaNode](functions/defaultRenderTableSchemaNode.md)
* [TableSchemaTree](functions/TableSchemaTree.md)
* [BaseTreeNode](functions/BaseTreeNode.md)
* [ColumnTreeNode](functions/ColumnTreeNode.md)
* [DatabaseTreeNode](functions/DatabaseTreeNode.md)
* [SchemaTreeNode](functions/SchemaTreeNode.md)
* [defaultRenderTableNodeMenuItems](functions/defaultRenderTableNodeMenuItems.md)
* [TableTreeNode](functions/TableTreeNode.md)
* [TreeNodeActionsMenu](functions/TreeNodeActionsMenu.md)
* [TreeNodeActionsMenuItem](functions/TreeNodeActionsMenuItem.md)
