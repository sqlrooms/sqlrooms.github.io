import{_ as e,c as o,o as d,ag as a}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"Function: load()","description":"","frontmatter":{"head":[["link",{"rel":"canonical","href":"https://sqlrooms.org/api/duckdb/functions/load.html"}]]},"headers":[],"relativePath":"api/duckdb/functions/load.md","filePath":"api/duckdb/functions/load.md"}'),c={name:"api/duckdb/functions/load.md"};function r(n,t,i,s,l,u){return d(),o("div",null,t[0]||(t[0]=[a('<p><a href="./../">@sqlrooms/duckdb</a> / load</p><h1 id="function-load" tabindex="-1">Function: load() <a class="header-anchor" href="#function-load" aria-label="Permalink to &quot;Function: load()&quot;">​</a></h1><blockquote><p><strong>load</strong>(<code>method</code>, <code>tableName</code>, <code>fileName</code>, <code>options</code>, <code>defaults</code>): <code>string</code></p></blockquote><p>Generic function to load data from a file into a DuckDB table</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>method</code></td><td><code>&quot;read_json&quot;</code> | <code>&quot;read_ndjson&quot;</code> | <code>&quot;read_parquet&quot;</code> | <code>&quot;read_csv&quot;</code> | <code>&quot;auto&quot;</code> | <code>&quot;st_read&quot;</code></td><td>The DuckDB read method to use (e.g., &#39;read_csv&#39;, &#39;read_json&#39;)</td></tr><tr><td><code>tableName</code></td><td><code>string</code></td><td>Name of the table to create</td></tr><tr><td><code>fileName</code></td><td><code>string</code></td><td>Path to the input file</td></tr><tr><td><code>options</code></td><td><code>objectOutputType</code></td><td>Load options including select, where, view, temp, replace and file-specific options</td></tr><tr><td><code>defaults</code></td><td><code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;</td><td>Default options to merge with provided options</td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>string</code></p><p>SQL query string to create the table</p>',9)]))}const f=e(c,[["render",r]]);export{h as __pageData,f as default};
