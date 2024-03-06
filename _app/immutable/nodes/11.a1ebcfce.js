import{s as g,h as p,i as f,n as T}from"../chunks/scheduler.dd918b38.js";import{S as L,i as P,r as v,u as S,v as x,d as I,t as A,w as $,g as c,s as w,h as m,A as _,c as E,a as r,f as o}from"../chunks/index.94d1baeb.js";import{P as G,g as Q,a as d}from"../chunks/post_layout.3594328b.js";function R(s){let l,u='참고: <a href="https://aws.amazon.com/ko/compare/the-difference-between-graphql-and-rest/" rel="nofollow noopener noreferrer external" target="_blank">https://aws.amazon.com/ko/compare/the-difference-between-graphql-and-rest/</a>',a,t,e="<li><p>유사점</p> <ul><li>아키텍쳐<ul><li>상태를 저장하지 않으므로 서버가 요청 간에 응답 기록을 저장하지 않음</li> <li>클라이언트-서버 모델을 사용하므로 단일 클라이언트에서 요청하면 단일 서버에서 응답</li> <li>HTTP 프로토콜 기반</li></ul></li> <li>리소스 기반 설계</li> <li>데이터 교환<ul><li>데이터 형식: JSON</li> <li>캐싱 지원</li></ul></li> <li>언어 및 데이터베이스 중립성<ul><li>모든 어플리케이션과 호환이 잘됌</li></ul></li></ul></li> <li><p>REST API의 한계점</p> <ul><li>고정 구조 데이터 교환<ul><li>클라이언트 요청이 고정된 구조를 따라야 리소스 수신 가능</li></ul></li> <li>오버 패칭 &amp; 언더 패칭<ul><li>항상 전체 데이터 세트를 반환</li></ul></li></ul></li> <li><p>차이점</p> <ul><li>클라이언트 측 요청<ul><li>REST API<ul><li>HTTP 메서드, 엔드 포인트</li></ul></li> <li>GraphQL<ul><li>서버가 데이터를 반환하는 방식을 기술.</li> <li>모든 클라이언트 요청 = POST</li></ul></li></ul></li> <li>클라이언트에 반환되는 데이터<ul><li>REST API<ul><li>서버가 지정한 전체 리소스 구조</li></ul></li> <li>GraphQL<ul><li>클라이언트가 제공한 구조에 지정된 데이터만 반환</li></ul></li></ul></li> <li>서버 측 스키마<ul><li>REST API: X</li> <li>GraphQL: O</li></ul></li> <li>버전 관리<ul><li>REST API<ul><li>버전 관리 기능이 포함</li></ul></li> <li>GraphQL<ul><li>이전 버전 API와의 호환성이 필요</li></ul></li></ul></li> <li>오류 처리<ul><li>REST API<ul><li>오류 처리 기능을 빌드해야 함</li></ul></li> <li>GraphQL<ul><li>데이터 형식이 지정되어 있어, 자동으로 오류를 식별하고 메세지를 전달</li></ul></li></ul></li></ul></li> <li><p>GraphQL이 필요한 환경</p> <ul><li>대역폭이 제한되고, 요청 및 응답 수 최소화 =&gt; 통신 최적화</li> <li>하나의 엔드포인트</li> <li>클라이언트의 요청이 다양하고, 필요한 데이터(응답)이 각각 다른 경우</li></ul></li> <li><p>REST가 필요한 환경</p> <ul><li>애플리케이션 규모가 작음</li> <li>데이터 복잡성이 적음</li> <li>복잡한 데이터 쿼리가 필요 없음</li></ul></li>";return{c(){l=c("p"),l.innerHTML=u,a=w(),t=c("ul"),t.innerHTML=e},l(i){l=m(i,"P",{"data-svelte-h":!0}),_(l)!=="svelte-fwqfrf"&&(l.innerHTML=u),a=E(i),t=m(i,"UL",{"data-svelte-h":!0}),_(t)!=="svelte-1xczfsk"&&(t.innerHTML=e)},m(i,n){r(i,l,n),r(i,a,n),r(i,t,n)},p:T,d(i){i&&(o(l),o(a),o(t))}}}function q(s){let l,u;const a=[s[0],h];let t={$$slots:{default:[R]},$$scope:{ctx:s}};for(let e=0;e<a.length;e+=1)t=p(t,a[e]);return l=new G({props:t}),{c(){v(l.$$.fragment)},l(e){S(l.$$.fragment,e)},m(e,i){x(l,e,i),u=!0},p(e,[i]){const n=i&1?Q(a,[i&1&&d(e[0]),i&0&&d(h)]):{};i&2&&(n.$$scope={dirty:i,ctx:e}),l.$set(n)},i(e){u||(I(l.$$.fragment,e),u=!0)},o(e){A(l.$$.fragment,e),u=!1},d(e){$(l,e)}}}const h={title:"GraphQL과 REST API의 차이",image:"",alt:"",created:"2024-03-07T00:00:00.000Z",updated:"2024-03-07T00:00:00.000Z",tags:["GraphQL"],images:[],slug:"/Javascript/TIL/graphql/difference_from_restapi/+page.md",path:"/Javascript/TIL/graphql/difference_from_restapi",toc:!1};function H(s,l,u){return s.$$set=a=>{u(0,l=p(p({},l),f(a)))},l=f(l),[l]}class y extends L{constructor(l){super(),P(this,l,H,q,g,{})}}export{y as component};
