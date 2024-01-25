import{s as Vt,h as ht,i as St,n as Zt}from"../chunks/scheduler.4680106d.js";import{S as Wt,i as Xt,r as Bt,u as qt,v as kt,d as Yt,t as Qt,w as jt,g as s,s as F,H as et,m as Ot,h as a,A as d,c as p,j as v,F as lt,f as r,n as Pt,a as Y,y as t}from"../chunks/index.4ac987bf.js";import{P as te,g as ee,a as bt}from"../chunks/post_layout.31e93455.js";import{T as le}from"../chunks/table.03f9994e.js";function se(L){let e,y="<tr><th>타입</th> <th>범위</th> <th>범위 식</th> <th>용량</th></tr>",c,n,l="<tr><td>TINYINT</td> <td>0 ~ 255</td> <td>2^0-1 ~ 2^8-1</td> <td>1 Byte</td></tr> <tr><td>SMALLINT</td> <td>-32,768 ~ 32,767</td> <td>-2^15 ~ 2^15-1</td> <td>2 Byte</td></tr> <tr><td>INT</td> <td>-2,147,483,648 ~ 2,147,483,647</td> <td>-2^31 ~ 2^31-1</td> <td>4 Byte</td></tr> <tr><td>BIGINT</td> <td>-9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807</td> <td>-2^63 ~ 2^63-1</td> <td>8 Byte</td></tr>";return{c(){e=s("thead"),e.innerHTML=y,c=F(),n=s("tbody"),n.innerHTML=l},l(o){e=a(o,"THEAD",{"data-svelte-h":!0}),d(e)!=="svelte-1doflcb"&&(e.innerHTML=y),c=p(o),n=a(o,"TBODY",{"data-svelte-h":!0}),d(n)!=="svelte-6103cx"&&(n.innerHTML=l)},m(o,_){Y(o,e,_),Y(o,c,_),Y(o,n,_)},p:Zt,d(o){o&&(r(e),r(c),r(n))}}}function ae(L){let e,y=`DDL (Data Definition Language, 데이터 정의어)
데이터의 생성, 수정, 삭제의 역할을 한다.`,c,n,l,o,_="CREATE",st,f,T,R,gt="데이터 베이스 생성",at,Q,zt=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" sql="true"><div class="language-id">sql</div><div class='code-container'><code><div class='line'><span style="color: #F78C6C">CREATE</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">DATABASE</span><span style="color: #EEFFFF"> SQL_DB;</span></div></code></div></pre>`,nt,h,U,Dt="테이블 생성",ot,j,Gt=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" sql="true"><div class="language-id">sql</div><div class='code-container'><code><div class='line'><span style="color: #F78C6C">CREATE</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">TABLE</span><span style="color: #EEFFFF"> USERS(</span></div><div class='line'><span style="color: #EEFFFF">    USERID </span><span style="color: #F78C6C">INT</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">100</span><span style="color: #EEFFFF">) </span><span style="color: #F78C6C">NOT</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">NULL</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">UNIQUE</span><span style="color: #EEFFFF"> AUTO_INCREMENT </span><span style="color: #F78C6C">PRIMARY</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">KEY</span><span style="color: #EEFFFF">,</span></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #F78C6C">NAME</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">VARCHAR</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">10</span><span style="color: #EEFFFF">) </span><span style="color: #F78C6C">NOT</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">NULL</span></div><div class='line'><span style="color: #EEFFFF">    GENDER ENUM(</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">M</span><span style="color: #89DDFF">"</span><span style="color: #EEFFFF">,</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">W</span><span style="color: #89DDFF">"</span><span style="color: #EEFFFF">);</span></div><div class='line'><span style="color: #EEFFFF">);</span></div><div class='line'></div><div class='line'><span style="color: #F78C6C">CREATE</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">TABLE</span><span style="color: #EEFFFF"> ORDERS(</span></div><div class='line'><span style="color: #EEFFFF">    ORDERID </span><span style="color: #F78C6C">INT</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">100</span><span style="color: #EEFFFF">) </span><span style="color: #F78C6C">NOT</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">NULL</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">UNIQUE</span><span style="color: #EEFFFF"> AUTO_INCREMENT </span><span style="color: #F78C6C">PRIMARY</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">KEY</span><span style="color: #EEFFFF">,</span></div><div class='line'><span style="color: #EEFFFF">    USERID </span><span style="color: #F78C6C">INT</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">100</span><span style="color: #EEFFFF">) </span><span style="color: #F78C6C">NOT</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">NULL</span><span style="color: #EEFFFF">,</span></div><div class='line'><span style="color: #EEFFFF">    PRODUCT </span><span style="color: #F78C6C">VARCHAR</span><span style="color: #EEFFFF">(</span><span style="color: #F78C6C">255</span><span style="color: #EEFFFF">) </span><span style="color: #F78C6C">NOT</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">NULL</span></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #C792EA">FOREIGN KEY</span><span style="color: #EEFFFF"> (USERID) REFERENCE USERS (USERID)</span></div><div class='line'><span style="color: #EEFFFF">);</span></div></code></div></pre>`,Ft,g,A,Nt="제약 조건",pt,C,D,M,xt="숫자 타입",rt,m,ct,$,It="<p>NULL</p> <ul><li>NULL : 데이터가 없는 경우, NULL로 저장</li> <li>NOT NULL : 데이터가 없는 경우, 에러</li></ul>",it,H,Rt="<p>UNIQUE : 컬럼에 같은 데이터가 존재하면 안됌</p>",Et,S,Ut="<p>AUTO_INCREMENT : 레코드(튜플)가 추가될 경우, 1씩 증가</p>",dt,O,At="<p>ENUM : ENUM 내부에 있는 값만 추가 가능</p>",Ct,P,Mt="<p>ALTER</p>",yt,N,b,$t="DROP",vt,x,w,ut,z,Kt=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" sql="true"><div class="language-id">sql</div><div class='code-container'><code><div class='line'><span style="color: #F78C6C">DROP</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">DATABASE</span><span style="color: #EEFFFF"> SQL_DB;</span></div></code></div></pre>`,_t,B,ft,G,Jt=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" sql="true"><div class="language-id">sql</div><div class='code-container'><code><div class='line'><span style="color: #F78C6C">DROP</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">TABLE</span><span style="color: #EEFFFF"> USERS;</span></div><div class='line'><span style="color: #F78C6C">DROP</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">TABLE</span><span style="color: #EEFFFF"> ORDERS;</span></div></code></div></pre>`,Lt,q,Ht="<p>TRUNCATE</p>",K;return m=new le({props:{$$slots:{default:[se]},$$scope:{ctx:L}}}),{c(){e=s("p"),e.textContent=y,c=F(),n=s("ul"),l=s("li"),o=s("p"),o.textContent=_,st=F(),f=s("ul"),T=s("li"),R=s("p"),R.textContent=gt,at=F(),Q=new et(!1),nt=F(),h=s("li"),U=s("p"),U.textContent=Dt,ot=F(),j=new et(!1),Ft=F(),g=s("li"),A=s("p"),A.textContent=Nt,pt=F(),C=s("ul"),D=s("li"),M=s("p"),M.textContent=xt,rt=F(),Bt(m.$$.fragment),ct=F(),$=s("li"),$.innerHTML=It,it=F(),H=s("li"),H.innerHTML=Rt,Et=F(),S=s("li"),S.innerHTML=Ut,dt=F(),O=s("li"),O.innerHTML=At,Ct=F(),P=s("li"),P.innerHTML=Mt,yt=F(),N=s("li"),b=s("p"),b.textContent=$t,vt=F(),x=s("ul"),w=s("li"),ut=Ot("데이터 베이스 삭제"),z=new et(!1),_t=F(),B=s("li"),ft=Ot("테이블 삭제"),G=new et(!1),Lt=F(),q=s("li"),q.innerHTML=Ht,this.h()},l(i){e=a(i,"P",{"data-svelte-h":!0}),d(e)!=="svelte-1a3s4ly"&&(e.textContent=y),c=p(i),n=a(i,"UL",{});var E=v(n);l=a(E,"LI",{});var I=v(l);o=a(I,"P",{"data-svelte-h":!0}),d(o)!=="svelte-vdeiy8"&&(o.textContent=_),st=p(I),f=a(I,"UL",{});var k=v(f);T=a(k,"LI",{});var J=v(T);R=a(J,"P",{"data-svelte-h":!0}),d(R)!=="svelte-bg9qde"&&(R.textContent=gt),at=p(J),Q=lt(J,!1),J.forEach(r),nt=p(k),h=a(k,"LI",{});var V=v(h);U=a(V,"P",{"data-svelte-h":!0}),d(U)!=="svelte-1bi5s4y"&&(U.textContent=Dt),ot=p(V),j=lt(V,!1),V.forEach(r),Ft=p(k),g=a(k,"LI",{});var Z=v(g);A=a(Z,"P",{"data-svelte-h":!0}),d(A)!=="svelte-ba2wst"&&(A.textContent=Nt),pt=p(Z),C=a(Z,"UL",{});var u=v(C);D=a(u,"LI",{});var W=v(D);M=a(W,"P",{"data-svelte-h":!0}),d(M)!=="svelte-8xrmze"&&(M.textContent=xt),rt=p(W),qt(m.$$.fragment,W),W.forEach(r),ct=p(u),$=a(u,"LI",{"data-svelte-h":!0}),d($)!=="svelte-3z5ftk"&&($.innerHTML=It),it=p(u),H=a(u,"LI",{"data-svelte-h":!0}),d(H)!=="svelte-gwjef9"&&(H.innerHTML=Rt),Et=p(u),S=a(u,"LI",{"data-svelte-h":!0}),d(S)!=="svelte-c21ngr"&&(S.innerHTML=Ut),dt=p(u),O=a(u,"LI",{"data-svelte-h":!0}),d(O)!=="svelte-ryasaw"&&(O.innerHTML=At),u.forEach(r),Z.forEach(r),k.forEach(r),I.forEach(r),Ct=p(E),P=a(E,"LI",{"data-svelte-h":!0}),d(P)!=="svelte-64l6tj"&&(P.innerHTML=Mt),yt=p(E),N=a(E,"LI",{});var X=v(N);b=a(X,"P",{"data-svelte-h":!0}),d(b)!=="svelte-1c677kv"&&(b.textContent=$t),vt=p(X),x=a(X,"UL",{});var tt=v(x);w=a(tt,"LI",{});var mt=v(w);ut=Pt(mt,"데이터 베이스 삭제"),z=lt(mt,!1),mt.forEach(r),_t=p(tt),B=a(tt,"LI",{});var Tt=v(B);ft=Pt(Tt,"테이블 삭제"),G=lt(Tt,!1),Tt.forEach(r),tt.forEach(r),X.forEach(r),Lt=p(E),q=a(E,"LI",{"data-svelte-h":!0}),d(q)!=="svelte-1fkz3u9"&&(q.innerHTML=Ht),E.forEach(r),this.h()},h(){Q.a=null,j.a=null,z.a=null,G.a=null},m(i,E){Y(i,e,E),Y(i,c,E),Y(i,n,E),t(n,l),t(l,o),t(l,st),t(l,f),t(f,T),t(T,R),t(T,at),Q.m(zt,T),t(f,nt),t(f,h),t(h,U),t(h,ot),j.m(Gt,h),t(f,Ft),t(f,g),t(g,A),t(g,pt),t(g,C),t(C,D),t(D,M),t(D,rt),kt(m,D,null),t(C,ct),t(C,$),t(C,it),t(C,H),t(C,Et),t(C,S),t(C,dt),t(C,O),t(n,Ct),t(n,P),t(n,yt),t(n,N),t(N,b),t(N,vt),t(N,x),t(x,w),t(w,ut),z.m(Kt,w),t(x,_t),t(x,B),t(B,ft),G.m(Jt,B),t(n,Lt),t(n,q),K=!0},p(i,E){const I={};E&2&&(I.$$scope={dirty:E,ctx:i}),m.$set(I)},i(i){K||(Yt(m.$$.fragment,i),K=!0)},o(i){Qt(m.$$.fragment,i),K=!1},d(i){i&&(r(e),r(c),r(n)),jt(m)}}}function ne(L){let e,y;const c=[L[0],wt];let n={$$slots:{default:[ae]},$$scope:{ctx:L}};for(let l=0;l<c.length;l+=1)n=ht(n,c[l]);return e=new te({props:n}),{c(){Bt(e.$$.fragment)},l(l){qt(e.$$.fragment,l)},m(l,o){kt(e,l,o),y=!0},p(l,[o]){const _=o&1?ee(c,[o&1&&bt(l[0]),o&0&&bt(wt)]):{};o&2&&(_.$$scope={dirty:o,ctx:l}),e.$set(_)},i(l){y||(Yt(e.$$.fragment,l),y=!0)},o(l){Qt(e.$$.fragment,l),y=!1},d(l){jt(e,l)}}}const wt={title:"MySQL DDL",image:"",alt:"",created:"2024-01-25T00:00:00.000Z",updated:"2024-01-25T00:00:00.000Z",tags:["mysql","DDL"],images:[],slug:"/Javascript/TIL/mysql_DDL/+page.md",path:"/Javascript/TIL/mysql_DDL",toc:!1};function oe(L,e,y){return L.$$set=c=>{y(0,e=ht(ht({},e),St(c)))},e=St(e),[e]}class ie extends Wt{constructor(e){super(),Xt(this,e,oe,ne,Vt,{})}}export{ie as component};
