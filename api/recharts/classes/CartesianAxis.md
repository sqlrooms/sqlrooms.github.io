---
url: /api/recharts/classes/CartesianAxis.md
---
[@sqlrooms/recharts](../index.md) / CartesianAxis

# Class: CartesianAxis

## Extends

* `Component`<[`CartesianAxisProps`](../type-aliases/CartesianAxisProps.md), `IState`>

## Constructors

### new CartesianAxis()

> **new CartesianAxis**(`props`): [`CartesianAxis`](CartesianAxis.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`CartesianAxisProps`](../type-aliases/CartesianAxisProps.md) |

#### Returns

[`CartesianAxis`](CartesianAxis.md)

#### Overrides

`Component<Props, IState>.constructor`

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
|  `contextType?` | `static` | `Context`<`any`> | If set, `this.context` will be set at runtime to the current value of the given Context. **Example** `type MyContext = number const Ctx = React.createContext<MyContext>(0) class Foo extends React.Component { static contextType = Ctx context!: React.ContextType<typeof Ctx> render () { return <>My context's value: {this.context}</>; } }` **See** <https://react.dev/reference/react/Component#static-contexttype> | `Component.contextType` |
|  ~~`propTypes?`~~ | `static` | `any` | Ignored by React. **Deprecated** Only kept in types for backwards compatibility. Will be removed in a future major release. | `Component.propTypes` |
|  `context` | `public` | `unknown` | If using React Context, re-declare this in your class to be the `React.ContextType` of your `static contextType`. Should be used with type annotation or static contextType. **Example** `static contextType = MyContext // For TS pre-3.7: context!: React.ContextType<typeof MyContext> // For TS 3.7 and above: declare context: React.ContextType<typeof MyContext>` **See** [React Docs](https://react.dev/reference/react/Component#context) | `Component.context` |
|  `props` | `readonly` | `Readonly`<[`CartesianAxisProps`](../type-aliases/CartesianAxisProps.md)> | - | `Component.props` |
|  `state` | `public` | `Readonly`<`IState`> | - | `Component.state` |
|  `displayName` | `static` | `string` | - | - |
|  `defaultProps` | `static` | `object` | - | - |
| `defaultProps.x` | `public` | `number` | - | - |
| `defaultProps.y` | `public` | `number` | - | - |
| `defaultProps.width` | `public` | `number` | - | - |
| `defaultProps.height` | `public` | `number` | - | - |
| `defaultProps.viewBox` | `public` | `object` | - | - |
| `defaultProps.viewBox.x` | `public` | `number` | - | - |
| `defaultProps.viewBox.y` | `public` | `number` | - | - |
| `defaultProps.viewBox.width` | `public` | `number` | - | - |
| `defaultProps.viewBox.height` | `public` | `number` | - | - |
| `defaultProps.orientation` | `public` | `string` | - | - |
| `defaultProps.ticks` | `public` | `CartesianTickItem`\[] | - | - |
| `defaultProps.stroke` | `public` | `string` | - | - |
| `defaultProps.tickLine` | `public` | `boolean` | - | - |
| `defaultProps.axisLine` | `public` | `boolean` | - | - |
| `defaultProps.tick` | `public` | `boolean` | - | - |
| `defaultProps.mirror` | `public` | `boolean` | - | - |
| `defaultProps.minTickGap` | `public` | `number` | - | - |
| `defaultProps.tickSize` | `public` | `number` | - | - |
| `defaultProps.tickMargin` | `public` | `number` | - | - |
| `defaultProps.interval` | `public` | `string` | - | - |
|  `layerReference` | `private` | `any` | - | - |

## Methods

### setState()

> **setState**<`K`>(`state`, `callback`?): `void`

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `IState` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `null` | `IState` | (`prevState`, `props`) => `null` | `IState` | `Pick`<`IState`, `K`> | `Pick`<`IState`, `K`> |
| `callback`? | () => `void` |

#### Returns

`void`

#### Inherited from

`Component.setState`

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

`Component.forceUpdate`

***

### componentWillUnmount()?

> `optional` **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Inherited from

`Component.componentWillUnmount`

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

`Component.componentDidCatch`

***

### getSnapshotBeforeUpdate()?

> `optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `any`

Runs before React applies the result of Component.render render to the document, and
returns an object to be given to [componentDidUpdate](CartesianAxis.md#componentdidupdate). Useful for saving
things such as scroll position before Component.render render causes changes to it.

Note: the presence of this method prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prevProps` | `Readonly`<[`CartesianAxisProps`](../type-aliases/CartesianAxisProps.md)> |
| `prevState` | `Readonly`<`IState`> |

#### Returns

`any`

#### Inherited from

`Component.getSnapshotBeforeUpdate`

***

### componentDidUpdate()?

> `optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot`?): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if [getSnapshotBeforeUpdate](CartesianAxis.md#getsnapshotbeforeupdate) is present and returns non-null.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prevProps` | `Readonly`<[`CartesianAxisProps`](../type-aliases/CartesianAxisProps.md)> |
| `prevState` | `Readonly`<`IState`> |
| `snapshot`? | `any` |

#### Returns

`void`

#### Inherited from

`Component.componentDidUpdate`

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

`Component.componentWillMount`

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

`Component.UNSAFE_componentWillMount`

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
| `nextProps` | `Readonly`<[`CartesianAxisProps`](../type-aliases/CartesianAxisProps.md)> |
| `nextContext` | `any` |

#### Returns

`void`

#### Deprecated

16.3, use static StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps instead; will stop working in React 17

#### See

* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props>
* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path>

#### Inherited from

`Component.componentWillReceiveProps`

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
| `nextProps` | `Readonly`<[`CartesianAxisProps`](../type-aliases/CartesianAxisProps.md)> |
| `nextContext` | `any` |

#### Returns

`void`

#### Deprecated

16.3, use static StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps instead

#### See

* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props>
* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path>

#### Inherited from

`Component.UNSAFE_componentWillReceiveProps`

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
| `nextProps` | `Readonly`<[`CartesianAxisProps`](../type-aliases/CartesianAxisProps.md)> |
| `nextState` | `Readonly`<`IState`> |
| `nextContext` | `any` |

#### Returns

`void`

#### Deprecated

16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

#### See

* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update>
* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path>

#### Inherited from

`Component.componentWillUpdate`

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
| `nextProps` | `Readonly`<[`CartesianAxisProps`](../type-aliases/CartesianAxisProps.md)> |
| `nextState` | `Readonly`<`IState`> |
| `nextContext` | `any` |

#### Returns

`void`

#### Deprecated

16.3, use getSnapshotBeforeUpdate instead

#### See

* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update>
* <https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path>

#### Inherited from

`Component.UNSAFE_componentWillUpdate`

***

### shouldComponentUpdate()

> **shouldComponentUpdate**(`__namedParameters`, `nextState`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, Component.render, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`CartesianAxisProps`](../type-aliases/CartesianAxisProps.md) |
| `nextState` | `IState` |

#### Returns

`boolean`

#### Overrides

`Component.shouldComponentUpdate`

***

### componentDidMount()

> **componentDidMount**(): `void`

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

#### Returns

`void`

#### Overrides

`Component.componentDidMount`

***

### getTickLineCoord()

> **getTickLineCoord**(`data`): `object`

Calculate the coordinates of endpoints in ticks

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CartesianTickItem` | The data of a simple tick |

#### Returns

`object`

(x1, y1): The coordinate of endpoint close to tick text
(x2, y2): The coordinate of endpoint close to axis

| Name | Type |
| ------ | ------ |
|  `line` | { `x1`: `number`; `y1`: `number`; `x2`: `number`; `y2`: `number`; } |
|  `tick` | { `x`: `number`; `y`: `number`; } |

***

### getTickTextAnchor()

> **getTickTextAnchor**(): `string`

#### Returns

`string`

***

### getTickVerticalAnchor()

> **getTickVerticalAnchor**(): `string`

#### Returns

`string`

***

### renderAxisLine()

> **renderAxisLine**(): `Element`

#### Returns

`Element`

***

### renderTickItem()

> `static` **renderTickItem**(`option`, `props`, `value`): `Element`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `option` | `undefined` | `boolean` | `SVGProps`<`SVGTextElement`> | `ReactElement`<`SVGElement`, `string` | `JSXElementConstructor`<`any`>> | (`props`) => `ReactElement`<`SVGElement`> |
| `props` | `any` |
| `value` | `ReactNode` |

#### Returns

`Element`

***

### renderTicks()

> **renderTicks**(`ticks`, `fontSize`, `letterSpacing`): `Element`

render the ticks

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ticks` | `CartesianTickItem`\[] | The ticks to actually render (overrides what was passed in props) |
| `fontSize` | `string` | Fontsize to consider for tick spacing |
| `letterSpacing` | `string` | Letterspacing to consider for tick spacing |

#### Returns

`Element`

renderedTicks

***

### render()

> **render**(): `Element`

#### Returns

`Element`

#### Overrides

`Component.render`
