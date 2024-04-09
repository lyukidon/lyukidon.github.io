import{s as S,h as v,i as m,n as $}from"../chunks/scheduler.dd918b38.js";import{S as j,i as A,r as T,u as k,v as w,d as H,t as L,w as P,H as _,s as E,g as f,F as g,c as d,h as C,A as h,a as y,f as D}from"../chunks/index.94d1baeb.js";import{P as B,g as b,a as x}from"../chunks/post_layout.3594328b.js";function z(c){let s,e=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" ts="true"><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #89DDFF">import</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">Module</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">from</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">@nestjs/common</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #89DDFF">import</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">UserService</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">from</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">./user.service</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #89DDFF">import</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">UserController</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">from</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">./user.controller</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></div><div class='line'></div><div class='line'><span style="color: #89DDFF">@</span><span style="color: #82AAFF">Module</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #F07178">controllers</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> [UserController]</span><span style="color: #89DDFF">,</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #F07178">providers</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> [UserService]</span></div><div class='line'><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF">)</span></div><div class='line'><span style="color: #89DDFF">export</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">class</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">UserModule</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;&#125;</span></div></code></div></pre>`,n,F,l="위의 코드는 아래와 같다.",o,p,M=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" ts="true"><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #89DDFF">import</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">Module</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">from</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">@nestjs/common</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #89DDFF">import</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">UserService</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">from</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">./user.service</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #89DDFF">import</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">UserController</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">from</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">./user.controller</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></div><div class='line'></div><div class='line'><span style="color: #89DDFF">@</span><span style="color: #82AAFF">Module</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #F07178">controllers</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> [UserController]</span><span style="color: #89DDFF">,</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #F07178">providers</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> [</span></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #EEFFFF">      </span><span style="color: #F07178">provide</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> UserService</span><span style="color: #89DDFF">,</span></div><div class='line'><span style="color: #EEFFFF">      </span><span style="color: #F07178">useClass</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> UserService</span></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&#125;,</span></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #EEFFFF">      </span><span style="color: #F07178">provide</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> MockService</span><span style="color: #89DDFF">,</span></div><div class='line'><span style="color: #EEFFFF">      </span><span style="color: #F07178">useValue</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> MockService</span></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">&#125;</span></div><div class='line'><span style="color: #EEFFFF">  ]</span></div><div class='line'><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF">)</span></div><div class='line'><span style="color: #89DDFF">export</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">class</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">UserModule</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;&#125;</span></div></code></div></pre>`,i,t,u="<li>useClass : 실제 모듈</li> <li>useValue : 가짜 모듈</li>";return{c(){s=new _(!1),n=E(),F=f("p"),F.textContent=l,o=E(),p=new _(!1),i=E(),t=f("ul"),t.innerHTML=u,this.h()},l(a){s=g(a,!1),n=d(a),F=C(a,"P",{"data-svelte-h":!0}),h(F)!=="svelte-1jt90sz"&&(F.textContent=l),o=d(a),p=g(a,!1),i=d(a),t=C(a,"UL",{"data-svelte-h":!0}),h(t)!=="svelte-u9txyz"&&(t.innerHTML=u),this.h()},h(){s.a=n,p.a=i},m(a,r){s.m(e,a,r),y(a,n,r),y(a,F,r),y(a,o,r),p.m(M,a,r),y(a,i,r),y(a,t,r)},p:$,d(a){a&&(s.d(),D(n),D(F),D(o),p.d(),D(i),D(t))}}}function I(c){let s,e;const n=[c[0],U];let F={$$slots:{default:[z]},$$scope:{ctx:c}};for(let l=0;l<n.length;l+=1)F=v(F,n[l]);return s=new B({props:F}),{c(){T(s.$$.fragment)},l(l){k(s.$$.fragment,l)},m(l,o){w(s,l,o),e=!0},p(l,[o]){const p=o&1?b(n,[o&1&&x(l[0]),o&0&&x(U)]):{};o&2&&(p.$$scope={dirty:o,ctx:l}),s.$set(p)},i(l){e||(H(s.$$.fragment,l),e=!0)},o(l){L(s.$$.fragment,l),e=!1},d(l){P(s,l)}}}const U={title:"Providers",image:"",alt:"",created:"2024-04-08T00:00:00.000Z",updated:"2024-04-08T00:00:00.000Z",tags:["nestjs"],images:[],slug:"/Javascript/TIL/nestjs/providers/+page.md",path:"/Javascript/TIL/nestjs/providers",toc:!1};function J(c,s,e){return c.$$set=n=>{e(0,s=v(v({},s),m(n)))},s=m(s),[s]}class G extends j{constructor(s){super(),A(this,s,J,I,S,{})}}export{G as component};
