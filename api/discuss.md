---
url: 'https://sqlrooms.org/api/discuss.md'
---
# @sqlrooms/discuss

Threaded discussion slice and UI components for SQLRooms.

Use this package to add comments/replies linked to data points or UI anchors.

## Installation

```bash
npm install @sqlrooms/discuss @sqlrooms/room-shell @sqlrooms/ui @sqlrooms/utils
```

## Store setup

```tsx
import {
  createDiscussSlice,
  DiscussSliceConfig,
  DiscussSliceState,
} from '@sqlrooms/discuss';
import {
  BaseRoomConfig,
  createRoomShellSlice,
  createRoomStore,
  LayoutConfig,
  RoomShellSliceState,
  persistSliceConfigs,
} from '@sqlrooms/room-shell';

type RoomState = RoomShellSliceState & DiscussSliceState;

export const {roomStore, useRoomStore} = createRoomStore<RoomState>(
  persistSliceConfigs(
    {
      name: 'discuss-demo-storage',
      sliceConfigSchemas: {
        room: BaseRoomConfig,
        layout: LayoutConfig,
        discuss: DiscussSliceConfig,
      },
    },
    (set, get, store) => ({
      ...createRoomShellSlice({
        config: {title: 'Discuss Demo', dataSources: []},
      })(set, get, store),
      ...createDiscussSlice({userId: 'user-1'})(set, get, store),
    }),
  ),
);
```

## Initialization

Call `room.initialize()` after store creation so slice lifecycle hooks run:

```tsx
import {useEffect} from 'react';
import {roomStore} from './store';

function App() {
  useEffect(() => {
    void roomStore.getState().room.initialize();
  }, []);

  return null;
}
```

## Render discussions

```tsx
import {CommentItem, DiscussionList} from '@sqlrooms/discuss';
import {formatTimeRelative} from '@sqlrooms/utils';
import {useRoomStore} from './store';

export function DiscussionPanel() {
  const discussions = useRoomStore((state) => state.discuss.config.discussions);

  if (discussions.length === 0) {
    return (
      <div className="text-muted-foreground p-4 text-sm">
        No discussions yet.
      </div>
    );
  }

  return (
    <DiscussionList
      className="flex flex-col gap-4"
      renderComment={(props) => (
        <CommentItem {...props}>
          <div className="text-muted-foreground text-xs">
            {props.comment.userId} •{' '}
            {formatTimeRelative(props.comment.timestamp)}
          </div>
          <div className="text-sm whitespace-pre-wrap">
            {props.comment.text}
          </div>
        </CommentItem>
      )}
    />
  );
}
```

## Actions

```tsx
import {useRoomStore} from './store';
import {Button} from '@sqlrooms/ui';

function DiscussionActions() {
  const addDiscussion = useRoomStore((state) => state.discuss.addDiscussion);
  const setReplyToItem = useRoomStore((state) => state.discuss.setReplyToItem);
  const submitEdit = useRoomStore((state) => state.discuss.submitEdit);

  return (
    <div className="flex gap-2">
      <Button onClick={() => addDiscussion('Initial note', 'data-point-id')}>
        Add discussion
      </Button>
      <Button onClick={() => setReplyToItem({discussionId: 'some-id'})}>
        Reply mode
      </Button>
      <Button onClick={() => submitEdit('Reply text')}>Submit</Button>
    </div>
  );
}
```

## Main exports

* components: `DiscussionList`, `DiscussionItem`, `CommentItem`, `DeleteConfirmDialog`
* slice: `createDiscussSlice`, `createDefaultDiscussConfig`
* config/types: `DiscussSliceConfig`, `DiscussSliceState`, `Discussion`, `Comment`
* hook: `useStoreWithDiscussion`

## Type Aliases

* [Comment](/api/discuss/type-aliases/Comment.md)
* [Discussion](/api/discuss/type-aliases/Discussion.md)
* [DiscussSliceConfig](/api/discuss/type-aliases/DiscussSliceConfig.md)
* [DiscussSliceState](/api/discuss/type-aliases/DiscussSliceState.md)
* [RoomStateWithDiscussion](/api/discuss/type-aliases/RoomStateWithDiscussion.md)

## Variables

* [Comment](/api/discuss/variables/Comment.md)
* [Discussion](/api/discuss/variables/Discussion.md)
* [DiscussSliceConfig](/api/discuss/variables/DiscussSliceConfig.md)
* [DiscussionList](/api/discuss/variables/DiscussionList.md)
* [CommentItem](/api/discuss/variables/CommentItem.md)
* [DiscussionItem](/api/discuss/variables/DiscussionItem.md)

## Functions

* [createDefaultDiscussConfig](/api/discuss/functions/createDefaultDiscussConfig.md)
* [createDiscussSlice](/api/discuss/functions/createDiscussSlice.md)
* [useStoreWithDiscussion](/api/discuss/functions/useStoreWithDiscussion.md)
* [DeleteConfirmDialog](/api/discuss/functions/DeleteConfirmDialog.md)
