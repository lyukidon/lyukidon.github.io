import{s as P,h as b,i as L,n as q}from"../chunks/scheduler.4680106d.js";import{S as k,i as F,r as S,u as Z,v as j,d as z,t as A,w as D,g as h,s as x,h as m,A as p,c as H,k as T,a as r,f as u}from"../chunks/index.4ac987bf.js";import{P as W,g as B,a as y}from"../chunks/post_layout.3d8b50bb.js";function E(f){let e,o="This post has disabled table of contents.",i,n,a="When the <code>toc: false</code> on Front-Matter, toc should not be displayed.",s,l,M='<a href="#heading">Heading</a>',g,_,C='<a href="#heading-1">Heading</a>',v,c,$='<a href="#heading-2">Heading</a>';return{c(){e=h("p"),e.textContent=o,i=x(),n=h("p"),n.innerHTML=a,s=x(),l=h("h2"),l.innerHTML=M,g=x(),_=h("h3"),_.innerHTML=C,v=x(),c=h("h4"),c.innerHTML=$,this.h()},l(t){e=m(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-y4beyz"&&(e.textContent=o),i=H(t),n=m(t,"P",{"data-svelte-h":!0}),p(n)!=="svelte-1b99nud"&&(n.innerHTML=a),s=H(t),l=m(t,"H2",{id:!0,"data-svelte-h":!0}),p(l)!=="svelte-bvxltq"&&(l.innerHTML=M),g=H(t),_=m(t,"H3",{id:!0,"data-svelte-h":!0}),p(_)!=="svelte-1pcqacq"&&(_.innerHTML=C),v=H(t),c=m(t,"H4",{id:!0,"data-svelte-h":!0}),p(c)!=="svelte-akuw8s"&&(c.innerHTML=$),this.h()},h(){T(l,"id","heading"),T(_,"id","heading-1"),T(c,"id","heading-2")},m(t,d){r(t,e,d),r(t,i,d),r(t,n,d),r(t,s,d),r(t,l,d),r(t,g,d),r(t,_,d),r(t,v,d),r(t,c,d)},p:q,d(t){t&&(u(e),u(i),u(n),u(s),u(l),u(g),u(_),u(v),u(c))}}}function G(f){let e,o;const i=[f[0],w];let n={$$slots:{default:[E]},$$scope:{ctx:f}};for(let a=0;a<i.length;a+=1)n=b(n,i[a]);return e=new W({props:n}),{c(){S(e.$$.fragment)},l(a){Z(e.$$.fragment,a)},m(a,s){j(e,a,s),o=!0},p(a,[s]){const l=s&1?B(i,[s&1&&y(a[0]),s&0&&y(w)]):{};s&2&&(l.$$scope={dirty:s,ctx:a}),e.$set(l)},i(a){o||(z(e.$$.fragment,a),o=!0)},o(a){A(e.$$.fragment,a),o=!1},d(a){D(e,a)}}}const w={title:"ToC Disabled",summary:"This post has disabled table of contents.",created:"2021-12-12T00:00:00.000Z",tags:["Front-Matter"],toc:!1,updated:"2024-01-23T08:11:13.250Z",images:[],slug:"/hello-world/toc-disabled/+page.md",path:"/hello-world/toc-disabled"};function I(f,e,o){return f.$$set=i=>{o(0,e=b(b({},e),L(i)))},e=L(e),[e]}class O extends k{constructor(e){super(),F(this,e,I,G,P,{})}}export{O as component};
