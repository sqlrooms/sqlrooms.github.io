import{_ as o,c as t,o as d,ag as c}from"./chunks/framework.DPDPlp3K.js";const p=JSON.parse('{"title":"Interface: DuckDbConnector","description":"","frontmatter":{"head":[["link",{"rel":"canonical","href":"https://sqlrooms.org/api/duckdb/interfaces/DuckDbConnector.html"}]]},"headers":[],"relativePath":"api/duckdb/interfaces/DuckDbConnector.md","filePath":"api/duckdb/interfaces/DuckDbConnector.md"}'),a={name:"api/duckdb/interfaces/DuckDbConnector.md"};function r(n,e,l,i,s,h){return d(),t("div",null,e[0]||(e[0]=[c('<p><a href="./../">@sqlrooms/duckdb</a> / DuckDbConnector</p><h1 id="interface-duckdbconnector" tabindex="-1">Interface: DuckDbConnector <a class="header-anchor" href="#interface-duckdbconnector" aria-label="Permalink to &quot;Interface: DuckDbConnector&quot;">​</a></h1><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="initialize" tabindex="-1">initialize() <a class="header-anchor" href="#initialize" aria-label="Permalink to &quot;initialize()&quot;">​</a></h3><blockquote><p><strong>initialize</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><p>Initialize the connector</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><hr><h3 id="destroy" tabindex="-1">destroy() <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy()&quot;">​</a></h3><blockquote><p><strong>destroy</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><p>Destroy the connector and clean up resources</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><hr><h3 id="query" tabindex="-1">query() <a class="header-anchor" href="#query" aria-label="Permalink to &quot;query()&quot;">​</a></h3><blockquote><p><strong>query</strong>(<code>query</code>): <code>Promise</code>&lt;<code>Table</code>&lt;<code>any</code>&gt;&gt;</p></blockquote><p>Execute a SQL query and return the result as an Arrow table</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>query</code></td><td><code>string</code></td><td>SQL query to execute</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>Table</code>&lt;<code>any</code>&gt;&gt;</p><hr><h3 id="loadfile" tabindex="-1">loadFile() <a class="header-anchor" href="#loadfile" aria-label="Permalink to &quot;loadFile()&quot;">​</a></h3><blockquote><p><strong>loadFile</strong>(<code>fileName</code>, <code>tableName</code>, <code>opts</code>?): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><p>Load a file into DuckDB and create a table</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>fileName</code></td><td><code>string</code> | <code>File</code></td><td>Path to the file to load</td></tr><tr><td><code>tableName</code></td><td><code>string</code></td><td>Name of the table to create</td></tr><tr><td><code>opts</code>?</td><td><code>objectOutputType</code>&lt;<code>extendShape</code>&lt;{ <code>schema</code>: <code>ZodOptional</code>&lt;<code>ZodString</code>&gt;; <code>select</code>: <code>ZodOptional</code>&lt;<code>ZodArray</code>&lt;<code>ZodString</code>, <code>&quot;many&quot;</code>&gt;&gt;; <code>where</code>: <code>ZodOptional</code>&lt;<code>ZodString</code>&gt;; <code>view</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; <code>temp</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; <code>replace</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; }, { <code>method</code>: <code>ZodEnum</code>&lt;[<code>&quot;read_json&quot;</code>, <code>&quot;read_ndjson&quot;</code>, <code>&quot;read_parquet&quot;</code>, <code>&quot;read_csv&quot;</code>, <code>&quot;auto&quot;</code>]&gt;; }&gt;, <code>ZodUnknown</code>, <code>&quot;strip&quot;</code>&gt; | <code>objectOutputType</code>&lt;<code>extendShape</code>&lt;<code>extendShape</code>&lt;{ <code>schema</code>: <code>ZodOptional</code>&lt;<code>ZodString</code>&gt;; <code>select</code>: <code>ZodOptional</code>&lt;<code>ZodArray</code>&lt;<code>ZodString</code>, <code>&quot;many&quot;</code>&gt;&gt;; <code>where</code>: <code>ZodOptional</code>&lt;<code>ZodString</code>&gt;; <code>view</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; <code>temp</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; <code>replace</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; }, { <code>options</code>: <code>ZodOptional</code>&lt;<code>ZodUnion</code>&lt;[<code>ZodArray</code>&lt;<code>ZodString</code>, <code>&quot;many&quot;</code>&gt;, <code>ZodString</code>, <code>ZodRecord</code>&lt;<code>ZodString</code>, <code>ZodUnknown</code>&gt;]&gt;&gt;; }&gt;, { <code>method</code>: <code>ZodLiteral</code>&lt;<code>&quot;st_read&quot;</code>&gt;; }&gt;, <code>ZodUnknown</code>, <code>&quot;strip&quot;</code>&gt;</td><td>Load options</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><hr><h3 id="loadarrow" tabindex="-1">loadArrow() <a class="header-anchor" href="#loadarrow" aria-label="Permalink to &quot;loadArrow()&quot;">​</a></h3><blockquote><p><strong>loadArrow</strong>(<code>table</code>, <code>tableName</code>, <code>opts</code>?): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><p>Load an arrow table or an arrow IPC stream into DuckDB</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>table</code></td><td><code>Table</code>&lt;<code>any</code>&gt; | <code>Uint8Array</code>&lt;<code>ArrayBufferLike</code>&gt;</td><td>Arrow table or arrow IPC stream to load</td></tr><tr><td><code>tableName</code></td><td><code>string</code></td><td>Name of the table to create</td></tr><tr><td><code>opts</code>?</td><td>{ <code>schema</code>: <code>string</code>; }</td><td>-</td></tr><tr><td><code>opts.schema</code>?</td><td><code>string</code></td><td>-</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><hr><h3 id="loadobjects" tabindex="-1">loadObjects() <a class="header-anchor" href="#loadobjects" aria-label="Permalink to &quot;loadObjects()&quot;">​</a></h3><blockquote><p><strong>loadObjects</strong>(<code>data</code>, <code>tableName</code>, <code>opts</code>?): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><p>Load JavaScript objects into DuckDB</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>data</code></td><td><code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;[]</td><td>Array of objects to load</td></tr><tr><td><code>tableName</code></td><td><code>string</code></td><td>Name of the table to create</td></tr><tr><td><code>opts</code>?</td><td><code>objectOutputType</code>&lt;{ <code>schema</code>: <code>ZodOptional</code>&lt;<code>ZodString</code>&gt;; <code>select</code>: <code>ZodOptional</code>&lt;<code>ZodArray</code>&lt;<code>ZodString</code>, <code>&quot;many&quot;</code>&gt;&gt;; <code>where</code>: <code>ZodOptional</code>&lt;<code>ZodString</code>&gt;; <code>view</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; <code>temp</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; <code>replace</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; }, <code>ZodUnknown</code>, <code>&quot;strip&quot;</code>&gt;</td><td>Load options</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p>',46)]))}const b=o(a,[["render",r]]);export{p as __pageData,b as default};
