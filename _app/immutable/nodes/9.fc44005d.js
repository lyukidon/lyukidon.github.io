import{s as Be,o as Ql,j as Xl,b as Kl,d as zl,u as Sl,g as Vl,e as Yl,c as Nl,k as we,h as St,i as Pl,n as $l}from"../chunks/scheduler.4680106d.js";import{S as Ie,i as Pe,g as p,h as f,j as Te,f as l,k as v,a as i,p as Wl,t as E,b as Jl,d as L,G as Ot,r as g,u as D,v as x,w as k,y as es,s as F,H as Al,m as Ut,A as h,c as m,F as ql,n as zt}from"../chunks/index.4ac987bf.js";import{P as ts,g as ls,a as Rl}from"../chunks/post_layout.31e93455.js";import"../chunks/posts.88079312.js";import{j as jt}from"../chunks/icon.6182ee93.js";import{T as Ol}from"../chunks/table.03f9994e.js";function ss(d){let t,a,n;const r=d[5].default,o=zl(r,d,d[4],null);return{c(){t=p("div"),o&&o.c()},l(u){t=f(u,"DIV",{});var c=Te(t);o&&o.l(c),c.forEach(l)},m(u,c){i(u,t,c),o&&o.m(t,null),n=!0},p(u,c){o&&o.p&&(!n||c&16)&&Sl(o,r,u,u[4],n?Yl(r,u[4],c,null):Vl(u[4]),null)},i(u){n||(L(o,u),u&&Nl(()=>{n&&(a||(a=Ot(t,jt,{},!0)),a.run(1))}),n=!0)},o(u){E(o,u),u&&(a||(a=Ot(t,jt,{},!1)),a.run(0)),n=!1},d(u){u&&l(t),o&&o.d(u),u&&a&&a.end()}}}function is(d){let t,a,n;const r=d[5].default,o=zl(r,d,d[4],null);return{c(){t=p("div"),o&&o.c()},l(u){t=f(u,"DIV",{});var c=Te(t);o&&o.l(c),c.forEach(l)},m(u,c){i(u,t,c),o&&o.m(t,null),n=!0},p(u,c){o&&o.p&&(!n||c&16)&&Sl(o,r,u,u[4],n?Yl(r,u[4],c,null):Vl(u[4]),null)},i(u){n||(L(o,u),u&&Nl(()=>{n&&(a||(a=Ot(t,jt,{},!0)),a.run(1))}),n=!0)},o(u){E(o,u),u&&(a||(a=Ot(t,jt,{},!1)),a.run(0)),n=!1},d(u){u&&l(t),o&&o.d(u),u&&a&&a.end()}}}function ns(d){let t,a,n,r;const o=[is,ss],u=[];function c(_,b){return _[0]?0:_[1]?1:-1}return~(a=c(d))&&(n=u[a]=o[a](d)),{c(){t=p("div"),n&&n.c(),this.h()},l(_){t=f(_,"DIV",{"data-testid":!0});var b=Te(t);n&&n.l(b),b.forEach(l),this.h()},h(){v(t,"data-testid","general-observer")},m(_,b){i(_,t,b),~a&&u[a].m(t,null),d[6](t),r=!0},p(_,[b]){let C=a;a=c(_),a===C?~a&&u[a].p(_,b):(n&&(Wl(),E(u[C],1,1,()=>{u[C]=null}),Jl()),~a?(n=u[a],n?n.p(_,b):(n=u[a]=o[a](_),n.c()),L(n,1),n.m(t,null)):n=null)},i(_){r||(L(n),r=!0)},o(_){E(n),r=!1},d(_){_&&l(t),~a&&u[a].d(),d[6](null)}}}function as(d,t,a){let{$$slots:n={},$$scope:r}=t,{threshold:o=.5}=t,{disable_observer:u=!1}=t,c=u,_,C=typeof IntersectionObserver<"u"&&!u?new IntersectionObserver(T=>{T.forEach(H=>{H.intersectionRatio>=o&&(a(1,c=!0),C.disconnect())})},{rootMargin:"0px",threshold:o}):null;Ql(()=>{C&&C.observe(_)}),Xl(()=>{C&&C.disconnect()});function Ee(T){Kl[T?"unshift":"push"](()=>{_=T,a(2,_)})}return d.$$set=T=>{"threshold"in T&&a(3,o=T.threshold),"disable_observer"in T&&a(0,u=T.disable_observer),"$$scope"in T&&a(4,r=T.$$scope)},[u,c,_,o,r,n,Ee]}class Vt extends Ie{constructor(t){super(),Pe(this,t,as,ns,Be,{threshold:3,disable_observer:0})}}function os(d){let t,a,n;return{c(){t=p("iframe"),this.h()},l(r){t=f(r,"IFRAME",{width:!0,height:!0,title:!0,scrolling:!0,frameborder:!0,allow:!0,src:!0,style:!0}),Te(t).forEach(l),this.h()},h(){v(t,"width",d[1]),v(t,"height",d[2]),v(t,"title",a=`soundcloud-${d[0]}`),v(t,"scrolling","false"),v(t,"frameborder","0"),v(t,"allow","autoplay"),we(t.src,n="https://w.soundcloud.com/player/?url="+d[0]+"&visual="+d[3])||v(t,"src",n),v(t,"style",d[5])},m(r,o){i(r,t,o)},p(r,o){o&2&&v(t,"width",r[1]),o&4&&v(t,"height",r[2]),o&1&&a!==(a=`soundcloud-${r[0]}`)&&v(t,"title",a),o&9&&!we(t.src,n="https://w.soundcloud.com/player/?url="+r[0]+"&visual="+r[3])&&v(t,"src",n),o&32&&v(t,"style",r[5])},d(r){r&&l(t)}}}function rs(d){let t,a;return t=new Vt({props:{disable_observer:d[4],$$slots:{default:[os]},$$scope:{ctx:d}}}),{c(){g(t.$$.fragment)},l(n){D(t.$$.fragment,n)},m(n,r){x(t,n,r),a=!0},p(n,[r]){const o={};r&16&&(o.disable_observer=n[4]),r&111&&(o.$$scope={dirty:r,ctx:n}),t.$set(o)},i(n){a||(L(t.$$.fragment,n),a=!0)},o(n){E(t.$$.fragment,n),a=!1},d(n){k(t,n)}}}function us(d,t,a){let{soundcloudLink:n=""}=t,{width:r="100%"}=t,{height:o="300px"}=t,{showVisual:u=!0}=t,{disable_observer:c=!1}=t,{iframe_styles:_=""}=t;return d.$$set=b=>{"soundcloudLink"in b&&a(0,n=b.soundcloudLink),"width"in b&&a(1,r=b.width),"height"in b&&a(2,o=b.height),"showVisual"in b&&a(3,u=b.showVisual),"disable_observer"in b&&a(4,c=b.disable_observer),"iframe_styles"in b&&a(5,_=b.iframe_styles)},[n,r,o,u,c,_]}class ds extends Ie{constructor(t){super(),Pe(this,t,us,rs,Be,{soundcloudLink:0,width:1,height:2,showVisual:3,disable_observer:4,iframe_styles:5})}}function ps(d){let t,a,n;return{c(){t=p("iframe"),this.h()},l(r){t=f(r,"IFRAME",{"data-testid":!0,title:!0,class:!0,src:!0,frameborder:!0,allow:!0,style:!0}),Te(t).forEach(l),this.h()},h(){v(t,"data-testid","spotify"),v(t,"title",a=`spotify-${d[0]}`),v(t,"class","spotify-sveltekit-embed"),we(t.src,n=`https://open.spotify.com/embed/${d[0]}`)||v(t,"src",n),v(t,"frameborder","0"),v(t,"allow","encrypted-media"),v(t,"style",d[2])},m(r,o){i(r,t,o)},p(r,o){o&1&&a!==(a=`spotify-${r[0]}`)&&v(t,"title",a),o&1&&!we(t.src,n=`https://open.spotify.com/embed/${r[0]}`)&&v(t,"src",n),o&4&&v(t,"style",r[2])},d(r){r&&l(t)}}}function fs(d){let t,a;return t=new Vt({props:{disable_observer:d[1],$$slots:{default:[ps]},$$scope:{ctx:d}}}),{c(){g(t.$$.fragment)},l(n){D(t.$$.fragment,n)},m(n,r){x(t,n,r),a=!0},p(n,[r]){const o={};r&2&&(o.disable_observer=n[1]),r&37&&(o.$$scope={dirty:r,ctx:n}),t.$set(o)},i(n){a||(L(t.$$.fragment,n),a=!0)},o(n){E(t.$$.fragment,n),a=!1},d(n){k(t,n)}}}function cs(d,t,a){let{spotifyLink:n=""}=t,{width:r="100%"}=t,{height:o="152px"}=t,{disable_observer:u=!1}=t,{iframe_styles:c=`
		border-radius: 0.8rem;
		height: ${o};
		width: ${r};
	`}=t;return d.$$set=_=>{"spotifyLink"in _&&a(0,n=_.spotifyLink),"width"in _&&a(3,r=_.width),"height"in _&&a(4,o=_.height),"disable_observer"in _&&a(1,u=_.disable_observer),"iframe_styles"in _&&a(2,c=_.iframe_styles)},[n,u,c,r,o]}class Fs extends Ie{constructor(t){super(),Pe(this,t,cs,fs,Be,{spotifyLink:0,width:3,height:4,disable_observer:1,iframe_styles:2})}}const ms={"1:1":"padding-top: 100%;","16:9":"padding-top: 56.25%;","4:3":"padding-top: 75%;","3:2":"padding-top: 66.66%;","8.5":"padding-top: 62.5%;"},jl=d=>ms[d];function vs(d){let t,a,n,r,o,u;return{c(){t=p("div"),a=p("iframe"),this.h()},l(c){t=f(c,"DIV",{style:!0});var _=Te(t);a=f(_,"IFRAME",{"data-testid":!0,title:!0,src:!0,frameborder:!0,allow:!0,style:!0}),Te(a).forEach(l),_.forEach(l),this.h()},h(){v(a,"data-testid","youTube"),v(a,"title",n=`youTube-${d[1].length>0?d[1]:d[0]}`),we(a.src,r=d[5])||v(a,"src",r),v(a,"frameborder","0"),v(a,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),a.allowFullscreen=!0,v(a,"style",o=`
	      position: absolute;
  	    top: 0;
    	  left: 0;
      	width: 100%;
      	height: 100%;
				${d[4]}
    `),v(t,"style",u=`
    	position: relative;
    	width: 100%;
  	  ${jl(d[2])}
  `)},m(c,_){i(c,t,_),es(t,a)},p(c,_){_&3&&n!==(n=`youTube-${c[1].length>0?c[1]:c[0]}`)&&v(a,"title",n),_&16&&o!==(o=`
	      position: absolute;
  	    top: 0;
    	  left: 0;
      	width: 100%;
      	height: 100%;
				${c[4]}
    `)&&v(a,"style",o),_&4&&u!==(u=`
    	position: relative;
    	width: 100%;
  	  ${jl(c[2])}
  `)&&v(t,"style",u)},d(c){c&&l(t)}}}function hs(d){let t,a;return t=new Vt({props:{disable_observer:d[3],$$slots:{default:[vs]},$$scope:{ctx:d}}}),{c(){g(t.$$.fragment)},l(n){D(t.$$.fragment,n)},m(n,r){x(t,n,r),a=!0},p(n,[r]){const o={};r&8&&(o.disable_observer=n[3]),r&32791&&(o.$$scope={dirty:r,ctx:n}),t.$set(o)},i(n){a||(L(t.$$.fragment,n),a=!0)},o(n){E(t.$$.fragment,n),a=!1},d(n){k(t,n)}}}function _s(d,t,a){let{youTubeId:n=""}=t,{listId:r=""}=t,{autoPlay:o=!1}=t,{aspectRatio:u="16:9"}=t,{skipTo:c={h:0,m:0,s:0}}=t,{disable_observer:_=!1}=t,{iframe_styles:b=`
		border-radius: 0.6rem;
	`}=t;const{h:C,m:Ee,s:T}=c,H=C*60*60,Ae=Ee*60,Le=H+Ae+T,He=`https://www.youtube-nocookie.com/embed/${n.length>0?`${n}?autoplay=${o}&start=${Le}`:`?videoseries?list=${r}`}`;return d.$$set=y=>{"youTubeId"in y&&a(0,n=y.youTubeId),"listId"in y&&a(1,r=y.listId),"autoPlay"in y&&a(6,o=y.autoPlay),"aspectRatio"in y&&a(2,u=y.aspectRatio),"skipTo"in y&&a(7,c=y.skipTo),"disable_observer"in y&&a(3,_=y.disable_observer),"iframe_styles"in y&&a(4,b=y.iframe_styles)},[n,r,u,_,b,He,o,c]}class bs extends Ie{constructor(t){super(),Pe(this,t,_s,hs,Be,{youTubeId:0,listId:1,autoPlay:6,aspectRatio:2,skipTo:7,disable_observer:3,iframe_styles:4})}}function ys(d){let t,a="<tr><th>Table Header 1</th> <th>Table Header 2</th> <th>Table Header 3</th></tr>",n,r,o="<tr><td>Division 1</td> <td>Division 2</td> <td>Division 3</td></tr> <tr><td>Division 1</td> <td>Division 2</td> <td>Division 3</td></tr> <tr><td>Division 1</td> <td>Division 2</td> <td>Division 3</td></tr>";return{c(){t=p("thead"),t.innerHTML=a,n=F(),r=p("tbody"),r.innerHTML=o},l(u){t=f(u,"THEAD",{"data-svelte-h":!0}),h(t)!=="svelte-gczjan"&&(t.innerHTML=a),n=m(u),r=f(u,"TBODY",{"data-svelte-h":!0}),h(r)!=="svelte-idip7f"&&(r.innerHTML=o)},m(u,c){i(u,t,c),i(u,n,c),i(u,r,c)},p:$l,d(u){u&&(l(t),l(n),l(r))}}}function Cs(d){let t,a='<tr><th align="left">Table Header 1</th> <th align="center">Table Header 2</th> <th align="right">Table Header 3</th></tr>',n,r,o='<tr><td align="left">Division 1</td> <td align="center">Division 2</td> <td align="right">Division 3</td></tr> <tr><td align="left">Division 1</td> <td align="center">Division 2</td> <td align="right">Division 3</td></tr> <tr><td align="left">Division 1</td> <td align="center">Division 2</td> <td align="right">Division 3</td></tr>';return{c(){t=p("thead"),t.innerHTML=a,n=F(),r=p("tbody"),r.innerHTML=o},l(u){t=f(u,"THEAD",{"data-svelte-h":!0}),h(t)!=="svelte-7vsuop"&&(t.innerHTML=a),n=m(u),r=f(u,"TBODY",{"data-svelte-h":!0}),h(r)!=="svelte-16i6pl9"&&(r.innerHTML=o)},m(u,c){i(u,t,c),i(u,n,c),i(u,r,c)},p:$l,d(u){u&&(l(t),l(n),l(r))}}}function Ts(d){let t,a='<a href="#headings">Headings</a>',n,r,o='<a href="#heading">Heading</a>',u,c,_='<a href="#heading-1">Heading</a>',b,C,Ee='<a href="#heading-2">Heading</a>',T,H,Ae='<a href="#heading-3">Heading</a>',Le,ge,He,y,Yt='<a href="#paragraphs">Paragraphs</a>',qe,$,Nt='<span class="spoiler">spoiler</span>',Re,Z,$t='<strong><em>The</em></strong> <em>quick</em> <u>brown</u> <a href="https://www.foxnews.com/" rel="nofollow noopener noreferrer external" target="_blank">fox</a> <code>jumps</code> <del>over</del> the lazy <strong>dog</strong>.',Oe,G,Zt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",je,Q,Gt="建格的何另始養離腳合兒現各談花車是都無處與費別、信善行修覺自！壓總談下市率應次司公母兒用什一線送用標地倒直作任老數年白安足個後引使名隊懷持日落異今特族？",Ue,X,Qt="一士我像衣買了人義，計念？",ze,K,Xt="期老外並中般灣作各現初知強車我的品式企國立市它北待不型師文人注信方，各成能久，然的孩界，他事應在創灣字母寫麼，會不作散際，學節水……全當名己會天還著行多是生如內他道了家至種樣見景時一……區行水影。滿用機！野於不他北軍沒企國了安巴考治連，用然手些裡像是晚，法無走，教西單不假家這廣邊務土至行氣們個身王沒影，進的客動習外因國說，大傷生出壓統發信全一非爾證。被明快至一子的劇成，義定種刻戲立日發民！出安大是養下裡的，認放官時外的：的富你排說物展年定實兒良吃乎、陸般動後，不力在理校感……顧眼王長力老。",Se,W,Kt="重多一？生光聯……動說麼了：起形市般我題臉事級。",Ve,J,Wt="<p>In solitude, where we are least alone.</p>",Ye,ee,Jt="私は絶対いよいよ漠然たる相当心に対してはずの他にできるならな。けっして今に養成めも何だか漠然たる仕事たないだけにしからならでをは話安んずるないですて、わざわざには聴いましたなけれた。権力を気がつきなのはどうしても先刻が毫もらしくでう。",Ne,te,el="ようやく嘉納さんに供獄とても承諾をやるでしょ習慣その主義それか攻撃にに対してお関係でたあるですと、その今は俺か釣竿頭に喜ぶば、嘉納さんののより考のそれをよくごふりと云ってあなた一団がお融和へ見えようにまあご経験にしずませば、とうとうもっとも誤解になるたでいるないのを思っですた。しかもしかしながら大首へする気もずいぶん美味と移ろたて、この言葉にもいうですてってがたにしてしまえたない。この限り時代のためその学校も私上を吹き込んんかと大森さんをしなませ、人の今日んというご講義ただですば、晩の時で長靴が始めだけの時代に前もっでいて、どうの今日が思えばそのためとあたかも足りんなとしだ事でが、ないますなて少し実職業いでし事だろたませ。",$e,le,tl="さて学校か不幸か話に教えですけれども、今中力が起るて得るですためがご講演の今に訊かたです。多年をはどうしても思うでいうんたずでと、まるで何とも繰り返しが周旋はさっそく悪いうので。",Ze,se,ll='<a href="#headings">scrollToTop</a>',Ge,Qe,Xe,M,sl='<a href="#lists">Lists</a>',Ke,w,il='<a href="#definition-list-dl">Definition List (dl)</a>',We,ie,nl="<dt>Definition List Title</dt><dd>This is a definition list division.</dd>",Je,B,al='<a href="#ordered-list-ol">Ordered List (ol)</a>',et,ne,ol="<li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li>",tt,I,rl='<a href="#unordered-list-ul">Unordered List (ul)</a>',lt,ae,ul="<li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li>",st,P,dl='<a href="#checkbox-list-ul">Checkbox List (ul)</a>',it,A,pl='<li class="task-list-item"><input type="checkbox" disabled=""/> List Item 1 unchecked</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> List Item 2 checked</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> List Item 3 checked<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""/> Sub List Item 1 unchecked</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> Sub List Item 1 checked</li></ul></li>',nt,q,fl='<a href="#table">Table</a>',at,R,ot,O,rt,oe,cl='<a href="#headings">scrollToTop</a>',ut,j,Fl='<a href="#footnotes">Footnotes</a>',dt,re,ml='Here is a footnote reference. <sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup>',pt,ue,vl='This is a long note. <sup id="fnref-longnote"><a href="#fn-longnote" class="footnote-ref">longnote</a></sup>',ft,de,hl='This is an inline note. <sup id="fnref-2"><a href="#fn-2" class="footnote-ref">2</a></sup>',ct,pe,_l='<a href="#headings">scrollToTop</a>',Ft,U,bl='<a href="#code">Code</a>',mt,De,Zl=`<pre class="shiki material-default with-title twoslash lsp" style="background-color: #263238; color: #EEFFFF" ts="true" title="examples/index.ts"><div class='code-title'>examples/index.ts</div><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #89DDFF">for</span><span style="color: #EEFFFF"> (</span><span style="color: #C792EA">let</span><span style="color: #EEFFFF"> <data-lsp lsp='let x: string' >x</data-lsp> </span><span style="color: #89DDFF">in</span><span style="color: #EEFFFF"> [</span><span style="color: #F78C6C">0</span><span style="color: #EEFFFF">]) <data-lsp lsp='var console: Console' >console</data-lsp></span><span style="color: #89DDFF">.</span><span style="color: #82AAFF"><data-lsp lsp='(method) Console.log(...data: any[]): void' >log</data-lsp></span><span style="color: #EEFFFF">(<data-lsp lsp='let x: string' >x</data-lsp>)</span></div></code></div></pre>`,xe,ke,Gl=`<pre class="shiki material-default twoslash lsp" style="background-color: #263238; color: #EEFFFF" ts="true"><div class="language-id">ts</div><div class='code-container'><code><div class='line highlight'><span style="color: #C792EA">interface</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">IdLabel</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line highlight'><span style="color: #EEFFFF">  </span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">number</span><span style="color: #EEFFFF"> </span><span style="color: #546E7A">/* some fields */</span></div><div class='line highlight'><span style="color: #89DDFF">&#125;</span></div><div class='line highlight'><span style="color: #C792EA">interface</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">NameLabel</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line highlight'><span style="color: #EEFFFF">  </span><span style="color: #F07178">name<data-lsp lsp='let a: NameLabel' ></data-lsp></span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">string</span><span style="color: #EEFFFF"> </span><span style="color: #546E7A">/* other fields */</span></div><div class='line highlight'><span style="color: #89DDFF">&#125;</span></div><div class='line dim'><span style="color: #C792EA">type</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">NameOrId</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">T</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">extends</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">number</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">|</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">string</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">T</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">extends</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">number</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">?</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">IdLabel</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">NameLabel</span></div><div class='line dim'><span style="color: #546E7A">// This comment should not be included</span></div><div class='line dim'>&nbsp;</div><div class='line dim'><span style="color: #546E7A">// ---cut---</span></div><div class='line dim'><span style="color: #C792EA">function</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">createLabel</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">T</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">extends</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">number</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">|</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">string</span><span style="color: #89DDFF">&gt;(</span><span style="color: #EEFFFF">idOrName</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">T</span><span style="color: #89DDFF">):</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">NameOrId</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">T</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line dim'><span style="color: #F07178">  </span><span style="color: #89DDFF">throw</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&apos;</span><span style="color: #C3E88D">unimplemented</span><span style="color: #89DDFF">&apos;</span></div><div class='line dim'><span style="color: #89DDFF">&#125;</span></div><div class='line dim'>&nbsp;</div><div class='line dim'><span style="color: #C792EA">let</span><span style="color: #EEFFFF"> a </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">createLabel</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&apos;</span><span style="color: #C3E88D">typescript</span><span style="color: #89DDFF">&apos;</span><span style="color: #EEFFFF">)</span></div></code></div></pre>`,Me,z,yl='<a href="#misc">Misc</a>',vt,fe,Cl="Lorem",ht,ce,Tl="ipsum",_t,Fe,El="dolor sit amet",bt,S,Ll="consectetur adipiscing elit",yt,V,Hl="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",Ct,Tt,Et,Lt,me,gl="リバースカードオープン、エネミーコントローラー！",Ht,ve,Dl="ライフを 1000 払い、コマンド入力、<kbd>←</kbd> <kbd>→</kbd> <kbd>A</kbd> <kbd>B</kbd>！",gt,he,xl="このコマンドにより、全てのアニヲタを破壊する！",Dt,_e,kl='<a href="#headings">scrollToTop</a>',xt,Y,Ml='<a href="#svelte-components">Svelte Components</a>',kt,be,Mt,wt,Bt,ye,It,Pt,At,Ce,qt,N,wl='<hr/> <ol><li id="fn-1">Here is the footnote.<a href="#fnref-1" class="footnote-backref">↩</a></li> <li id="fn-longnote">Here’s one footnote with longer identifier.<a href="#fnref-longnote" class="footnote-backref">↩</a></li> <li id="fn-2">You can type footnotes inline, so you don’t have to pick an identifier manually.<a href="#fnref-2" class="footnote-backref">↩</a></li></ol>',Rt;return R=new Ol({props:{$$slots:{default:[ys]},$$scope:{ctx:d}}}),O=new Ol({props:{$$slots:{default:[Cs]},$$scope:{ctx:d}}}),be=new bs({props:{youTubeId:"WysuxO4yR04"}}),ye=new Fs({props:{spotifyLink:"track/6pCXYUR3mBfXY8s0FYcZqQ",width:"100%"}}),Ce=new ds({props:{soundcloudLink:"https://soundcloud.com/hatsunemikuofficial/sets/sweety-glitch-remix-contest"}}),{c(){t=p("h2"),t.innerHTML=a,n=F(),r=p("h3"),r.innerHTML=o,u=F(),c=p("h4"),c.innerHTML=_,b=F(),C=p("h5"),C.innerHTML=Ee,T=F(),H=p("h6"),H.innerHTML=Ae,Le=F(),ge=p("hr"),He=F(),y=p("h2"),y.innerHTML=Yt,qe=F(),$=p("p"),$.innerHTML=Nt,Re=F(),Z=p("p"),Z.innerHTML=$t,Oe=F(),G=p("p"),G.textContent=Zt,je=F(),Q=p("p"),Q.textContent=Gt,Ue=F(),X=p("p"),X.textContent=Qt,ze=F(),K=p("p"),K.textContent=Xt,Se=F(),W=p("p"),W.textContent=Kt,Ve=F(),J=p("blockquote"),J.innerHTML=Wt,Ye=F(),ee=p("p"),ee.textContent=Jt,Ne=F(),te=p("p"),te.textContent=el,$e=F(),le=p("p"),le.textContent=tl,Ze=F(),se=p("p"),se.innerHTML=ll,Ge=F(),Qe=p("hr"),Xe=F(),M=p("h2"),M.innerHTML=sl,Ke=F(),w=p("h3"),w.innerHTML=il,We=F(),ie=p("dl"),ie.innerHTML=nl,Je=F(),B=p("h3"),B.innerHTML=al,et=F(),ne=p("ol"),ne.innerHTML=ol,tt=F(),I=p("h3"),I.innerHTML=rl,lt=F(),ae=p("ul"),ae.innerHTML=ul,st=F(),P=p("h3"),P.innerHTML=dl,it=F(),A=p("ul"),A.innerHTML=pl,nt=F(),q=p("h2"),q.innerHTML=fl,at=F(),g(R.$$.fragment),ot=F(),g(O.$$.fragment),rt=F(),oe=p("p"),oe.innerHTML=cl,ut=F(),j=p("h2"),j.innerHTML=Fl,dt=F(),re=p("p"),re.innerHTML=ml,pt=F(),ue=p("p"),ue.innerHTML=vl,ft=F(),de=p("p"),de.innerHTML=hl,ct=F(),pe=p("p"),pe.innerHTML=_l,Ft=F(),U=p("h2"),U.innerHTML=bl,mt=F(),De=new Al(!1),xe=F(),ke=new Al(!1),Me=F(),z=p("h2"),z.innerHTML=yl,vt=F(),fe=p("sup"),fe.textContent=Cl,ht=F(),ce=p("sub"),ce.textContent=Tl,_t=F(),Fe=p("cite"),Fe.textContent=El,bt=Ut(", "),S=p("acronym"),S.textContent=Ll,yt=Ut(", "),V=p("abbr"),V.textContent=Hl,Ct=Ut(". Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),Tt=p("br"),Et=p("br"),Lt=F(),me=p("p"),me.textContent=gl,Ht=F(),ve=p("p"),ve.innerHTML=Dl,gt=F(),he=p("p"),he.textContent=xl,Dt=F(),_e=p("p"),_e.innerHTML=kl,xt=F(),Y=p("h2"),Y.innerHTML=Ml,kt=F(),g(be.$$.fragment),Mt=F(),wt=p("br"),Bt=F(),g(ye.$$.fragment),It=F(),Pt=p("br"),At=F(),g(Ce.$$.fragment),qt=F(),N=p("div"),N.innerHTML=wl,this.h()},l(e){t=f(e,"H2",{id:!0,"data-svelte-h":!0}),h(t)!=="svelte-17ezzq3"&&(t.innerHTML=a),n=m(e),r=f(e,"H3",{id:!0,"data-svelte-h":!0}),h(r)!=="svelte-1lz1oii"&&(r.innerHTML=o),u=m(e),c=f(e,"H4",{id:!0,"data-svelte-h":!0}),h(c)!=="svelte-18swq4u"&&(c.innerHTML=_),b=m(e),C=f(e,"H5",{id:!0,"data-svelte-h":!0}),h(C)!=="svelte-seo8oo"&&(C.innerHTML=Ee),T=m(e),H=f(e,"H6",{id:!0,"data-svelte-h":!0}),h(H)!=="svelte-11zzhhm"&&(H.innerHTML=Ae),Le=m(e),ge=f(e,"HR",{}),He=m(e),y=f(e,"H2",{id:!0,"data-svelte-h":!0}),h(y)!=="svelte-1jrm51r"&&(y.innerHTML=Yt),qe=m(e),$=f(e,"P",{"data-svelte-h":!0}),h($)!=="svelte-1cwujs"&&($.innerHTML=Nt),Re=m(e),Z=f(e,"P",{"data-svelte-h":!0}),h(Z)!=="svelte-1smaymh"&&(Z.innerHTML=$t),Oe=m(e),G=f(e,"P",{"data-svelte-h":!0}),h(G)!=="svelte-rzm3sy"&&(G.textContent=Zt),je=m(e),Q=f(e,"P",{"data-svelte-h":!0}),h(Q)!=="svelte-1rcwbbl"&&(Q.textContent=Gt),Ue=m(e),X=f(e,"P",{"data-svelte-h":!0}),h(X)!=="svelte-19ezoke"&&(X.textContent=Qt),ze=m(e),K=f(e,"P",{"data-svelte-h":!0}),h(K)!=="svelte-k1vvek"&&(K.textContent=Xt),Se=m(e),W=f(e,"P",{"data-svelte-h":!0}),h(W)!=="svelte-5q7uy2"&&(W.textContent=Kt),Ve=m(e),J=f(e,"BLOCKQUOTE",{"data-svelte-h":!0}),h(J)!=="svelte-1t277r2"&&(J.innerHTML=Wt),Ye=m(e),ee=f(e,"P",{"data-svelte-h":!0}),h(ee)!=="svelte-dbq3jo"&&(ee.textContent=Jt),Ne=m(e),te=f(e,"P",{"data-svelte-h":!0}),h(te)!=="svelte-br4gki"&&(te.textContent=el),$e=m(e),le=f(e,"P",{"data-svelte-h":!0}),h(le)!=="svelte-63jeqz"&&(le.textContent=tl),Ze=m(e),se=f(e,"P",{"data-svelte-h":!0}),h(se)!=="svelte-11pdwd8"&&(se.innerHTML=ll),Ge=m(e),Qe=f(e,"HR",{}),Xe=m(e),M=f(e,"H2",{id:!0,"data-svelte-h":!0}),h(M)!=="svelte-g7u641"&&(M.innerHTML=sl),Ke=m(e),w=f(e,"H3",{id:!0,"data-svelte-h":!0}),h(w)!=="svelte-1l26dxc"&&(w.innerHTML=il),We=m(e),ie=f(e,"DL",{"data-svelte-h":!0}),h(ie)!=="svelte-1593q4a"&&(ie.innerHTML=nl),Je=m(e),B=f(e,"H3",{id:!0,"data-svelte-h":!0}),h(B)!=="svelte-1e2vcc5"&&(B.innerHTML=al),et=m(e),ne=f(e,"OL",{"data-svelte-h":!0}),h(ne)!=="svelte-1lrkorm"&&(ne.innerHTML=ol),tt=m(e),I=f(e,"H3",{id:!0,"data-svelte-h":!0}),h(I)!=="svelte-1r3t7r6"&&(I.innerHTML=rl),lt=m(e),ae=f(e,"UL",{"data-svelte-h":!0}),h(ae)!=="svelte-1m0ot56"&&(ae.innerHTML=ul),st=m(e),P=f(e,"H3",{id:!0,"data-svelte-h":!0}),h(P)!=="svelte-19gylr7"&&(P.innerHTML=dl),it=m(e),A=f(e,"UL",{class:!0,"data-svelte-h":!0}),h(A)!=="svelte-xge1gw"&&(A.innerHTML=pl),nt=m(e),q=f(e,"H2",{id:!0,"data-svelte-h":!0}),h(q)!=="svelte-47p9vw"&&(q.innerHTML=fl),at=m(e),D(R.$$.fragment,e),ot=m(e),D(O.$$.fragment,e),rt=m(e),oe=f(e,"P",{"data-svelte-h":!0}),h(oe)!=="svelte-11pdwd8"&&(oe.innerHTML=cl),ut=m(e),j=f(e,"H2",{id:!0,"data-svelte-h":!0}),h(j)!=="svelte-u5fi6x"&&(j.innerHTML=Fl),dt=m(e),re=f(e,"P",{"data-svelte-h":!0}),h(re)!=="svelte-jidotm"&&(re.innerHTML=ml),pt=m(e),ue=f(e,"P",{"data-svelte-h":!0}),h(ue)!=="svelte-fsvclw"&&(ue.innerHTML=vl),ft=m(e),de=f(e,"P",{"data-svelte-h":!0}),h(de)!=="svelte-xyllmn"&&(de.innerHTML=hl),ct=m(e),pe=f(e,"P",{"data-svelte-h":!0}),h(pe)!=="svelte-11pdwd8"&&(pe.innerHTML=_l),Ft=m(e),U=f(e,"H2",{id:!0,"data-svelte-h":!0}),h(U)!=="svelte-1gehoc9"&&(U.innerHTML=bl),mt=m(e),De=ql(e,!1),xe=m(e),ke=ql(e,!1),Me=m(e),z=f(e,"H2",{id:!0,"data-svelte-h":!0}),h(z)!=="svelte-1n59eic"&&(z.innerHTML=yl),vt=m(e),fe=f(e,"SUP",{"data-svelte-h":!0}),h(fe)!=="svelte-17o8npf"&&(fe.textContent=Cl),ht=m(e),ce=f(e,"SUB",{"data-svelte-h":!0}),h(ce)!=="svelte-1h4d230"&&(ce.textContent=Tl),_t=m(e),Fe=f(e,"CITE",{"data-svelte-h":!0}),h(Fe)!=="svelte-2sv5mx"&&(Fe.textContent=El),bt=zt(e,", "),S=f(e,"ACRONYM",{title:!0,"data-svelte-h":!0}),h(S)!=="svelte-1bkbv8l"&&(S.textContent=Ll),yt=zt(e,", "),V=f(e,"ABBR",{title:!0,"data-svelte-h":!0}),h(V)!=="svelte-1qfm1q8"&&(V.textContent=Hl),Ct=zt(e,". Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),Tt=f(e,"BR",{}),Et=f(e,"BR",{}),Lt=m(e),me=f(e,"P",{"data-svelte-h":!0}),h(me)!=="svelte-d56c1z"&&(me.textContent=gl),Ht=m(e),ve=f(e,"P",{"data-svelte-h":!0}),h(ve)!=="svelte-i6obr"&&(ve.innerHTML=Dl),gt=m(e),he=f(e,"P",{"data-svelte-h":!0}),h(he)!=="svelte-a1w1jh"&&(he.textContent=xl),Dt=m(e),_e=f(e,"P",{"data-svelte-h":!0}),h(_e)!=="svelte-11pdwd8"&&(_e.innerHTML=kl),xt=m(e),Y=f(e,"H2",{id:!0,"data-svelte-h":!0}),h(Y)!=="svelte-mjglpj"&&(Y.innerHTML=Ml),kt=m(e),D(be.$$.fragment,e),Mt=m(e),wt=f(e,"BR",{}),Bt=m(e),D(ye.$$.fragment,e),It=m(e),Pt=f(e,"BR",{}),At=m(e),D(Ce.$$.fragment,e),qt=m(e),N=f(e,"DIV",{class:!0,"data-svelte-h":!0}),h(N)!=="svelte-11hrpf6"&&(N.innerHTML=wl),this.h()},h(){v(t,"id","headings"),v(r,"id","heading"),v(c,"id","heading-1"),v(C,"id","heading-2"),v(H,"id","heading-3"),v(y,"id","paragraphs"),v(M,"id","lists"),v(w,"id","definition-list-dl"),v(B,"id","ordered-list-ol"),v(I,"id","unordered-list-ul"),v(P,"id","checkbox-list-ul"),v(A,"class","contains-task-list"),v(q,"id","table"),v(j,"id","footnotes"),v(U,"id","code"),De.a=xe,ke.a=Me,v(z,"id","misc"),v(S,"title","Consectetur Adipiscing Elit"),v(V,"title","Aliqua"),v(Y,"id","svelte-components"),v(N,"class","footnotes")},m(e,s){i(e,t,s),i(e,n,s),i(e,r,s),i(e,u,s),i(e,c,s),i(e,b,s),i(e,C,s),i(e,T,s),i(e,H,s),i(e,Le,s),i(e,ge,s),i(e,He,s),i(e,y,s),i(e,qe,s),i(e,$,s),i(e,Re,s),i(e,Z,s),i(e,Oe,s),i(e,G,s),i(e,je,s),i(e,Q,s),i(e,Ue,s),i(e,X,s),i(e,ze,s),i(e,K,s),i(e,Se,s),i(e,W,s),i(e,Ve,s),i(e,J,s),i(e,Ye,s),i(e,ee,s),i(e,Ne,s),i(e,te,s),i(e,$e,s),i(e,le,s),i(e,Ze,s),i(e,se,s),i(e,Ge,s),i(e,Qe,s),i(e,Xe,s),i(e,M,s),i(e,Ke,s),i(e,w,s),i(e,We,s),i(e,ie,s),i(e,Je,s),i(e,B,s),i(e,et,s),i(e,ne,s),i(e,tt,s),i(e,I,s),i(e,lt,s),i(e,ae,s),i(e,st,s),i(e,P,s),i(e,it,s),i(e,A,s),i(e,nt,s),i(e,q,s),i(e,at,s),x(R,e,s),i(e,ot,s),x(O,e,s),i(e,rt,s),i(e,oe,s),i(e,ut,s),i(e,j,s),i(e,dt,s),i(e,re,s),i(e,pt,s),i(e,ue,s),i(e,ft,s),i(e,de,s),i(e,ct,s),i(e,pe,s),i(e,Ft,s),i(e,U,s),i(e,mt,s),De.m(Zl,e,s),i(e,xe,s),ke.m(Gl,e,s),i(e,Me,s),i(e,z,s),i(e,vt,s),i(e,fe,s),i(e,ht,s),i(e,ce,s),i(e,_t,s),i(e,Fe,s),i(e,bt,s),i(e,S,s),i(e,yt,s),i(e,V,s),i(e,Ct,s),i(e,Tt,s),i(e,Et,s),i(e,Lt,s),i(e,me,s),i(e,Ht,s),i(e,ve,s),i(e,gt,s),i(e,he,s),i(e,Dt,s),i(e,_e,s),i(e,xt,s),i(e,Y,s),i(e,kt,s),x(be,e,s),i(e,Mt,s),i(e,wt,s),i(e,Bt,s),x(ye,e,s),i(e,It,s),i(e,Pt,s),i(e,At,s),x(Ce,e,s),i(e,qt,s),i(e,N,s),Rt=!0},p(e,s){const Bl={};s&2&&(Bl.$$scope={dirty:s,ctx:e}),R.$set(Bl);const Il={};s&2&&(Il.$$scope={dirty:s,ctx:e}),O.$set(Il)},i(e){Rt||(L(R.$$.fragment,e),L(O.$$.fragment,e),L(be.$$.fragment,e),L(ye.$$.fragment,e),L(Ce.$$.fragment,e),Rt=!0)},o(e){E(R.$$.fragment,e),E(O.$$.fragment,e),E(be.$$.fragment,e),E(ye.$$.fragment,e),E(Ce.$$.fragment,e),Rt=!1},d(e){e&&(l(t),l(n),l(r),l(u),l(c),l(b),l(C),l(T),l(H),l(Le),l(ge),l(He),l(y),l(qe),l($),l(Re),l(Z),l(Oe),l(G),l(je),l(Q),l(Ue),l(X),l(ze),l(K),l(Se),l(W),l(Ve),l(J),l(Ye),l(ee),l(Ne),l(te),l($e),l(le),l(Ze),l(se),l(Ge),l(Qe),l(Xe),l(M),l(Ke),l(w),l(We),l(ie),l(Je),l(B),l(et),l(ne),l(tt),l(I),l(lt),l(ae),l(st),l(P),l(it),l(A),l(nt),l(q),l(at),l(ot),l(rt),l(oe),l(ut),l(j),l(dt),l(re),l(pt),l(ue),l(ft),l(de),l(ct),l(pe),l(Ft),l(U),l(mt),De.d(),l(xe),ke.d(),l(Me),l(z),l(vt),l(fe),l(ht),l(ce),l(_t),l(Fe),l(bt),l(S),l(yt),l(V),l(Ct),l(Tt),l(Et),l(Lt),l(me),l(Ht),l(ve),l(gt),l(he),l(Dt),l(_e),l(xt),l(Y),l(kt),l(Mt),l(wt),l(Bt),l(It),l(Pt),l(At),l(qt),l(N)),k(R,e),k(O,e),k(be,e),k(ye,e),k(Ce,e)}}}function Es(d){let t,a;const n=[d[0],Ul];let r={$$slots:{default:[Ts]},$$scope:{ctx:d}};for(let o=0;o<n.length;o+=1)r=St(r,n[o]);return t=new ts({props:r}),{c(){g(t.$$.fragment)},l(o){D(t.$$.fragment,o)},m(o,u){x(t,o,u),a=!0},p(o,[u]){const c=u&1?ls(n,[u&1&&Rl(o[0]),u&0&&Rl(Ul)]):{};u&2&&(c.$$scope={dirty:u,ctx:o}),t.$set(c)},i(o){a||(L(t.$$.fragment,o),a=!0)},o(o){E(t.$$.fragment,o),a=!1},d(o){k(t,o)}}}const Ul={title:"Elements",created:"2021-12-12T00:00:00.000Z",tags:["Urara","Elements"],updated:"2024-01-23T08:11:13.250Z",images:[],slug:"/hello-world/elements/+page.svelte.md",path:"/hello-world/elements",toc:[{depth:2,title:"Headings",slug:"headings"},{depth:3,title:"Heading",slug:"heading"},{depth:4,title:"Heading",slug:"heading-1"},{depth:5,title:"Heading",slug:"heading-2"},{depth:6,title:"Heading",slug:"heading-3"},{depth:2,title:"Paragraphs",slug:"paragraphs"},{depth:2,title:"Lists",slug:"lists"},{depth:3,title:"Definition List (dl)",slug:"definition-list-dl"},{depth:3,title:"Ordered List (ol)",slug:"ordered-list-ol"},{depth:3,title:"Unordered List (ul)",slug:"unordered-list-ul"},{depth:3,title:"Checkbox List (ul)",slug:"checkbox-list-ul"},{depth:2,title:"Table",slug:"table"},{depth:2,title:"Footnotes",slug:"footnotes"},{depth:2,title:"Code",slug:"code"},{depth:2,title:"Misc",slug:"misc"},{depth:2,title:"Svelte Components",slug:"svelte-components"}]};function Ls(d,t,a){return d.$$set=n=>{a(0,t=St(St({},t),Pl(n)))},t=Pl(t),[t]}class ws extends Ie{constructor(t){super(),Pe(this,t,Ls,Es,Be,{})}}export{ws as component};
