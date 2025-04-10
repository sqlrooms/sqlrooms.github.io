import{_ as t,c as e,o as d,ag as c}from"./chunks/framework.DPDPlp3K.js";const Z=JSON.parse('{"title":"Function: isSpatialLoadFileOptions()","description":"","frontmatter":{"head":[["link",{"rel":"canonical","href":"https://sqlrooms.org/api/project-config/functions/isSpatialLoadFileOptions.html"}]]},"headers":[],"relativePath":"api/project-config/functions/isSpatialLoadFileOptions.md","filePath":"api/project-config/functions/isSpatialLoadFileOptions.md"}'),a={name:"api/project-config/functions/isSpatialLoadFileOptions.md"};function n(i,o,l,r,p,s){return d(),e("div",null,o[0]||(o[0]=[c('<p><a href="./../">@sqlrooms/project-config</a> / isSpatialLoadFileOptions</p><h1 id="function-isspatialloadfileoptions" tabindex="-1">Function: isSpatialLoadFileOptions() <a class="header-anchor" href="#function-isspatialloadfileoptions" aria-label="Permalink to &quot;Function: isSpatialLoadFileOptions()&quot;">​</a></h1><blockquote><p><strong>isSpatialLoadFileOptions</strong>(<code>options</code>): <code>options is objectOutputType&lt;extendShape&lt;extendShape&lt;{ schema: ZodOptional&lt;ZodString&gt;; select: ZodOptional&lt;ZodArray&lt;ZodString, &quot;many&quot;&gt;&gt;; where: ZodOptional&lt;ZodString&gt;; view: ZodOptional&lt;ZodBoolean&gt;; temp: ZodOptional&lt;ZodBoolean&gt;; replace: ZodOptional&lt;ZodBoolean&gt; }, { options: ZodOptional&lt;ZodUnion&lt;[ZodArray&lt;ZodString, &quot;many&quot;&gt;, ZodString, ZodRecord&lt;ZodString, ZodUnknown&gt;]&gt;&gt; }&gt;, { method: ZodLiteral&lt;&quot;st_read&quot;&gt; }&gt;, ZodUnknown, &quot;strip&quot;&gt;</code></p></blockquote><p>Type guard to check if options are spatial load file options</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>options</code></td><td><code>objectOutputType</code>&lt;<code>extendShape</code>&lt;<code>extendShape</code>&lt;{ <code>schema</code>: <code>ZodOptional</code>&lt;<code>ZodString</code>&gt;; <code>select</code>: <code>ZodOptional</code>&lt;<code>ZodArray</code>&lt;<code>ZodString</code>, <code>&quot;many&quot;</code>&gt;&gt;; <code>where</code>: <code>ZodOptional</code>&lt;<code>ZodString</code>&gt;; <code>view</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; <code>temp</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; <code>replace</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; }, { <code>options</code>: <code>ZodOptional</code>&lt;<code>ZodUnion</code>&lt;[<code>ZodArray</code>&lt;<code>ZodString</code>, <code>&quot;many&quot;</code>&gt;, <code>ZodString</code>, <code>ZodRecord</code>&lt;<code>ZodString</code>, <code>ZodUnknown</code>&gt;]&gt;&gt;; }&gt;, { <code>method</code>: <code>ZodLiteral</code>&lt;<code>&quot;st_read&quot;</code>&gt;; }&gt;, <code>ZodUnknown</code>, <code>&quot;strip&quot;</code>&gt; | <code>objectOutputType</code>&lt;<code>extendShape</code>&lt;{ <code>schema</code>: <code>ZodOptional</code>&lt;<code>ZodString</code>&gt;; <code>select</code>: <code>ZodOptional</code>&lt;<code>ZodArray</code>&lt;<code>ZodString</code>, <code>&quot;many&quot;</code>&gt;&gt;; <code>where</code>: <code>ZodOptional</code>&lt;<code>ZodString</code>&gt;; <code>view</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; <code>temp</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; <code>replace</code>: <code>ZodOptional</code>&lt;<code>ZodBoolean</code>&gt;; }, { <code>method</code>: <code>ZodEnum</code>&lt;[<code>&quot;read_json&quot;</code>, <code>&quot;read_ndjson&quot;</code>, <code>&quot;read_parquet&quot;</code>, <code>&quot;read_csv&quot;</code>, <code>&quot;auto&quot;</code>]&gt;; }&gt;, <code>ZodUnknown</code>, <code>&quot;strip&quot;</code>&gt;</td><td>The options to check</td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>options is objectOutputType&lt;extendShape&lt;extendShape&lt;{ schema: ZodOptional&lt;ZodString&gt;; select: ZodOptional&lt;ZodArray&lt;ZodString, &quot;many&quot;&gt;&gt;; where: ZodOptional&lt;ZodString&gt;; view: ZodOptional&lt;ZodBoolean&gt;; temp: ZodOptional&lt;ZodBoolean&gt;; replace: ZodOptional&lt;ZodBoolean&gt; }, { options: ZodOptional&lt;ZodUnion&lt;[ZodArray&lt;ZodString, &quot;many&quot;&gt;, ZodString, ZodRecord&lt;ZodString, ZodUnknown&gt;]&gt;&gt; }&gt;, { method: ZodLiteral&lt;&quot;st_read&quot;&gt; }&gt;, ZodUnknown, &quot;strip&quot;&gt;</code></p><p>True if options are spatial load file options</p>',9)]))}const u=t(a,[["render",n]]);export{Z as __pageData,u as default};
