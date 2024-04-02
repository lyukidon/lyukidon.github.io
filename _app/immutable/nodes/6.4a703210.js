import{s as I,h as x,i as T,n as b}from"../chunks/scheduler.dd918b38.js";import{S as A,i as M,r as j,u as J,v as R,d as S,t as Z,w as q,g as f,s as v,H as $,h as g,A as C,c as E,F as P,k as K,a as r,f as c}from"../chunks/index.94d1baeb.js";import{P as Q,g as U,a as H}from"../chunks/post_layout.3594328b.js";function X(y){let s,p='<a href="#머터리얼-테일윈드의-컴포넌트-사용-시-에러-발생">머터리얼 테일윈드의 컴포넌트 사용 시 에러 발생</a>',n,F,t=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" ts="true"><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #89DDFF">import</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span><span style="color: #EEFFFF">Button</span><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">from</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">@material-tailwind/react</span><span style="color: #89DDFF">'</span></div><div class='line'></div><div class='line'><span style="color: #89DDFF">export</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">default</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">()</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #F07178">  </span><span style="color: #89DDFF">return</span><span style="color: #F07178"> &lt;</span><span style="color: #FFCB6B">Button</span><span style="color: #F07178">&gt;</span><span style="color: #EEFFFF">버튼</span><span style="color: #89DDFF">&lt;/</span><span style="color: #EEFFFF">Button</span><span style="color: #89DDFF">&gt;</span></div><div class='line'><span style="color: #89DDFF">&#125;</span></div></code></div></pre>`,l,o,h="사용 시 필수 props를 작성하지 않았다는 오류가 발생한다.",m,i,B="vs code의 QUICK FIX 기능을 사용하여 해결해보면",_,D,L=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" ts="true"><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #89DDFF">import</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span><span style="color: #EEFFFF">Button</span><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">from</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">@material-tailwind/react</span><span style="color: #89DDFF">'</span></div><div class='line'></div><div class='line'><span style="color: #89DDFF">export</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">default</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">()</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #F07178">  </span><span style="color: #89DDFF">return</span><span style="color: #F07178"> &lt;</span><span style="color: #FFCB6B">Button</span><span style="color: #F07178"> </span></div><div class='line'><span style="color: #F07178">            </span><span style="color: #FFCB6B">placeholder</span><span style="color: #F07178">=</span><span style="color: #89DDFF">&#123;</span><span style="color: #F07178">undefined</span><span style="color: #89DDFF">&#125;</span></div><div class='line'><span style="color: #F07178">            </span><span style="color: #FFCB6B">onPointerEnterCapture</span><span style="color: #F07178">=</span><span style="color: #89DDFF">&#123;</span><span style="color: #F07178">undefined</span><span style="color: #89DDFF">&#125;</span></div><div class='line'><span style="color: #F07178">            </span><span style="color: #FFCB6B">onPointerLeaveCapture</span><span style="color: #F07178">=</span><span style="color: #89DDFF">&#123;</span><span style="color: #F07178">undefined</span><span style="color: #89DDFF">&#125;</span></div><div class='line'><span style="color: #F07178">          &gt;</span></div><div class='line'><span style="color: #F07178">            </span><span style="color: #EEFFFF">버튼</span></div><div class='line'><span style="color: #F07178">          </span><span style="color: #89DDFF">&lt;/</span><span style="color: #EEFFFF">Button</span><span style="color: #89DDFF">&gt;</span></div><div class='line'><span style="color: #89DDFF">&#125;</span></div></code></div></pre>`,u,d,w="위와 같이 변경이 되면서 TypeError가 발생하지는 않는데, 왜 이렇게 만들어놓았는지는 잘 모르겠다.";return{c(){s=f("h2"),s.innerHTML=p,n=v(),F=new $(!1),l=v(),o=f("p"),o.textContent=h,m=v(),i=f("p"),i.textContent=B,_=v(),D=new $(!1),u=v(),d=f("p"),d.textContent=w,this.h()},l(a){s=g(a,"H2",{id:!0,"data-svelte-h":!0}),C(s)!=="svelte-oge4t4"&&(s.innerHTML=p),n=E(a),F=P(a,!1),l=E(a),o=g(a,"P",{"data-svelte-h":!0}),C(o)!=="svelte-16ulj9a"&&(o.textContent=h),m=E(a),i=g(a,"P",{"data-svelte-h":!0}),C(i)!=="svelte-1armueo"&&(i.textContent=B),_=E(a),D=P(a,!1),u=E(a),d=g(a,"P",{"data-svelte-h":!0}),C(d)!=="svelte-l9tp8p"&&(d.textContent=w),this.h()},h(){K(s,"id","머터리얼-테일윈드의-컴포넌트-사용-시-에러-발생"),F.a=l,D.a=u},m(a,e){r(a,s,e),r(a,n,e),F.m(t,a,e),r(a,l,e),r(a,o,e),r(a,m,e),r(a,i,e),r(a,_,e),D.m(L,a,e),r(a,u,e),r(a,d,e)},p:b,d(a){a&&(c(s),c(n),F.d(),c(l),c(o),c(m),c(i),c(_),D.d(),c(u),c(d))}}}function z(y){let s,p;const n=[y[0],k];let F={$$slots:{default:[X]},$$scope:{ctx:y}};for(let t=0;t<n.length;t+=1)F=x(F,n[t]);return s=new Q({props:F}),{c(){j(s.$$.fragment)},l(t){J(s.$$.fragment,t)},m(t,l){R(s,t,l),p=!0},p(t,[l]){const o=l&1?U(n,[l&1&&H(t[0]),l&0&&H(k)]):{};l&2&&(o.$$scope={dirty:l,ctx:t}),s.$set(o)},i(t){p||(S(s.$$.fragment,t),p=!0)},o(t){Z(s.$$.fragment,t),p=!1},d(t){q(s,t)}}}const k={title:"Material Tailwind Error",image:"",alt:"",created:"2024-04-02T00:00:00.000Z",updated:"2024-04-02T00:00:00.000Z",tags:["react","typescript","tailwind","error"],images:[],slug:"/Javascript/TIL/React/tailwind/typescript_error/+page.md",path:"/Javascript/TIL/React/tailwind/typescript_error",toc:[{depth:2,title:"머터리얼 테일윈드의 컴포넌트 사용 시 에러 발생",slug:"머터리얼-테일윈드의-컴포넌트-사용-시-에러-발생"}]};function G(y,s,p){return y.$$set=n=>{p(0,s=x(x({},s),T(n)))},s=T(s),[s]}class W extends A{constructor(s){super(),M(this,s,G,z,I,{})}}export{W as component};
