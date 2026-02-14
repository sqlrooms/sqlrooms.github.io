---
url: /api/recharts/classes/Brush.md
---
[@sqlrooms/recharts](../index.md) / Brush

# Class: Brush

## Extends

* `PureComponent`<[`BrushProps`](../type-aliases/BrushProps.md), `State`>

## Constructors

### Constructor

> **new Brush**(`props`): `Brush`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`BrushProps`](../type-aliases/BrushProps.md) |

#### Returns

`Brush`

#### Overrides

`PureComponent<Props, State>.constructor`

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
|  `contextType?` | `static` | `Context`<`any`> | If set, `this.context` will be set at runtime to the current value of the given Context. **Example** `type MyContext = number const Ctx = React.createContext<MyContext>(0) class Foo extends React.Component { static contextType = Ctx context!: React.ContextType<typeof Ctx> render () { return <>My context's value: {this.context}</>; } }` **See** <https://react.dev/reference/react/Component#static-contexttype> | `PureComponent.contextType` |
|  ~~`propTypes?`~~ | `static` | `any` | Ignored by React. **Deprecated** Only kept in types for backwards compatibility. Will be removed in a future major release. | `PureComponent.propTypes` |
|  `context` | `public` | `unknown` | If using React Context, re-declare this in your class to be the `React.ContextType` of your `static contextType`. Should be used with type annotation or static contextType. **Example** `static contextType = MyContext // For TS pre-3.7: context!: React.ContextType<typeof MyContext> // For TS 3.7 and above: declare context: React.ContextType<typeof MyContext>` **See** [React Docs](https://react.dev/reference/react/Component#context) | `PureComponent.context` |
|  `props` | `readonly` | `Readonly`<`P`> | - | `PureComponent.props` |
|  `state` | `public` | `Readonly`<`S`> | - | `PureComponent.state` |
|  `displayName` | `static` | `string` | - | - |
|  `defaultProps` | `static` | `object` | - | - |
| `defaultProps.height` | `public` | `number` | - | - |
| `defaultProps.travellerWidth` | `public` | `number` | - | - |
| `defaultProps.gap` | `public` | `number` | - | - |
| `defaultProps.fill` | `public` | `string` | - | - |
| `defaultProps.stroke` | `public` | `string` | - | - |
| `defaultProps.padding` | `public` | `object` | - | - |
| `defaultProps.padding.top` | `public` | `number` | - | - |
| `defaultProps.padding.right` | `public` | `number` | - | - |
| `defaultProps.padding.bottom` | `public` | `number` | - | - |
| `defaultProps.padding.left` | `public` | `number` | - | - |
| `defaultProps.leaveTimeOut` | `public` | `number` | - | - |
| `defaultProps.alwaysShowText` | `public` | `boolean` | - | - |
|  `leaveTimer?` | `public` | `number` | - | - |
|  `travellerDragStartHandlers?` | `public` | `Record`<`BrushTravellerId`, (`event`) => `void`> | - | - |
|  `handleDrag` | `public` | (`e`) => `void` | - | - |
|  `handleTouchMove` | `public` | (`e`) => `void` | - | - |
|  `handleDragEnd` | `public` | () => `void` | - | - |
|  `handleLeaveWrapper` | `public` | () => `void` | - | - |
|  `handleEnterSlideOrTraveller` | `public` | () => `void` | - | - |
|  `handleLeaveSlideOrTraveller` | `public` | () => `void` | - | - |
|  `handleSlideDragStart` | `public` | (`e`) => `void` | - | - |

## Methods

### setState()

> **setState**<`K`>(`state`, `callback?`): `void`

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `State` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `State` | (`prevState`, `props`) => `State` | `Pick`<`State`, `K`> | `null` | `Pick`<`State`, `K`> | `null` |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

`PureComponent.setState`

***

### forceUpdate()

> **forceUpdate**(`callback?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback?` | () => `void` |

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
| `nextProps` | `Readonly`<`P`> |
| `nextState` | `Readonly`<`S`> |
| `nextContext` | `any` |

#### Returns

`boolean`

#### Inherited from

`PureComponent.shouldComponentUpdate`

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
returns an object to be given to [componentDidUpdate](#componentdidupdate). Useful for saving
things such as scroll position before Component.render render causes changes to it.

Note: the presence of this method prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prevProps` | `Readonly`<`P`> |
| `prevState` | `Readonly`<`S`> |

#### Returns

`any`

#### Inherited from

`PureComponent.getSnapshotBeforeUpdate`

***

### componentDidUpdate()?

> `optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot?`): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if [getSnapshotBeforeUpdate](#getsnapshotbeforeupdate) is present and returns non-null.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prevProps` | `Readonly`<`P`> |
| `prevState` | `Readonly`<`S`> |
| `snapshot?` | `any` |

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
| `nextProps` | `Readonly`<`P`> |
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
| `nextProps` | `Readonly`<`P`> |
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
| `nextProps` | `Readonly`<`P`> |
| `nextState` | `Readonly`<`S`> |
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
| `nextProps` | `Readonly`<`P`> |
| `nextState` | `Readonly`<`S`> |
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

### renderDefaultTraveller()

> `static` **renderDefaultTraveller**(`props`): `Element`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `any` |

#### Returns

`Element`

***

### renderTraveller()

> `static` **renderTraveller**(`option`, `props`): `Element`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `option` | `BrushTravellerType` |
| `props` | `any` |

#### Returns

`Element`

***

### getDerivedStateFromProps()

> `static` **getDerivedStateFromProps**(`nextProps`, `prevState`): `State`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nextProps` | [`BrushProps`](../type-aliases/BrushProps.md) |
| `prevState` | `State` |

#### Returns

`State`

***

### componentWillUnmount()

> **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Overrides

`PureComponent.componentWillUnmount`

***

### getIndexInRange()

> `static` **getIndexInRange**(`valueRange`, `x`): `number`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `valueRange` | `number`\[] |
| `x` | `number` |

#### Returns

`number`

***

### getIndex()

> **getIndex**(`__namedParameters`): `object`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | { `startX`: `number`; `endX`: `number`; } |
| `__namedParameters.startX` | `number` |
| `__namedParameters.endX` | `number` |

#### Returns

`object`

| Name | Type |
| ------ | ------ |
| `startIndex` | `number` |
| `endIndex` | `number` |

***

### getTextOfTick()

> **getTextOfTick**(`index`): `any`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

#### Returns

`any`

***

### attachDragEndListener()

> **attachDragEndListener**(): `void`

#### Returns

`void`

***

### detachDragEndListener()

> **detachDragEndListener**(): `void`

#### Returns

`void`

***

### handleSlideDrag()

> **handleSlideDrag**(`e`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `MouseEvent` | `MouseEvent`<`SVGGElement`, `MouseEvent`> | `Touch` |

#### Returns

`void`

***

### handleTravellerDragStart()

> **handleTravellerDragStart**(`id`, `e`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `BrushTravellerId` |
| `e` | `MouseEvent`<`SVGGElement`, `MouseEvent`> | `TouchEvent`<`SVGGElement`> |

#### Returns

`void`

***

### handleTravellerMove()

> **handleTravellerMove**(`e`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `MouseEvent` | `MouseEvent`<`SVGGElement`, `MouseEvent`> | `Touch` |

#### Returns

`void`

***

### handleTravellerMoveKeyboard()

> **handleTravellerMoveKeyboard**(`direction`, `id`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `direction` | `-1` | `1` |
| `id` | `BrushTravellerId` |

#### Returns

`void`

***

### renderBackground()

> **renderBackground**(): `Element`

#### Returns

`Element`

***

### renderPanorama()

> **renderPanorama**(): `ReactElement`<`any`, `string` | `JSXElementConstructor`<`any`>>

#### Returns

`ReactElement`<`any`, `string` | `JSXElementConstructor`<`any`>>

***

### renderTravellerLayer()

> **renderTravellerLayer**(`travellerX`, `id`): `Element`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `travellerX` | `number` |
| `id` | `BrushTravellerId` |

#### Returns

`Element`

***

### renderSlide()

> **renderSlide**(`startX`, `endX`): `Element`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `startX` | `number` |
| `endX` | `number` |

#### Returns

`Element`

***

### renderText()

> **renderText**(): `Element`

#### Returns

`Element`

***

### render()

> **render**(): `Element`

#### Returns

`Element`

#### Overrides

`PureComponent.render`
