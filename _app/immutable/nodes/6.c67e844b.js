import{s as Ae,h as pe,i as be,n as Be}from"../chunks/scheduler.4680106d.js";import{S as Oe,i as qe,r as Ce,u as Le,v as He,d as Te,t as Me,w as Pe,g as a,s as i,H as ce,h as n,A as d,c,j,f as r,F as re,a as m,y as e}from"../chunks/index.4ac987bf.js";import{P as Se,g as ze,a as je}from"../chunks/post_layout.31e93455.js";import{I as Je}from"../chunks/footer.ec16b2ff.js";function Ne(k){let l,_="After deploying, page could not be loaded css files. Like that.",y,f,s,F,v,de="I could access all the files in gh-pages branch, except ”_app” directory. So I wanted to change name of directory.",S,h,C,Fe="<p><del>Modified Build File</del></p> <p>What I wanted is to rename ”_app” to “app”.</p> <p>This project has some build setting files</p> <ul><li><code>tsconfig.json</code></li> <li><code>svelte.config.js</code></li> <li><code>urara.ts</code></li></ul> <p>I modified build setting by changing those files, but couldn’t fix it.</p>",R,o,L,ue="Make <code>.nojekyll</code> at root of build directory, and deploy.",V,H,ye="I found that if <code>deploy</code> branch doesn’t have <code>.nojekyll</code>, then Github Page serves page as Jekyll build.",X,T,fe="<strong>gh-pages needs <code>.nojekyll</code> file</strong>",Y,M,ve="build script runs like <code>run-s tsc urara:build kit:build clean</code> that means",ee,P,_e="<li><code>run-s</code> : run sequentially</li> <li><code>tsc</code> : <code>tsc -p tsconfig.node.json</code></li> <li><code>urara:build</code> : <code>node urara.js build</code></li> <li><code>kit:build</code> : <code>cross-env NODE_OPTIONS=--max_old_space_size=7680 vite build</code></li> <li><code>clean</code> : <code>node urara.js clean</code></li>",te,w,ge="Before cleaning directories, I add <code>.nojekyll</code> file in build directory.",le,g,E,$,De="make nojekyll function in <code>urara.ts</code>",se,z,we=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" js="true"><div class="language-id">js</div><div class='code-container'><code><div class='line'><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> nojekyll </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">()</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #F07178">  </span><span style="color: #EEFFFF">fs</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">writeFile</span><span style="color: #F07178">(</span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">build/.nojekyll</span><span style="color: #89DDFF">'</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF">''</span><span style="color: #F07178">)</span></div><div class='line'><span style="color: #89DDFF">&#125;</span></div></code></div></pre>`,ae,x,I,me="Add ‘nojekyll’ case in switch case syntax",ne,J,$e=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" js="true"><div class="language-id">js</div><div class='code-container'><code><div class='line'><span style="color: #89DDFF">case</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">nojekyll</span><span style="color: #89DDFF">'</span><span style="color: #EEFFFF">:</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #82AAFF">nojekyll</span><span style="color: #EEFFFF">()</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">break</span><span style="color: #89DDFF">;</span></div></code></div></pre>`,oe,D,A,he="Add that code in <code>package.json</code>",ie,N,Ie=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" json="true"><div class="language-id">json</div><div class='code-container'><code><div class='line'><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">"</span><span style="color: #C792EA">script</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">"</span><span style="color: #FFCB6B">nojekyll</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">node urara.js nojekyll</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">,</span></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">"</span><span style="color: #FFCB6B">gh-pages</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">npm run build && npm run nojekyll && npx gh-pages -t -d build</span><span style="color: #89DDFF">"</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">&#125;</span></div><div class='line'><span style="color: #89DDFF">&#125;</span></div></code></div></pre>`,Z,B,Ee="<em><code>gh-pages -t</code> means uploading files started with ’.’</em>",G,b,xe="After doing that, you can finally deploy the perfect Homepage. Enjoy :)",U;return s=new Je({props:{src:"https://github.com/lyukidon/lyukidon.github.io/assets/64675543/fefaa038-af7f-434b-9f69-7a59ae2a82eb",alt:"image"}}),{c(){l=a("p"),l.textContent=_,y=i(),f=a("p"),Ce(s.$$.fragment),F=i(),v=a("p"),v.textContent=de,S=i(),h=a("ol"),C=a("li"),C.innerHTML=Fe,R=i(),o=a("li"),L=a("p"),L.innerHTML=ue,V=i(),H=a("p"),H.innerHTML=ye,X=i(),T=a("p"),T.innerHTML=fe,Y=i(),M=a("p"),M.innerHTML=ve,ee=i(),P=a("ol"),P.innerHTML=_e,te=i(),w=a("p"),w.innerHTML=ge,le=i(),g=a("ol"),E=a("li"),$=a("p"),$.innerHTML=De,se=i(),z=new ce(!1),ae=i(),x=a("li"),I=a("p"),I.textContent=me,ne=i(),J=new ce(!1),oe=i(),D=a("li"),A=a("p"),A.innerHTML=he,ie=i(),N=new ce(!1),Z=i(),B=a("p"),B.innerHTML=Ee,G=i(),b=a("p"),b.textContent=xe,this.h()},l(t){l=n(t,"P",{"data-svelte-h":!0}),d(l)!=="svelte-a3t8yi"&&(l.textContent=_),y=c(t),f=n(t,"P",{});var u=j(f);Le(s.$$.fragment,u),u.forEach(r),F=c(t),v=n(t,"P",{"data-svelte-h":!0}),d(v)!=="svelte-39byky"&&(v.textContent=de),S=c(t),h=n(t,"OL",{});var W=j(h);C=n(W,"LI",{"data-svelte-h":!0}),d(C)!=="svelte-q1pajt"&&(C.innerHTML=Fe),R=c(W),o=n(W,"LI",{});var p=j(o);L=n(p,"P",{"data-svelte-h":!0}),d(L)!=="svelte-1a95d3a"&&(L.innerHTML=ue),V=c(p),H=n(p,"P",{"data-svelte-h":!0}),d(H)!=="svelte-aqezkj"&&(H.innerHTML=ye),X=c(p),T=n(p,"P",{"data-svelte-h":!0}),d(T)!=="svelte-14k9tnh"&&(T.innerHTML=fe),Y=c(p),M=n(p,"P",{"data-svelte-h":!0}),d(M)!=="svelte-jsc5t3"&&(M.innerHTML=ve),ee=c(p),P=n(p,"OL",{"data-svelte-h":!0}),d(P)!=="svelte-1l2fyuc"&&(P.innerHTML=_e),te=c(p),w=n(p,"P",{"data-svelte-h":!0}),d(w)!=="svelte-bnfhc2"&&(w.innerHTML=ge),le=c(p),g=n(p,"OL",{});var O=j(g);E=n(O,"LI",{});var K=j(E);$=n(K,"P",{"data-svelte-h":!0}),d($)!=="svelte-1vwzva0"&&($.innerHTML=De),se=c(K),z=re(K,!1),K.forEach(r),ae=c(O),x=n(O,"LI",{});var Q=j(x);I=n(Q,"P",{"data-svelte-h":!0}),d(I)!=="svelte-aaqh5i"&&(I.textContent=me),ne=c(Q),J=re(Q,!1),Q.forEach(r),oe=c(O),D=n(O,"LI",{});var q=j(D);A=n(q,"P",{"data-svelte-h":!0}),d(A)!=="svelte-jfiugv"&&(A.innerHTML=he),ie=c(q),N=re(q,!1),Z=c(q),B=n(q,"P",{"data-svelte-h":!0}),d(B)!=="svelte-112nmh4"&&(B.innerHTML=Ee),q.forEach(r),O.forEach(r),p.forEach(r),W.forEach(r),G=c(t),b=n(t,"P",{"data-svelte-h":!0}),d(b)!=="svelte-vs34fx"&&(b.textContent=xe),this.h()},h(){z.a=null,J.a=null,N.a=Z},m(t,u){m(t,l,u),m(t,y,u),m(t,f,u),He(s,f,null),m(t,F,u),m(t,v,u),m(t,S,u),m(t,h,u),e(h,C),e(h,R),e(h,o),e(o,L),e(o,V),e(o,H),e(o,X),e(o,T),e(o,Y),e(o,M),e(o,ee),e(o,P),e(o,te),e(o,w),e(o,le),e(o,g),e(g,E),e(E,$),e(E,se),z.m(we,E),e(g,ae),e(g,x),e(x,I),e(x,ne),J.m($e,x),e(g,oe),e(g,D),e(D,A),e(D,ie),N.m(Ie,D),e(D,Z),e(D,B),m(t,G,u),m(t,b,u),U=!0},p:Be,i(t){U||(Te(s.$$.fragment,t),U=!0)},o(t){Me(s.$$.fragment,t),U=!1},d(t){t&&(r(l),r(y),r(f),r(F),r(v),r(S),r(h),r(G),r(b)),Pe(s)}}}function Ze(k){let l,_;const y=[k[0],ke];let f={$$slots:{default:[Ne]},$$scope:{ctx:k}};for(let s=0;s<y.length;s+=1)f=pe(f,y[s]);return l=new Se({props:f}),{c(){Ce(l.$$.fragment)},l(s){Le(l.$$.fragment,s)},m(s,F){He(l,s,F),_=!0},p(s,[F]){const v=F&1?ze(y,[F&1&&je(s[0]),F&0&&je(ke)]):{};F&2&&(v.$$scope={dirty:F,ctx:s}),l.$set(v)},i(s){_||(Te(l.$$.fragment,s),_=!0)},o(s){Me(l.$$.fragment,s),_=!1},d(s){Pe(l,s)}}}const ke={title:"How to fix urara build bug while using gh-pages",image:"",alt:"Urara",created:"2024-01-24T00:00:00.000Z",updated:"2024-01-24T00:00:00.000Z",tags:["bug_fix"],images:[],slug:"/Javascript/etc/urara_bug_fix/+page.md",path:"/Javascript/etc/urara_bug_fix",toc:!1};function Ge(k,l,_){return k.$$set=y=>{_(0,l=pe(pe({},l),be(y)))},l=be(l),[l]}class Re extends Oe{constructor(l){super(),qe(this,l,Ge,Ze,Ae,{})}}export{Re as component};
