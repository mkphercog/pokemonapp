(this.webpackJsonppokemonapp=this.webpackJsonppokemonapp||[]).push([[0],{19:function(n,e,t){n.exports=t.p+"static/media/questionMark.904ba24f.png"},31:function(n,e,t){n.exports=t.p+"static/media/pokemon-logo.956f3234.png"},36:function(n,e,t){n.exports=t(48)},48:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(18),i=t.n(c),o=t(3),u=t(2);function l(){var n=Object(o.a)(["\n  height: 100%;\n"]);return l=function(){return n},n}function f(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 10vh;\n  background-color: khaki;\n"]);return f=function(){return n},n}var s=u.default.header(f()),d=u.default.img(l()),p=t(31),m=t.n(p),h=function(){return a.a.createElement(s,null,a.a.createElement(d,{src:m.a}))},g=t(17);function b(){var n=Object(o.a)(["\n  color: burlywood;\n  padding: 5px 15px;\n  text-decoration: none;\n  font-size: 14px;\n  transition: 0.2s;\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n  }\n\n  :hover {\n    background-color: khaki;\n    color: saddlebrown;\n  }\n\n  &.active {\n    color: saddlebrown;\n    background-color: khaki;\n  }\n"]);return b=function(){return n},n}function E(){var n=Object(o.a)(["\n  display: flex;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n"]);return E=function(){return n},n}function O(){var n=Object(o.a)(["\n  width: 100%;\n  background-color: saddlebrown;\n"]);return O=function(){return n},n}var x=u.default.nav(O()),j=u.default.ul(E()),v=Object(u.default)(g.b)(b()),P=function(){return a.a.createElement(x,null,a.a.createElement(j,null,a.a.createElement(v,{to:"/",exact:!0},"Losuj"),a.a.createElement(v,{to:"/list"},"Lista")))},y=t(5),R=t(8);function _(){var n=Object(o.a)(["\n  flex-grow: 0;\n  padding: 5px 10px;\n  background-color: lightyellow;\n  border: 2px solid khaki;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 14px;\n  color: black;\n  border-radius: 10px;\n  transition: 0.2s;\n  cursor: pointer;\n  outline-style: none;\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n  }\n\n  :hover {\n    transform: scale(1.2);\n    color: black;\n    background-color: khaki;\n    border: 2px solid lightyellow;\n  }\n"]);return _=function(){return n},n}var w=u.default.button(_()),k=function(n){var e=n.fun,t=n.children;return a.a.createElement(w,{onClick:function(){return e()}},t)};function N(){var n=Object(o.a)(["\n  display: inline-block;\n  position: absolute;\n  left: 8px;\n  width: 16px;\n  background: khaki;\n  animation: "," 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n\n  :nth-child(1) {\n    left: 8px;\n    animation-delay: -0.24s;\n  }\n  :nth-child(2) {\n    left: 32px;\n    animation-delay: -0.12s;\n  }\n  :nth-child(3) {\n    left: 56px;\n    animation-delay: 0;\n  }\n"]);return N=function(){return n},n}function G(){var n=Object(o.a)([" \n  0% {\n    top: 8px;\n    height: 64px;\n  }\n  50%, 100% {\n    top: 24px;\n    height: 32px;\n  }\n"]);return G=function(){return n},n}function I(){var n=Object(o.a)(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n"]);return I=function(){return n},n}var T=u.default.div(I()),L=Object(u.keyframes)(G()),M=u.default.div(N(),L),A=function(){return a.a.createElement(T,null,a.a.createElement(M,null),a.a.createElement(M,null),a.a.createElement(M,null))},C=t(6),H=t.n(C),D=t(13);function F(){var n=Object(o.a)(["\n  margin-top: 10px;\n  max-width: 100px;\n  max-height: 100px;\n  transform: scale(1.4);\n"]);return F=function(){return n},n}function S(){var n=Object(o.a)(["\n  font-size: 20px;\n  text-transform: uppercase;\n\n  @media (min-width: 768px) {\n    font-size: 25px;\n  }\n"]);return S=function(){return n},n}function z(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  margin-bottom: 50px;\n  min-height: 200px;\n\n  @media (orientation: landscape) and (max-width: 768px) {\n    min-height: 100px;\n  }\n"]);return z=function(){return n},n}function K(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]);return K=function(){return n},n}var B=u.default.div(K()),J=u.default.div(z()),U=u.default.h1(S()),V=u.default.img(F()),X=t(19),q=t.n(X),W=function(){var n=Object(R.c)((function(n){return n.randomPokemon})),e=n.fetchingRandom,t=n.errorRandom,c=n.fetchingRandomPng,i=n.data,o=i.name,u=i.id,l=i.sprites,f=Object(r.useRef)(u),s=Object(R.b)();Object(r.useEffect)((function(){var n;l&&0!==u&&u!==f.current&&(s((n=l.front_default,function(){var e=Object(D.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCHING_RANDOM_PNG"}),e.next=3,fetch(n).then((function(n){if(200===n.status)return n})).then((function(n){return t({type:"FETCHED_RANDOM_PNG",payload:null===n||void 0===n?void 0:n.url})})).catch((function(n){t({type:"ERROR_RANDOM_PNG"}),console.log(n)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())),f.current=u)}),[u,l,s]);var d=Object(r.useMemo)((function(){return c?a.a.createElement(A,null):a.a.createElement(V,{src:l.front_default.length?l.front_default:q.a,alt:"Pokemon",title:o})}),[c,o,l]),p=Object(r.useCallback)((function(){var n,e;s((e=807,n=Math.floor(Math.random()*e+1),function(){var e=Object(D.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCHING_RANDOM"}),e.next=3,fetch("".concat("https://pokeapi.co/api/v2/pokemon/").concat(n)).then((function(n){if(200===n.status)return n.json()})).then((function(n){return t({type:"FETCHED_RANDOM",payload:n})})).catch((function(n){t({type:"ERROR_RANDOM"}),console.log(n)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()))}),[s]);return a.a.createElement(B,null,a.a.createElement(J,null,e||t?a.a.createElement(A,null):a.a.createElement(a.a.Fragment,null,a.a.createElement(U,null,"".concat(o," ").concat(u?"(".concat(u,")"):"")),d)),a.a.createElement(k,{fun:p},"Losuj"))},Q=function(n){return function(){var e=Object(D.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCHING_LIST"}),e.next=3,fetch("".concat(n)).then((function(n){if(200===n.status)return n.json()})).then((function(n){t({type:"FETCHED_LIST",payload:n})})).catch((function(n){t({type:"ERROR_LIST"}),console.log(n)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()};function Y(){var n=Object(o.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 10px;\n"]);return Y=function(){return n},n}function Z(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 45%;\n  margin: 10px 0;\n\n  @media (min-width: 768px) {\n    width: 20%;\n  }\n"]);return Z=function(){return n},n}var $=u.default.div(Z()),nn=u.default.div(Y()),en=function(n){var e=n.pokePerPageButtons,t=Object(R.c)((function(n){return n.pokemonList})),r=t.pokemonsPerPage,c=t.currentPage,i=t.data,o=i.next,u=i.previous,l=Object(R.b)(),f=e.map((function(n){return a.a.createElement(k,{key:n,fun:function(){l({type:"CHANGE_NUMBER_OF_POKEMON_PER_PAGE",payload:n}),l({type:"RESET_LIST_PAGE"})}},n)}));return a.a.createElement($,null,a.a.createElement(nn,null,a.a.createElement(k,{fun:function(){u&&(l({type:"PREV_LIST_PAGE"}),l(Q(u)))}},"<"),c,a.a.createElement(k,{fun:function(){var n=null===o||void 0===o?void 0:o.slice(o.indexOf("limit=")+"limit=".length,o.length);o&&Number(n)===r&&(l({type:"NEXT_LIST_PAGE"}),l(Q(o)))}},">")),a.a.createElement(nn,null,f))};function tn(){var n=Object(o.a)(["\n  max-width: 80px;\n  max-height: 80px;\n  margin-top: 10px;\n\n  @media (min-width: 768px) {\n    max-width: 100px;\n    max-height: 100px;\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(o.a)(["\n  text-transform: uppercase;\n  font-size: 10px;\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n"]);return rn=function(){return n},n}function an(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: calc(100% / 3);\n  height: calc(100% / 3);\n  margin: 15px 0;\n  padding: 5px;\n  transition: 0.2s;\n\n  @media (min-width: 1024px) {\n    width: calc(100% / 4);\n    height: calc(100% / 4);\n    margin: 15px 20px;\n    :hover {\n      border-radius: 10px;\n      background-color: lightgray;\n      cursor: pointer;\n    }\n  }\n"]);return an=function(){return n},n}function cn(){var n=Object(o.a)(["\n  flex-grow: 1;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  width: 95%;\n  flex-grow: 1;\n  margin: 15px 0 0;\n  padding: 10px;\n\n  @media (min-width: 768px) {\n    width: 85%;\n  }\n"]);return cn=function(){return n},n}function on(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 10px;\n"]);return on=function(){return n},n}var un=u.default.div(on()),ln=u.default.div(cn()),fn=u.default.div(an()),sn=u.default.p(rn()),dn=u.default.img(tn()),pn=function(){var n=Object(R.c)((function(n){return n.pokemonList})),e=n.fetchingList,t=n.pngs,c=n.pokemonsPerPage,i=n.data.results,o=Object(r.useMemo)((function(){return t.length<c?[]:i.map((function(n){var e=n.url.slice(n.url.indexOf("/pokemon/"),n.url.length-1);return n.image=t.find((function(n){return n.includes("".concat(e,".png"))}))||"Not found",n}))}),[t,i,c]),u=Object(r.useMemo)((function(){return o.map((function(n){var e="Not found"===n.image?a.a.createElement(dn,{src:q.a,alt:n.name}):a.a.createElement(dn,{src:n.image,alt:n.name});return a.a.createElement(fn,{key:n.name},a.a.createElement(sn,null,n.name),e)}))}),[o]);return a.a.createElement(un,null,a.a.createElement(ln,null,e||t.length<c?a.a.createElement(A,null):u),a.a.createElement(en,{pokePerPageButtons:[6,12,33]}))};function mn(){var n=Object(o.a)(["\n  flex-grow: 1;\n  width: 100%;\n  background-color: whitesmoke;\n"]);return mn=function(){return n},n}var hn=u.default.main(mn()),gn=function(){return a.a.createElement(hn,null,a.a.createElement(y.c,null,a.a.createElement(y.a,{path:"/",exact:!0},a.a.createElement(W,null)),a.a.createElement(y.a,{path:"/list",exact:!0},a.a.createElement(pn,null))))};function bn(){var n=Object(o.a)(["\n  color: khaki;\n  text-decoration: none;\n  transition: 0.2s;\n\n  @media (min-width: 1024px) {\n    :hover {\n      color: goldenrod;\n    }\n  }\n"]);return bn=function(){return n},n}function En(){var n=Object(o.a)(["\n  color: white;\n  font-size: 12px;\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n"]);return En=function(){return n},n}function On(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 5px 0;\n  background-color: gray;\n"]);return On=function(){return n},n}var xn=u.default.footer(On()),jn=u.default.p(En()),vn=u.default.a(bn()),Pn=function(){return a.a.createElement(xn,null,a.a.createElement(jn,null,"Projekt i realizacja"," ",a.a.createElement(vn,{href:"https://mkphercog.github.io/mywebsite/#/",target:"blanc"},"Marcin Hercog")))},yn=t(33);function Rn(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  margin: 0 auto;\n\n  @media (min-width: 1024px) {\n    width: 1024px;\n  }\n"]);return Rn=function(){return n},n}function _n(){var n=Object(o.a)(["\n  ","\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n font-family: Arial, Helvetica, sans-serif;\n} \n"]);return _n=function(){return n},n}var wn=Object(u.createGlobalStyle)(_n(),yn.normalize),kn=u.default.div(Rn()),Nn=function(){var n=Object(R.c)((function(n){return n.pokemonList})),e=n.fetchingList,t=n.images,c=n.pokemonsPerPage,i=n.data.results,o="https://pokeapi.co/api/v2/pokemon?limit=".concat(c,"&offset=").concat(0),u=Object(R.b)();return Object(r.useEffect)((function(){u(Q(o))}),[u,o]),Object(r.useEffect)((function(){var n;e||u((n=i,function(){var e=Object(D.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCHING_POKE_IMAGES"}),e.next=3,Promise.all(n.map(function(){var n=Object(D.a)(H.a.mark((function n(e){return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e.url);case 2:return n.next=4,n.sent.json().then((function(n){t({type:"FETCHED_POKE_IMAGES",payload:n.sprites.front_default})})).catch((function(n){t({type:"ERROR_POKE_IMAGES"}),console.log(n)}));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()))}),[e,i,u]),Object(r.useEffect)((function(){var n;t.length===c&&u((n=t,function(){var e=Object(D.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCHING_POKE_PNG"}),e.next=3,Promise.all(n.map(function(){var n=Object(D.a)(H.a.mark((function n(e){return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e).then((function(n){t({type:"FETCHED_POKE_PNG",payload:n.url})})).catch((function(n){t({type:"ERROR_POKE_PNG"}),console.log(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()))}),[t,u,c]),a.a.createElement(kn,null,a.a.createElement(h,null),a.a.createElement(P,null),a.a.createElement(gn,null),a.a.createElement(Pn,null),a.a.createElement(wn,null))},Gn=t(12),In=t(1),Tn={fetchingRandom:!1,fetchedRandom:!1,errorRandom:!1,fetchingRandomPng:!1,fetchedRandomPng:!1,errorRandomPng:!1,data:{name:"",id:0,sprites:{front_default:""}},png:""},Ln=t(24),Mn={fetchingList:!1,fetchedList:!1,errorList:!1,fetchingImages:!1,fetchedImages:!1,errorImages:!1,fetchingPNG:!1,fetchedPNG:!1,errorPNG:!1,data:{count:0,next:"",previous:"",results:[]},images:[],pngs:[],currentPage:1,pokemonsPerPage:6},An=Object(Gn.combineReducers)({randomPokemon:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCHING_RANDOM":return Object(In.a)(Object(In.a)({},n),{},{fetchingRandom:!0,fetchedRandom:!1,errorRandom:!1,data:{name:"",id:0,sprites:{front_default:""}},png:""});case"FETCHED_RANDOM":return Object(In.a)(Object(In.a)({},n),{},{fetchingRandom:!1,fetchedRandom:!0,errorRandom:!1,data:e.payload});case"ERROR_RANDOM":return Object(In.a)(Object(In.a)({},n),{},{fetchingRandom:!1,fetchedRandom:!1,errorRandom:!0,data:{name:"",id:0,sprites:{front_default:""}}});case"FETCHING_RANDOM_PNG":return Object(In.a)(Object(In.a)({},n),{},{fetchingRandomPng:!0,fetchedRandomPng:!1,errorRandomPng:!1,png:""});case"FETCHED_RANDOM_PNG":return Object(In.a)(Object(In.a)({},n),{},{fetchingRandomPng:!1,fetchedRandomPng:!0,errorRandomPng:!1,png:e.payload});case"ERROR_RANDOM_PNG":return Object(In.a)(Object(In.a)({},n),{},{fetchingRandomPng:!1,fetchedRandomPng:!1,errorRandomPng:!0,png:""});default:return n}},pokemonList:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCHING_LIST":return Object(In.a)(Object(In.a)({},n),{},{fetchingList:!0,fetchedList:!1,errorList:!1,data:{count:0,next:"",previous:"",results:[]},images:[],pngs:[]});case"FETCHED_LIST":return Object(In.a)(Object(In.a)({},n),{},{fetchingList:!1,fetchedList:!0,errorList:!1,data:e.payload});case"ERROR_LIST":return Object(In.a)(Object(In.a)({},n),{},{fetchingList:!1,fetchedList:!1,errorList:!0,data:{count:0,next:"",previous:"",results:[]}});case"FETCHING_POKE_IMAGES":return Object(In.a)(Object(In.a)({},n),{},{fetchingImages:!0,fetchedImages:!1,errorImages:!1,images:[]});case"FETCHED_POKE_IMAGES":return Object(In.a)(Object(In.a)({},n),{},{fetchingImages:!1,fetchedImages:!0,errorImages:!1,images:[].concat(Object(Ln.a)(n.images),[e.payload])});case"ERROR_POKE_IMAGES":return Object(In.a)(Object(In.a)({},n),{},{fetchingImages:!1,fetchedImages:!1,errorImages:!0,images:[]});case"FETCHING_POKE_PNG":return Object(In.a)(Object(In.a)({},n),{},{fetchingPNG:!0,fetchedPNG:!1,errorPNG:!1,pngs:[]});case"FETCHED_POKE_PNG":return Object(In.a)(Object(In.a)({},n),{},{fetchingPNG:!1,fetchedPNG:!0,errorPNG:!1,pngs:[].concat(Object(Ln.a)(n.pngs),[e.payload])});case"ERROR_POKE_PNG":return Object(In.a)(Object(In.a)({},n),{},{fetchingPNG:!1,fetchedPNG:!1,errorPNG:!0,pngs:[]});case"NEXT_LIST_PAGE":return Object(In.a)(Object(In.a)({},n),{},{currentPage:n.currentPage+1});case"PREV_LIST_PAGE":return Object(In.a)(Object(In.a)({},n),{},{currentPage:n.currentPage-1});case"RESET_LIST_PAGE":return Object(In.a)(Object(In.a)({},n),{},{currentPage:1});case"CHANGE_NUMBER_OF_POKEMON_PER_PAGE":return Object(In.a)(Object(In.a)({},n),{},{pokemonsPerPage:e.payload});default:return n}}}),Cn=t(34),Hn=t(35),Dn=Object(Gn.createStore)(An,Object(Cn.composeWithDevTools)(Object(Gn.applyMiddleware)(Hn.a)));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g.a,null,a.a.createElement(R.a,{store:Dn},a.a.createElement(Nn,null)))),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.95a43206.chunk.js.map