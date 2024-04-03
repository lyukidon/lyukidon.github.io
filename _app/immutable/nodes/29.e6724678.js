import{s as Ws,h as Cs,i as Is,n as zs}from"../chunks/scheduler.dd918b38.js";import{S as Gs,i as Ks,r as Ss,u as Us,v as ws,d as Bs,t as bs,w as ks,g as t,s as n,H as g,h as o,A as i,c as p,j as T,F as h,f as v,a as ms,y as s}from"../chunks/index.94d1baeb.js";import{P as Xs,g as Zs,a as Ms}from"../chunks/post_layout.3594328b.js";import{I as Vs}from"../chunks/footer.87d5bc8c.js";function sl(P){let l,m="Javascript에서 MySQL을 사용하기 위해서, Prisma를 사용할 수 있다.",u,e,a,c,O="설치하기",ts,j,$s=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="true"><div class="language-id">bash</div><div class='code-container'><code><div class='line'><span style="color: #EEFFFF">npm init -y</span></div><div class='line'><span style="color: #EEFFFF">npm install prisma --save-dev</span></div></code></div></pre>`,ns,C,x,Ds="prisma 기본 폴더 생성하기",os,Y,Os=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="true"><div class="language-id">bash</div><div class='code-container'><code><div class='line'><span style="color: #EEFFFF">npx prisma</span></div><div class='line'><span style="color: #EEFFFF">npx prisma init</span></div></code></div></pre>`,q,N,_s="<code>npx prisma init</code> : <code>prisma 폴더</code>와 <code>schema.prisma</code> 파일, <code>.env</code> 파일을 생성해준다.",ps,d,I,As="데이터 베이스 연결하기",Fs,Q,Hs=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" js="true"><div class="language-id">js</div><div class='code-container'><code><div class='line'><span style="color: #546E7A">/* prisma.schema */</span></div><div class='line'><span style="color: #EEFFFF">datasource db </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #EEFFFF">provider</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">mysql</span><span style="color: #89DDFF">"</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #EEFFFF">url</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #82AAFF">env</span><span style="color: #F07178">(</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">DATABASE_URL</span><span style="color: #89DDFF">"</span><span style="color: #F07178">)</span></div><div class='line'><span style="color: #89DDFF">&#125;</span></div></code></div></pre>`,J,W,js=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" js="true"><div class="language-id">js</div><div class='code-container'><code><div class='line'><span style="color: #546E7A">/* .env */</span></div><div class='line'><span style="color: #EEFFFF">DATABASE_URL </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">DATABASE_TYPE://USER:PASSWORD@END_POINT:PORT_NUMBER/DATABASE_NAME</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></div></code></div></pre>`,z,M,fs=`<li><code>DATABASE_TYPE</code>
사용하고자하는 데이터베이스.
Postgres SQL, MySQL, SQLServer, PlantScale, Cockroach DB, MongoDB 지원</li> <li><code>USER</code> : 사용자 이름</li> <li><code>PASSWORD</code> : 설정한 비밀번호</li> <li><code>END_POINT</code> : url</li> <li><code>PORT_NUMBER</code> : 설정한 포트 번호</li> <li><code>DATABASE_NAME</code> : 데이터베이스의 이름</li>`,cs,D,R,gs="테이블의 Schema 설정",rs,G,Ys=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" prisma="true"><div class="language-id">prisma</div><div class='code-container'><code><div class='line'><span style="color: #C792EA">model</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">Products</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #EEFFFF">    productId   </span><span style="color: #FFCB6B">Int</span><span style="color: #EEFFFF">      </span><span style="color: #82AAFF">@id</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">@default</span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">autoincrement</span><span style="color: #89DDFF">())</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">@map</span><span style="color: #89DDFF">(</span><span style="color: #C3E88D">"productId"</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">    productName </span><span style="color: #FFCB6B">String</span><span style="color: #EEFFFF">   </span><span style="color: #82AAFF">@unique</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">@map</span><span style="color: #89DDFF">(</span><span style="color: #C3E88D">"productName"</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">    price       </span><span style="color: #FFCB6B">Int</span><span style="color: #EEFFFF">      </span><span style="color: #82AAFF">@default</span><span style="color: #89DDFF">(</span><span style="color: #F78C6C">1000</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">@map</span><span style="color: #89DDFF">(</span><span style="color: #C3E88D">"price"</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">    info        </span><span style="color: #FFCB6B">String</span><span style="color: #89DDFF">?</span><span style="color: #EEFFFF">  </span><span style="color: #82AAFF">@map</span><span style="color: #89DDFF">(</span><span style="color: #C3E88D">"info"</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">@db.Text</span></div><div class='line'><span style="color: #EEFFFF">    createdAt   </span><span style="color: #FFCB6B">DateTime</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">@default</span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">now</span><span style="color: #89DDFF">())</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">@map</span><span style="color: #89DDFF">(</span><span style="color: #C3E88D">"createdAt"</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">    updatedAt   </span><span style="color: #FFCB6B">DateTime</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">@updatedAt</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">@map</span><span style="color: #89DDFF">(</span><span style="color: #C3E88D">"updatedAt"</span><span style="color: #89DDFF">)</span></div><div class='line'></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #82AAFF">@@map</span><span style="color: #89DDFF">(</span><span style="color: #C3E88D">"Products"</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #89DDFF">&#125;</span></div></code></div></pre>`,K,S,Ts="<li>@id : <code>PRIMARY KEY</code></li> <li>@default() : 기본 값</li> <li>autoincrement : <code>AUTO_INCREMENT</code> 레코드가 추가될 때마다 값이 1씩 증가</li> <li>@map : 실제 table에 저장되는 이름</li> <li>@unique : <code>UNIQUE</code> 값이 겹치면 안됌</li> <li>DATA_TYPE? : <code>NULL</code> 이 칼럼의 값은 없어도 됌</li> <li>@db.DATA_TYPE : 데이터 타입을 변경하고자 하는 경우 작성</li> <li>@updatedAt : 레코드가 변경되는 경우, 자동으로 시간을 변경</li>",is,E,U,hs="Prisma Migrate",ds,X,qs=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="true"><div class="language-id">bash</div><div class='code-container'><code><div class='line'><span style="color: #EEFFFF">npx prisma migrate dev --name init</span></div></code></div></pre>`,Z,w,Ls="위의 코드를 실행하면, prisma의 코드를, SQL의 RAW QUERY로 변경해준다.",Es,V,Qs=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" sql="true"><div class="language-id">sql</div><div class='code-container'><code><div class='line'><span style="color: #F78C6C">CREATE</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">TABLE</span><span style="color: #EEFFFF"> Products(</span></div><div class='line'></div><div class='line'><span style="color: #EEFFFF">    productId </span><span style="color: #F78C6C">INTEGER</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">NOT</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">NULL</span><span style="color: #EEFFFF"> AUTO_INCREMENT </span><span style="color: #F78C6C">PRIMARY</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">KEY</span></div><div class='line'><span style="color: #EEFFFF">    productName </span><span style="color: #F78C6C">TEXT</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">NOT</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">NULL</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">UNIQUE</span><span style="color: #EEFFFF">,</span></div><div class='line'><span style="color: #EEFFFF">    price </span><span style="color: #F78C6C">INTEGER</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">NOT</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">NULL</span><span style="color: #EEFFFF">,</span></div><div class='line'><span style="color: #EEFFFF">    info </span><span style="color: #F78C6C">TEXT</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">NULL</span><span style="color: #EEFFFF">,</span></div><div class='line'><span style="color: #EEFFFF">    createdAt </span><span style="color: #F78C6C">DATETIME</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">DEFAULT</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">CURRENT_TIMESTAMP</span></div><div class='line'><span style="color: #89DDFF">    </span><span style="color: #546E7A">-- CURRENT_TIMESTAMP == now()</span></div><div class='line'><span style="color: #EEFFFF">    updatedAt </span><span style="color: #F78C6C">DATETIME</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">NOT</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">NULL</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">DEFAULT</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">CURRENT_TIMESTAMP</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">ON</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">UPDATE</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">CURRENT_TIMESTAMP</span></div><div class='line'></div><div class='line'><span style="color: #EEFFFF">)</span></div></code></div></pre>`,ys,y,B,Ps="Prisma Client 설치",vs,ss,Js=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="true"><div class="language-id">bash</div><div class='code-container'><code><div class='line'><span style="color: #EEFFFF">npm i @prisma/client</span></div></code></div></pre>`,ls,H,L,us,b,xs="schema가 변경된 경우, <code>prisma migrate dev</code>나 <code>prisma db push</code>를 통해 데이터베이스에 데이터를 전달해야 하는데, <strong>Prisma Client를 통해 동기화를 유지시켜줄 수 있다.</strong>",as;return L=new Vs({props:{src:"../../../assets/prisma.png",alt:"Alt text"}}),{c(){l=t("p"),l.textContent=m,u=n(),e=t("ol"),a=t("li"),c=t("p"),c.textContent=O,ts=n(),j=new g(!1),ns=n(),C=t("li"),x=t("p"),x.textContent=Ds,os=n(),Y=new g(!1),q=n(),N=t("p"),N.innerHTML=_s,ps=n(),d=t("li"),I=t("p"),I.textContent=As,Fs=n(),Q=new g(!1),J=n(),W=new g(!1),z=n(),M=t("ul"),M.innerHTML=fs,cs=n(),D=t("li"),R=t("p"),R.textContent=gs,rs=n(),G=new g(!1),K=n(),S=t("ul"),S.innerHTML=Ts,is=n(),E=t("li"),U=t("p"),U.textContent=hs,ds=n(),X=new g(!1),Z=n(),w=t("p"),w.textContent=Ls,Es=n(),V=new g(!1),ys=n(),y=t("li"),B=t("p"),B.textContent=Ps,vs=n(),ss=new g(!1),ls=n(),H=t("p"),Ss(L.$$.fragment),us=n(),b=t("p"),b.innerHTML=xs,this.h()},l(r){l=o(r,"P",{"data-svelte-h":!0}),i(l)!=="svelte-19vn209"&&(l.textContent=m),u=p(r),e=o(r,"OL",{});var F=T(e);a=o(F,"LI",{});var es=T(a);c=o(es,"P",{"data-svelte-h":!0}),i(c)!=="svelte-1ws77og"&&(c.textContent=O),ts=p(es),j=h(es,!1),es.forEach(v),ns=p(F),C=o(F,"LI",{});var k=T(C);x=o(k,"P",{"data-svelte-h":!0}),i(x)!=="svelte-rauwhm"&&(x.textContent=Ds),os=p(k),Y=h(k,!1),q=p(k),N=o(k,"P",{"data-svelte-h":!0}),i(N)!=="svelte-nej5uc"&&(N.innerHTML=_s),k.forEach(v),ps=p(F),d=o(F,"LI",{});var _=T(d);I=o(_,"P",{"data-svelte-h":!0}),i(I)!=="svelte-1ydplnc"&&(I.textContent=As),Fs=p(_),Q=h(_,!1),J=p(_),W=h(_,!1),z=p(_),M=o(_,"UL",{"data-svelte-h":!0}),i(M)!=="svelte-15a27lv"&&(M.innerHTML=fs),_.forEach(v),cs=p(F),D=o(F,"LI",{});var $=T(D);R=o($,"P",{"data-svelte-h":!0}),i(R)!=="svelte-1e205ry"&&(R.textContent=gs),rs=p($),G=h($,!1),K=p($),S=o($,"UL",{"data-svelte-h":!0}),i(S)!=="svelte-1bz8voz"&&(S.innerHTML=Ts),$.forEach(v),is=p(F),E=o(F,"LI",{});var A=T(E);U=o(A,"P",{"data-svelte-h":!0}),i(U)!=="svelte-jl74ub"&&(U.textContent=hs),ds=p(A),X=h(A,!1),Z=p(A),w=o(A,"P",{"data-svelte-h":!0}),i(w)!=="svelte-86hr8u"&&(w.textContent=Ls),Es=p(A),V=h(A,!1),A.forEach(v),ys=p(F),y=o(F,"LI",{});var f=T(y);B=o(f,"P",{"data-svelte-h":!0}),i(B)!=="svelte-ayqk2j"&&(B.textContent=Ps),vs=p(f),ss=h(f,!1),ls=p(f),H=o(f,"P",{});var Ns=T(H);Us(L.$$.fragment,Ns),Ns.forEach(v),us=p(f),b=o(f,"P",{"data-svelte-h":!0}),i(b)!=="svelte-1u697ww"&&(b.innerHTML=xs),f.forEach(v),F.forEach(v),this.h()},h(){j.a=null,Y.a=q,Q.a=J,W.a=z,G.a=K,X.a=Z,V.a=null,ss.a=ls},m(r,F){ms(r,l,F),ms(r,u,F),ms(r,e,F),s(e,a),s(a,c),s(a,ts),j.m($s,a),s(e,ns),s(e,C),s(C,x),s(C,os),Y.m(Os,C),s(C,q),s(C,N),s(e,ps),s(e,d),s(d,I),s(d,Fs),Q.m(Hs,d),s(d,J),W.m(js,d),s(d,z),s(d,M),s(e,cs),s(e,D),s(D,R),s(D,rs),G.m(Ys,D),s(D,K),s(D,S),s(e,is),s(e,E),s(E,U),s(E,ds),X.m(qs,E),s(E,Z),s(E,w),s(E,Es),V.m(Qs,E),s(e,ys),s(e,y),s(y,B),s(y,vs),ss.m(Js,y),s(y,ls),s(y,H),ws(L,H,null),s(y,us),s(y,b),as=!0},p:zs,i(r){as||(Bs(L.$$.fragment,r),as=!0)},o(r){bs(L.$$.fragment,r),as=!1},d(r){r&&(v(l),v(u),v(e)),ks(L)}}}function ll(P){let l,m;const u=[P[0],Rs];let e={$$slots:{default:[sl]},$$scope:{ctx:P}};for(let a=0;a<u.length;a+=1)e=Cs(e,u[a]);return l=new Xs({props:e}),{c(){Ss(l.$$.fragment)},l(a){Us(l.$$.fragment,a)},m(a,c){ws(l,a,c),m=!0},p(a,[c]){const O=c&1?Zs(u,[c&1&&Ms(a[0]),c&0&&Ms(Rs)]):{};c&2&&(O.$$scope={dirty:c,ctx:a}),l.$set(O)},i(a){m||(Bs(l.$$.fragment,a),m=!0)},o(a){bs(l.$$.fragment,a),m=!1},d(a){ks(l,a)}}}const Rs={title:"Prisma 사용법",image:"",alt:"",created:"2024-01-26T00:00:00.000Z",updated:"2024-01-26T00:00:00.000Z",tags:["mysql","prisma"],images:[],slug:"/Javascript/TIL/prisma/+page.md",path:"/Javascript/TIL/prisma",toc:!1};function al(P,l,m){return P.$$set=u=>{m(0,l=Cs(Cs({},l),Is(u)))},l=Is(l),[l]}class pl extends Gs{constructor(l){super(),Ks(this,l,al,ll,Ws,{})}}export{pl as component};
