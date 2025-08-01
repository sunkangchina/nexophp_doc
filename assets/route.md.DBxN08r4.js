import{_ as n,c as a,o as e,ah as p}from"./chunks/framework.C2PqkmK9.js";const u=JSON.parse('{"title":"路由","description":"","frontmatter":{},"headers":[],"relativePath":"route.md","filePath":"route.md","lastUpdated":1754013810000}'),i={name:"route.md"};function l(t,s,c,o,d,r){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to “路由”">​</a></h1><ul><li>配置Nginx重写</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>location / {</span></span>
<span class="line"><span>  if (!-e $request_filename){</span></span>
<span class="line"><span>    rewrite ^(.*)$ /index.php last;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>以控制器为例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace app\\admin\\controller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>use Route;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class SiteController extends \\AppController</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public function actionIndex()</span></span>
<span class="line"><span>    { </span></span>
<span class="line"><span>        return view(&#39;index&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function actionTestA()</span></span>
<span class="line"><span>    { </span></span>
<span class="line"><span>        pr(Route::getActions());</span></span>
<span class="line"><span>        echo Route::url(&quot;/admin/site/test-a&quot;);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>actionIndex</code> 对应的URL是 <code>/admin/site/index</code></p><p><code>actionTestA</code> 对应的URL是 <code>/admin/site/test-a</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>view(&#39;index&#39;)</span></span></code></pre></div><p>将渲染 <code>app/admin/views/index.php</code> 文件</p>`,9)]))}const g=n(i,[["render",l]]);export{u as __pageData,g as default};
