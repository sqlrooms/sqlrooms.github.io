import{_ as t,c as o,o as i,ag as r}from"./chunks/framework.DPDPlp3K.js";const u=JSON.parse('{"title":"Function: listFilesAndDirectoriesWithPrefix()","description":"","frontmatter":{"head":[["link",{"rel":"canonical","href":"https://sqlrooms.org/api/s3-browser/functions/listFilesAndDirectoriesWithPrefix.html"}]]},"headers":[],"relativePath":"api/s3-browser/functions/listFilesAndDirectoriesWithPrefix.md","filePath":"api/s3-browser/functions/listFilesAndDirectoriesWithPrefix.md"}'),d={name:"api/s3-browser/functions/listFilesAndDirectoriesWithPrefix.md"};function c(s,e,a,n,l,h){return i(),o("div",null,e[0]||(e[0]=[r('<p><a href="./../">@sqlrooms/s3-browser</a> / listFilesAndDirectoriesWithPrefix</p><h1 id="function-listfilesanddirectorieswithprefix" tabindex="-1">Function: listFilesAndDirectoriesWithPrefix() <a class="header-anchor" href="#function-listfilesanddirectorieswithprefix" aria-label="Permalink to &quot;Function: listFilesAndDirectoriesWithPrefix()&quot;">​</a></h1><blockquote><p><strong>listFilesAndDirectoriesWithPrefix</strong>(<code>S3</code>, <code>bucket</code>, <code>prefix</code>?): <code>Promise</code>&lt;({ <code>key</code>: <code>string</code>; <code>isDirectory</code>: <code>true</code>; } | { <code>key</code>: <code>string</code>; <code>isDirectory</code>: <code>false</code>; <code>lastModified</code>: <code>Date</code>; <code>size</code>: <code>number</code>; <code>contentType</code>: <code>string</code>; })[]&gt;</p></blockquote><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><code>S3</code></td><td><code>S3Client</code></td></tr><tr><td><code>bucket</code></td><td><code>string</code></td></tr><tr><td><code>prefix</code>?</td><td><code>string</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>Promise</code>&lt;({ <code>key</code>: <code>string</code>; <code>isDirectory</code>: <code>true</code>; } | { <code>key</code>: <code>string</code>; <code>isDirectory</code>: <code>false</code>; <code>lastModified</code>: <code>Date</code>; <code>size</code>: <code>number</code>; <code>contentType</code>: <code>string</code>; })[]&gt;</p>',7)]))}const p=t(d,[["render",c]]);export{u as __pageData,p as default};
