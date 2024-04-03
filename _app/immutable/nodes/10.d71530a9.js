import{s as D,h as y,i as h,n as T}from"../chunks/scheduler.dd918b38.js";import{S as $,i as H,r as L,u as w,v as M,d as P,t as b,w as A,g as v,s as u,H as I,h as E,A as _,c as f,F as J,k as S,a as d,f as F}from"../chunks/index.94d1baeb.js";import{P as Z,g as j,a as C}from"../chunks/post_layout.3594328b.js";function q(p){let s,n='<a href="#docker-composeyml">docker-compose.yml</a>',t,i,e=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" docker="true"><div class="language-id">docker</div><div class='code-container'><code><div class='line'><span style="color: #EEFFFF">version: </span><span style="color: #C3E88D">"3.8"</span></div><div class='line'><span style="color: #EEFFFF">services:</span></div><div class='line'><span style="color: #EEFFFF">  frontend:</span></div><div class='line'><span style="color: #EEFFFF">    build:</span></div><div class='line'><span style="color: #EEFFFF">      context: </span><span style="color: #C3E88D">"."</span></div><div class='line'><span style="color: #EEFFFF">      dockerfile: Dockerfile</span></div><div class='line'><span style="color: #EEFFFF">    container_name: </span><span style="color: #C3E88D">"you-pt-fe"</span></div><div class='line'><span style="color: #EEFFFF">    working_dir: </span><span style="color: #C3E88D">"/usr/src/app"</span></div><div class='line'><span style="color: #EEFFFF">    ports:</span></div><div class='line'><span style="color: #EEFFFF">      - </span><span style="color: #C3E88D">"3500:3000"</span></div><div class='line'><span style="color: #EEFFFF">    volumes:</span></div><div class='line'><span style="color: #EEFFFF">      - /usr/src/app/node_modules</span></div><div class='line'><span style="color: #89DDFF">      </span><span style="color: #546E7A"># 컨테이너밖: 컨테이너안</span></div><div class='line'><span style="color: #EEFFFF">      - .:/usr/src/app</span></div><div class='line'><span style="color: #EEFFFF">    command: [</span><span style="color: #C3E88D">"npm"</span><span style="color: #EEFFFF">, </span><span style="color: #C3E88D">"run"</span><span style="color: #EEFFFF">, </span><span style="color: #C3E88D">"start"</span><span style="color: #EEFFFF">]</span></div><div class='line'><span style="color: #546E7A"># services에 여러 개를 넣으면, 여러 컨테이너를 한번에 실행할 수 있다.</span></div></code></div></pre>`,a,o,g="version",m,c,k="<li>실행 방법<ul><li>기본 설정 파일인 docker-compose.yml 실행 시.</li> <li>-d: 백그라운드 실행.</li> <li>docker-compose up -d</li> <li>사용자 지정 설정파일 실행 시 -f 옵션</li> <li>docker-compose -f 파일명.yml up -d</li></ul></li>";return{c(){s=v("h2"),s.innerHTML=n,t=u(),i=new I(!1),a=u(),o=v("p"),o.textContent=g,m=u(),c=v("ul"),c.innerHTML=k,this.h()},l(l){s=E(l,"H2",{id:!0,"data-svelte-h":!0}),_(s)!=="svelte-197dsln"&&(s.innerHTML=n),t=f(l),i=J(l,!1),a=f(l),o=E(l,"P",{"data-svelte-h":!0}),_(o)!=="svelte-1o2hnhg"&&(o.textContent=g),m=f(l),c=E(l,"UL",{"data-svelte-h":!0}),_(c)!=="svelte-1aff5h4"&&(c.innerHTML=k),this.h()},h(){S(s,"id","docker-composeyml"),i.a=a},m(l,r){d(l,s,r),d(l,t,r),i.m(e,l,r),d(l,a,r),d(l,o,r),d(l,m,r),d(l,c,r)},p:T,d(l){l&&(F(s),F(t),i.d(),F(a),F(o),F(m),F(c))}}}function U(p){let s,n;const t=[p[0],x];let i={$$slots:{default:[q]},$$scope:{ctx:p}};for(let e=0;e<t.length;e+=1)i=y(i,t[e]);return s=new Z({props:i}),{c(){L(s.$$.fragment)},l(e){w(s.$$.fragment,e)},m(e,a){M(s,e,a),n=!0},p(e,[a]){const o=a&1?j(t,[a&1&&C(e[0]),a&0&&C(x)]):{};a&2&&(o.$$scope={dirty:a,ctx:e}),s.$set(o)},i(e){n||(P(s.$$.fragment,e),n=!0)},o(e){b(s.$$.fragment,e),n=!1},d(e){A(s,e)}}}const x={title:"Docker Compose",image:"",alt:"",created:"2024-04-03T00:00:00.000Z",updated:"2024-04-03T00:00:00.000Z",tags:["docker"],images:[],slug:"/Javascript/TIL/docker/files/docker-compose/+page.md",path:"/Javascript/TIL/docker/files/docker-compose",toc:[{depth:2,title:"docker-compose.yml",slug:"docker-composeyml"}]};function z(p,s,n){return p.$$set=t=>{n(0,s=y(y({},s),h(t)))},s=h(s),[s]}class N extends ${constructor(s){super(),H(this,s,z,U,D,{})}}export{N as component};
