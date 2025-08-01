import{_ as a,c as n,o as p,ah as e}from"./chunks/framework.C2PqkmK9.js";const h=JSON.parse('{"title":"指南","description":"","frontmatter":{},"headers":[],"relativePath":"guide.md","filePath":"guide.md"}'),l={name:"guide.md"};function i(t,s,c,o,d,g){return p(),n("div",null,s[0]||(s[0]=[e(`<h1 id="指南" tabindex="-1">指南 <a class="header-anchor" href="#指南" aria-label="Permalink to “指南”">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h2><ul><li><p>config.ini.php 配置</p><p>修改<code>config.ini.dist.php</code>为<code>config.ini.php</code>,并正确配置其中<code>mysql</code> <code>redis</code>信息.</p><p>缓存依赖<code>redis</code></p></li><li><p>执行sql/init.sql</p><p>复制 <code>init.sql</code> 并执行</p></li><li><p>设置 <code>public</code> 为站点根目录</p><p>配置Nginx重写</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>location / {</span></span>
<span class="line"><span>    if (!-e $request_filename){</span></span>
<span class="line"><span>        rewrite ^(.*)$ /index.php last;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p>777目录设置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mkdir runtime </span></span>
<span class="line"><span>chmod -R 777 runtime</span></span>
<span class="line"><span>mkdir public/uploads</span></span>
<span class="line"><span>chmod -R 777 public/uploads</span></span></code></pre></div></li></ul><p>网站即可正常访问。</p><pre><code>/admin 后台网址
</code></pre><h2 id="目录说明" tabindex="-1">目录说明 <a class="header-anchor" href="#目录说明" aria-label="Permalink to “目录说明”">​</a></h2><ul><li>modules 官方内置应用模块</li><li>app 用户自行开发的模块</li></ul><p>支持用户发布软件至<code>composer</code></p><p>代码结构 <a href="https://github.com/nexophp/demo_module" target="_blank" rel="noreferrer">https://github.com/nexophp/demo_module</a></p><h2 id="命名规则" tabindex="-1">命名规则 <a class="header-anchor" href="#命名规则" aria-label="Permalink to “命名规则”">​</a></h2><p>建议函数名以小写<code>_</code>组合，如 <code>get_ip()</code></p><p>类名如 <code>SiteController</code> ，类中方法名以 <code>action</code> 开头，如 <code>actionIndex</code></p><p>除了控制器，其他类名并不强制。</p><h2 id="控制器" tabindex="-1">控制器 <a class="header-anchor" href="#控制器" aria-label="Permalink to “控制器”">​</a></h2><p>项目的<code>app</code>目录下一般包含 <code>controller</code> 、<code>model</code> 、<code>view</code></p><p>以 admin为例，目录结构如下所示</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>app/</span></span>
<span class="line"><span>├── admin/</span></span>
<span class="line"><span>│   ├── controlle/</span></span>
<span class="line"><span>│   ├── model/</span></span>
<span class="line"><span>│   └── view/</span></span></code></pre></div><p>控制器文件的命名规则是 <code>控制器名Controller.php</code> ，例如 <code>SiteController.php</code> 。</p><p>控制器类的命名规则是 <code>控制器名Controller</code> ，例如 <code>SiteController</code> 。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace app\\admin\\controller;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>class SiteController extends \\core\\AppController</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public function actionIndex()</span></span>
<span class="line"><span>    { </span></span>
<span class="line"><span>        // 什么都不写，会自动加载视图文件 view/site/index.php 或 view/index.php</span></span>
<span class="line"><span>        // 如果需要返回json，使用 json_success([&#39;data&#39;=&gt;[],&#39;msg&#39;=&gt;lang(&#39;ok&#39;)])</span></span>
<span class="line"><span>        // json_error([&#39;msg&#39;=&gt;lang(&#39;ok&#39;)]) </span></span>
<span class="line"><span>        // 或直接返回数组   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //视图数据,在view中可直接使用$test</span></span>
<span class="line"><span>        $this-&gt;view_data[&#39;test&#39;] = &#39;test&#39;; </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>基础控制器</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>\\core\\AppController</span></span></code></pre></div><p>后台控制器，需要登录，且有权限才能访问，默认继承<code>\\core\\AdminController</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>\\core\\AdminController</span></span></code></pre></div><p>类中方法名以 <code>action</code> 开头，如 <code>actionIndex</code>,即可通过请求访问，如 <code>/admin/site/index</code> 。</p><h2 id="替换官方composer" tabindex="-1">替换官方composer <a class="header-anchor" href="#替换官方composer" aria-label="Permalink to “替换官方composer”">​</a></h2><p>查看 <code>vendor/nexophp</code> 下的开发包，以<code>admin</code>为例当包中有<code>controller</code> <code>view</code> 时，可以复制代码至app目录下用于替换官方包的控制器或视图文件。</p><p>如 <code>vendor/nexophp/admin/controller</code> 下的 <code>SiteController.php</code> ，可以复制至 <code>app/admin/controller</code> 下。 并修改命名空间为 <code>app\\admin\\controller</code>。</p><p>请求 <code>/admin/site/index</code> ，即可访问到替换后的控制器。</p><h2 id="autoloader" tabindex="-1">AUTOLOADER <a class="header-anchor" href="#autoloader" aria-label="Permalink to “AUTOLOADER”">​</a></h2><p>自动加载</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>global $autoload;</span></span>
<span class="line"><span>$autoload-&gt;addPsr4(&#39;yourname\\\\&#39;, PATH . &#39;/yourname/&#39;);</span></span></code></pre></div><h2 id="多语言" tabindex="-1">多语言 <a class="header-anchor" href="#多语言" aria-label="Permalink to “多语言”">​</a></h2><p>默认系统开启了多语言功能，首次访问将根据浏览器来加载对应的语言。</p><p>语言包<code>lang/zh-cn/app.php</code> ，语言包的目录结构如下所示</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>lang/</span></span>
<span class="line"><span>├── zh-cn/</span></span>
<span class="line"><span>│   ├── app.php</span></span>
<span class="line"><span>│   ├── admin.php</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── en-us/</span></span>
<span class="line"><span>│   ├── app.php</span></span>
<span class="line"><span>│   ├── admin.php</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>└── ...</span></span></code></pre></div><p>调用翻译</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>lang(&#39;hello&#39;,$name = &#39;app&#39;);</span></span></code></pre></div><p>其中<code>$name</code> 为语言包文件，如<code>app.php</code>。默认可不传<code>$name</code></p><h2 id="数据库" tabindex="-1">数据库 <a class="header-anchor" href="#数据库" aria-label="Permalink to “数据库”">​</a></h2><p>配置数据库</p><p>修改 <code>config.dist.php</code> 为 <code>config.php</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 数据库配置</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>$config[&#39;db_host&#39;] = &#39;127.0.0.1&#39;;</span></span>
<span class="line"><span>$config[&#39;db_user&#39;] = &#39;root&#39;;</span></span>
<span class="line"><span>$config[&#39;db_pwd&#39;]  = &#39;111111&#39;;</span></span>
<span class="line"><span>$config[&#39;db_name&#39;] = &#39;nexo&#39;;</span></span>
<span class="line"><span>$config[&#39;db_port&#39;] = &#39;3306&#39;;</span></span></code></pre></div><p><a href="/db.html">查看数据库操作文档</a></p><h2 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to “路由”">​</a></h2><ul><li>配置Nginx重写</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>location / {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p><code>actionIndex</code> 对应的URL是 <code>/admin/site/index</code></p><p><code>actionTestA</code> 对应的URL是 <code>/admin/site/test-a</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>view(&#39;index&#39;)</span></span></code></pre></div><p>将渲染 <code>app/admin/views/index.php</code> 文件</p><h2 id="应用商店" tabindex="-1">应用商店 <a class="header-anchor" href="#应用商店" aria-label="Permalink to “应用商店”">​</a></h2><p>系统提供大量<code>composer</code>包，作为软件开发的基石，可在应用商店中安装。</p><h2 id="网站备案信息输出" tabindex="-1">网站备案信息输出 <a class="header-anchor" href="#网站备案信息输出" aria-label="Permalink to “网站备案信息输出”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?= \\modules\\admin\\lib\\Beian::output();?&gt;</span></span></code></pre></div><h2 id="执行控制器方法" tabindex="-1">执行控制器方法 <a class="header-anchor" href="#执行控制器方法" aria-label="Permalink to “执行控制器方法”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Route::all(&#39;/&#39;, function(){</span></span>
<span class="line"><span>   return Route::runController(&#39;app\\site\\controller\\siteController&#39;, &#39;actionIndex&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="控制器添加权限" tabindex="-1">控制器添加权限 <a class="header-anchor" href="#控制器添加权限" aria-label="Permalink to “控制器添加权限”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/**</span></span>
<span class="line"><span>  * 权限列表页面</span></span>
<span class="line"><span>  * @permission 权限.管理 权限.查看</span></span>
<span class="line"><span>  */</span></span>
<span class="line"><span>public function actionList(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>由<code>@permission</code> 注释 权限以<code>.</code>分隔，多个权限时用空格</p><h2 id="判断是否有权限" tabindex="-1">判断是否有权限 <a class="header-anchor" href="#判断是否有权限" aria-label="Permalink to “判断是否有权限”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>has_access($str)</span></span></code></pre></div><p>同 <code>if_access($str)</code></p><p>判断是否有权限，user表id为1是超管，将会跳过权限检查。</p><p><code>$str</code>是url，如 <code>admin/site/index</code></p><p>当不希望判断权限时需在控制器加</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/**</span></span>
<span class="line"><span>* 请求前，什么都不写则不检查权限</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>public function before(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="添加菜单" tabindex="-1">添加菜单 <a class="header-anchor" href="#添加菜单" aria-label="Permalink to “添加菜单”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>use core\\Menu;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置分组（可选，默认为&#39;admin&#39;）</span></span>
<span class="line"><span>Menu::setGroup(&#39;admin&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加顶级菜单</span></span>
<span class="line"><span>Menu::add(&#39;system&#39;, &#39;系统管理&#39;, &#39;&#39;, &#39;bi-gear&#39;, 50);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加子菜单（使用&#39;system&#39;作为parent_name，而不是$topId）</span></span>
<span class="line"><span>Menu::add(&#39;module&#39;, &#39;模块&#39;, &#39;/admin/module&#39;, &#39;&#39;, 100, &#39;system&#39;);</span></span>
<span class="line"><span>Menu::add(&#39;setting&#39;, &#39;设置&#39;, &#39;/admin/setting&#39;, &#39;&#39;, 50, &#39;system&#39;);</span></span>
<span class="line"><span>Menu::add(&#39;user&#39;, &#39;用户管理&#39;, &#39;/admin/user&#39;, &#39;&#39;, 30, &#39;system&#39;);</span></span>
<span class="line"><span>Menu::add(&#39;role&#39;, &#39;角色管理&#39;, &#39;/admin/role&#39;, &#39;&#39;, 20, &#39;system&#39;);</span></span></code></pre></div><h2 id="vue" tabindex="-1">vue <a class="header-anchor" href="#vue" aria-label="Permalink to “vue”">​</a></h2><p>vue 2</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$vue =  new Vue;</span></span></code></pre></div><h3 id="index" tabindex="-1">index <a class="header-anchor" href="#index" aria-label="Permalink to “index”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;el-table-column type=&quot;index&quot; label=&quot;序号&quot; :index=&quot;indexMethod&quot; width=&quot;80&quot;&gt;</span></span>
<span class="line"><span>&lt;/el-table-column&gt;</span></span></code></pre></div><h3 id="时间区间" tabindex="-1">时间区间 <a class="header-anchor" href="#时间区间" aria-label="Permalink to “时间区间”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$vue-&gt;search_date = [</span></span>
<span class="line"><span>  &#39;今天&#39;,</span></span>
<span class="line"><span>  &#39;昨天&#39;,</span></span>
<span class="line"><span>  &#39;本周&#39;,</span></span>
<span class="line"><span>  &#39;上周&#39;,</span></span>
<span class="line"><span>  &#39;上上周&#39;,</span></span>
<span class="line"><span>  &#39;本月&#39;,</span></span>
<span class="line"><span>  &#39;上月&#39;,</span></span>
<span class="line"><span>  &#39;上上月&#39;,</span></span>
<span class="line"><span>  &#39;本年&#39;=&gt;&#39;今年&#39;, </span></span>
<span class="line"><span>  &#39;上年&#39;=&gt;&#39;去年&#39;,</span></span>
<span class="line"><span>  &#39;上上年&#39;,</span></span>
<span class="line"><span>  &#39;最近一个月&#39;,</span></span>
<span class="line"><span>  &#39;最近两个月&#39;,</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  &#39;最近三个月&#39;,</span></span>
<span class="line"><span>  &#39;第一季度&#39;, </span></span>
<span class="line"><span>  &#39;第二季度&#39;, </span></span>
<span class="line"><span>  &#39;第三季度&#39;, </span></span>
<span class="line"><span>  &#39;第四季度&#39;, </span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>//限制在这个时间之前的无法选择</span></span>
<span class="line"><span>$vue-&gt;start_date = &#39;2023-11-01&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$vue-&gt;add_date();</span></span></code></pre></div><p>时间定时刷新</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$vue-&gt;loop_picker_options(&#39;/product_quality/api_index/date&#39;,3);</span></span></code></pre></div><p>接口返回</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>return json_success([&#39;data&#39;=&gt;(new \\Vue)-&gt;get_date_area()]);</span></span></code></pre></div><p><code>search_date</code> 以 <code>key</code>=&gt;<code>value</code>形式存在，<code>key</code>是显示的时间，<code>value</code>是显示的标题</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;el-date-picker   v-model=&quot;where.date&quot; value-format=&quot;yyyy-MM-dd&quot; :picker-options=&quot;pickerOptions&quot; size=&quot;medium&quot; type=&quot;daterange&quot; range-separator=&quot;至&quot; start-placeholder=&quot;开始日期&quot; end-placeholder=&quot;结束日期&quot;&gt;</span></span>
<span class="line"><span>&lt;/el-date-picker&gt;</span></span></code></pre></div><h3 id="data" tabindex="-1">data <a class="header-anchor" href="#data" aria-label="Permalink to “data”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$vue-&gt;data(&#39;text&#39;,&#39;welcome&#39;);</span></span></code></pre></div><h3 id="created" tabindex="-1">created <a class="header-anchor" href="#created" aria-label="Permalink to “created”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$vue-&gt;created([&#39;load()&#39;]);</span></span>
<span class="line"><span>$vue-&gt;method(&#39;load()&#39;,&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;);</span></span></code></pre></div><h3 id="mounted" tabindex="-1">mounted <a class="header-anchor" href="#mounted" aria-label="Permalink to “mounted”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$vue-&gt;mounted(&quot;a&quot;,&quot;</span></span>
<span class="line"><span>  alert(2);</span></span>
<span class="line"><span>&quot;)</span></span></code></pre></div><p>其中<code>a</code>是<code>key</code></p><h3 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-label="Permalink to “watch”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$vue-&gt;watch(&quot;page(new_val,old_val)&quot;,&quot;</span></span>
<span class="line"><span>  console.log(&#39;watch&#39;);</span></span>
<span class="line"><span>  console.log(old_val);</span></span>
<span class="line"><span>  console.log(new_val);</span></span>
<span class="line"><span>&quot;)</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$vue-&gt;watch(&quot;where.per_page&quot;,&quot;</span></span>
<span class="line"><span>  handler(new_val,old_val){</span></span>
<span class="line"><span>    console.log(&#39;watch&#39;);</span></span>
<span class="line"><span>    console.log(old_val);</span></span>
<span class="line"><span>    console.log(new_val);</span></span>
<span class="line"><span>  },  </span></span>
<span class="line"><span>&quot;);</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$vue-&gt;watch(&quot;where&quot;,&quot;</span></span>
<span class="line"><span>  handler(new_val,old_val){</span></span>
<span class="line"><span>    console.log(&#39;watch&#39;);</span></span>
<span class="line"><span>    console.log(old_val.per_page);</span></span>
<span class="line"><span>    console.log(new_val.per_page);</span></span>
<span class="line"><span>  }, </span></span>
<span class="line"><span>  deep: true</span></span>
<span class="line"><span>&quot;);</span></span></code></pre></div><h2 id="wangeditor-富文本" tabindex="-1">wangeditor 富文本 <a class="header-anchor" href="#wangeditor-富文本" aria-label="Permalink to “wangeditor 富文本”">​</a></h2><p>如<code>body</code>字段</p><p>在html中</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?=$vue-&gt;editor()?&gt;</span></span></code></pre></div><p>vue代码</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$vue-&gt;editor_method();</span></span>
<span class="line"><span>$vue-&gt;method(&quot;edit_form(row)&quot;,&quot;</span></span>
<span class="line"><span>    let f = this.field;</span></span>
<span class="line"><span>    this.form = {};</span></span>
<span class="line"><span>    for(let r of this.field){</span></span>
<span class="line"><span>        this.\\$set(this.form,r,row[r]);</span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    this.is_open = true; </span></span>
<span class="line"><span>&quot;.$vue-&gt;load_editor_edit());</span></span></code></pre></div><h3 id="压缩js" tabindex="-1">压缩JS <a class="header-anchor" href="#压缩js" aria-label="Permalink to “压缩JS”">​</a></h3><p>安装</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yarn add --dev javascript-obfuscator</span></span></code></pre></div><p>配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$config[&#39;vue_encodejs&#39;] = true;</span></span>
<span class="line"><span>$config[&#39;vue_encodejs_ignore&#39;] = [&#39;/plugins/config/config.php&#39;];</span></span></code></pre></div><h3 id="一般函数" tabindex="-1">一般函数 <a class="header-anchor" href="#一般函数" aria-label="Permalink to “一般函数”">​</a></h3><p>每个季度开始、结束时间</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vue_get_jidu_array($year)</span></span></code></pre></div><p>某月的最后一天</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vue_get_last_day($month = &#39;2023-07&#39;)</span></span></code></pre></div><h3 id="wangeditor-5" tabindex="-1">wangeditor 5 <a class="header-anchor" href="#wangeditor-5" aria-label="Permalink to “wangeditor 5”">​</a></h3><p>有时需要替换原来的图片上传按钮，以下为演示，实际使用请根据情况处理。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$vue-&gt;data(&#39;is_open_editor&#39;,false);</span></span>
<span class="line"><span>$vue-&gt;editor_image_upload_click = &quot;</span></span>
<span class="line"><span>    app.add_media(&#39;editorbody&#39;);</span></span>
<span class="line"><span>    app.is_open_editor = true;</span></span>
<span class="line"><span>&quot;;</span></span></code></pre></div><h3 id="导入文件" tabindex="-1">导入文件 <a class="header-anchor" href="#导入文件" aria-label="Permalink to “导入文件”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$import = $vue-&gt;get_import([</span></span>
<span class="line"><span>    &#39;js&#39;=&gt;&quot; alert(&#39;导入成功&#39;);&quot;;</span></span>
<span class="line"><span>    &#39;upload_url&#39;=&gt;&#39;/sys/upload/one&#39;,</span></span>
<span class="line"><span>    &#39;parse_url&#39;=&gt;&#39;/product_quality/goods/import_parse&#39;,</span></span>
<span class="line"><span>    &#39;save_url&#39;=&gt;&#39;/product_quality/goods/import_parse_save&#39;,</span></span>
<span class="line"><span>    &#39;label&#39;=&gt;&#39;导入xls&#39;,</span></span>
<span class="line"><span>    &#39;table_body&#39;=&gt;&#39;</span></span>
<span class="line"><span>    &lt;el-table-column   prop=&quot;desc&quot;  label=&quot;产品名称&quot; width=&quot;&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>    &lt;el-table-column   prop=&quot;reg_num&quot;  label=&quot;状态&quot; width=&quot;&quot;&gt;</span></span>
<span class="line"><span>         &lt;template slot-scope=&quot;scope&quot;&gt;</span></span>
<span class="line"><span>            &lt;span v-if=&quot;scope.row.is_err&quot;&gt;</span></span>
<span class="line"><span>              &lt;div v-html=&quot;scope.row.err&quot; style=&quot;color:red;font-size:12px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/span&gt;</span></span>
<span class="line"><span>            &lt;span v-else style=&quot;color:green;font-size:12px;&quot;&gt;</span></span>
<span class="line"><span>                可导入</span></span>
<span class="line"><span>            &lt;/span&gt;</span></span>
<span class="line"><span>         &lt;/template&gt;</span></span>
<span class="line"><span>    &lt;/el-table-column&gt;</span></span>
<span class="line"><span>    &#39;</span></span>
<span class="line"><span>]);</span></span></code></pre></div><p>返回 <code>html</code> <code>pop_html</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?php </span></span>
<span class="line"><span>$html = $import[&#39;html&#39;];</span></span>
<span class="line"><span>?&gt;</span></span>
<span class="line"><span>&lt;?=$import[&#39;pop_html&#39;]?&gt;</span></span></code></pre></div><p>接口处理 import_parse</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  $url = $this-&gt;input[&#39;url&#39;];</span></span>
<span class="line"><span>  $file = PATH.$url;</span></span>
<span class="line"><span>  if(!file_exists($file)){</span></span>
<span class="line"><span>    return json_error([&#39;msg&#39;=&gt;&#39;操作异常&#39;]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  $all = \\helper_v3\\Xls::load($file,[ </span></span>
<span class="line"><span>        &#39;产品名称&#39;   =&gt; &#39;desc&#39;,</span></span>
<span class="line"><span>        &#39;规格型号&#39;   =&gt; &#39;spec&#39;,</span></span>
<span class="line"><span>        &#39;批号&#39;       =&gt; &#39;product_ph&#39;,</span></span>
<span class="line"><span>        &#39;生产日期&#39;   =&gt; &#39;produce_date&#39;,</span></span>
<span class="line"><span>        &#39;失效日期&#39;   =&gt; &#39;invalid_date&#39;,</span></span>
<span class="line"><span>        &#39;唯一码&#39;     =&gt; &#39;uuid&#39;,</span></span>
<span class="line"><span>        &#39;注册证号&#39;     =&gt; &#39;reg_num&#39;,</span></span>
<span class="line"><span>  ]);</span></span>
<span class="line"><span>  foreach($all as $k=&gt;$v){ </span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if(!$all){</span></span>
<span class="line"><span>    return json_error([&#39;msg&#39;=&gt;&#39;导入的文件数据异常&#39;]);</span></span>
<span class="line"><span>  } </span></span>
<span class="line"><span>  foreach($all as $k=&gt;&amp;$v){</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  if($res){</span></span>
<span class="line"><span>    $err[] = &quot;唯一码已存在&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  $v[&#39;is_err&#39;] = false;</span></span>
<span class="line"><span>  if($err){</span></span>
<span class="line"><span>    $v[&#39;err&#39;] = implode(&quot;&lt;br&gt;&quot;,$err);</span></span>
<span class="line"><span>    $v[&#39;is_err&#39;] = true;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>if($all){</span></span>
<span class="line"><span>  $all = array_values($all);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>return json_success([&#39;data&#39;=&gt;$all]);</span></span></code></pre></div><h2 id="vue-element" tabindex="-1">vue element <a class="header-anchor" href="#vue-element" aria-label="Permalink to “vue element”">​</a></h2><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to “使用”">​</a></h3><p>搜索</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?php </span></span>
<span class="line"><span>echo element(&quot;filter&quot;,[ </span></span>
<span class="line"><span>    &#39;data&#39;=&gt;&#39;list&#39;,</span></span>
<span class="line"><span>    &#39;url&#39;=&gt;&#39;/video/group/get_pager&#39;,</span></span>
<span class="line"><span>    &#39;is_page&#39;=&gt;true,</span></span>
<span class="line"><span>    &#39;init&#39;=&gt;true,</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;input&#39;,&#39;name&#39;=&gt;&#39;title&#39;,</span></span>
<span class="line"><span>        &#39;attr_element&#39;=&gt;[</span></span>
<span class="line"><span>            &#39;placeholder&#39;=&gt;&#39;名称&#39;,</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>]); </span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><p>其中<code>data</code>为<code>list</code>,将自动触发 <code>load_filter_list()</code></p><p>表格</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?php </span></span>
<span class="line"><span>echo element(&#39;table&#39;,[</span></span>
<span class="line"><span>    [&#39;name&#39;=&gt;&#39;open&#39;,&#39;:data&#39;=&gt;&#39;list&#39;,&#39;:height&#39;=&gt;&#39;height&#39;],</span></span>
<span class="line"><span>    [&#39;name&#39;=&gt;&#39;column&#39;,&#39;prop&#39;=&gt;&#39;title&#39;,&#39;label&#39;=&gt;&#39;名称&#39;,&#39;width&#39;=&gt;&#39;&#39;],</span></span>
<span class="line"><span>    [&#39;name&#39;=&gt;&#39;column&#39;,&#39;prop&#39;=&gt;&#39;count&#39;,&#39;label&#39;=&gt;&#39;成员数&#39;,&#39;width&#39;=&gt;&#39;&#39;],</span></span>
<span class="line"><span>    [&#39;name&#39;=&gt;&#39;column&#39;,&#39;prop&#39;=&gt;&#39;count&#39;,&#39;label&#39;=&gt;&#39;操作&#39;,&#39;width&#39;=&gt;&#39;100&#39;,</span></span>
<span class="line"><span>      &#39;tpl&#39;=&gt;[</span></span>
<span class="line"><span>          [&#39;name&#39;=&gt;&#39;button&#39;,&#39;label&#39;=&gt;&#39;成员&#39;,&#39;@click&#39;=&gt;&#39;show_user(scope.row)&#39;],</span></span>
<span class="line"><span>          [&#39;name&#39;=&gt;&#39;button&#39;,&#39;label&#39;=&gt;&#39;编辑&#39;,&#39;@click&#39;=&gt;&#39;edit(scope.row)&#39;,&#39;style&#39;=&gt;&#39;margin-left: 20px;&#39;],</span></span>
<span class="line"><span>       ]</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [&#39;name&#39;=&gt;&#39;close&#39;],</span></span>
<span class="line"><span>]);</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><p>点击表格展开后显示表格或HTML</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?php </span></span>
<span class="line"><span>echo element(&#39;table&#39;, [</span></span>
<span class="line"><span>    [&#39;name&#39; =&gt; &#39;open&#39;,&#39;:data&#39; =&gt; &#39;load_list&#39;,&#39;:height&#39; =&gt; &#39;height&#39;,&#39;default-expand-all&#39;],</span></span>
<span class="line"><span>    [&#39;name&#39; =&gt; &#39;column&#39;,&#39;prop&#39; =&gt; &#39;order_num&#39;,&#39;label&#39; =&gt; &#39;&#39;,</span></span>
<span class="line"><span>     &#39;type&#39; =&gt; &#39;expand&#39;,</span></span>
<span class="line"><span>     &#39;tpl&#39;=&gt; [</span></span>
<span class="line"><span>       [ </span></span>
<span class="line"><span>            &quot;type&quot;=&gt;&#39;html&#39;, </span></span>
<span class="line"><span>            &quot;html&quot;=&gt;element(&#39;table&#39;, [</span></span>
<span class="line"><span>                [&#39;name&#39; =&gt; &#39;open&#39;,&#39;:data&#39; =&gt; &#39;scope.row.detail&#39;],</span></span>
<span class="line"><span>                [&#39;name&#39; =&gt; &#39;column&#39;,&#39;prop&#39; =&gt; &#39;sale_order_num&#39;,&#39;label&#39; =&gt; &#39;销售单号&#39;,&#39;width&#39; =&gt; &#39;200&#39;],</span></span>
<span class="line"><span>                [&#39;name&#39; =&gt; &#39;column&#39;,&#39;prop&#39; =&gt; &#39;customer_name&#39;,&#39;label&#39; =&gt; &#39;客户&#39;,&#39;width&#39; =&gt; &#39;&#39;],</span></span>
<span class="line"><span>                [&#39;name&#39; =&gt; &#39;column&#39;,&#39;prop&#39; =&gt; &#39;product_name&#39;,&#39;label&#39; =&gt; &#39;产品名称&#39;,&#39;width&#39; =&gt; &#39;200&#39;],</span></span>
<span class="line"><span>                [&#39;name&#39; =&gt; &#39;column&#39;,&#39;prop&#39; =&gt; &#39;product_num&#39;,&#39;label&#39; =&gt; &#39;产品编号&#39;,&#39;width&#39; =&gt; &#39;200&#39;, </span></span>
<span class="line"><span>                    &quot;tpl&quot;=&gt;[</span></span>
<span class="line"><span>                        [</span></span>
<span class="line"><span>                            &#39;type&#39;=&gt;&#39;html&#39;,</span></span>
<span class="line"><span>                            &quot;html&quot;=&gt;&quot;</span></span>
<span class="line"><span>                               &lt;span :style=&#39;\\&quot;background:\\&quot;+scope.row.product_num_color&#39;&gt; {{scope.row.product_num}}&lt;/span&gt;</span></span>
<span class="line"><span>                            &quot;</span></span>
<span class="line"><span>                        ]</span></span>
<span class="line"><span>                    ]</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>                [&#39;name&#39; =&gt; &#39;column&#39;,&#39;prop&#39; =&gt; &#39;product_ph&#39;,&#39;label&#39; =&gt; &#39;批号&#39;,&#39;width&#39; =&gt; &#39;200&#39;],</span></span>
<span class="line"><span>                [&#39;name&#39; =&gt; &#39;column&#39;,&#39;prop&#39; =&gt; &#39;product_unit&#39;,&#39;label&#39; =&gt; &#39;单位&#39;,&#39;width&#39; =&gt; &#39;80&#39;], </span></span>
<span class="line"><span>                [&#39;name&#39; =&gt; &#39;close&#39;],</span></span>
<span class="line"><span>            ]) </span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>     ]</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [&#39;name&#39; =&gt; &#39;column&#39;,&#39;prop&#39; =&gt; &#39;order_num&#39;,&#39;label&#39; =&gt; &#39;入库单号&#39;,&#39;width&#39; =&gt; &#39;200&#39;],</span></span>
<span class="line"><span>    [&#39;name&#39; =&gt; &#39;column&#39;,&#39;prop&#39; =&gt; &#39;num&#39;,&#39;label&#39; =&gt; &#39;数量&#39;,&#39;width&#39; =&gt; &#39;&#39;],</span></span>
<span class="line"><span>    [&#39;name&#39; =&gt; &#39;close&#39;],</span></span>
<span class="line"><span>]);</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><p>其中<code>tpl</code>也支持直接写<code>type</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&quot;tpl&quot;=&gt;[ </span></span>
<span class="line"><span>    //&#39;type&#39;=&gt;&#39;html&#39;,</span><span> //此行可以没有</span></span>
<span class="line"><span>    &quot;html&quot;=&gt;&quot;</span></span>
<span class="line"><span>       &lt;span :style=&#39;\\&quot;background:\\&quot;+scope.row.product_num_color&#39;&gt; {{scope.row.product_num}}&lt;/span&gt;</span></span>
<span class="line"><span>    &quot; </span></span>
<span class="line"><span>]</span></span></code></pre></div><p>分页</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?php </span></span>
<span class="line"><span>echo element(&quot;pager&quot;, [</span></span>
<span class="line"><span>    &#39;data&#39; =&gt; &#39;list&#39;,</span></span>
<span class="line"><span>    &#39;per_page&#39; =&gt; get_config(&#39;per_page&#39;),</span></span>
<span class="line"><span>    &#39;per_page_name&#39; =&gt; &#39;per_page&#39;,</span></span>
<span class="line"><span>    &#39;url&#39; =&gt; $url,</span></span>
<span class="line"><span>    &#39;reload_data&#39; =&gt; []</span></span>
<span class="line"><span>]);</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><p>vue3</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>\\element\\table::$scope = &#39;#default&#39;;</span></span></code></pre></div><p>表单</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>element\\form::$model = &#39;form&#39;;</span></span>
<span class="line"><span>echo element(&#39;form&#39;,[ </span></span>
<span class="line"><span>    [&#39;type&#39;=&gt;&#39;open&#39;,&#39;model&#39;=&gt;&#39;form&#39;,&#39;label-width&#39;=&gt;&#39;180px&#39;],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;input&#39;,&#39;name&#39;=&gt;&#39;title&#39;,&#39;label&#39;=&gt;&#39;标题&#39;,</span></span>
<span class="line"><span>        &#39;attr&#39;=&gt;[&#39;required&#39;], </span></span>
<span class="line"><span>        &#39;attr_element&#39;=&gt;[&#39;placeholder&#39;=&gt;&#39;演示标题&#39;],</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [&#39;type&#39;=&gt;&#39;close&#39;]</span></span>
<span class="line"><span>]);</span></span></code></pre></div><p>演示element ui表单</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?php view_header(lang(&#39;小程序管理&#39;))?&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;el-form ref=&quot;form&quot;  label-width=&quot;180px&quot; label-position=&#39;top&#39;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;div&gt;单图：&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;?php vue_upload_image(&#39;a&#39;)?&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;mt-2&quot;&gt;</span></span>
<span class="line"><span>    &lt;div&gt;多图：&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;?php vue_upload_images(&#39;b&#39;)?&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;el-button @click=&quot;save&quot; type=&#39;primary&#39;&gt;在console中查看数据&lt;/el-button&gt;</span></span>
<span class="line"><span>&lt;?php </span></span>
<span class="line"><span>element\\form::$model = &#39;form&#39;;</span></span>
<span class="line"><span>echo element(&#39;form&#39;,[ </span></span>
<span class="line"><span>    [&#39;type&#39;=&gt;&#39;open&#39;,&#39;model&#39;=&gt;&#39;form&#39;,],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;input&#39;,&#39;name&#39;=&gt;&#39;title&#39;,&#39;label&#39;=&gt;&#39;标题&#39;,</span></span>
<span class="line"><span>        &#39;attr&#39;=&gt;[&#39;required&#39;], </span></span>
<span class="line"><span>        &#39;attr_element&#39;=&gt;[&#39;placeholder&#39;=&gt;&#39;演示标题&#39;],</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;color&#39;,&#39;name&#39;=&gt;&#39;aa31&#39;,&#39;label&#39;=&gt;&#39;color&#39;, </span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;datetime&#39;,&#39;name&#39;=&gt;&#39;aa32&#39;,&#39;label&#39;=&gt;&#39;datetime&#39;, </span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;time&#39;,&#39;name&#39;=&gt;&#39;aa33&#39;,&#39;label&#39;=&gt;&#39;time&#39;, </span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;tag&#39;,&#39;name&#39;=&gt;&#39;tag&#39;,&#39;label&#39;=&gt;&#39;tag&#39;, </span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;upload&#39;,&#39;name&#39;=&gt;&#39;file_name&#39;,&#39;label&#39;=&gt;&#39;文件上传&#39;,&#39;multiple&#39;,</span></span>
<span class="line"><span>        &#39;mime&#39;=&gt;&#39;pdf,doc,docx,xls,xlsx,ppt,pptx&#39;, </span></span>
<span class="line"><span>        &#39;num&#39;=&gt;20,</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;sku&#39;,&#39;name&#39;=&gt;&#39;is_spec,sku&#39;,&#39;label&#39;=&gt;&#39;sku&#39;, </span></span>
<span class="line"><span>        &#39;attr&#39;=&gt;[&#39;image&#39;,&#39;stock&#39;,&#39;status&#39;],        </span></span>
<span class="line"><span>        &#39;js&#39;=&gt;&quot;app.add_media(&#39;upload_spec&#39;);&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;checkbox&#39;,&#39;name&#39;=&gt;&#39;checkbox&#39;,&#39;label&#39;=&gt;&#39;多选&#39;,</span></span>
<span class="line"><span>        &#39;value&#39;=&gt;[[&#39;label&#39;=&gt;&#39;选项1&#39;,&#39;value&#39;=&gt;1],[&#39;label&#39;=&gt;&#39;选项2&#39;,&#39;value&#39;=&gt;2],], </span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;radio&#39;,&#39;name&#39;=&gt;&#39;radio&#39;,&#39;label&#39;=&gt;&#39;radio&#39;,</span></span>
<span class="line"><span>        &#39;value&#39;=&gt;[[&#39;label&#39;=&gt;&#39;选项1&#39;,&#39;value&#39;=&gt;1],[&#39;label&#39;=&gt;&#39;选项2&#39;,&#39;value&#39;=&gt;2],], </span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;text&#39;,&#39;name&#39;=&gt;&#39;text&#39;,&#39;label&#39;=&gt;&#39;text&#39;, </span></span>
<span class="line"><span>        &#39;attr&#39;=&gt;[&#39;required&#39;,],</span></span>
<span class="line"><span>        &#39;attr_element&#39;=&gt;[&#39;:rows&#39;=&gt;10],</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;editor&#39;,&#39;name&#39;=&gt;&#39;editor&#39;,&#39;label&#39;=&gt;&#39;editor&#39;, </span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;editor&#39;,&#39;name&#39;=&gt;&#39;editor22&#39;,&#39;label&#39;=&gt;&#39;editor&#39;, </span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;attribute&#39;,&#39;name&#39;=&gt;&#39;attribute&#39;,&#39;label&#39;=&gt;&#39;attribute&#39;, </span></span>
<span class="line"><span>        &#39;value&#39;=&gt;[ [&#39;label&#39;=&gt;&#39;选项1&#39;,&#39;value&#39;=&gt;1],[&#39;label&#39;=&gt;&#39;选项2&#39;,&#39;value&#39;=&gt;2],],  </span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;select&#39;,&#39;name&#39;=&gt;&#39;select1&#39;,&#39;label&#39;=&gt;&#39;select单选&#39;, </span></span>
<span class="line"><span>        &#39;value&#39;=&gt;[ [&#39;label&#39;=&gt;&#39;选项1&#39;,&#39;value&#39;=&gt;1],[&#39;label&#39;=&gt;&#39;选项2&#39;,&#39;value&#39;=&gt;2],],  </span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;select&#39;,&#39;name&#39;=&gt;&#39;select2&#39;,&#39;label&#39;=&gt;&#39;select多选&#39;, </span></span>
<span class="line"><span>        &#39;value&#39;=&gt;[ [&#39;label&#39;=&gt;&#39;选项1&#39;,&#39;value&#39;=&gt;1],[&#39;label&#39;=&gt;&#39;选项2&#39;,&#39;value&#39;=&gt;2],], </span></span>
<span class="line"><span>        &#39;attr_element&#39;=&gt;[&#39;multiple&#39;],</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;date&#39;,&#39;name&#39;=&gt;&#39;date1&#39;,&#39;label&#39;=&gt;&#39;时间&#39;, </span></span>
<span class="line"><span>        &#39;attr&#39;=&gt;[&#39;title&#39;=&gt;&#39;&#39;], </span></span>
<span class="line"><span>        &#39;attr_element&#39;=&gt;[&#39;:picker-options&#39;=&gt;&#39;pickerOptions&#39;,&#39;align&#39;=&gt;&quot;center&quot;],</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;autocomplete&#39;,&#39;name&#39;=&gt;&#39;title_auto&#39;,&#39;label&#39;=&gt;&#39;autocomplete&#39;, </span></span>
<span class="line"><span>        &#39;url&#39;=&gt;&#39;/demo_module/site/autocomplete&#39;,  </span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;cascader&#39;,&#39;name&#39;=&gt;&#39;title_casc&#39;,&#39;label&#39;=&gt;&#39;cascader&#39;, </span></span>
<span class="line"><span>        //&#39;:props&#39;=&quot;{ checkStrictly: true }&quot;,</span></span>
<span class="line"><span>        &#39;url&#39;=&gt;&#39;/demo_module/admin/cascader&#39;, </span></span>
<span class="line"><span>        &#39;attr_element&#39;=&gt;[&#39;:props&#39;=&gt;&quot;{value:&#39;id&#39;,label:&#39;label&#39;}&quot;],</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &#39;type&#39;=&gt;&#39;upload&#39;,&#39;name&#39;=&gt;&#39;fiel&#39;,&#39;label&#39;=&gt;&#39;上传&#39;, </span></span>
<span class="line"><span>        &#39;url&#39;=&gt;&#39;/admin/upload&#39;,</span></span>
<span class="line"><span>        &#39;mime&#39;=&gt;&#39;jpg&#39;,</span></span>
<span class="line"><span>        &#39;multiple&#39;, </span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [&#39;type&#39;=&gt;&#39;close&#39;]</span></span>
<span class="line"><span>]);</span></span>
<span class="line"><span>global $vue;</span></span>
<span class="line"><span>$vue-&gt;formData(&quot;editor&quot;,&quot;123465&quot;);</span></span>
<span class="line"><span>$vue-&gt;method(&quot;save()&quot;,&quot;</span></span>
<span class="line"><span>console.log(this.form);</span></span>
<span class="line"><span>&quot;);</span></span>
<span class="line"><span>?&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/el-form&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;?php view_footer()?&gt;</span></span></code></pre></div><p>对应演示控制器</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace modules\\demo_module\\controller;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* \\core\\AppController</span></span>
<span class="line"><span>* \\core\\ApiController  </span></span>
<span class="line"><span>* \\core\\AdminController</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>class SiteController extends \\core\\AppController</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public function actionIndex(){</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>	/**</span></span>
<span class="line"><span>     * autocomplete</span></span>
<span class="line"><span>     * @permission 小程序.管理</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public function actionAutocomplete()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $arr[] = [&#39;id&#39; =&gt; 1, &#39;value&#39; =&gt; &#39;test&#39;];</span></span>
<span class="line"><span>        $arr[] = [&#39;id&#39; =&gt; 2, &#39;value&#39; =&gt; &#39;test22&#39;];</span></span>
<span class="line"><span>        json($arr);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * cascader</span></span>
<span class="line"><span>     * @permission 小程序.管理</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public function actionCascader()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $d = \\element\\form::get_city();</span></span>
<span class="line"><span>        json_success([&#39;data&#39; =&gt; $d]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="分页" tabindex="-1">分页 <a class="header-anchor" href="#分页" aria-label="Permalink to “分页”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>per_page 每页显示条数</span></span>
<span class="line"><span>page 当时前，从1开始</span></span></code></pre></div><p>vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo element(&quot;pager&quot;, [</span></span>
<span class="line"><span>    &#39;data&#39; =&gt; &#39;list&#39;,</span></span>
<span class="line"><span>    &#39;per_page&#39; =&gt; get_config(&#39;per_page&#39;),</span></span>
<span class="line"><span>    &#39;per_page_name&#39; =&gt; &#39;per_page&#39;,</span></span>
<span class="line"><span>    &#39;url&#39; =&gt; $url,</span></span>
<span class="line"><span>    &#39;reload_data&#39; =&gt; []</span></span>
<span class="line"><span>]);</span></span></code></pre></div><h2 id="vue图片上传" tabindex="-1">vue图片上传 <a class="header-anchor" href="#vue图片上传" aria-label="Permalink to “vue图片上传”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    单图：</span></span>
<span class="line"><span>    &lt;?php vue_upload_image(&#39;image&#39;)?&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>多图：</span></span>
<span class="line"><span>    &lt;?php vue_upload_images(&#39;image&#39;)?&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>对应 <code>v-model</code> 为 <code>form.image</code></p>`,148)]))}const u=a(l,[["render",i]]);export{h as __pageData,u as default};
