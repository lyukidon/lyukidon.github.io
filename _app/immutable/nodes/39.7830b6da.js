import{s as G,h as I,i as U,n as K}from"../chunks/scheduler.dd918b38.js";import{S as V,i as W,r as X,u as Y,v as ss,d as as,t as ls,w as ns,g as c,s as u,H as b,h as F,A as g,c as v,j as L,F as M,f as i,a as h,y as t}from"../chunks/index.94d1baeb.js";import{P as es,g as os,a as Z}from"../chunks/post_layout.3594328b.js";function ts(m){let s,r="service.ts 파일",p,l,a,n,f="typeorm의 <code>DataSource</code> module을 import",k,A,Q=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" ts="true"><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #89DDFF">import</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">DataSource</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">from</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">typeorm</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></div></code></div></pre>`,$,y,E,j="constructor에 추가",S,C,z=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" ts="true"><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #82AAFF">constructor</span><span style="color: #EEFFFF">(</span></div><div class='line'><span style="color: #EEFFFF">  private readonly dataSource: DataSource</span></div><div class='line'><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">&#123;&#125;</span></div></code></div></pre>`,H,d,_,J="transaction 작성법",P,x,B=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" ts="true"><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #EEFFFF">async </span><span style="color: #82AAFF">createMany</span><span style="color: #EEFFFF">(users: User[]) </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #F07178">  </span><span style="color: #C792EA">const</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">queryRunner</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF">this.</span><span style="color: #EEFFFF">dataSource</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">createQueryRunner</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></div><div class='line'></div><div class='line'><span style="color: #F07178">  </span><span style="color: #89DDFF">await</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">queryRunner</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">connect</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span><span style="color: #F07178"> </span><span style="color: #546E7A">// 연결하기</span></div><div class='line'><span style="color: #F07178">  </span><span style="color: #89DDFF">await</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">queryRunner</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">startTransaction</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #F07178">  </span><span style="color: #89DDFF">try</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #89DDFF">await</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">queryRunner</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">manager</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">save</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">users</span><span style="color: #F07178">[</span><span style="color: #F78C6C">0</span><span style="color: #F07178">])</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #89DDFF">await</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">queryRunner</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">manager</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">save</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">users</span><span style="color: #F07178">[</span><span style="color: #F78C6C">1</span><span style="color: #F07178">])</span><span style="color: #89DDFF">;</span></div><div class='line'></div><div class='line'><span style="color: #F07178">    </span><span style="color: #89DDFF">await</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">queryRunner</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">commitTransaction</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #F07178">  </span><span style="color: #89DDFF">&#125;</span><span style="color: #F07178"> </span><span style="color: #89DDFF">catch</span><span style="color: #F07178"> (</span><span style="color: #EEFFFF">err</span><span style="color: #F07178">) </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #89DDFF">    </span><span style="color: #546E7A">// 에러 생성 시 복구</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #89DDFF">await</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">queryRunner</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">rollbackTransaction</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #F07178">  </span><span style="color: #89DDFF">&#125;</span><span style="color: #F07178"> </span><span style="color: #89DDFF">finally</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #89DDFF">    </span><span style="color: #546E7A">// queryRunner가 완료되면 연결 끊기</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #89DDFF">await</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">queryRunner</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">release</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #F07178">  </span><span style="color: #89DDFF">&#125;</span></div><div class='line'><span style="color: #89DDFF">&#125;</span></div></code></div></pre>`,T,D,O="<li><code>connect()</code> : 새로운 queryRunner를 사용해 데이터베이스에 직접 연결</li> <li><code>startTransaction()</code> : 트랜젝션 시작</li> <li><code>commitTransaction()</code> : 트랜젝션이 완료되면 커밋</li> <li><code>rollbackTransaction()</code> : 트랜젝션 중 오류 발생 시, 복구</li> <li><code>release()</code> : queryRunner가 완료되면, 연결 끊기</li>";return{c(){s=c("p"),s.textContent=r,p=u(),l=c("ol"),a=c("li"),n=c("p"),n.innerHTML=f,k=u(),A=new b(!1),$=u(),y=c("li"),E=c("p"),E.textContent=j,S=u(),C=new b(!1),H=u(),d=c("li"),_=c("p"),_.textContent=J,P=u(),x=new b(!1),T=u(),D=c("ul"),D.innerHTML=O,this.h()},l(e){s=F(e,"P",{"data-svelte-h":!0}),g(s)!=="svelte-tqj1eu"&&(s.textContent=r),p=v(e),l=F(e,"OL",{});var o=L(l);a=F(o,"LI",{});var w=L(a);n=F(w,"P",{"data-svelte-h":!0}),g(n)!=="svelte-5yeek7"&&(n.innerHTML=f),k=v(w),A=M(w,!1),w.forEach(i),$=v(o),y=F(o,"LI",{});var q=L(y);E=F(q,"P",{"data-svelte-h":!0}),g(E)!=="svelte-c13iog"&&(E.textContent=j),S=v(q),C=M(q,!1),q.forEach(i),H=v(o),d=F(o,"LI",{});var R=L(d);_=F(R,"P",{"data-svelte-h":!0}),g(_)!=="svelte-1okapth"&&(_.textContent=J),P=v(R),x=M(R,!1),R.forEach(i),o.forEach(i),T=v(e),D=F(e,"UL",{"data-svelte-h":!0}),g(D)!=="svelte-qhim64"&&(D.innerHTML=O),this.h()},h(){A.a=null,C.a=null,x.a=null},m(e,o){h(e,s,o),h(e,p,o),h(e,l,o),t(l,a),t(a,n),t(a,k),A.m(Q,a),t(l,$),t(l,y),t(y,E),t(y,S),C.m(z,y),t(l,H),t(l,d),t(d,_),t(d,P),x.m(B,d),h(e,T,o),h(e,D,o)},p:K,d(e){e&&(i(s),i(p),i(l),i(T),i(D))}}}function ps(m){let s,r;const p=[m[0],N];let l={$$slots:{default:[ts]},$$scope:{ctx:m}};for(let a=0;a<p.length;a+=1)l=I(l,p[a]);return s=new es({props:l}),{c(){X(s.$$.fragment)},l(a){Y(s.$$.fragment,a)},m(a,n){ss(s,a,n),r=!0},p(a,[n]){const f=n&1?os(p,[n&1&&Z(a[0]),n&0&&Z(N)]):{};n&2&&(f.$$scope={dirty:n,ctx:a}),s.$set(f)},i(a){r||(as(s.$$.fragment,a),r=!0)},o(a){ls(s.$$.fragment,a),r=!1},d(a){ns(s,a)}}}const N={title:"TypeORM + NestJS Transaction",image:"",alt:"",created:"2024-03-20T00:00:00.000Z",updated:"2024-03-20T00:00:00.000Z",tags:["typeorm"],images:[],slug:"/Javascript/TIL/typeorm/transaction/+page.md",path:"/Javascript/TIL/typeorm/transaction",toc:!1};function rs(m,s,r){return m.$$set=p=>{r(0,s=I(I({},s),U(p)))},s=U(s),[s]}class ys extends V{constructor(s){super(),W(this,s,rs,ps,G,{})}}export{ys as component};
