---
url: 'https://sqlrooms.org/api/webcontainer/classes/WebContainerFsAdapter.md'
---
[@sqlrooms/webcontainer](../index.md) / WebContainerFsAdapter

# Class: WebContainerFsAdapter

## Implements

* `IFileSystem`

## Constructors

### Constructor

> **new WebContainerFsAdapter**(`webContainer`): `WebContainerFsAdapter`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `webContainer` | `WebContainerLike` |

#### Returns

`WebContainerFsAdapter`

## Methods

### asFileSystem()

> **asFileSystem**(): `IFileSystem`

#### Returns

`IFileSystem`

***

### syncFromWebContainer()

> **syncFromWebContainer**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### readFile()

> **readFile**(`path`, `options?`): `Promise`<`string`>

Read the contents of a file as a string (default: utf8)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `options?` | { `encoding?`: BufferEncoding | null | undefined; } | `BufferEncoding` |

#### Returns

`Promise`<`string`>

#### Throws

Error if file doesn't exist or is a directory

#### Implementation of

`IFileSystem.readFile`

***

### readFileBuffer()

> **readFileBuffer**(`path`): `Promise`<`Uint8Array`<`ArrayBufferLike`>>

Read the contents of a file as a Uint8Array (binary)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`Promise`<`Uint8Array`<`ArrayBufferLike`>>

#### Throws

Error if file doesn't exist or is a directory

#### Implementation of

`IFileSystem.readFileBuffer`

***

### writeFile()

> **writeFile**(`path`, `content`, `options?`): `Promise`<`void`>

Write content to a file, creating it if it doesn't exist

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `content` | `FileContent` |
| `options?` | `BufferEncoding` | { `encoding?`: BufferEncoding | undefined; } |

#### Returns

`Promise`<`void`>

#### Implementation of

`IFileSystem.writeFile`

***

### appendFile()

> **appendFile**(`path`, `content`, `options?`): `Promise`<`void`>

Append content to a file, creating it if it doesn't exist

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `content` | `FileContent` |
| `options?` | `BufferEncoding` | { `encoding?`: BufferEncoding | undefined; } |

#### Returns

`Promise`<`void`>

#### Implementation of

`IFileSystem.appendFile`

***

### exists()

> **exists**(`path`): `Promise`<`boolean`>

Check if a path exists

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`Promise`<`boolean`>

#### Implementation of

`IFileSystem.exists`

***

### stat()

> **stat**(`path`): `Promise`<`FsStat`>

Get file/directory information

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`Promise`<`FsStat`>

#### Throws

Error if path doesn't exist

#### Implementation of

`IFileSystem.stat`

***

### mkdir()

> **mkdir**(`path`, `options?`): `Promise`<`void`>

Create a directory

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `options?` | `MkdirOptions` |

#### Returns

`Promise`<`void`>

#### Throws

Error if parent doesn't exist (unless recursive) or path exists

#### Implementation of

`IFileSystem.mkdir`

***

### readdir()

> **readdir**(`path`): `Promise`<`string`\[]>

Read directory contents

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`Promise`<`string`\[]>

Array of entry names (not full paths)

#### Throws

Error if path doesn't exist or is not a directory

#### Implementation of

`IFileSystem.readdir`

***

### rm()

> **rm**(`path`, `options?`): `Promise`<`void`>

Remove a file or directory

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `options?` | `RmOptions` |

#### Returns

`Promise`<`void`>

#### Throws

Error if path doesn't exist (unless force) or directory not empty (unless recursive)

#### Implementation of

`IFileSystem.rm`

***

### cp()

> **cp**(`src`, `dest`, `options?`): `Promise`<`void`>

Copy a file or directory

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `src` | `string` |
| `dest` | `string` |
| `options?` | `CpOptions` |

#### Returns

`Promise`<`void`>

#### Throws

Error if source doesn't exist or trying to copy directory without recursive

#### Implementation of

`IFileSystem.cp`

***

### mv()

> **mv**(`src`, `dest`): `Promise`<`void`>

Move/rename a file or directory

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `src` | `string` |
| `dest` | `string` |

#### Returns

`Promise`<`void`>

#### Implementation of

`IFileSystem.mv`

***

### resolvePath()

> **resolvePath**(`base`, `path`): `string`

Resolve a relative path against a base path

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `base` | `string` |
| `path` | `string` |

#### Returns

`string`

#### Implementation of

`IFileSystem.resolvePath`

***

### getAllPaths()

> **getAllPaths**(): `string`\[]

Get all paths in the filesystem (useful for glob matching)
Optional - implementations may return empty array if not supported

#### Returns

`string`\[]

#### Implementation of

`IFileSystem.getAllPaths`

***

### chmod()

> **chmod**(`path`, `mode`): `Promise`<`void`>

Change file/directory permissions

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `mode` | `number` |

#### Returns

`Promise`<`void`>

#### Throws

Error if path doesn't exist

#### Implementation of

`IFileSystem.chmod`

***

### symlink()

> **symlink**(`_target`, `_linkPath`): `Promise`<`void`>

Create a symbolic link

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_target` | `string` |
| `_linkPath` | `string` |

#### Returns

`Promise`<`void`>

#### Throws

Error if linkPath already exists

#### Implementation of

`IFileSystem.symlink`

***

### link()

> **link**(`_existingPath`, `_newPath`): `Promise`<`void`>

Create a hard link

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_existingPath` | `string` |
| `_newPath` | `string` |

#### Returns

`Promise`<`void`>

#### Throws

Error if existingPath doesn't exist or newPath already exists

#### Implementation of

`IFileSystem.link`

***

### readlink()

> **readlink**(`path`): `Promise`<`string`>

Read the target of a symbolic link

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`Promise`<`string`>

#### Throws

Error if path doesn't exist or is not a symlink

#### Implementation of

`IFileSystem.readlink`

***

### lstat()

> **lstat**(`path`): `Promise`<`FsStat`>

Get file/directory information without following symlinks

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`Promise`<`FsStat`>

#### Throws

Error if path doesn't exist

#### Implementation of

`IFileSystem.lstat`

***

### realpath()

> **realpath**(`path`): `Promise`<`string`>

Resolve all symlinks in a path to get the canonical physical path.
This is equivalent to POSIX realpath() - it resolves all symlinks
in the path and returns the absolute physical path.
Used by pwd -P and cd -P for symlink resolution.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`Promise`<`string`>

#### Throws

Error if path doesn't exist or contains a broken symlink

#### Implementation of

`IFileSystem.realpath`

***

### utimes()

> **utimes**(`path`, `atime`, `mtime`): `Promise`<`void`>

Set access and modification times of a file

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The file path |
| `atime` | `Date` | Access time (currently ignored, kept for API compatibility) |
| `mtime` | `Date` | Modification time |

#### Returns

`Promise`<`void`>

#### Throws

Error if path doesn't exist

#### Implementation of

`IFileSystem.utimes`
