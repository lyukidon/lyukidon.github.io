import{s as R,h as B,i as N,n as V}from"../chunks/scheduler.4680106d.js";import{S as W,i as X,r as Y,u as ss,v as es,d as as,t as ls,w as ns,g as r,s as D,H as Z,h as c,A as _,c as m,j as $,F as z,f as i,a as u,y as o}from"../chunks/index.4ac987bf.js";import{P as ts,g as os,a as O}from"../chunks/post_layout.3d8b50bb.js";function Fs(f){let s,y="POST를 사용하여 데이터를 추가할 때, create()와 save() API를 사용하게 된다. 다른 기능을 사용해도 같은 결과가 나와서 궁금해서 찾아보았다.",F,t,e='<a href="https://stackoverflow.com/questions/38290684/mongoose-save-vs-insert-vs-create" rel="nofollow noopener noreferrer external" target="_blank">https://stackoverflow.com/questions/38290684/mongoose-save-vs-insert-vs-create</a>',l,p,S="<code>The .save() is an instance method of the model, while the .create() is called directly from the Model as a method call, being static in nature, and takes the object as a first parameter.</code>",P,v,d,g,I="save()",T,h,U="<li>save는 instance 메서드로, 객체를 직접 형성해준 후 몽고디비에 저장하는 형식이다.</li>",k,b,K=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" js="true"><div class="language-id">js</div><div class='code-container'><code><div class='line'><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> Person </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> mongoose</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">model</span><span style="color: #EEFFFF">(</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">Person</span><span style="color: #89DDFF">'</span><span style="color: #89DDFF">,</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #82AAFF">Schema</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">String</span><span style="color: #89DDFF">,</span></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #F07178">age</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Number</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF">)</span></div><div class='line'><span style="color: #EEFFFF">)</span></div><div class='line'></div><div class='line'><span style="color: #C792EA">let</span><span style="color: #EEFFFF"> newPerson </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">new</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">Person</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">jack</span><span style="color: #89DDFF">'</span><span style="color: #89DDFF">,</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #F07178">age</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">30</span></div><div class='line'><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF">)</span></div><div class='line'></div><div class='line'><span style="color: #89DDFF">await</span><span style="color: #EEFFFF"> newPerson</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">save</span><span style="color: #EEFFFF">()</span></div></code></div></pre>`,j,E,C,q="create()",H,x,J="<li>create는 static 메서드로, 객체를 따로 생성하지 않아도 호출을 할 수 있다. create 내부에 생성하고자 하는 데이터를 넣어주면, mongodb에 저장이 된다.</li>",M,L,Q=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" js="true"><div class="language-id">js</div><div class='code-container'><code><div class='line'><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> Person </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> mongoose</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">model</span><span style="color: #EEFFFF">(</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">Person</span><span style="color: #89DDFF">'</span><span style="color: #89DDFF">,</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #82AAFF">Schema</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">String</span><span style="color: #89DDFF">,</span></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #F07178">age</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Number</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF">)</span></div><div class='line'><span style="color: #EEFFFF">)</span></div><div class='line'></div><div class='line'><span style="color: #89DDFF">await</span><span style="color: #EEFFFF"> Person</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">create</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&#123;</span><span style="color: #EEFFFF"> </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">jack</span><span style="color: #89DDFF">'</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F07178">age</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">30</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF">)</span></div></code></div></pre>`;return{c(){s=r("p"),s.textContent=y,F=D(),t=r("p"),t.innerHTML=e,l=D(),p=r("p"),p.innerHTML=S,P=D(),v=r("ul"),d=r("li"),g=r("p"),g.textContent=I,T=D(),h=r("ul"),h.innerHTML=U,k=D(),b=new Z(!1),j=D(),E=r("li"),C=r("p"),C.textContent=q,H=D(),x=r("ul"),x.innerHTML=J,M=D(),L=new Z(!1),this.h()},l(a){s=c(a,"P",{"data-svelte-h":!0}),_(s)!=="svelte-13nfyut"&&(s.textContent=y),F=m(a),t=c(a,"P",{"data-svelte-h":!0}),_(t)!=="svelte-1hi7jk3"&&(t.innerHTML=e),l=m(a),p=c(a,"P",{"data-svelte-h":!0}),_(p)!=="svelte-g6dbk6"&&(p.innerHTML=S),P=m(a),v=c(a,"UL",{});var n=$(v);d=c(n,"LI",{});var A=$(d);g=c(A,"P",{"data-svelte-h":!0}),_(g)!=="svelte-14nfs66"&&(g.textContent=I),T=m(A),h=c(A,"UL",{"data-svelte-h":!0}),_(h)!=="svelte-1z0pjig"&&(h.innerHTML=U),k=m(A),b=z(A,!1),A.forEach(i),j=m(n),E=c(n,"LI",{});var w=$(E);C=c(w,"P",{"data-svelte-h":!0}),_(C)!=="svelte-k8y2d1"&&(C.textContent=q),H=m(w),x=c(w,"UL",{"data-svelte-h":!0}),_(x)!=="svelte-1ykxwpy"&&(x.innerHTML=J),M=m(w),L=z(w,!1),w.forEach(i),n.forEach(i),this.h()},h(){b.a=null,L.a=null},m(a,n){u(a,s,n),u(a,F,n),u(a,t,n),u(a,l,n),u(a,p,n),u(a,P,n),u(a,v,n),o(v,d),o(d,g),o(d,T),o(d,h),o(d,k),b.m(K,d),o(v,j),o(v,E),o(E,C),o(E,H),o(E,x),o(E,M),L.m(Q,E)},p:V,d(a){a&&(i(s),i(F),i(t),i(l),i(p),i(P),i(v))}}}function ps(f){let s,y;const F=[f[0],G];let t={$$slots:{default:[Fs]},$$scope:{ctx:f}};for(let e=0;e<F.length;e+=1)t=B(t,F[e]);return s=new ts({props:t}),{c(){Y(s.$$.fragment)},l(e){ss(s.$$.fragment,e)},m(e,l){es(s,e,l),y=!0},p(e,[l]){const p=l&1?os(F,[l&1&&O(e[0]),l&0&&O(G)]):{};l&2&&(p.$$scope={dirty:l,ctx:e}),s.$set(p)},i(e){y||(as(s.$$.fragment,e),y=!0)},o(e){ls(s.$$.fragment,e),y=!1},d(e){ns(s,e)}}}const G={title:"create()와 save()의 차이",image:"",alt:"Urara",created:"2024-01-23T00:00:00.000Z",updated:"2024-01-23T00:00:00.000Z",tags:["mongodb","mongoose"],images:[],slug:"/Javascript/Today _I_Learned/mongodb_difference_between_create_and_save/+page.md",path:"/Javascript/Today _I_Learned/mongodb_difference_between_create_and_save",toc:!1};function rs(f,s,y){return f.$$set=F=>{y(0,s=B(B({},s),N(F)))},s=N(s),[s]}class ds extends W{constructor(s){super(),X(this,s,rs,ps,R,{})}}export{ds as component};
