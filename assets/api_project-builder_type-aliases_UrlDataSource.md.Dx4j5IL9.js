import{_ as e,c as d,o as t,ag as c}from"./chunks/framework.DPDPlp3K.js";const g=JSON.parse('{"title":"Type Alias: UrlDataSource","description":"","frontmatter":{"head":[["link",{"rel":"canonical","href":"https://sqlrooms.org/api/project-builder/type-aliases/UrlDataSource.html"}]]},"headers":[],"relativePath":"api/project-builder/type-aliases/UrlDataSource.md","filePath":"api/project-builder/type-aliases/UrlDataSource.md"}'),a={name:"api/project-builder/type-aliases/UrlDataSource.md"};function r(l,o,n,i,p,s){return t(),d("div",null,o[0]||(o[0]=[c('<p><a href="./../">@sqlrooms/project-builder</a> / UrlDataSource</p><h1 id="type-alias-urldatasource" tabindex="-1">Type Alias: UrlDataSource <a class="header-anchor" href="#type-alias-urldatasource" aria-label="Permalink to &quot;Type Alias: UrlDataSource&quot;">​</a></h1><blockquote><p><strong>UrlDataSource</strong>: <code>object</code></p></blockquote><p><strong><code>Interface</code></strong></p><p>Configuration for URL-based data sources UrlDataSource</p><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th></tr></thead><tbody><tr><td><a id="type"></a> <code>type</code></td><td><code>&quot;url&quot;</code></td></tr><tr><td><a id="url"></a> <code>url</code></td><td><code>string</code></td></tr><tr><td><a id="tablename"></a> <code>tableName</code></td><td><code>string</code></td></tr><tr><td><a id="loadoptions"></a> <code>loadOptions</code>?</td><td><code>objectOutputType</code>&lt;<code>extendShape</code>&lt;<code>extendShape</code>&lt;{ <code>schema</code>: <code>ZodOptional</code>&lt;<code>ZodString</code>&gt;; <code>select</code>: <code>ZodOptional</code>&lt;<code>ZodArray</code>&lt;<code>ZodString</code>, <code>&quot;many&quot;</code>&gt;&gt;; <code>where</code>: <code>ZodOptional</code>&lt;<code>ZodString</code>&gt;; <code>view</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; <code>temp</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; <code>replace</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; }, { <code>options</code>: <code>ZodOptional</code>&lt;<code>ZodUnion</code>&lt;[<code>ZodArray</code>&lt;<code>ZodString</code>, <code>&quot;many&quot;</code>&gt;, <code>ZodString</code>, <code>ZodRecord</code>&lt;<code>ZodString</code>, <code>ZodUnknown</code>&gt;]&gt;&gt;; }&gt;, { <code>method</code>: <code>ZodLiteral</code>&lt;<code>&quot;st_read&quot;</code>&gt;; }&gt;, <code>ZodUnknown</code>, <code>&quot;strip&quot;</code>&gt; | <code>objectOutputType</code>&lt;<code>extendShape</code>&lt;{ <code>schema</code>: <code>ZodOptional</code>&lt;<code>ZodString</code>&gt;; <code>select</code>: <code>ZodOptional</code>&lt;<code>ZodArray</code>&lt;<code>ZodString</code>, <code>&quot;many&quot;</code>&gt;&gt;; <code>where</code>: <code>ZodOptional</code>&lt;<code>ZodString</code>&gt;; <code>view</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; <code>temp</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; <code>replace</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; }, { <code>method</code>: <code>ZodEnum</code>&lt;[<code>&quot;read_json&quot;</code>, <code>&quot;read_ndjson&quot;</code>, <code>&quot;read_parquet&quot;</code>, <code>&quot;read_csv&quot;</code>, <code>&quot;auto&quot;</code>]&gt;; }&gt;, <code>ZodUnknown</code>, <code>&quot;strip&quot;</code>&gt;</td></tr><tr><td><a id="httpmethod"></a> <code>httpMethod</code>?</td><td><code>string</code></td></tr><tr><td><a id="headers"></a> <code>headers</code>?</td><td><code>Record</code>&lt;<code>string</code>, <code>string</code>&gt;</td></tr></tbody></table>',7)]))}const h=e(a,[["render",r]]);export{g as __pageData,h as default};
