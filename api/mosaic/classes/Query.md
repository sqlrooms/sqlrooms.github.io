---
url: /api/mosaic/classes/Query.md
---
[@sqlrooms/mosaic](../index.md) / Query

# Class: Query

## Extends

* `ExprNode`

## Constructors

### Constructor

> **new Query**(`type`): `Query`

Instantiate a new query.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |

#### Returns

`Query`

#### Overrides

`ExprNode.constructor`

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
|  `type` | `readonly` | `string` | The SQL AST node type. | `ExprNode.type` |
|  `_with` | `public` | `WithClauseNode`\[] | - | - |
|  `_orderby` | `public` | `ExprNode`\[] | - | - |
|  `_limitPerc` | `public` | `boolean` | - | - |
|  `_limit?` | `public` | `ExprNode` | - | - |
|  `_offset?` | `public` | `ExprNode` | - | - |
|  `cteFor?` | `public` | `Query` | `null` | - | - |

## Accessors

### subqueries

#### Get Signature

> **get** **subqueries**(): `Query`\[]

Return a list of subqueries.

##### Returns

`Query`\[]

## Methods

### toString()

> **toString**(`visitor?`): `string`

Generate a SQL query string for this node using a specific dialect visitor.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `visitor?` | `SQLCodeGenerator` | Optional SQL visitor to use for string generation. If not provided, uses the default visitor. |

#### Returns

`string`

The SQL string representation.

#### Inherited from

`ExprNode.toString`

***

### with()

> `static` **with**(...`expr`): `WithClause`

Create a new WITH clause with the given CTE queries.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`expr` | `WithExpr`\[] | The WITH CTE queries. |

#### Returns

`WithClause`

***

### select()

> `static` **select**(...`expr`): `SelectQuery`

Create a new select query with the given SELECT expressions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`expr` | `SelectExpr`\[] | The SELECT expressions. |

#### Returns

`SelectQuery`

***

### from()

> `static` **from**(...`expr`): `SelectQuery`

Create a new select query with the given FROM expressions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`expr` | `FromExpr`\[] | The FROM expressions. |

#### Returns

`SelectQuery`

***

### union()

> `static` **union**(...`queries`): `SetOperation`

Create a new UNION set operation over the given queries.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`queries` | `MaybeArray`<`Query`>\[] | The queries. |

#### Returns

`SetOperation`

***

### unionByName()

> `static` **unionByName**(...`queries`): `SetOperation`

Create a new UNION BY NAME set operation over the given queries.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`queries` | `MaybeArray`<`Query`>\[] | The queries. |

#### Returns

`SetOperation`

***

### unionAll()

> `static` **unionAll**(...`queries`): `SetOperation`

Create a new UNION ALL set operation over the given queries.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`queries` | `MaybeArray`<`Query`>\[] | The queries. |

#### Returns

`SetOperation`

***

### unionAllByName()

> `static` **unionAllByName**(...`queries`): `SetOperation`

Create a new UNION ALL BY NAME set operation over the given queries.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`queries` | `MaybeArray`<`Query`>\[] | The queries. |

#### Returns

`SetOperation`

***

### intersect()

> `static` **intersect**(...`queries`): `SetOperation`

Create a new INTERSECT set operation over the given queries.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`queries` | `MaybeArray`<`Query`>\[] | The queries. |

#### Returns

`SetOperation`

***

### intersectAll()

> `static` **intersectAll**(...`queries`): `SetOperation`

Create a new INTERSECT ALL set operation over the given queries.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`queries` | `MaybeArray`<`Query`>\[] | The queries. |

#### Returns

`SetOperation`

***

### except()

> `static` **except**(...`queries`): `SetOperation`

Create a new EXCEPT set operation over the given queries.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`queries` | `MaybeArray`<`Query`>\[] | The queries. |

#### Returns

`SetOperation`

***

### exceptAll()

> `static` **exceptAll**(...`queries`): `SetOperation`

Create a new EXCEPT ALL set operation over the given queries.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`queries` | `MaybeArray`<`Query`>\[] | The queries. |

#### Returns

`SetOperation`

***

### describe()

> `static` **describe**(`query`): `DescribeQuery`

Create a new describe query for the given input query.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `Query` | The query to describe. |

#### Returns

`DescribeQuery`

***

### clone()

> **clone**(): `this`

Clone this query.

#### Returns

`this`

#### Overrides

`ExprNode.clone`

***

### setCteFor()

> **setCteFor**(`query`): `void`

Add a pointer to the query for which this query is a CTE.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `Query` | `null` | The query for which this query is a CTE. |

#### Returns

`void`

***

### with()

> **with**(...`expr`): `this`

Add WITH common table expressions (CTEs).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`expr` | `WithExpr`\[] | Expressions to add. |

#### Returns

`this`

***

### orderby()

> **orderby**(...`expr`): `this`

Add ORDER BY expressions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`expr` | `OrderByExpr`\[] | Expressions to add. |

#### Returns

`this`

***

### limitPercent()

> **limitPercent**(`value`): `this`

Set the query result LIMIT as a percentage value.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | `ExprNode` | The limit percentage value. |

#### Returns

`this`

***

### limit()

> **limit**(`value`): `this`

Set the query result LIMIT.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | `ExprNode` | The limit value. |

#### Returns

`this`

***

### offset()

> **offset**(`value`): `this`

Set the query result OFFSET.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | `ExprNode` | The offset value. |

#### Returns

`this`
