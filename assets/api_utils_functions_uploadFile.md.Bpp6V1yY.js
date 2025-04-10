import{_ as t,c as o,o as d,ag as a}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"Function: uploadFile()","description":"","frontmatter":{"head":[["link",{"rel":"canonical","href":"https://sqlrooms.org/api/utils/functions/uploadFile.html"}]]},"headers":[],"relativePath":"api/utils/functions/uploadFile.md","filePath":"api/utils/functions/uploadFile.md"}'),r={name:"api/utils/functions/uploadFile.md"};function c(s,e,i,n,l,p){return d(),o("div",null,e[0]||(e[0]=[a('<p><a href="./../">@sqlrooms/utils</a> / uploadFile</p><h1 id="function-uploadfile" tabindex="-1">Function: uploadFile() <a class="header-anchor" href="#function-uploadfile" aria-label="Permalink to &quot;Function: uploadFile()&quot;">​</a></h1><blockquote><p><strong>uploadFile</strong>(<code>url</code>, <code>content</code>, <code>opts</code>?): <code>Promise</code>&lt;<code>Response</code>&gt;</p></blockquote><p>Uploads a file to a specified URL using XMLHttpRequest</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>url</code></td><td><code>string</code></td><td>The URL to upload the file to</td></tr><tr><td><code>content</code></td><td><code>File</code> | <code>Blob</code> | <code>FormData</code></td><td>The content to upload</td></tr><tr><td><code>opts</code>?</td><td>{ <code>method</code>: <code>string</code>; <code>headers</code>: <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt;; <code>onProgress</code>: (<code>info</code>) =&gt; <code>void</code>; }</td><td>Optional configuration for the upload</td></tr><tr><td><code>opts.method</code>?</td><td><code>string</code></td><td>The HTTP method to use</td></tr><tr><td><code>opts.headers</code>?</td><td><code>Record</code>&lt;<code>string</code>, <code>string</code>&gt;</td><td>Additional headers to include in the request</td></tr><tr><td><code>opts.onProgress</code>?</td><td>(<code>info</code>) =&gt; <code>void</code></td><td>Callback function to track upload progress</td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>Promise</code>&lt;<code>Response</code>&gt;</p><p>The server response</p><h2 id="throws" tabindex="-1">Throws <a class="header-anchor" href="#throws" aria-label="Permalink to &quot;Throws&quot;">​</a></h2><p>Throws an object containing status and error message if upload fails</p>',11)]))}const f=t(r,[["render",c]]);export{h as __pageData,f as default};
