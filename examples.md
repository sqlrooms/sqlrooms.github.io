---
url: 'https://sqlrooms.org/examples.md'
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

An example showcasing integration with [deck.gl](https://deck.gl/) and [@geoarrow/deck.gl-layers](https://www.npmjs.com/package/@geoarrow/deck.gl-layers) libraries for geospatial data visualization combined with the [UWData Mosaic](https://github.com/uwdata/mosaic) package for performant cross-filtering.

The architecture uses Mosaic’s global Coordinator to manage state between linked views using SQL predicates. Because DuckDB-WASM returns standard Arrow tables, the WKB output is [converted to GeoArrow point vectors](./src/components/map/utils.ts#L26) before being passed to the GeoArrowScatterplotLayer for rendering. Ideally, this function can be replaced with a proper GeoArrow Table constructor in the future once [this feature request](https://github.com/geoarrow/geoarrow-js/issues/42) is implemented.

To create a new project from the deckgl-mosaic example run this:

```bash
npx giget gh:sqlrooms/examples/deckgl-mosaic my-new-app/
```

#### Running locally

```sh
npm install
npm run dev
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

An example demonstrating [deck.gl](https://deck.gl/) integration for geospatial data visualization. Features include:

* Load airports data file into DuckDB
* Run SQL queries to filter and transform data
* Visualize airport locations on an interactive map
* High-performance WebGL-based rendering

To create a new project from the deckgl example run this:

```sh
npx giget gh:sqlrooms/examples/deckgl my-new-app/
```

#### Running Locally

```sh
npm install
npm run dev
```

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
