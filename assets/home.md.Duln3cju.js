import{_ as a,c as n,o as p,ah as e}from"./chunks/framework.C2PqkmK9.js";const g=JSON.parse('{"title":"入门","description":"","frontmatter":{},"headers":[],"relativePath":"home.md","filePath":"home.md"}'),i={name:"home.md"};function l(t,s,c,d,o,r){return p(),n("div",null,s[0]||(s[0]=[e(`<h1 id="入门" tabindex="-1">入门 <a class="header-anchor" href="#入门" aria-label="Permalink to “入门”">​</a></h1><h2 id="安装包" tabindex="-1">安装包 <a class="header-anchor" href="#安装包" aria-label="Permalink to “安装包”">​</a></h2><p>使用 composer 安装官方模块</p><p>以<code>admin</code>为例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>composer require nexophp/admin --ignore-platform-reqs</span></span></code></pre></div><p>替换<code>admin</code>模块中的功能，可以在<code>app</code>目录下创建<code>controller</code> <code>view</code>来直接替换功能。</p><p>admin所在目录为 <code>vendor/nexophp/admin</code></p><h2 id="开发项目" tabindex="-1">开发项目 <a class="header-anchor" href="#开发项目" aria-label="Permalink to “开发项目”">​</a></h2><p>如果是仅限公司内部使用，不打算开源的，直接在 <code>app</code> 下创建项目名称</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>app</span></span>
<span class="line"><span>    ├── your_project_name 项目名称</span></span>
<span class="line"><span>        ├── controller  控制器</span></span>
<span class="line"><span>        ├── data        数据处理</span></span>
<span class="line"><span>        ├── lib         类库</span></span>
<span class="line"><span>        ├── view        视图</span></span>
<span class="line"><span>        ├── ...</span></span></code></pre></div><p>以控制器 <code>app\\your_project_name\\controller\\SiteController</code> 为例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>namespace app\\your_project_name\\controller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class SiteController extends \\core\\AdminController</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>    * 访问 /your_project_name</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>    public function actionIndex()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        //这里什么都不写会自动渲染 view/site/index.php</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>    * 访问 /your_project_name/site/demo-data</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>    public function actionDemoData()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        //这里什么都不写会自动渲染 view/site/demo-data.php</span></span>
<span class="line"><span>        //方法名采用驼峰命名法，url地址以-连接</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>内置控制器</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>core\\AppController    基础控制器</span></span>
<span class="line"><span>core\\ApiController    接口</span></span>
<span class="line"><span>core\\AdminController  管理员</span></span></code></pre></div><h3 id="admincontroller" tabindex="-1">AdminController <a class="header-anchor" href="#admincontroller" aria-label="Permalink to “AdminController”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>namespace modules\\your_project_name\\controller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class DemoController extends \\core\\AdminController</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 商品列表页面</span></span>
<span class="line"><span>     * @permission 产品.管理 产品.查看</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public function actionIndex() {}</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 商品分页列表</span></span>
<span class="line"><span>     * @permission 产品.管理 产品.编辑</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>     public function actionUpdate() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 商品分页列表</span></span>
<span class="line"><span>     * @permission 产品.管理 产品.查看</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public function actionTree()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $where = [&#39;ORDER&#39; =&gt; [&#39;sort&#39; =&gt; &#39;ASC&#39;, &#39;id&#39; =&gt; &#39;ASC&#39;]];</span></span>
<span class="line"><span>        $id = $this-&gt;post_data[&#39;id&#39;] ?? 0;</span></span>
<span class="line"><span>        if ($id) {</span></span>
<span class="line"><span>            $where[&#39;id[!]&#39;] = $id;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        $list = db_get(&#39;product_type&#39;, [&#39;id&#39;, &#39;title&#39;, &#39;pid&#39;], $where);</span></span>
<span class="line"><span>        if (!$list) {</span></span>
<span class="line"><span>            json_success([&#39;data&#39; =&gt; &#39;&#39;]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        $tree = array_to_tree($list, &#39;id&#39;, &#39;pid&#39;, &#39;children&#39;);</span></span>
<span class="line"><span>        $tree = array_values($tree);</span></span>
<span class="line"><span>        json_success([&#39;data&#39; =&gt; $tree]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="apicontroller" tabindex="-1">ApiController <a class="header-anchor" href="#apicontroller" aria-label="Permalink to “ApiController”">​</a></h3><p>使用接口不需要权限</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>namespace app\\your_project_name\\controller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ApiController extends \\core\\ApiController</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    protected $need_login = false;</span></span>
<span class="line"><span>    public function actionIndex()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        json_success([&#39;msg&#39;=&gt;lang(&#39;访问成功&#39;)]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="开源包" tabindex="-1">开源包 <a class="header-anchor" href="#开源包" aria-label="Permalink to “开源包”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>modules</span></span>
<span class="line"><span>    ├── your_project_name 项目名称</span></span>
<span class="line"><span>        ├── controller  控制器</span></span>
<span class="line"><span>        ├── data        数据处理</span></span>
<span class="line"><span>        ├── lib         类库</span></span>
<span class="line"><span>        ├── view        视图</span></span>
<span class="line"><span>        ├── ...</span></span></code></pre></div><h2 id="数据库" tabindex="-1">数据库 <a class="header-anchor" href="#数据库" aria-label="Permalink to “数据库”">​</a></h2><p>基于 <a href="https://medoo.in/api/where" target="_blank" rel="noreferrer">https://medoo.in/api/where</a></p><p>分页</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>db_pager(&#39;table_name&#39;,&#39;*&#39;,[</span></span>
<span class="line"><span>    &#39;ORDER&#39;=&gt;[&#39;id&#39;=&gt;&#39;DESC&#39;], </span></span>
<span class="line"><span>]);</span></span></code></pre></div><p>查寻多条记录</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>db_get(&#39;table_name&#39;,&#39;*&#39;,[</span></span>
<span class="line"><span>    &#39;ORDER&#39;=&gt;[&#39;id&#39;=&gt;&#39;DESC&#39;],</span></span>
<span class="line"><span>    &#39;LIMIT&#39;=&gt;10,</span></span>
<span class="line"><span>]);</span></span></code></pre></div><p>写入</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>db_insert(&#39;table_name&#39;,$data = [</span></span>
<span class="line"><span>    &#39;title&#39;=&gt;&#39;测试&#39;,</span></span>
<span class="line"><span>    &#39;content&#39;=&gt;&#39;测试内容&#39;,</span></span>
<span class="line"><span>]);</span></span></code></pre></div><p>更新</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>db_update(&#39;table_name&#39;,$data = [</span></span>
<span class="line"><span>    &#39;title&#39;=&gt;&#39;测试2&#39;,</span></span>
<span class="line"><span>    &#39;content&#39;=&gt;&#39;测试内容2&#39;,</span></span>
<span class="line"><span>],$where = [</span></span>
<span class="line"><span>    &#39;id&#39;=&gt;1,</span></span>
<span class="line"><span>]);</span></span></code></pre></div><p>删除</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>db_delete(&#39;table_name&#39;,$where = [</span></span>
<span class="line"><span>    &#39;id&#39;=&gt;1,</span></span>
<span class="line"><span>]);</span></span></code></pre></div><p>事务</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>db_action(function()use($data){</span></span>
<span class="line"><span>    db_insert(&#39;table_name&#39;,$data);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>id 锁</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>db_for_update($table,$id)</span></span></code></pre></div><h2 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-label="Permalink to “缓存”">​</a></h2><p>依赖 <code>redis</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cache(&#39;key&#39;,&#39;value&#39;,$expire = 3600);</span></span>
<span class="line"><span>cache(&#39;key&#39;);</span></span>
<span class="line"><span>cache_delete(&#39;key&#39;);</span></span></code></pre></div><h2 id="model" tabindex="-1">Model <a class="header-anchor" href="#model" aria-label="Permalink to “Model”">​</a></h2><p>数据库字段不要使用mysql关键字，否则会有问题。 注意： <code>GROUP</code> <code>ORDER</code> <code>DESC</code> <code>ASC</code> 需大写</p><p>model中查寻请使用 <code>find()</code> <code>pager()</code> 方法</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$where = [];</span></span>
<span class="line"><span>find($where,1)  查找一条记录</span></span>
<span class="line"><span>find($where)  查找多条记录</span></span>
<span class="line"><span>pager($where)  分页</span></span></code></pre></div><p>返回的数据支持对象或数组形式访问，默认不会加载关联数据，具体查看下面的关联部分。</p><p>控制器中使用模型</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>namespace app\\your_project_name\\controller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class SiteController extends \\core\\AdminController</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    protected $model = &#39;\\modules\\your_project_name\\model\\DemoModel&#39;;</span></span>
<span class="line"><span>    public function actionIndex()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $list = $this-&gt;model-&gt;find();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>多个model</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>namespace app\\your_project_name\\controller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class SiteController extends \\core\\AdminController</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    protected $model = [</span></span>
<span class="line"><span>        &#39;demo&#39; =&gt; &#39;\\modules\\your_project_name\\model\\DemoModel&#39;,</span></span>
<span class="line"><span>    ];</span></span>
<span class="line"><span>    public function actionIndex()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $list = $this-&gt;model-&gt;demo-&gt;find();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>查寻</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//多条记录</span></span>
<span class="line"><span>find([&#39;title[~]&#39;=&gt;&#39;test&#39;]); </span></span>
<span class="line"><span>//返回一条记录 $id是int类型</span></span>
<span class="line"><span>find($id) </span></span>
<span class="line"><span>//返回一条记录</span></span>
<span class="line"><span>find([&#39;name&#39;=&gt;&#39;t&#39;],$limit=1)  </span></span>
<span class="line"><span>//分页</span></span>
<span class="line"><span>pager($where = []) </span></span>
<span class="line"><span>//sum </span></span>
<span class="line"><span>sum($filed,$where = [])</span></span>
<span class="line"><span>//count </span></span>
<span class="line"><span>count($where = []) </span></span>
<span class="line"><span>//删除</span></span>
<span class="line"><span>del($where = [])</span></span>
<span class="line"><span>//max</span></span>
<span class="line"><span>max($filed,$where = [])</span></span>
<span class="line"><span>//min </span></span>
<span class="line"><span>$model-&gt;min($filed,$where = [])</span></span></code></pre></div><p><code>$where</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&#39;user_name[REGEXP]&#39; =&gt; &#39;[a-z0-9]*&#39;</span></span>
<span class="line"><span>&#39;user_name[FIND_IN_SET]&#39;=&gt;(string)10</span></span>
<span class="line"><span>&#39;user_name[RAW]&#39; =&gt; &#39;[a-z0-9]*&#39;</span></span>
<span class="line"><span>&quot;age[+]&quot; =&gt; 1</span></span>
<span class="line"><span>//like查寻</span></span>
<span class="line"><span>&#39;product_num[~]&#39; =&gt; 379, </span></span>
<span class="line"><span>//等于查寻</span></span>
<span class="line"><span>&#39;product_num&#39; =&gt; 3669, </span></span>
<span class="line"><span>//大于查寻</span></span>
<span class="line"><span>&#39;id[&gt;]&#39; =&gt; 1,</span></span>
<span class="line"><span>&#39;id[&gt;=]&#39; =&gt; 1,</span></span>
<span class="line"><span>&#39;id[&lt;]&#39; =&gt; 1,</span></span>
<span class="line"><span>&#39;id[&lt;=]&#39; =&gt; 1,</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[</span></span>
<span class="line"><span>    &#39;ORDER&#39;=&gt;[&#39;id&#39;=&gt;&#39;DESC&#39;],</span></span>
<span class="line"><span>    &#39;GROUP&#39;=&gt;&#39;title&#39;</span></span>
<span class="line"><span>    //多字段</span></span>
<span class="line"><span>    &#39;GROUP&#39;=&gt;[&#39;status&#39;,&#39;title&#39;]</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>OR</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$where = []; </span></span>
<span class="line"><span>$where[&#39;OR&#39;] = [</span></span>
<span class="line"><span>	&#39;product_num[~]&#39;=&gt;379,</span></span>
<span class="line"><span>	&#39;product_num[&gt;]&#39;=&gt;366,</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>$where[&#39;LIMIT&#39;] = 10;</span></span>
<span class="line"><span>$where[&#39;ORDER&#39;] = [&#39;id&#39;=&gt;&#39;DESC&#39;];</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//(...  AND ...) OR (...  AND ...)</span></span>
<span class="line"><span>&quot;OR #1&quot; =&gt; [</span></span>
<span class="line"><span>    &quot;AND #2&quot; =&gt; $where,</span></span>
<span class="line"><span>    &quot;AND #3&quot; =&gt; $or_where</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>//(... OR  ...) AND (...  OR ...)</span></span>
<span class="line"><span>&quot;AND #1&quot; =&gt; [</span></span>
<span class="line"><span>    &quot;OR #2&quot; =&gt; $where,</span></span>
<span class="line"><span>    &quot;OR #3&quot; =&gt; $or_where</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>];</span></span></code></pre></div><p>写入</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>insert($data)</span></span>
<span class="line"><span>update($data,$where = [])</span></span></code></pre></div><p>验证</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>protected $field = [</span></span>
<span class="line"><span>    &#39;name&#39;  =&gt; &#39;姓名&#39;,</span></span>
<span class="line"><span>    &#39;phone&#39; =&gt; &#39;手机号&#39;,</span></span>
<span class="line"><span>    &#39;email&#39; =&gt; &#39;邮件&#39;,</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>protected $validate = [</span></span>
<span class="line"><span>    &#39;required&#39;=&gt;[</span></span>
<span class="line"><span>        &#39;name&#39;,&#39;phone&#39;,&#39;email&#39;,</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &#39;email&#39;=&gt;[</span></span>
<span class="line"><span>        [&#39;email&#39;],</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &#39;phonech&#39;=&gt;[</span></span>
<span class="line"><span>        [&#39;phone&#39;]</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &#39;unique&#39;=&gt;[</span></span>
<span class="line"><span>        [&#39;phone&#39;,],</span></span>
<span class="line"><span>        [&#39;email&#39;,], </span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>]; </span></span>
<span class="line"><span></span></span>
<span class="line"><span>protected $unique_message = [</span></span>
<span class="line"><span>    &#39;手机号已存在&#39;,</span></span>
<span class="line"><span>    &#39;邮件已存在&#39;,</span></span>
<span class="line"><span>];</span></span></code></pre></div><p>关联</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>protected $has_one = [</span></span>
<span class="line"><span>    &#39;type&#39; =&gt; [ProductTypeModel::class, &#39;type_id&#39;],</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>protected $has_many = [</span></span>
<span class="line"><span>    &#39;product_info&#39; =&gt; [ProductInfoModel::class, &#39;product_id&#39;, &#39;id&#39;, [&#39;LIMIT&#39; =&gt; 2]],</span></span>
<span class="line"><span>    &#39;product_attr&#39; =&gt; [ProductAttrModel::class, &#39;product_id&#39;, &#39;product_id&#39;, [&#39;LIMIT&#39; =&gt; 2]],</span></span>
<span class="line"><span>];</span></span></code></pre></div><p>关联查寻</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>relation([&#39;type&#39;, &#39;product_info&#39;, &#39;product_attr&#39;])-&gt;find(1); </span></span>
<span class="line"><span>relation([&#39;type&#39;, &#39;product_info&#39;, &#39;product_attr&#39;])-&gt;pager($where);</span></span></code></pre></div><p>设置字段值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>public function afterFind(&amp;$data)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    parent::afterFind($data);</span></span>
<span class="line"><span>    //$data[&#39;new_data&#39;] = &#39;新的值&#39;;</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>public function getAttrDemoTest()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    return &#39;ss&#39;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public function getAttrTitle()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    return $this-&gt;data[&#39;title&#39;] . &#39; - &#39; . &#39;Default Title&#39;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>可直接用 <code>$model-&gt;title</code> 或 <code>$model[&#39;title&#39;]</code></p><p>model 事件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/**</span></span>
<span class="line"><span>* 查寻前</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>public function beforeFind(&amp;$where){</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* 查寻后</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>public function afterFind(&amp;$data){</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* 写入数据前</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>public function beforeInsert(&amp;$data){</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* 写入数据后</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>public function afterInsert($id){</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* 更新数据前</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>public function beforeUpdate(&amp;$data,$where){</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* 更新数据后</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>public function afterUpdate($row_count,$data,$where){</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* 删除前</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>public function beforeDelete(&amp;$where)</span></span>
<span class="line"><span>{        </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* 删除后</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>public function afterDelete($where)</span></span>
<span class="line"><span>{        </span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="生成订单号" tabindex="-1">生成订单号 <a class="header-anchor" href="#生成订单号" aria-label="Permalink to “生成订单号”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>create_order_num();</span></span></code></pre></div><h2 id="设置首页路由" tabindex="-1">设置首页路由 <a class="header-anchor" href="#设置首页路由" aria-label="Permalink to “设置首页路由”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>set_config(&#39;home_class&#39;,&#39;app\\site\\controller\\siteController&#39;);</span></span></code></pre></div><h2 id="官方源码" tabindex="-1">官方源码 <a class="header-anchor" href="#官方源码" aria-label="Permalink to “官方源码”">​</a></h2><p>直接查看 <code>vendor/nexophp</code> 目录下的代码，但不要修改 vendor下的代码。</p><h2 id="phpdoc-生成文档" tabindex="-1">phpdoc 生成文档 <a class="header-anchor" href="#phpdoc-生成文档" aria-label="Permalink to “phpdoc 生成文档”">​</a></h2><p><a href="https://phpdoc.org/" target="_blank" rel="noreferrer">https://phpdoc.org/</a></p><p>生成文档</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>php phpDocumentor.phar run -d  /绝对路径/vendor/nexophp -t  ./phpdoc</span></span></code></pre></div><p>将在当前目录下生成 <code>phpdoc</code> 目录，打开 <code>phpdoc/index.html</code> 即可查看。</p><blockquote><p>内置大量函数，建议使用phpdoc查看。</p></blockquote>`,82)]))}const k=a(i,[["render",l]]);export{g as __pageData,k as default};
