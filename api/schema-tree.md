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

## Variables

* [TableSchemaTree](variables/TableSchemaTree.md)
* [ColumnTreeNode](variables/ColumnTreeNode.md)
* [DatabaseTreeNode](variables/DatabaseTreeNode.md)
* [SchemaTreeNode](variables/SchemaTreeNode.md)
* [TableTreeNode](variables/TableTreeNode.md)
* [TreeNodeActionsMenu](variables/TreeNodeActionsMenu.md)
* [TreeNodeActionsMenuItem](variables/TreeNodeActionsMenuItem.md)

## Functions

* [defaultRenderTableSchemaNode](functions/defaultRenderTableSchemaNode.md)
* [BaseTreeNode](functions/BaseTreeNode.md)
* [defaultRenderTableNodeMenuItems](functions/defaultRenderTableNodeMenuItems.md)
