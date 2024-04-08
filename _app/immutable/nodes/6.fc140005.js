import{s as R,h as C,i as M,n as S}from"../chunks/scheduler.dd918b38.js";import{S as B,i as J,r as Z,u as j,v as q,d as z,t as O,w as G,g as m,s as v,H as w,h as _,A as h,c as E,F as $,k as b,a as o,f as p}from"../chunks/index.94d1baeb.js";import{P as K,g as N,a as U}from"../chunks/post_layout.3594328b.js";function Q(D){let l,c='<a href="#front-end">front-end</a>',t,r,a=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" ts="true"><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #89DDFF">  </span><span style="color: #546E7A">// formData 객체를 생성해 전달 (submit 버튼이 없어도 됌)</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> handleUpload </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">async</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">()</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #89DDFF">if</span><span style="color: #F07178"> (</span><span style="color: #89DDFF">!</span><span style="color: #EEFFFF">img</span><span style="color: #F07178">) </span><span style="color: #89DDFF">return</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #C792EA">const</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">formData</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF">new</span><span style="color: #F07178"> </span><span style="color: #82AAFF">FormData</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #EEFFFF">formData</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">append</span><span style="color: #F07178">(</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">file</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">img</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #89DDFF">try</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #F07178">      </span><span style="color: #89DDFF">await</span><span style="color: #F07178"> </span><span style="color: #82AAFF">axios</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #F07178">        headers</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #F07178">          </span><span style="color: #89DDFF">"</span><span style="color: #F07178">Content-Type</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">multipart/form-data</span><span style="color: #89DDFF">"</span></div><div class='line'><span style="color: #F07178">        </span><span style="color: #89DDFF">&#125;,</span></div><div class='line'><span style="color: #F07178">        method</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">POST</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">,</span></div><div class='line'><span style="color: #F07178">        baseURL</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">http://127.0.0.1:3001</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">,</span></div><div class='line'><span style="color: #F07178">        url</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">/image/upload</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">,</span></div><div class='line'><span style="color: #F07178">        data</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">formData</span></div><div class='line'><span style="color: #F07178">      </span><span style="color: #89DDFF">&#125;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #89DDFF">&#125;</span><span style="color: #F07178"> </span><span style="color: #89DDFF">catch</span><span style="color: #F07178"> (</span><span style="color: #EEFFFF">error</span><span style="color: #F07178">) </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #F07178">      </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">error</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #89DDFF">&#125;</span></div><div class='line'><span style="color: #F07178">  </span><span style="color: #89DDFF">&#125;;</span></div></code></div></pre>`,e,F,T="<li>formData 객체 메서드<ul><li><code>.append(key, value)</code> : form field 추가(기존 값의 끝에 새로운 값을 추가)<ul><li><code>.append(key, blob, filename)</code> : Blob가 두번째 매개변수로 전달 시, blob의 파일 이름을 지정</li></ul></li> <li><code>.set(key, value)</code> : form field 추가(같은 key 필드 존재 시, 제거 후 생성)<ul><li><code>.set(key, blob, filename)</code> : Blob가 두번째 매개변수로 전달 시, blob의 파일 이름을 지정</li></ul></li> <li><code>.get(key)</code> : key 필드 읽기</li> <li><code>.has(key)</code> : key 필드 존재 여부</li> <li><code>.delete(key)</code> : key field 삭제</li></ul></li>",g,i,H='<a href="#back-end">back-end</a>',A,u,I=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" ts="true"><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #89DDFF">  </span><span style="color: #546E7A">// image.controller.ts</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">@</span><span style="color: #82AAFF">Post</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">/upload</span><span style="color: #89DDFF">'</span><span style="color: #EEFFFF">)</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">@</span><span style="color: #82AAFF">UseInterceptors</span><span style="color: #EEFFFF">(</span><span style="color: #82AAFF">FileInterceptor</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">file</span><span style="color: #89DDFF">'</span><span style="color: #EEFFFF">))</span></div><div class='line'><span style="color: #EEFFFF">  async </span><span style="color: #82AAFF">uploadFile</span><span style="color: #EEFFFF">(@</span><span style="color: #82AAFF">UploadedFile</span><span style="color: #EEFFFF">() file: Express</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">Multer</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">File) </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #EEFFFF">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #EEFFFF">file</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #F07178">  </span><span style="color: #89DDFF">&#125;</span></div></code></div></pre>`,f,y,L='<a href="#주의">주의</a>',k,d,x="<code>FileInterceptor(key)</code>에서 <code>key</code> 값은 <code>formData.append(key, value)</code>의 <code>key</code> 값과 일치해야 한다.";return{c(){l=m("h3"),l.innerHTML=c,t=v(),r=new w(!1),e=v(),F=m("ul"),F.innerHTML=T,g=v(),i=m("h3"),i.innerHTML=H,A=v(),u=new w(!1),f=v(),y=m("h3"),y.innerHTML=L,k=v(),d=m("p"),d.innerHTML=x,this.h()},l(s){l=_(s,"H3",{id:!0,"data-svelte-h":!0}),h(l)!=="svelte-1mb2ly7"&&(l.innerHTML=c),t=E(s),r=$(s,!1),e=E(s),F=_(s,"UL",{"data-svelte-h":!0}),h(F)!=="svelte-1r7a31w"&&(F.innerHTML=T),g=E(s),i=_(s,"H3",{id:!0,"data-svelte-h":!0}),h(i)!=="svelte-wpv8zl"&&(i.innerHTML=H),A=E(s),u=$(s,!1),f=E(s),y=_(s,"H3",{id:!0,"data-svelte-h":!0}),h(y)!=="svelte-ee990i"&&(y.innerHTML=L),k=E(s),d=_(s,"P",{"data-svelte-h":!0}),h(d)!=="svelte-1h50pte"&&(d.innerHTML=x),this.h()},h(){b(l,"id","front-end"),r.a=e,b(i,"id","back-end"),u.a=f,b(y,"id","주의")},m(s,n){o(s,l,n),o(s,t,n),r.m(a,s,n),o(s,e,n),o(s,F,n),o(s,g,n),o(s,i,n),o(s,A,n),u.m(I,s,n),o(s,f,n),o(s,y,n),o(s,k,n),o(s,d,n)},p:S,d(s){s&&(p(l),p(t),r.d(),p(e),p(F),p(g),p(i),p(A),u.d(),p(f),p(y),p(k),p(d))}}}function V(D){let l,c;const t=[D[0],P];let r={$$slots:{default:[Q]},$$scope:{ctx:D}};for(let a=0;a<t.length;a+=1)r=C(r,t[a]);return l=new K({props:r}),{c(){Z(l.$$.fragment)},l(a){j(l.$$.fragment,a)},m(a,e){q(l,a,e),c=!0},p(a,[e]){const F=e&1?N(t,[e&1&&U(a[0]),e&0&&U(P)]):{};e&2&&(F.$$scope={dirty:e,ctx:a}),l.$set(F)},i(a){c||(z(l.$$.fragment,a),c=!0)},o(a){O(l.$$.fragment,a),c=!1},d(a){G(l,a)}}}const P={title:"file Upload",image:"",alt:"",created:"2024-04-07T00:00:00.000Z",updated:"2024-04-07T00:00:00.000Z",tags:["react","formData"],images:[],slug:"/Javascript/TIL/React/fileUpload/+page.md",path:"/Javascript/TIL/React/fileUpload",toc:[{depth:3,title:"front-end",slug:"front-end"},{depth:3,title:"back-end",slug:"back-end"},{depth:3,title:"주의",slug:"주의"}]};function W(D,l,c){return D.$$set=t=>{c(0,l=C(C({},l),M(t)))},l=M(l),[l]}class ls extends B{constructor(l){super(),J(this,l,W,V,R,{})}}export{ls as component};
