import{_ as a,c as i,o as t,ag as e}from"./chunks/framework.DPDPlp3K.js";const k=JSON.parse('{"title":"Function: ThemeSwitch()","description":"","frontmatter":{"head":[["link",{"rel":"canonical","href":"https://sqlrooms.org/api/ui/functions/ThemeSwitch.html"}]]},"headers":[],"relativePath":"api/ui/functions/ThemeSwitch.md","filePath":"api/ui/functions/ThemeSwitch.md"}'),n={name:"api/ui/functions/ThemeSwitch.md"};function h(l,s,p,r,o,c){return t(),i("div",null,s[0]||(s[0]=[e(`<p><a href="./../">@sqlrooms/ui</a> / ThemeSwitch</p><h1 id="function-themeswitch" tabindex="-1">Function: ThemeSwitch() <a class="header-anchor" href="#function-themeswitch" aria-label="Permalink to &quot;Function: ThemeSwitch()&quot;">​</a></h1><blockquote><p><strong>ThemeSwitch</strong>(<code>props</code>, <code>deprecatedLegacyContext</code>?): <code>ReactNode</code></p></blockquote><p>A theme toggle switch component that allows users to switch between light and dark themes.</p><p>This component provides a visually appealing switch with sun/moon icons that animate smoothly during theme transitions. It integrates with the theme context to manage theme state.</p><p>Features:</p><ul><li>Smooth icon animations</li><li>Accessible keyboard navigation</li><li>Focus and hover states</li><li>Customizable via className prop</li></ul><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>props</code></td><td>{ <code>className</code>: <code>string</code>; }</td><td>-</td></tr><tr><td><code>props.className</code>?</td><td><code>string</code></td><td>Optional CSS class name for styling the switch container</td></tr><tr><td><code>deprecatedLegacyContext</code>?</td><td><code>any</code></td><td><strong>Deprecated</strong> <strong>See</strong> <a href="https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods" target="_blank" rel="noreferrer">React Docs</a></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>ReactNode</code></p><h2 id="component" tabindex="-1">Component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;Component&quot;">​</a></h2><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Basic usage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ThemeSwitch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// With custom styling</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ThemeSwitch</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> className</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my-custom-class&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Within a theme provider</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ThemeProvider } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;../theme/theme-provider&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ThemeProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ThemeSwitch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ThemeProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,14)]))}const m=a(n,[["render",h]]);export{k as __pageData,m as default};
