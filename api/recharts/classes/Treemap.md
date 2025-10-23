---
url: /api/recharts/classes/Treemap.md
---
[@sqlrooms/recharts](../index.md) / Treemap

# Class: Treemap

## Extends

* `PureComponent`<[`TreemapProps`](../interfaces/TreemapProps.md), `State`>

## Constructors

### new Treemap()

> **new Treemap**(`props`): [`Treemap`](Treemap.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`TreemapProps`](../interfaces/TreemapProps.md) |

#### Returns

[`Treemap`](Treemap.md)

#### Inherited from

`PureComponent<Props, State>.constructor`

### new Treemap()

> **new Treemap**(`props`, `context`): [`Treemap`](Treemap.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`TreemapProps`](../interfaces/TreemapProps.md) |  |
| `context` | `any` | value of the parent [Context](https://react.dev/reference/react/Component#context) specified in `contextType`. |

#### Returns

[`Treemap`](Treemap.md)

#### Inherited from

`PureComponent<Props, State>.constructor`

## Properties

| Property | Modifier | Type | Description | Overrides | Inherited from |
| ------ | ------ | ------ | ------ | ------ | ------ |
|  `contextType?` | `static` | `Context`<`any`> | If set, `this.context` will be set at runtime to the current value of the given Context. **Example** `type MyContext = number const Ctx = React.createContext<MyContext>(0) class Foo extends React.Component { static contextType = Ctx context!: React.ContextType<typeof Ctx> render () { return <>My context's value: {this.context}</>; } }` **See** <https://react.dev/reference/react/Component#static-contexttype> | - | `PureComponent.contextType` |
|  ~~`propTypes?`~~ | `static` | `any` | Ignored by React. **Deprecated** Only kept in types for backwards compatibility. Will be removed in a future major release. | - | `PureComponent.propTypes` |
|  `context` | `public` | `unknown` | If using React Context, re-declare this in your class to be the `React.ContextType` of your `static contextType`. Should be used with type annotation or static contextType. **Example** `static contextType = MyContext // For TS pre-3.7: context!: React.ContextType<typeof MyContext> // For TS 3.7 and above: declare context: React.ContextType<typeof MyContext>` **See** [React Docs](https://react.dev/reference/react/Component#context) | - | `PureComponent.context` |
|  `props` | `readonly` | `Readonly`<[`TreemapProps`](../interfaces/TreemapProps.md)> | - | - | `PureComponent.props` |
|  `displayName` | `static` | `string` | - | - | - |
|  `defaultProps` | `static` | `object` | - | - | - |
| `defaultProps.aspectRatio` | `public` | `number` | - | - | - |
| `defaultProps.dataKey` | `public` | `string` | - | - | - |
| `defaultProps.type` | `public` | `string` | - | - | - |
| `defaultProps.isAnimationActive` | `public` | `boolean` | - | - | - |
| `defaultProps.isUpdateAnimationActive` | `public` | `boolean` | - | - | - |
| `defaultProps.animationBegin` | `public` | `number` | - | - | - |
| `defaultProps.animationDuration` | `public` | `number` | - | - | - |
| `defaultProps.animationEasing` | `public` | `string` | - | - | - |
|  `state` | `public` | `object` | - | `PureComponent.state` | - |
| `state.isTooltipActive` | `public` | `boolean` | - | - | - |
| `state.isAnimationFinished` | `public` | `boolean` | - | - | - |
| `state.activeNode?` | `public` | `TreemapNode` | - | - | - |
| `state.formatRoot?` | `public` | `TreemapNode` | - | - | - |
| `state.currentRoot?` | `public` | `TreemapNode` | - | - | - |
| `state.nestIndex?` | `public` | `TreemapNode`\[] | - | - | - |
| `state.prevData?` | `public` | `any`\[] | - | - | - |
| `state.prevType?` | `public` | `"flat"` | `"nest"` | - | - | - |
| `state.prevWidth?` | `public` | `number` | - | - | - |
| `state.prevHeight?` | `public` | `number` | - | - | - |
| `state.prevDataKey?` | `public` | `DataKey`<`any`> | - | - | - |
| `state.prevAspectRatio?` | `public` | `number` | - | - | - |
|  `handleAnimationEnd` | `public` | () => `void` | - | - | - |
|  `handleAnimationStart` | `public` | () => `void` | - | - | - |

## Methods

### setState()

> **setState**<`K`>(`state`, `callback`?): `void`

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `State` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `null` | `State` | (`prevState`, `props`) => `null` | `State` | `Pick`<`State`, `K`> | `Pick`<`State`, `K`> |
| `callback`? | () => `void` |

#### Returns

`void`

#### Inherited from

`PureComponent.setState`

***

### forceUpdate()

> **forceUpdate**(`callback`?): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback`? | () => `void` |

#### Returns

`void`

#### Inherited from

`PureComponent.forceUpdate`

***

### componentDidMount()?

> `optional` **componentDidMount**(): `void`

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

#### Returns

`void`

#### Inherited from

`PureComponent.componentDidMount`

***

### shouldComponentUpdate()?

> `optional` **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, Component.render, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nextProps` | `Readonly`<[`TreemapProps`](../interfaces/TreemapProps.md)> |
| `nextState` | `Readonly`<`State`> |
| `nextContext` | `any` |

#### Returns

`boolean`

#### Inherited from

`PureComponent.shouldComponentUpdate`

***

### componentWillUnmount()?

> `optional` **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Inherited from

`PureComponent.componentWillUnmount`

***

### componentDidCatch()?

> `optional` **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `Error` |
| `errorInfo` | `ErrorInfo` |

#### Returns

`void`

#### Inherited from

`PureComponent.componentDidCatch`

***

### getSnapshotBeforeUpdate()?

> `optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `any`

Runs before React applies the result of Component.render render to the document, and
returns an object to be given to [componentDidUpdate](Treemap.md#componentdidupdate). Useful for saving
things such as scroll position before Component.render render causes changes to it.

Note: the presence of this method prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prevProps` | `Readonly`<[`TreemapProps`](../interfaces/TreemapProps.md)> |
| `prevState` | `Readonly`<`State`> |

#### Returns

`any`

#### Inherited from

`PureComponent.getSnapshotBeforeUpdate`

***

### componentDidUpdate()?

> `optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot`?): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if [getSnapshotBeforeUpdate](Treemap.md#getsnapshotbeforeupdate) is present and returns non-null.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prevProps` | `Readonly`<[`TreemapProps`](../interfaces/TreemapProps.md)> |
| `prevState` | `Readonly`<`State`> |
| `snapshot`? | `any` |

#### Returns

`void`

#### Inherited from

`PureComponent.componentDidUpdate`

***

### ~~componentWillMount()?~~

> `optional` **componentWillMount**(): `void`

Called immediately before mounting occurs, and before Component.render.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Returns

`void`

#### Deprecated

16.3, use ComponentLifecycle.componentDidMount componentDidMount or the constructor instead; will stop working in React 17

#### See

* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state>
* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path>

#### Inherited from

`PureComponent.componentWillMount`

***

### ~~UNSAFE\_componentWillMount()?~~

> `optional` **UNSAFE\_componentWillMount**(): `void`

Called immediately before mounting occurs, and before Component.render.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Returns

`void`

#### Deprecated

16.3, use ComponentLifecycle.componentDidMount componentDidMount or the constructor instead

#### See

* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state>
* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path>

#### Inherited from

`PureComponent.UNSAFE_componentWillMount`

***

### ~~componentWillReceiveProps()?~~

> `optional` **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling Component.setState generally does not trigger this method.

Note: the presence of NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nextProps` | `Readonly`<[`TreemapProps`](../interfaces/TreemapProps.md)> |
| `nextContext` | `any` |

#### Returns

`void`

#### Deprecated

16.3, use static StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps instead; will stop working in React 17

#### See

* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props>
* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path>

#### Inherited from

`PureComponent.componentWillReceiveProps`

***

### ~~UNSAFE\_componentWillReceiveProps()?~~

> `optional` **UNSAFE\_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling Component.setState generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nextProps` | `Readonly`<[`TreemapProps`](../interfaces/TreemapProps.md)> |
| `nextContext` | `any` |

#### Returns

`void`

#### Deprecated

16.3, use static StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps instead

#### See

* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props>
* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path>

#### Inherited from

`PureComponent.UNSAFE_componentWillReceiveProps`

***

### ~~componentWillUpdate()?~~

> `optional` **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call Component.setState here.

Note: the presence of NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nextProps` | `Readonly`<[`TreemapProps`](../interfaces/TreemapProps.md)> |
| `nextState` | `Readonly`<`State`> |
| `nextContext` | `any` |

#### Returns

`void`

#### Deprecated

16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

#### See

* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update>
* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path>

#### Inherited from

`PureComponent.componentWillUpdate`

***

### ~~UNSAFE\_componentWillUpdate()?~~

> `optional` **UNSAFE\_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call Component.setState here.

This method will not stop working in React 17.

Note: the presence of NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nextProps` | `Readonly`<[`TreemapProps`](../interfaces/TreemapProps.md)> |
| `nextState` | `Readonly`<`State`> |
| `nextContext` | `any` |

#### Returns

`void`

#### Deprecated

16.3, use getSnapshotBeforeUpdate instead

#### See

* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update>
* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path>

#### Inherited from

`PureComponent.UNSAFE_componentWillUpdate`

***

### getDerivedStateFromProps()

> `static` **getDerivedStateFromProps**(`nextProps`, `prevState`): `State`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nextProps` | [`TreemapProps`](../interfaces/TreemapProps.md) |
| `prevState` | `State` |

#### Returns

`State`

***

### handleMouseEnter()

> **handleMouseEnter**(`node`, `e`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | `TreemapNode` |
| `e` | `any` |

#### Returns

`void`

***

### handleMouseLeave()

> **handleMouseLeave**(`node`, `e`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | `TreemapNode` |
| `e` | `any` |

#### Returns

`void`

***

### handleClick()

> **handleClick**(`node`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | `TreemapNode` |

#### Returns

`void`

***

### handleNestIndex()

> **handleNestIndex**(`node`, `i`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | `TreemapNode` |
| `i` | `number` |

#### Returns

`void`

***

### renderItem()

> **renderItem**(`content`, `nodeProps`, `isLeaf`): `ReactElement`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `content` | `any` |
| `nodeProps` | `TreemapNode` |
| `isLeaf` | `boolean` |

#### Returns

`ReactElement`

***

### renderContentItem()

> `static` **renderContentItem**(`content`, `nodeProps`, `type`, `colorPanel`): `ReactElement`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `content` | `any` |
| `nodeProps` | `TreemapNode` |
| `type` | `string` |
| `colorPanel` | `string`\[] |

#### Returns

`ReactElement`

***

### renderNode()

> **renderNode**(`root`, `node`): `ReactElement`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `root` | `TreemapNode` |
| `node` | `TreemapNode` |

#### Returns

`ReactElement`

***

### renderAllNodes()

> **renderAllNodes**(): `ReactElement`

#### Returns

`ReactElement`

***

### renderTooltip()

> **renderTooltip**(): `ReactElement`

#### Returns

`ReactElement`

***

### renderNestIndex()

> **renderNestIndex**(): `ReactElement`

#### Returns

`ReactElement`

***

### render()

> **render**(): `Element`

#### Returns

`Element`

#### Overrides

`PureComponent.render`
