import{_ as e,c as t,o as s,ag as i}from"./chunks/framework.DPDPlp3K.js";const u=JSON.parse('{"title":"Function: escapeVal()","description":"","frontmatter":{"head":[["link",{"rel":"canonical","href":"https://sqlrooms.org/api/duckdb/functions/escapeVal.html"}]]},"headers":[],"relativePath":"api/duckdb/functions/escapeVal.md","filePath":"api/duckdb/functions/escapeVal.md"}'),n={name:"api/duckdb/functions/escapeVal.md"};function o(r,a,l,c,d,p){return s(),t("div",null,a[0]||(a[0]=[i('<p><a href="./../">@sqlrooms/duckdb</a> / escapeVal</p><h1 id="function-escapeval" tabindex="-1">Function: escapeVal() <a class="header-anchor" href="#function-escapeval" aria-label="Permalink to &quot;Function: escapeVal()&quot;">​</a></h1><blockquote><p><strong>escapeVal</strong>(<code>val</code>): <code>string</code></p></blockquote><p>Escapes a value for use in DuckDB SQL queries by wrapping it in single quotes and escaping any existing single quotes by doubling them.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>val</code></td><td><code>unknown</code></td><td>The value to escape. Will be converted to string if not already a string.</td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>string</code></p><p>The escaped string value wrapped in single quotes.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">escapeVal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;John&#39;s data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns &quot;&#39;John&#39;&#39;s data&#39;&quot;</span></span></code></pre></div>',11)]))}const k=e(n,[["render",o]]);export{u as __pageData,k as default};
