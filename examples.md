---
url: https://sqlrooms.org/examples.md
---

# Example Applications

All example applications are available in our [Examples Repository](https://github.com/sqlrooms/examples). Here's a list of featured examples:

## Basic examples

### [Getting Started](https://github.com/sqlrooms/examples/tree/main/get-started)

[GitHub repo](https://github.com/sqlrooms/examples/tree/main/get-started)
| [Open in StackBlitz](https://stackblitz.com/github/sqlrooms/examples/tree/main/get-started?embed=1)

A minimal Vite application demonstrating the basic usage of SQLRooms. Features include:

* Sets up an app store and a single main panel using SQLRooms' project builder utilities
* Loads a CSV file of California earthquakes as a data source
* Runs a SQL query in the browser (DuckDB WASM) to show summary statistics
* Simple UI with loading, error, and result states

To create a new project from the get-started example run this:

```bash
npx giget gh:sqlrooms/examples/get-started my-new-app/
```

### [SQL Query Editor](https://query.sqlrooms.org/)

[Try live](https://query.sqlrooms.org/)
| [GitHub repo](https://github.com/sqlrooms/examples/tree/main/query)
| [Open in StackBlitz](https://stackblitz.com/github/sqlrooms/examples/tree/main/query?embed=1)

[![Netlify Status](https://api.netlify.com/api/v1/badges/779ab00f-9f8f-4c12-92d2-a75426ac0315/deploy-status)](https://app.netlify.com/projects/sqlrooms-query/deploys)

A comprehensive SQL query editor demonstrating SQLRooms' DuckDB integration. Features include:

* Interactive SQL editor with syntax highlighting
* File dropzone for adding data tables to DuckDB
* Schema tree for browsing database tables and columns
* Tabbed interface for working with multiple queries
* Query execution with results data table
* Support for query cancellation
* There is a [version of the example with offline functionality](https://github.com/sqlrooms/examples/tree/main/query-pwa) which supports Progressive Web App (PWA) features, persistent database storage with OPFS, and state persistence via local storage

To create a new project from the query example run this:

```bash
npx giget gh:sqlrooms/examples/query my-new-app/
```

#### Running locally

```sh
npm install
npm run dev
```

### [Layout](https://github.com/sqlrooms/examples/tree/main/layout)

An app demonstrating collapsible panels, custom tab strips, and dynamically
created dock and grid dashboards. Start with the
[Layout developer guide](/layout) for configuration
examples and links to the layout APIs.

### Multi-Room

[Try live](https://sqlrooms-multi-room.netlify.app/)
| [GitHub repo](https://github.com/sqlrooms/sqlrooms/tree/main/examples/multi-room)

A multi-room application demonstrating how to manage multiple independent data workspaces with proper room store lifecycle management and the powerful new Sidebar component pattern. Features include:

* TanStack Router with room list (`/`) and room detail (`/room/:id`) pages
* Team-style room switcher in the Sidebar header with icon-collapsible navigation
* Sidebar groups for platform navigation and live table schema tree exploration
* Pre-seeded with two sample rooms: Earthquakes and BIXI bike locations
* Paginated data table preview using `QueryDataTable`
* Persistent storage for room configs in local storage
* Room CRUD operations (create, rename, delete)
* Proper store initialization and destruction on room navigation

To create a new project from the query example run this:

```bash
npx giget gh:sqlrooms/examples/multi-room my-new-app/
```

#### Running locally

```sh
pnpm install
pnpm dev
```

## AI Assistant

### [AI-Powered Analytics](https://ai.sqlrooms.org/)

[Try live](https://ai.sqlrooms.org/)
| [GitHub repo](https://github.com/sqlrooms/examples/tree/main/ai)
| [Open in StackBlitz](https://stackblitz.com/github/sqlrooms/examples/tree/main/ai?embed=1\&file=components/app-shell.tsx)

[![Netlify Status](https://api.netlify.com/api/v1/badges/031f0d4f-c2a3-44f8-adf1-6429164bb0c7/deploy-status)](https://app.netlify.com/projects/sqlrooms-ai/deploys)

An advanced example showing how to build an AI-powered analytics application with SQLRooms. Features include:

* Natural language data exploration
* AI-driven data analysis
* Integration with [SQLRooms AI assistant](/api/ai/)
* Custom visualization components
* Room state persistence

To create a new project from the AI example run this:

```bash
npx giget gh:sqlrooms/examples/ai my-new-app/
```

#### Running locally

```sh
npm install
npm run dev
```

### [AI App Builder](https://sqlrooms-ai.netlify.app/)

[GitHub repo](https://github.com/sqlrooms/examples/tree/main/app-builder)
| [Open in StackBlitz](https://stackblitz.com/github/sqlrooms/examples/tree/main/app-builder?embed=1\&file=src/main.tsx)

A SQLRooms app that builds SQLRooms apps—demonstrating recursive bootstrapping. The outer app runs an AI assistant on the left and a code editor in the middle, while the right third hosts the inner app which compiles on the fly and executes in a browser-based virtual environment powered by [StackBlitz WebContainer](https://github.com/stackblitz/webcontainer-core).

Features:

* AI-assisted app generation via [SQLRooms AI assistant](/api/ai/)
* Live code editing with instant preview
* In-browser compilation and execution (no server required, except for the model)
* Recursive bootstrapping pattern

To create a new project from this example:

```bash
npx giget gh:sqlrooms/examples/app-builder my-new-app/
```

#### Running locally

```sh
npm install
npm run dev
```

## Geospatial

### [Deck.gl + Mosaic](https://sqlrooms-deckgl-mosaic.netlify.app/)

[Try live](https://sqlrooms-deckgl-mosaic.netlify.app/)
| [GitHub repo](https://github.com/sqlrooms/examples/tree/main/deckgl-mosaic)
| [Open in StackBlitz](https://stackblitz.com/github/sqlrooms/examples/tree/main/deckgl-mosaic?embed=1\&file=src/app.tsx)

[![Netlify Status](https://api.netlify.com/api/v1/badges/e4571f95-9e51-4d4a-8e68-98d6f7c99980/deploy-status)](https://app.netlify.com/projects/sqlrooms-deckgl-mosaic/deploys)

This example is based on the [original demo app](https://github.com/dzole0311/deckgl-duckdb-geoarrow) by [Gjore Milevski](https://github.com/dzole0311).

An example showcasing integration with [deck.gl](https://deck.gl/) and the [UWData Mosaic](https://github.com/uwdata/mosaic) package for performant cross-filtering, now routed through [`@sqlrooms/deck`](../../packages/deck/README.md).

The architecture uses Mosaic’s global Coordinator to manage state between linked views using SQL predicates. The map spec stays separate from the data, the current Mosaic-filtered Arrow result is passed into `DeckJsonMap`, and multiple JSON layers reuse that same prepared dataset instead of maintaining a local GeoArrow bridge utility.

To create a new project from the deckgl-mosaic example run this:

```bash
npx giget gh:sqlrooms/examples/deckgl-mosaic my-new-app/
```

#### Running locally

```sh
npm install
npm run dev
```

### [Mosaic + DataFusion-WASM + Zarr](https://sqlrooms-deckgl-mosaic-datafusion.netlify.app/)

[Try live](https://sqlrooms-deckgl-mosaic-datafusion.netlify.app/)
| [GitHub repo](https://github.com/sqlrooms/sqlrooms/tree/main/examples/deckgl-mosaic-datafusion)

Preview of the SQLRooms Deck.gl, Mosaic, and DataFusion example app.

This example ports [Gjore Milevski](https://github.com/dzole0311)'s
[mosaic-datafusion-zarr-deckgl](https://github.com/dzole0311/mosaic-datafusion-zarr-deckgl)
experiment (read the [original write-up](https://gjoremilevski.com/posts/mosaic-datafusion-zarr-deckgl/))
into the SQLRooms shell, alongside the [Deck.gl + Mosaic example](https://github.com/sqlrooms/examples/tree/main/deckgl-mosaic)
it is structurally closest to.

ECMWF IFS ENS temperature is streamed client-side from a public Zarr store
([dynamical.org](https://dynamical.org)) with zarrita, queried with
[DataFusion compiled to WASM](https://github.com/apache/datafusion) through a
Mosaic crossfilter, and rendered with
[@developmentseed/deck.gl-zarr](https://github.com/developmentseed/deck.gl-raster).

This room is hand-composed from the base room, layout, Mosaic, and forecast
slices. It does not include SQLRooms' DuckDB slice, so loading the example does
not initialize or download DuckDB-WASM. Its full query path is:

```text
Mosaic clients → supplied Mosaic Coordinator → DataFusion connector → DataFusion-WASM
```

The DataFusion-WASM wrapper's `query({type, sql})` method already matches
Mosaic's `Connector` interface. It returns
[flechette](https://github.com/uwdata/flechette) tables directly because that
is what DataFusion's Arrow IPC output decodes into, so the wrapper is handed to
the supplied `Coordinator` as-is. Room shell chrome (sidebar, theme, layout
panels), the map, the raster shaders, and the crossfilter hooks are otherwise
unchanged from the source app.

Because the Coordinator can only be built once the DataFusion tables exist
(which needs the first streamed Zarr chunk), the room store here is not a
static module export like other examples' `store.ts`; it's built by
`createForecastRoomStore(lab)` once boot finishes, see `src/App.tsx`.

The DataFusion-WASM bindings ship with `execute_ipc`, `register_ipc` and
`materialize_table`, which the published upstream package doesn't have, so
this example depends on
[`@dzole0311/datafusion-wasm`](https://www.npmjs.com/package/@dzole0311/datafusion-wasm),
a patched build published from
[dzole0311/datafusion-wasm-bindings](https://github.com/dzole0311/datafusion-wasm-bindings)
(a fork of [datafusion-contrib/datafusion-wasm-bindings](https://github.com/datafusion-contrib/datafusion-wasm-bindings)).

#### Running locally

Build the workspace packages first, then run this example:

```sh
pnpm build
pnpm dev deckgl-mosaic-datafusion-example
```

### [Kepler.gl Geospatial Visualization](https://kepler.sqlrooms.org/)

[Try live](https://kepler.sqlrooms.org/)
| [GitHub repo](https://github.com/sqlrooms/examples/tree/main/kepler)
| [Open in StackBlitz](https://stackblitz.com/github/sqlrooms/examples/tree/main/kepler?embed=1\&file=src/app.tsx)

[![Netlify Status](https://api.netlify.com/api/v1/badges/888420a3-33e4-4142-a3b5-03a61c44e09a/deploy-status)](https://app.netlify.com/projects/sqlrooms-kepler/deploys)

An example demonstrating [Kepler.gl](https://kepler.gl/) integration for geospatial data visualization. Features include:

* Load earthquakes dataset into DuckDB
* Add data as a Kepler layer for map visualization
* Interactive map controls and filtering
* Rich styling options for geospatial layers

To create a new project from the kepler example run this:

```sh
npx giget gh:sqlrooms/examples/kepler my-new-app/
```

#### Running locally

```sh
npm install
npm dev
```

### [Deck.gl Geospatial Visualization](https://sqlrooms-deckgl.netlify.app/)

[Try live](https://sqlrooms-deckgl.netlify.app/)
| [GitHub repo](https://github.com/sqlrooms/examples/tree/main/deckgl)
| [Open in StackBlitz](https://stackblitz.com/github/sqlrooms/examples/tree/main/deckgl?embed=1\&file=src/app.tsx)

[![Netlify Status](https://api.netlify.com/api/v1/badges/b507fcea-e5ec-4822-988d-77857944cf48/deploy-status)](https://app.netlify.com/projects/sqlrooms-deckgl/deploys)

An example demonstrating [deck.gl](https://deck.gl/) integration for geospatial data visualization through [`@sqlrooms/deck`](../../packages/deck/README.md). It renders ~48k Overture Maps building footprints for the Zurich city centre (currently 48,451 rows), extruded in 3D and colored by height using a sequential color scale.

Features:

* Query a Hugging Face-hosted Parquet file with DuckDB WASM via `httpfs`
* Load airports data file into DuckDB
* Define a serializable deck.gl JSON layer spec separately from the data
* Bind multiple named DuckDB-backed datasets into one map
* Visualize airport locations on an interactive map with GeoArrow-backed point layers
* WKB geometry decoded directly to GeoArrow — no GeoJSON intermediate
* 3D extruded `GeoArrowPolygonLayer` with height-based color scale
* Legend title includes units (`Height (m)`) with domain matching loaded data min/max
* Tooltip with building name, class, and height
* Toggle between airports and Zurich buildings in the same map UI

To create a new project from the deckgl example run this:

```sh
npx giget gh:sqlrooms/examples/deckgl my-new-app/
```

#### Running Locally

```sh
pnpm install
pnpm build
pnpm dev deckgl-example
```

#### Regenerating the dataset

The Zurich buildings dataset is hosted at [`sqlrooms/buildings`](https://huggingface.co/datasets/sqlrooms/buildings) on Hugging Face. It was generated from [Overture Maps](https://overturemaps.org/) using DuckDB. Run in the DuckDB CLI or any SQL client with `httpfs` and `spatial` extensions:

```sql
INSTALL httpfs; LOAD httpfs;
INSTALL spatial; LOAD spatial;

SET s3_region = 'us-west-2';

COPY (
  SELECT
    names.primary AS name,
    class,
    COALESCE(height, num_floors * 3.2, 5) AS height,
    ST_AsWKB(geometry) AS geometry
  FROM read_parquet(
    's3://overturemaps-us-west-2/release/2026-04-15.0/theme=buildings/type=building/*.zstd.parquet',
    hive_partitioning = 1
  )
  WHERE bbox.xmin BETWEEN 8.47 AND 8.59
    AND bbox.ymin BETWEEN 47.335 AND 47.415
  LIMIT 50000
) TO 'zurich_buildings.parquet';
```

Adjust the bounding box or the release date to target a different area or a newer Overture snapshot, then upload the resulting Parquet file to the Hugging Face dataset.

### [Deck.gl + Commenting & Annotation](https://sqlrooms-deckgl-discuss.netlify.app/)

[Try live](https://sqlrooms-deckgl-discuss.netlify.app/)
| [GitHub repo](https://github.com/sqlrooms/examples/tree/main/deckgl-discuss)
| [Open in StackBlitz](https://stackblitz.com/github/sqlrooms/examples/tree/main/deckgl-discuss?embed=1\&file=src/app.tsx)

[![Netlify Status](https://api.netlify.com/api/v1/badges/9c32bdac-f2b1-4cf3-b48b-fa197e0986e3/deploy-status)](https://app.netlify.com/projects/sqlrooms-deckgl-discuss/deploys)

An example showcasing integration with [deck.gl](https://deck.gl/) for geospatial data visualization combined with the [@sqlrooms/discuss](/api/discuss) module for collaborative features. Features include:

* High-performance WebGL-based geospatial visualizations
* Real-time commenting and annotation system
* Contextual discussions tied to specific data points

To create a new project from the deckgl-discuss example run this:

```bash
npx giget gh:sqlrooms/examples/deckgl-discuss my-new-app/
```

#### Running locally

```sh
npm install
npm run dev
```

## Graph and embedding visualization

### [Cosmos – Graph Visualization](http://sqlrooms-cosmos.netlify.app/)

[Try live](http://sqlrooms-cosmos.netlify.app/)
| [GitHub repo](https://github.com/sqlrooms/examples/tree/main/cosmos)
| [Open in StackBlitz](https://stackblitz.com/github/sqlrooms/examples/tree/main/cosmos?embed=1\&file=src/app.tsx)

[![Netlify Status](https://api.netlify.com/api/v1/badges/9e7cb117-0355-406d-88f8-54bf6d9050a0/deploy-status)](https://app.netlify.com/projects/sqlrooms-cosmos/deploys)

An example demonstrating integration with the [Cosmos](https://github.com/cosmograph-org/cosmos) GPU-accelerated graph visualization library. Features include:

* WebGL-based force-directed layout computation
* High-performance rendering of large networks
* Real-time interaction and filtering capabilities
* Customizable visual attributes and physics parameters
* Event handling for node/edge interactions

To create a new project from the cosmos example run this:

```bash
npx giget gh:sqlrooms/examples/cosmos my-new-app/
```

#### Running locally

```sh
npm install
npm dev
```

### [Cosmos – 2D Embedding Visualization](http://sqlrooms-cosmos-embedding.netlify.app/)

[Try live](http://sqlrooms-cosmos-embedding.netlify.app/)
| [GitHub repo](https://github.com/sqlrooms/examples/tree/main/cosmos-embedding)
| [Open in StackBlitz](https://stackblitz.com/github/sqlrooms/examples/tree/main/cosmos-embedding?embed=1\&file=src/app.tsx)

[![Netlify Status](https://api.netlify.com/api/v1/badges/da9fa044-3770-40c1-80cb-224db20de6d4/deploy-status)](https://app.netlify.com/projects/sqlrooms-cosmos-embedding/deploys)

An example showcasing integration with Cosmos for visualizing high-dimensional data in 2D space. Features include:

* WebGL-powered rendering of 2D embeddings
* GPU-accelerated positioning and transitions
* Dynamic mapping of data attributes to visual properties
* Efficient handling of large-scale embedding datasets
* Interactive exploration with pan, zoom, and filtering

To create a new project from the cosmos-embedding example run this:

```bash
npx giget gh:sqlrooms/examples/cosmos-embedding my-new-app/
```

#### Running locally

```sh
npm install
npm dev
```

## Charts

### [Next.js + Recharts Example](https://sqlrooms-nextjs.netlify.app/)

[Try live](https://sqlrooms-nextjs.netlify.app/)
| [GitHub repo](https://github.com/sqlrooms/examples/tree/main/nextjs)
| [Open in StackBlitz](https://stackblitz.com/github/sqlrooms/examples/tree/main/nextjs?embed=1)

[![Netlify Status](https://api.netlify.com/api/v1/badges/3b7e32f9-b8f0-4da1-8ae7-6fa7c0fd9589/deploy-status)](https://app.netlify.com/projects/sqlrooms-nextjs/deploys)

A minimalistic [Next.js](https://nextjs.org/) app example featuring:

* [Recharts module](/api/recharts) for data visualization
* [Tailwind 4](https://tailwindcss.com/blog/tailwindcss-v4) for styling

To create a new project from the Next.js example run this:

```bash
npx giget gh:sqlrooms/examples/nextjs my-new-app/
```

#### Running locally

```sh
npm install
npm dev
```

### [Mosaic Interactive Visualization Example](https://sqlrooms-mosaic.netlify.app/)

[Try live](https://sqlrooms-mosaic.netlify.app/)
| [GitHub repo](https://github.com/sqlrooms/examples/tree/main/mosaic)
| [Open in StackBlitz](https://stackblitz.com/github/sqlrooms/examples/tree/main/mosaic?embed=1\&file=src/app.tsx)

[![Netlify Status](https://api.netlify.com/api/v1/badges/e67a893c-87ac-409d-ac54-3d31e431bb0b/deploy-status)](https://app.netlify.com/projects/sqlrooms-mosaic/deploys)

An example demonstrating integration with [Mosaic](https://idl.uw.edu/mosaic/), a powerful interactive visualization framework utilizing DuckDB and high-performance cross-filtering.

Features include:

* Complete project setup using Vite and TypeScript
* Comprehensive data source management and configuration
* Seamless integration with Mosaic for interactive visualizations
* Real-time cross-filtering capabilities across multiple views
* Example dashboards with common visualization types

To create a new project from the mosaic example run this:

```bash
npx giget gh:sqlrooms/examples/mosaic my-new-app/
```

#### Running locally

```sh
npm install
npm dev
```

## Other examples

### [MotherDuck Cloud Query Editor](https://motherduck.sqlrooms.org/)

[Try live](https://motherduck.sqlrooms.org/)
| [GitHub repo](https://github.com/sqlrooms/examples/tree/main/query-motherduck)
| [Open in StackBlitz](https://stackblitz.com/github/sqlrooms/examples/tree/main/query-motherduck?embed=1)

[![Netlify Status](https://api.netlify.com/api/v1/badges/92d69716-a7b3-4051-9b31-2016584d4d5e/deploy-status)](https://app.netlify.com/projects/sqlrooms-motherduck/deploys)

A browser-based SQL query editor that connects directly to MotherDuck's cloud-hosted DuckDB using the WASM connector. Features include:

* Example of using the `WasmMotherDuckDbConnector` from [`@sqlrooms/motherduck`](api/motherduck)
* Connect to MotherDuck from the browser using DuckDB WASM
* Run SQL queries against local and cloud datasets
* Attach and query [DuckLake data lake and catalog](https://motherduck.com/docs/integrations/file-formats/ducklake/)

To create a new project from the query-motherduck example run this:

```bash
npx giget gh:sqlrooms/examples/query-motherduck my-new-app/
```

### AI RAG Example (Retrieval Augmented Generation)

[GitHub repo](https://github.com/sqlrooms/examples/tree/main/ai-rag)
| [Open in StackBlitz](https://stackblitz.com/github/sqlrooms/examples/tree/main/ai-rag?embed=1\&file=src/app.tsx)

An example demonstrating Retrieval Augmented Generation (RAG) using SQLRooms and DuckDB for vector search. Features include:

* AI chat with RAG: ask questions and get answers based on relevant documentation
* Direct RAG search UI to query embedded documentation
* Vector embeddings stored in DuckDB with native vector similarity search
* Integration with OpenAI for embeddings and chat responses

To create a new project from the ai-rag example run this:

```bash
npx giget gh:sqlrooms/examples/ai-rag my-new-app/
```

#### Setup

##### 1. Generate DuckDB Documentation Embeddings

First, generate vector embeddings of the DuckDB documentation using the [sqlrooms-rag](https://pypi.org/project/sqlrooms-rag/) package:

```bash
# Download DuckDB docs
npx giget gh:duckdb/duckdb-web/docs ./duckdb-docs

# Generate embeddings with OpenAI (requires OPENAI_API_KEY env var)
OPENAI_API_KEY=your-key uvx --from sqlrooms-rag prepare-embeddings ./duckdb-docs -o public/rag/duckdb_docs.duckdb --provider openai
```

This will process all markdown files and create a DuckDB database with 1536-dim OpenAI embeddings at `public/rag/duckdb_docs.duckdb`.

##### 2. Set Your OpenAI API Key

The app requires an OpenAI API key for:

* Generating embeddings for your search queries (on the fly)
* Powering the AI chat responses

You'll be prompted to enter your API key when you start the app, or you can set it in the settings.

#### Running Locally

```bash
npm install
npm run dev
```

Then open the app and:

1. Enter your OpenAI API key in the settings
2. Click the search icon to test RAG search directly
3. Use the AI chat to ask questions about DuckDB

## Looking for More?

You can find even more example applications in our [Examples Repository](https://github.com/sqlrooms/examples).

Also, check out our [Case Studies](/case-studies) page for real-world applications using SQLRooms.
