import{s as _t,h as G,i as rt,n as pt}from"../chunks/scheduler.dd918b38.js";import{S as vt,i as ft,r as mt,u as Tt,v as Mt,d as Ht,t as dt,w as xt,g as u,s as o,h as a,A as r,c as L,k as C,a as l,f as i}from"../chunks/index.94d1baeb.js";import{P as ct,g as Ct,a as ot}from"../chunks/post_layout.0e7f7691.js";function ht(q){let n,m='<a href="#모폴로지morphology">모폴로지(Morphology)</a>',f,p,s="<li><p>한글: 형태론</p></li> <li><p>한자: 形態論</p></li> <li><p>생물의 구조에 대해서 파악하는 분야이다. 수학적 모폴로지는 이미지를 단순한 형태로 변형시키는 것을 말한다.</p></li> <li><p>종류는 <code>침식</code>, <code>팽창</code>, <code>열림</code>, <code>닫힘</code>, <code>그레디언트</code>, <code>탑햇</code>, <code>블랙햇</code>이 있다.</p></li>",_,v,K='<a href="#연산-종류">연산 종류</a>',k,h,N="<li>침식</li>",b,y,Q="<li>구조화 요소가 겹치지 않으면 0, 겹치면 1로 변경</li>",g,T,R="<li>팽창</li>",P,$,W="<li>기준점과 이미지가 모두 1인 상태로 겹치는 경우 기준점 위치의 그림은 1, 그렇지 않은 경우 0</li>",I,M,X="<li>열림</li>",J,w,Y="<li>침식 연산 -&gt; 팽창 연산</li> <li>주변보다 밝은 노이즈를 제거해 줌</li> <li>맞닿아있는 것처럼 보이는 독립개체를 분리하거나 돌출된 모양 제거</li>",S,H,tt="<li>닫힘</li>",V,U,et="<li>팽창 연산 -&gt; 침식 연산</li> <li>주변보다 어두운 노이즈 제거</li> <li>끊어진 개체를 연결하거나 구멍을 메우는데 효과적</li>",Z,d,lt="<li>그레디언트</li>",A,O,it="<li>팽창 - 침식</li> <li>테두리를 얻어내는 방법</li>",B,x,nt="<li>탑햇</li>",D,j,st="<li>원본 사진 - 열림 연산</li> <li>밝은 영역 강조</li>",E,c,ut="<li>블랙햇</li>",F,z,at="<li>닫힘 - 원본</li> <li>어두운 영역 강조</li>";return{c(){n=u("h1"),n.innerHTML=m,f=o(),p=u("ul"),p.innerHTML=s,_=o(),v=u("h2"),v.innerHTML=K,k=o(),h=u("ol"),h.innerHTML=N,b=o(),y=u("ul"),y.innerHTML=Q,g=o(),T=u("ol"),T.innerHTML=R,P=o(),$=u("ul"),$.innerHTML=W,I=o(),M=u("ol"),M.innerHTML=X,J=o(),w=u("ul"),w.innerHTML=Y,S=o(),H=u("ol"),H.innerHTML=tt,V=o(),U=u("ul"),U.innerHTML=et,Z=o(),d=u("ol"),d.innerHTML=lt,A=o(),O=u("ul"),O.innerHTML=it,B=o(),x=u("ol"),x.innerHTML=nt,D=o(),j=u("ul"),j.innerHTML=st,E=o(),c=u("ol"),c.innerHTML=ut,F=o(),z=u("ul"),z.innerHTML=at,this.h()},l(t){n=a(t,"H1",{id:!0,"data-svelte-h":!0}),r(n)!=="svelte-1uxoqzf"&&(n.innerHTML=m),f=L(t),p=a(t,"UL",{"data-svelte-h":!0}),r(p)!=="svelte-1kqmjvl"&&(p.innerHTML=s),_=L(t),v=a(t,"H2",{id:!0,"data-svelte-h":!0}),r(v)!=="svelte-mxdpav"&&(v.innerHTML=K),k=L(t),h=a(t,"OL",{"data-svelte-h":!0}),r(h)!=="svelte-y2v52e"&&(h.innerHTML=N),b=L(t),y=a(t,"UL",{"data-svelte-h":!0}),r(y)!=="svelte-3azjmr"&&(y.innerHTML=Q),g=L(t),T=a(t,"OL",{start:!0,"data-svelte-h":!0}),r(T)!=="svelte-13eslig"&&(T.innerHTML=R),P=L(t),$=a(t,"UL",{"data-svelte-h":!0}),r($)!=="svelte-12hwjzi"&&($.innerHTML=W),I=L(t),M=a(t,"OL",{start:!0,"data-svelte-h":!0}),r(M)!=="svelte-14b8fjh"&&(M.innerHTML=X),J=L(t),w=a(t,"UL",{"data-svelte-h":!0}),r(w)!=="svelte-1bxvk85"&&(w.innerHTML=Y),S=L(t),H=a(t,"OL",{start:!0,"data-svelte-h":!0}),r(H)!=="svelte-1cqwf11"&&(H.innerHTML=tt),V=L(t),U=a(t,"UL",{"data-svelte-h":!0}),r(U)!=="svelte-z2kww5"&&(U.innerHTML=et),Z=L(t),d=a(t,"OL",{start:!0,"data-svelte-h":!0}),r(d)!=="svelte-z7n7gp"&&(d.innerHTML=lt),A=L(t),O=a(t,"UL",{"data-svelte-h":!0}),r(O)!=="svelte-apwqyn"&&(O.innerHTML=it),B=L(t),x=a(t,"OL",{start:!0,"data-svelte-h":!0}),r(x)!=="svelte-pmxg22"&&(x.innerHTML=nt),D=L(t),j=a(t,"UL",{"data-svelte-h":!0}),r(j)!=="svelte-er0rfx"&&(j.innerHTML=st),E=L(t),c=a(t,"OL",{start:!0,"data-svelte-h":!0}),r(c)!=="svelte-4ztcj7"&&(c.innerHTML=ut),F=L(t),z=a(t,"UL",{"data-svelte-h":!0}),r(z)!=="svelte-1wpt8sf"&&(z.innerHTML=at),this.h()},h(){C(n,"id","모폴로지morphology"),C(v,"id","연산-종류"),C(T,"start","2"),C(M,"start","3"),C(H,"start","4"),C(d,"start","5"),C(x,"start","6"),C(c,"start","7")},m(t,e){l(t,n,e),l(t,f,e),l(t,p,e),l(t,_,e),l(t,v,e),l(t,k,e),l(t,h,e),l(t,b,e),l(t,y,e),l(t,g,e),l(t,T,e),l(t,P,e),l(t,$,e),l(t,I,e),l(t,M,e),l(t,J,e),l(t,w,e),l(t,S,e),l(t,H,e),l(t,V,e),l(t,U,e),l(t,Z,e),l(t,d,e),l(t,A,e),l(t,O,e),l(t,B,e),l(t,x,e),l(t,D,e),l(t,j,e),l(t,E,e),l(t,c,e),l(t,F,e),l(t,z,e)},p:pt,d(t){t&&(i(n),i(f),i(p),i(_),i(v),i(k),i(h),i(b),i(y),i(g),i(T),i(P),i($),i(I),i(M),i(J),i(w),i(S),i(H),i(V),i(U),i(Z),i(d),i(A),i(O),i(B),i(x),i(D),i(j),i(E),i(c),i(F),i(z))}}}function yt(q){let n,m;const f=[q[0],Lt];let p={$$slots:{default:[ht]},$$scope:{ctx:q}};for(let s=0;s<f.length;s+=1)p=G(p,f[s]);return n=new ct({props:p}),{c(){mt(n.$$.fragment)},l(s){Tt(n.$$.fragment,s)},m(s,_){Mt(n,s,_),m=!0},p(s,[_]){const v=_&1?Ct(f,[_&1&&ot(s[0]),_&0&&ot(Lt)]):{};_&2&&(v.$$scope={dirty:_,ctx:s}),n.$set(v)},i(s){m||(Ht(n.$$.fragment,s),m=!0)},o(s){dt(n.$$.fragment,s),m=!1},d(s){xt(n,s)}}}const Lt={title:"모폴로지(Morphology) 연산",image:"",alt:"",created:"2024-06-02T00:00:00.000Z",updated:"2024-06-02T00:00:00.000Z",tags:["cv","morphology"],images:[],slug:"/Javascript/TIL/CV/morphology/+page.md",path:"/Javascript/TIL/CV/morphology",toc:[{depth:1,title:"모폴로지(Morphology)",slug:"모폴로지morphology"},{depth:2,title:"연산 종류",slug:"연산-종류"}]};function $t(q,n,m){return q.$$set=f=>{m(0,n=G(G({},n),rt(f)))},n=rt(n),[n]}class jt extends vt{constructor(n){super(),ft(this,n,$t,yt,_t,{})}}export{jt as component};
