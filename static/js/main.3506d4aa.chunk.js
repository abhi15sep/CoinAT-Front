(this.webpackJsonpcoinat=this.webpackJsonpcoinat||[]).push([[0],{135:function(n,e,t){n.exports=t(355)},140:function(n,e,t){},150:function(n,e){},152:function(n,e){},161:function(n,e){},163:function(n,e){},355:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(57),i=t.n(c),o=(t(140),t(15)),u=t(16),l=t(1),s=t.n(l),b=t(128),f=t(32),p=t(76),d=t.n(p);function E(){var n=Object(o.a)(["\n          animation: "," 1.5s ease-out infinite;\n        "]);return E=function(){return n},n}function O(){var n=Object(o.a)(["\n          animation: "," 1.5s ease-out infinite;\n        "]);return O=function(){return n},n}function m(){var n=Object(o.a)(["\n          animation: "," 1.5s ease-out infinite;\n        "]);return m=function(){return n},n}function x(){var n=Object(o.a)(["\n  position: absolute;\n  border: 3px solid white;\n  border-color: white transparent transparent;\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  ","\n"]);return x=function(){return n},n}function j(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #00000070;\n"]);return j=function(){return n},n}function C(){var n=Object(o.a)(["\n    from{\n        opacity:0.3;\n    }to{\n        opacity:0.9;\n    }\n"]);return C=function(){return n},n}var S=Object(u.c)(C()),g=u.b.div(j()),h=u.b.div(x(),(function(n){return"l"===n.size?"50px":"m"===n.size?"30px":"10px"}),(function(n){return"l"===n.size?"50px":"m"===n.size?"30px":"10px"}),(function(n){return"l"===n.size?Object(u.a)(m(),S):"m"===n.size?Object(u.a)(O(),S):Object(u.a)(E(),S)}));var v=function(n){var e=n.isLoading;return a.a.createElement(a.a.Fragment,null,e?a.a.createElement(g,null,a.a.createElement(h,{size:"l"}),a.a.createElement(h,{size:"m"}),a.a.createElement(h,{size:"s"})):a.a.createElement(a.a.Fragment,null))},_=t(26);function I(){var n=Object(o.a)(["\n  padding-left: 5px;\n  padding-right: 2px;\n  font-size: 1rem;\n  margin: 0;\n  padding: 4px;\n  @media (max-width: 768px) {\n    font-size: 0.85rem;\n    word-break: inherit;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  @media (max-width: 581px) {\n    font-size: 0.75rem;\n  }\n"]);return I=function(){return n},n}function w(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #90abbf;\n  font-weight: 800;\n  color: white;\n  text-shadow: 1px 1px 5px #545454;\n  height: 35px;\n  @media (max-width: 768px) {\n    width: 100%;\n    height: 33px;\n  }\n"]);return w=function(){return n},n}var T=u.b.section(w()),N=u.b.p(I());var y,U,L=function(){var n=Object(_.c)((function(n){return n.coin})),e=n.upbitBitKrw,t=n.usdToKrw,r=n.binanceBitUsdt,c=function(){return(parseFloat(r,10)*t).toFixed(2)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(T,null,a.a.createElement(N,null,"1$: ".concat(t,"\u20a9")),a.a.createElement(N,null,"\uc5c5\ube44\ud2b8: ".concat(e," BTC/KRW")),a.a.createElement(N,null,"\ubc14\uc774\ub0b8\uc2a4: ".concat(c()," BTC/KRW")),a.a.createElement(N,null,"\ucc28\uc774: ".concat(((parseFloat(e,10)-c())/c()*100).toFixed(2),"%"))))},B=t(17),R=t(60),k=t(358),A=t(356),K=t(19),M=Object(k.a)("SEND_MESSAGE_REQUEST"),F=Object(k.a)("CANCEL_MESSAGE_REQUEST"),G=Object(A.a)((y={},Object(B.a)(y,"SEND_MESSAGE_REQUEST",(function(n,e){return Object(K.a)(n,(function(n){n.isSending=!0}))})),Object(B.a)(y,"SEND_MESSAGE_SUCCESS",(function(n,e){return Object(K.a)(n,(function(n){n.isSending=!1}))})),Object(B.a)(y,"SEND_MESSAGE_FAILURE",(function(n,e){return Object(K.a)(n,(function(n){n.isSending=!1}))})),Object(B.a)(y,"CANCEL_MESSAGE_REQUEST",(function(n,e){return Object(K.a)(n,(function(n){n.isSending=!0}))})),Object(B.a)(y,"CANCEL_MESSAGE_SUCCESS",(function(n,e){return Object(K.a)(n,(function(n){n.isSending=!1}))})),Object(B.a)(y,"CANCEL_MESSAGE_FAILURE",(function(n,e){return Object(K.a)(n,(function(n){n.isSending=!1}))})),y),{isSending:!1}),Q=t(48),P=t(47),H=t(79),W=t.n(H),D=(Object(k.a)("COIN_INFO_REQUEST"),Object(k.a)("COIN_LIST_REQUEST")),z=Object(k.a)("UPBIT_BITCOIN_KRW_REQUEST"),Y=Object(k.a)("CURRENCY_REQUEST"),X=Object(k.a)("BINANCE_BITCOIN_USDT_REQUEST"),J=Object(k.a)("UPBIT_BTC_NEWLISTING_REQUEST"),V=(Object(k.a)("BINANCE_NEWLISTING_REQUEST"),Object(k.a)("UPBIT_CHECK_COIN_REQUEST")),Z=Object(k.a)("BINANCE_CHECK_COIN_REQUEST"),$=Object(k.a)("UPBIT_SETTING"),q=Object(k.a)("BINANCE_SETTING"),nn=Object(A.a)((U={},Object(B.a)(U,"COIN_INFO_REQUEST",(function(n,e){return Object(K.a)(n,(function(n){n.coinInfo.length<e.payload.coinInfo.length&&(n.coinInfo=e.payload.coinInfo)}))})),Object(B.a)(U,"COIN_LIST_REQUEST",(function(n,e){return Object(K.a)(n,(function(n){}))})),Object(B.a)(U,"COIN_LIST_SUCCESS",(function(n,e){return Object(K.a)(n,(function(n){var t=e.payload.map((function(n){return n.name}));n.coinList=t}))})),Object(B.a)(U,"COIN_LIST_FAILURE",(function(n,e){return Object(K.a)(n,(function(n){}))})),Object(B.a)(U,"UPBIT_BITCOIN_KRW_REQUEST",(function(n,e){return Object(K.a)(n,(function(n){n.isbitkrwLoading=!0}))})),Object(B.a)(U,"UPBIT_BITCOIN_KRW_SUCCESS",(function(n,e){return Object(K.a)(n,(function(n){n.isbitkrwLoading=!1,n.upbitBitKrw=e.payload[0].trade_price}))})),Object(B.a)(U,"UPBIT_BITCOIN_KRW_FAILURE",(function(n,e){return Object(K.a)(n,(function(n){n.upbitBitKrwError=e.payload.error}))})),Object(B.a)(U,"CURRENCY_REQUEST",(function(n,e){return Object(K.a)(n,(function(n){n.isUsdToKrwLoading=!0}))})),Object(B.a)(U,"CURRENCY_SUCCESS",(function(n,e){return Object(K.a)(n,(function(n){n.isUsdToKrwLoading=!1,n.usdToKrw=e.payload[0].rate}))})),Object(B.a)(U,"CURRENCY_FAILURE",(function(n,e){return Object(K.a)(n,(function(n){n.isUsdToKrwLoading=!1,n.usdToKrwError=e.error}))})),Object(B.a)(U,"BINANCE_BITCOIN_USDT_REQUEST",(function(n,e){return Object(K.a)(n,(function(n){n.isbitusdtLoading=!0}))})),Object(B.a)(U,"BINANCE_BITCOIN_USDT_SUCCESS",(function(n,e){return Object(K.a)(n,(function(n){n.binanceBitUsdt=e.payload[0].p,n.isbitusdtLoading=!1}))})),Object(B.a)(U,"BINANCE_BITCOIN_USDT_FAILURE",(function(n,e){return Object(K.a)(n,(function(n){n.isbitusdtLoading=!1,n.binanceBitUsdtError=e.error}))})),Object(B.a)(U,"UPBIT_BTC_NEWLISTING_REQUEST",(function(n,e){return Object(K.a)(n,(function(n){n.isUpbitNewListingLoading=!0}))})),Object(B.a)(U,"UPBIT_BTC_NEWLISTING_SUCCESS",(function(n,e){return Object(K.a)(n,(function(n){var t=e.payload.data.list.filter((function(n){return n.title.includes("BTC")})).map((function(n){return W()(n.created_at).format("YYYY-MM-DD")===W()().format("YYYY-MM-DD")?{new:!0,notice:n}:{new:!1,notice:n}}));n.upbitNewListing=t,n.isUpbitNewListingLoading=!1}))})),Object(B.a)(U,"UPBIT_BTC_NEWLISTING_FAILURE",(function(n,e){return Object(K.a)(n,(function(n){n.isUpbitNewListingLoading=!1}))})),Object(B.a)(U,"BINANCE_NEWLISTING_REQUEST",(function(n,e){return Object(K.a)(n,(function(n){n.isBinanceNewListingLoading=!0}))})),Object(B.a)(U,"BINANCE_NEWLISTING_SUCCESS",(function(n,e){return Object(K.a)(n,(function(n){n.binanceNewListing=e.payload,n.isBinanceNewListingLoading=!1}))})),Object(B.a)(U,"BINANCE_NEWLISTING_FAILURE",(function(n,e){return Object(K.a)(n,(function(n){n.isBinanceNewListingLoading=!1}))})),Object(B.a)(U,"UPBIT_SETTING",(function(n,e){return Object(K.a)(n,(function(n){n.upbitApi=e.payload.upbitApi,n.upbitSec=e.payload.upbitSec}))})),Object(B.a)(U,"BINANCE_SETTING",(function(n,e){return Object(K.a)(n,(function(n){n.binanceApi=e.payload.binanceApi,n.binanceSec=e.payload.binanceSec}))})),Object(B.a)(U,"UPBIT_CHECK_COIN_REQUEST",(function(n,e){return Object(K.a)(n,(function(n){}))})),Object(B.a)(U,"UPBIT_CHECK_COIN_SUCCESS",(function(n,e){return Object(K.a)(n,(function(n){}))})),Object(B.a)(U,"UPBIT_CHECK_COIN_FAILURE",(function(n,e){return Object(K.a)(n,(function(n){}))})),Object(B.a)(U,"BINANCE_CHECK_COIN_REQUEST",(function(n,e){return Object(K.a)(n,(function(n){}))})),Object(B.a)(U,"BINANCE_CHECK_COIN_SUCCESS",(function(n,e){return Object(K.a)(n,(function(n){}))})),Object(B.a)(U,"BINANCE_CHECK_COIN_FAILURE",(function(n,e){return Object(K.a)(n,(function(n){}))})),U),{isbitkrwLoading:!1,upbitBitKrw:0,upbitBitKrwError:"",isUsdToKrwLoading:!1,usdToKrw:0,usdToKrwError:"",isbitusdtLoading:!1,binanceBitUsdt:0,binanceBitUsdtError:"",isUpbitNewListingLoading:!1,upbitNewListing:[],isBinanceNewListingLoading:!1,binanceNewListing:[],upbitApi:"",upbitSec:"",binanceApi:"",binanceSec:"",coinInfo:[],coinList:["ADA","ADX","ANKR","ARDR","ARK","ATOM","BAT","BCH","BTG","CVC","CHZ","DCR","ELF","ENJ","EOS","ETC","ETH","GAS","GNT","GRS","GTO","HBAR","ICX","IOST","IOTA","KMD","KNC","LOOM","LSK","LTC","MANA","MBL","MCO","MTL","NEO","OMG","ONG","ONT","OST","POLY","POWR","QKC","QTUM","REP","SC","SNT","STEEM","STORJ","STORM","STPT","STRAT","TFUEL","THETA","TRX","VET","WAVES","XEM","XLM","XRP","ZIL","ZRX"]});function en(){var n=Object(o.a)(["\n  background-color: white;\n  border: 2px solid #e3e3e3;\n  width: 30%;\n  padding: 5px;\n"]);return en=function(){return n},n}function tn(){var n=Object(o.a)(["\n  font-size: 0.8rem;\n"]);return tn=function(){return n},n}function rn(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  border: 1px solid #e3e3e3;\n  border-left: 0;\n  border-right: 0;\n  width: 100%;\n"]);return rn=function(){return n},n}function an(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  list-style: none;\n  width: 100%;\n  height: 200px;\n  padding: 0;\n  margin: 0;\n  background-color: white;\n  margin: 5px;\n  padding: 5px;\n  overflow-y: scroll;\n  /* Hide scrollbar for Chrome, Safari and Opera */\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  /* Hide scrollbar for IE and Edge */\n  & {\n    -ms-overflow-style: none;\n  }\n"]);return an=function(){return n},n}function cn(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 5px;\n"]);return cn=function(){return n},n}var on=u.b.div(cn()),un=u.b.ul(an()),ln=u.b.li(rn()),sn=u.b.span(tn()),bn=u.b.input(en());var fn=a.a.memo((function(n){var e=n.coins,t=n.onChangePercent;return a.a.createElement(on,null,a.a.createElement(un,null,e&&e.map((function(n){return a.a.createElement(ln,null,a.a.createElement(sn,null,n.symbol),a.a.createElement(bn,{type:"number",min:0,max:100,step:.1,placeholder:"N%",onChange:t,"data-name":n.symbol}))}))))}));function pn(){var n=Object(o.a)(["\n  font-size: 0.6rem;\n  color: white;\n  background-color: #bdc3c7;\n  border: none;\n  cursor: pointer;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  padding: 5px;\n  width: 100%;\n"]);return pn=function(){return n},n}function dn(){var n=Object(o.a)(["\n  height: 20px;\n  border: none;\n  margin: 3px;\n  flex: 1;\n  border-radius: 5px;\n  padding: 2px;\n"]);return dn=function(){return n},n}function En(){var n=Object(o.a)(["\n  height: 20px;\n  border: none;\n  margin: 3px;\n  flex: 1;\n  border-radius: 5px;\n  padding: 2px;\n"]);return En=function(){return n},n}function On(){var n=Object(o.a)(['\n  display: flex;\n  align-items: center;\n  justify-content: "center";\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-top: 5px;\n']);return On=function(){return n},n}function mn(){var n=Object(o.a)(["\n  color: white;\n  background-color: #bdc3c7;\n  padding: 6px;\n  cursor: pointer;\n  font-weight: 800;\n  border: none;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  box-shadow: 1px 0px 3px 0px #949494;\n  width: 100%;\n"]);return mn=function(){return n},n}function xn(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-top: 5px;\n  & div:first-child {\n    flex: 1;\n  }\n"]);return xn=function(){return n},n}function jn(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return jn=function(){return n},n}function Cn(){var n=Object(o.a)(["\n  position: fixed;\n  top: 0;\n  right: 10px;\n  padding-bottom: 10px;\n  background: #c4cfd8;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -1px 1px 3px 0px #696969;\n"]);return Cn=function(){return n},n}var Sn=u.b.div(Cn()),gn=u.b.div(jn()),hn=u.b.div(xn()),vn=u.b.button(mn()),_n=u.b.div(On()),In=u.b.input(En()),wn=u.b.input(dn()),Tn=u.b.button(pn());var Nn=a.a.memo((function(n){var e=n.coinInfo,t=n.upbitBitKrw,c=Object(_.b)(),i=Object(r.useRef)(),o=Object(r.useRef)(),u=Object(r.useRef)(),l=Object(r.useRef)(),s=Object(r.useRef)(),b=Object(r.useRef)(),p=Object(r.useState)([]),d=Object(f.a)(p,2),E=d[0],O=d[1],m=Object(r.useState)({}),x=Object(f.a)(m,2),j=x[0],C=x[1],S=Object(r.useRef)({}),g=Object(r.useCallback)((function(n,e){Object.keys(j).length>0&&n.forEach((function(n){if(-1!==Object.keys(j).indexOf(n.symbol)&&""!==j[n.symbol]){var t=(n.blast*e).toFixed(2),r=parseFloat(j[n.symbol],10),a=parseFloat(((n.last-t)/t*100).toFixed(2),10);Math.abs(a)>r&&(-1===Object.keys(S.current).indexOf(n.symbol)||S.current[n.symbol]!==a)&&(S.current=Object(R.a)({},S.current,Object(B.a)({},n.symbol,a)),c(M({coinInfo:{symbol:n.symbol,upbit:n.last,binance:t,percent:a}})))}}))}),[j,c]);Object(r.useEffect)((function(){i.current&&g(e,t),0===E.length&&O(e)}),[e,t,g,E]);var h=Object(r.useCallback)((function(n){var e=n.target,t=e.value,r=e.dataset;C(Object(R.a)({},j,Object(B.a)({},r.name,t)))}),[j]),v=Object(r.useCallback)((function(n){var e=n.target;Object.keys(j).length>0?"\uc124\uc815"===e.innerHTML?(e.innerHTML="\ucde8\uc18c",i.current=!0):(e.innerHTML="\uc124\uc815",i.current=!1,c(F())):alert("\ucd5c\uc18c \ud55c\uac1c\uc758 % \uc124\uc815\uc774 \ud544\uc694\ud569\ub2c8\ub2e4")}),[j,c]),I=Object(r.useCallback)((function(){"flex"===o.current.style.display||""===o.current.style.display?o.current.style.display="none":o.current.style.display="flex"}),[]),w=Object(r.useCallback)((function(n){var e=n.target;if("\ud655\uc778"===e.innerHTML){if(""===u.current.value||""===l.current.value)return void alert("API \ud639\uc740 Secret\ud0a4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694");c($({upbitApi:u.current.value,upbitSec:l.current.value})),e.innerHTML="\ucde8\uc18c"}else u.current.value="",l.current.value="",c($({upbitApi:"",upbitSec:""})),e.innerHTML="\ud655\uc778"}),[c]),T=Object(r.useCallback)((function(n){var e=n.target;if("\ud655\uc778"===e.innerHTML){if(""===s.current.value||""===b.current.value)return void alert("API \ud639\uc740 Secret\ud0a4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694");c(q({binanceApi:s.current.value,binanceSec:b.current.value})),e.innerHTML="\ucde8\uc18c"}else s.current.value="",b.current.value="",c(q({binanceApi:"",binanceSec:""})),e.innerHTML="\ud655\uc778"}),[c]);return a.a.createElement(Sn,null,a.a.createElement(P.a,{icon:Q.a,style:{alignSelf:"flex-end",marginLeft:"5px",marginRight:"5px",marginTop:"5px",cursor:"pointer",fontSize:"1.0rem"},onClick:I}),a.a.createElement(gn,{ref:o,style:{display:"none"}},a.a.createElement(_n,null,a.a.createElement(In,{ref:u,type:"text",placeholder:"\uc5c5\ube44\ud2b8 api"}),a.a.createElement(wn,{ref:l,type:"password",placeholder:"\uc5c5\ube44\ud2b8 secret"}),a.a.createElement(Tn,{onClick:w},"\ud655\uc778")),a.a.createElement(_n,null,a.a.createElement(In,{ref:s,type:"text",placeholder:"\ubc14\uc774\ub0b8\uc2a4 api"}),a.a.createElement(wn,{ref:b,type:"password",placeholder:"\ubc14\uc774\ub0b8\uc2a4 secret"}),a.a.createElement(Tn,{onClick:T},"\ud655\uc778")),a.a.createElement(In,{type:"number"}),a.a.createElement(fn,{coins:E,onChangePercent:h}),a.a.createElement(hn,null,a.a.createElement(vn,{onClick:v},"\uc124\uc815"))))})),yn=t(357);function Un(){var n=Object(o.a)(["\n  font-weight: ",";\n"]);return Un=function(){return n},n}function Ln(){var n=Object(o.a)(["\n  list-style: none;\n  font-size: 0.8rem;\n  margin-bottom: 5px;\n  font-weight: ",";\n"]);return Ln=function(){return n},n}function Bn(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  margin: 2px;\n"]);return Bn=function(){return n},n}function Rn(){var n=Object(o.a)(["\n  border-top: 1px solid #0404043b;\n"]);return Rn=function(){return n},n}function kn(){var n=Object(o.a)(["\n  list-style: none;\n  flex: 1;\n  padding: 5px;\n  color: ",";\n  font-weight: ",";\n  font-size: 0.8rem;\n  margin-bottom: 5px;\n  word-break: keep-all;\n"]);return kn=function(){return n},n}function An(){var n=Object(o.a)(["\n  display: ",";\n  padding: 0;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  margin: 0;\n  border-bottom: 3px solid #ffffff;\n  cursor: pointer;\n"]);return An=function(){return n},n}function Kn(){var n=Object(o.a)(["\n  display: flex;\n  align-self: flex-end;\n  margin: 5px;\n  svg {\n    cursor: pointer;\n  }\n"]);return Kn=function(){return n},n}function Mn(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  height: ",";\n  background: #c4cfd8;\n  margin-top: 5px;\n  position: fixed;\n  right: 10px;\n  bottom: 0;\n  border-radius: 4px;\n  border: 3px solid #d4d2d270;\n  box-shadow: 2px 2px 6px 1px;\n  overflow: scroll;\n  @media (min-width: 1025px) {\n    width: ",";\n  }\n  @media (max-width: 1024px) {\n    width: ",";\n  }\n  @media (max-width: 768px) {\n    width: ",";\n    opacity: ",";\n  }\n"]);return Mn=function(){return n},n}var Fn=u.b.div(Mn(),(function(n){return n.hide?"auto":"35vh"}),(function(n){return n.hide?"auto":"270px"}),(function(n){return n.hide?"auto":"250px"}),(function(n){return n.hide?"auto":"200px"}),(function(n){return n.hide?"0.2":"1.0"})),Gn=u.b.div(Kn()),Qn=u.b.ul(An(),(function(n){return n.hide?"none":"flex"})),Pn=u.b.li(kn(),(function(n){return n.selected?"black":"#ffffff"}),(function(n){return n.selected?"400":"200"})),Hn=u.b.div(Rn()),Wn=u.b.ul(Bn()),Dn=u.b.li(Ln(),(function(n){return n.new?"600":"300"})),zn=Wn.withComponent("ul"),Yn=Object(u.b)(Dn.withComponent("li"))(Un(),(function(n){return n.new?"600":"300"}));var Xn=function(){var n=Object(_.b)(),e=Object(_.c)((function(n){return n.coin})),t=e.upbitNewListing,c=e.binanceNewListing,i=Object(r.useState)(0),o=Object(f.a)(i,2),u=o[0],l=o[1],s=Object(r.useState)(!1),b=Object(f.a)(s,2),p=b[0],d=b[1],E=Object(r.useRef)(),O=Object(r.useCallback)((function(n){var e=n.target.dataset.id;l(parseInt(e,10))}),[]),m=Object(r.useCallback)((function(){"flex"===E.current.style.display?(E.current.style.display="none",d(!0)):(E.current.style.display="flex",d(!1))}),[]),x=Object(r.useCallback)((function(){var e=t.filter((function(n){return!0===n.new})),r=c.filter((function(n){return!0===n.new}));e.length>0&&n(V({notices:e})),r.length>0&&n(Z({notices:r}))}),[t,c,n]);return Object(r.useEffect)((function(){x()}),[x]),a.a.createElement(Fn,{hide:!0===p},a.a.createElement(Gn,null,p?a.a.createElement(P.a,{icon:Q.c,onClick:m}):a.a.createElement(P.a,{icon:Q.b,onClick:m})),a.a.createElement(Qn,{hide:!0===p},a.a.createElement(Pn,{"data-id":0,onClick:O,selected:0===u},"\uc5c5\ube44\ud2b8 \uc0c1\uc7a5"),a.a.createElement(Pn,{"data-id":1,onClick:O,selected:1===u},"\ubc14\uc774\ub0b8\uc2a4 \uc0c1\uc7a5")),a.a.createElement(Hn,{style:{display:"flex"},ref:E},0===u?a.a.createElement(Wn,null,t&&t.map((function(n){return a.a.createElement(Dn,{key:Object(yn.a)(),new:!0===n.new},n.notice.title)}))):a.a.createElement(zn,null,c&&c.map((function(n){return a.a.createElement(Yn,{key:Object(yn.a)(),new:!0===n.new},n.notice.title)})))))};function Jn(){var n=Object(o.a)(["\n  cursor: ",";\n  width: 30%;\n  word-break: break-all;\n  font-size: 0.85rem;\n  color: black;\n  margin-left: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  @media (max-width: 768px) {\n    font-size: 0.7rem;\n  }\n  &:first-child {\n  }\n  &:nth-child(2) {\n    color: ",";\n    font-weight: ",";\n  }\n  &:nth-child(4) {\n  }\n  &:nth-child(5) {\n    color: ",";\n    font-weight: ",";\n    p {\n      font-size: 0.85rem;\n      margin-bottom: 0;\n      margin-top: 0;\n      @media (max-width: 768px) {\n        font-size: 0.7rem;\n      }\n      @media (max-width: 425px) {\n        align-self: flex-start;\n      }\n    }\n  }\n  &:nth-child(6) {\n    color: ",";\n    border-radius: 10px;\n    background-color: ",";\n    border-radius: 10px;\n  }\n"]);return Jn=function(){return n},n}function Vn(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 2px;\n  border-bottom: 1px solid #e3e3e3;\n  &:first-child {\n    font-weight: 800;\n  }\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return Vn=function(){return n},n}function Zn(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  @media (min-width: 1025px) {\n    width: 60%;\n    margin: 0 auto;\n  }\n  @media (max-width: 1024px) {\n    width: 60%;\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);return Zn=function(){return n},n}function $n(){var n=Object(o.a)(["\n  padding-left: 10px;\n  padding-right: 10px;\n  cursor: pointer;\n  color: ",";\n"]);return $n=function(){return n},n}function qn(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: row;\n  list-style: none;\n  padding: 5px;\n  border: 1px solid;\n  border-left: 0;\n  border-right: 0;\n  border-bottom: 0;\n  margin-top: 5px;\n  margin-bottom: 0;\n  font-size: 0.4rem;\n  @media (max-width: 768px) {\n    margin-top: 0px;\n    padding: 0px;\n  }\n"]);return qn=function(){return n},n}function ne(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]);return ne=function(){return n},n}var ee=u.b.section(ne()),te=u.b.ul(qn()),re=u.b.li($n(),(function(n){return n.selected,"black"})),ae=u.b.div(Zn()),ce=u.b.div(Vn()),ie=u.b.div(Jn(),(function(n){return n.head?"pointer":"normal"}),(function(n){return!0===n.head?"black":"#27ae60"}),(function(n){return!0===n.head?"800":"600"}),(function(n){return!0===n.head?"black":!0===n.up?"#e74c3c":"#0984e3"}),(function(n){return!0===n.head?"800":(n.up,"600")}),(function(n){return!0===n.head?"black":!0===n.up?"#ff2e18":"#0012ff"}),(function(n){return!0===n.head?"white":!0===n.up?"#ff747363":"#007fff47"}));var oe=a.a.memo((function(){var n=Object(r.useState)([]),e=Object(f.a)(n,2),t=e[0],c=e[1],i=Object(r.useState)(!1),o=Object(f.a)(i,2),u=o[0],l=o[1],p=Object(r.useState)(!0),E=Object(f.a)(p,2),O=E[0],m=E[1],x=Object(r.useState)(-1),j=Object(f.a)(x,2),C=j[0],S=j[1],g=Object(_.b)(),h=Object(_.c)((function(n){return n.coin})),I=h.coinList,w=h.upbitBitKrw,T=Object(r.useRef)(null),N=Object(r.useCallback)(Object(b.a)(s.a.mark((function n(){var e,t,r,a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return T.current&&(T.current=setTimeout(N,2500)),!1===u&&!1===O&&m(!0),e=new d.a.upbit,t=new d.a.binance,n.next=6,e.fetchTickers(I.map((function(n){return"".concat(n,"/KRW")})));case 6:return r=n.sent,n.next=9,t.fetchTickers(I.map((function(n){return"".concat(n,"/BTC")})));case 9:a=n.sent,r=Object.keys(r).map((function(n){return{symbol:r[n].symbol.slice(0,r[n].symbol.indexOf("/")),last:r[n].last,low:r[n].low,high:r[n].high,blast:a["".concat(r[n].symbol.slice(0,r[n].symbol.indexOf("/")),"/BTC")].last}})).sort((function(n,e){var t=n.blast*w,r=e.blast*w;return-1===C?n.symbol>e.symbol?1:-1:1===C?n.symbol<e.symbol?1:-1:-2===C?n.last>e.last?1:-1:2===C?n.last<e.last?1:-1:-3===C?n.blast>e.blast?1:-1:3===C?n.blast<e.blast?1:-1:-4===C?(n.last-t)/n.last>(e.last-r)/e.last?1:-1:4===C?(n.last-t)/n.last<(e.last-r)/e.last?1:-1:void 0})),g(z()),g(Y()),g(X()),g(J()),!0===O&&m(!1),!1===u&&l(!0),c(r);case 18:case"end":return n.stop()}}),n)}))),[O,u,I,g,C,w]);Object(r.useEffect)((function(){return T.current=setTimeout(N,2500),function(){clearTimeout(T.current)}}),[N]);var y=Object(r.useCallback)((function(n){var e=n.target.dataset.id;1===parseInt(e,10)?1===C?(t.sort((function(n,e){return n.symbol>e.symbol?1:-1})),S(-1)):(t.sort((function(n,e){return n.symbol<e.symbol?1:-1})),S(1)):2===parseInt(e,10)?2===C?(t.sort((function(n,e){return n.last>e.last?1:-1})),S(-2)):(t.sort((function(n,e){return n.last<e.last?1:-1})),console.log(),S(2)):3===parseInt(e,10)?3===C?(t.sort((function(n,e){return n.blast>e.blast?1:-1})),S(-3)):(t.sort((function(n,e){return n.blast<e.blast?1:-1})),S(3)):4===parseInt(e,10)&&(4===C?(t.sort((function(n,e){var t=n.blast*w,r=e.blast*w;return(n.last-t)/t*100>(e.last-r)/r*100?1:-1})),S(-4)):(t.sort((function(n,e){var t=n.blast*w,r=e.blast*w;return(n.last-t)/t*100<(e.last-r)/r*100?1:-1})),S(4)))}),[C,t,w]);return a.a.createElement("main",null,a.a.createElement(te,null,a.a.createElement(re,null,"Upbit"),a.a.createElement(re,null,"Binance")),a.a.createElement(Nn,{coinInfo:t,upbitBitKrw:w}),a.a.createElement(L,null),a.a.createElement(ee,null,a.a.createElement(ae,null,a.a.createElement(ce,null,a.a.createElement(ie,{head:!0,onClick:y,"data-id":1},"\ucf54\uc778"),a.a.createElement(ie,{head:!0,onClick:y,"data-id":2},"\ud604\uc7ac \uac00(\u20a9)"),a.a.createElement(ie,{head:!0},"\ucd5c\uc800 \uac00 "),a.a.createElement(ie,{head:!0},"\ucd5c\uace0 \uac00"),a.a.createElement(ie,{head:!0,onClick:y,"data-id":3},"\ubc14\uc774\ub0b8\uc2a4(BTC)"),a.a.createElement(ie,{head:!0,onClick:y,"data-id":4},"\ucc28\uc774(%)")),t.map((function(n,e){var t,r=(n.blast*w).toFixed(2),c=((n.last-r)/r*100).toFixed(2);return a.a.createElement(ce,{key:Object(yn.a)()},a.a.createElement(ie,null,n.symbol),a.a.createElement(ie,null,n.last,"\u20a9"),a.a.createElement(ie,null,n.low,"\u20a9 "),a.a.createElement(ie,null,n.high,"\u20a9"),a.a.createElement(ie,{up:c>0},null===(t=n.blast)||void 0===t?void 0:t.toFixed(8),a.a.createElement("p",null,r,"\u20a9")),a.a.createElement(ie,{up:c>0},c,"%"))}))),a.a.createElement(Xn,null)),a.a.createElement(v,{isLoading:O}))}));function ue(){var n=Object(o.a)(["\n  font-family: 800;\n"]);return ue=function(){return n},n}function le(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px;\n  margin-bottom: 0;\n  margin-top: 0;\n  height: 20px;\n  @media (max-width: 768px) {\n    font-size: 0.85rem;\n  }\n"]);return le=function(){return n},n}var se=u.b.header(le()),be=u.b.p(ue());var fe=function(){var n=Object(_.b)();return Object(r.useEffect)((function(){n(D())}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(se,null,a.a.createElement(be,null,"CoinAT")),a.a.createElement(oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=t(36),de=Object(pe.c)({coin:nn,bot:G}),Ee=t(133),Oe=t(12),me=t(29),xe=t.n(me),je=t(59),Ce=t.n(je),Se=s.a.mark(Ge),ge=s.a.mark(Qe),he=s.a.mark(He),ve=s.a.mark(We),_e=s.a.mark(ze),Ie=s.a.mark(Ye),we=s.a.mark(Je),Te=s.a.mark(Ve),Ne=s.a.mark($e),ye=s.a.mark(qe),Ue=s.a.mark(et),Le=s.a.mark(tt),Be=s.a.mark(at),Re=s.a.mark(ct),ke=s.a.mark(ot),Ae=s.a.mark(ut),Ke=s.a.mark(lt);Ce.a.config();var Me="https://blooming-gorge-30505.herokuapp.com/";function Fe(){return xe.a.get("https://api.upbit.com/v1/ticker?markets=KRW-BTC")}function Ge(n){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Oe.b)(Fe,n.payload);case 3:return e=t.sent,t.next=6,Object(Oe.d)({type:"UPBIT_BITCOIN_KRW_SUCCESS",payload:e.data});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Oe.d)({type:"UPBIT_BITCOIN_KRW_FAILURE",error:t.t0});case 12:case"end":return t.stop()}}),Se,null,[[0,8]])}function Qe(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Oe.e)("UPBIT_BITCOIN_KRW_REQUEST",Ge);case 2:case"end":return n.stop()}}),ge)}function Pe(){return xe.a.get("https://api.manana.kr/exchange/rate/KRW/USD.json")}function He(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Oe.b)(Pe);case 3:return n=e.sent,e.next=6,Object(Oe.d)({type:"CURRENCY_SUCCESS",payload:n.data});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(Oe.d)({type:"CURRENCY_FAILURE",error:e.t0});case 12:case"end":return e.stop()}}),he,null,[[0,8]])}function We(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Oe.e)("CURRENCY_REQUEST",He);case 2:case"end":return n.stop()}}),ve)}function De(){return xe.a.get("https://www.binance.us/api/v1/aggTrades?limit=1&symbol=BTCUSD")}function ze(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Oe.b)(De);case 3:return n=e.sent,e.next=6,Object(Oe.d)({type:"BINANCE_BITCOIN_USDT_SUCCESS",payload:n.data});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(Oe.d)({type:"BINANCE_BITCOIN_USDT_FAILURE",error:e.t0});case 12:case"end":return e.stop()}}),_e,null,[[0,8]])}function Ye(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Oe.e)("BINANCE_BITCOIN_USDT_REQUEST",ze);case 2:case"end":return n.stop()}}),Ie)}function Xe(){return xe.a.get("https://api-manager.upbit.com/api/v1/notices/search?search=%5B%EA%B1%B0%EB%9E%98%5D&page=1&per_page=20&before=&target=non_ios&thread_name=general")}function Je(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Oe.b)(Xe);case 3:return n=e.sent,e.next=6,Object(Oe.d)({type:"UPBIT_BTC_NEWLISTING_SUCCESS",payload:n.data});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(Oe.d)({type:"UPBIT_BTC_NEWLISTING_FAILURE",error:e.t0});case 12:case"end":return e.stop()}}),we,null,[[0,8]])}function Ve(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Oe.e)("UPBIT_BTC_NEWLISTING_REQUEST",Je);case 2:case"end":return n.stop()}}),Te)}function Ze(){return xe.a.get("".concat(Me,"coin/notice"))}function $e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Oe.b)(Ze);case 3:return n=e.sent,e.next=6,Object(Oe.d)({type:"BINANCE_NEWLISTING_SUCCESS",payload:n.data});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(Oe.d)({type:"BINANCE_NEWLISTING_FAILURE",error:e.t0});case 12:case"end":return e.stop()}}),Ne,null,[[0,8]])}function qe(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Oe.e)("BINANCE_NEWLISTING_REQUEST",$e);case 2:case"end":return n.stop()}}),ye)}function nt(n){return xe.a.post("".concat(Me,"coin/notice/upbit"),n)}function et(n){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Oe.b)(nt,n.payload);case 3:return e=t.sent,t.next=6,Object(Oe.d)({type:"UPBIT_CHECK_COIN_SUCCESS",payload:e.data});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Oe.d)({type:"UPBIT_CHECK_COIN_FAILURE",error:t.t0});case 12:case"end":return t.stop()}}),Ue,null,[[0,8]])}function tt(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Oe.e)("UPBIT_CHECK_COIN_REQUEST",et);case 2:case"end":return n.stop()}}),Le)}function rt(n){return xe.a.post("".concat(Me,"coin/notice/binance"),n)}function at(n){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Oe.b)(rt,n.payload);case 3:return e=t.sent,t.next=6,Object(Oe.d)({type:"BINANCE_CHECK_COIN_SUCCESS",payload:e.data});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Oe.d)({type:"BINANCE_CHECK_COIN_FAILURE",error:t.t0});case 12:case"end":return t.stop()}}),Be,null,[[0,8]])}function ct(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Oe.e)("BINANCE_CHECK_COIN_REQUEST",at);case 2:case"end":return n.stop()}}),Re)}function it(){return xe.a.get("".concat(Me,"coin"))}function ot(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Oe.b)(it);case 3:return n=e.sent,e.next=6,Object(Oe.d)({type:"COIN_LIST_SUCCESS",payload:n.data});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(Oe.d)({type:"COIN_LIST_FAILURE",error:e.t0});case 12:case"end":return e.stop()}}),ke,null,[[0,8]])}function ut(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Oe.e)("COIN_LIST_REQUEST",ot);case 2:case"end":return n.stop()}}),Ae)}function lt(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Oe.a)([Object(Oe.c)(Qe),Object(Oe.c)(We),Object(Oe.c)(Ye),Object(Oe.c)(Ve),Object(Oe.c)(qe),Object(Oe.c)(tt),Object(Oe.c)(ct),Object(Oe.c)(ut)]);case 2:case"end":return n.stop()}}),Ke)}var st=s.a.mark(mt),bt=s.a.mark(xt),ft=s.a.mark(Ct),pt=s.a.mark(St),dt=s.a.mark(gt);Ce.a.config();var Et="https://blooming-gorge-30505.herokuapp.com/";function Ot(n){return xe.a.post("".concat(Et,"bot"),n)}function mt(n){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Oe.b)(Ot,n.payload);case 3:return e=t.sent,t.next=6,Object(Oe.d)({type:"SEND_MESSAGE_SUCCESS",payload:e.data});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Oe.d)({type:"SEND_MESSAGE_FAILURE",error:t.t0});case 12:case"end":return t.stop()}}),st,null,[[0,8]])}function xt(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Oe.e)("SEND_MESSAGE_REQUEST",mt);case 2:case"end":return n.stop()}}),bt)}function jt(n){return xe.a.post("".concat(Et,"bot/cancel"),n)}function Ct(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Oe.b)(jt,n.payload);case 3:return e.next=5,Object(Oe.d)({type:"CANCEL_MESSAGE_SUCCESS"});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(Oe.d)({type:"CANCEL_MESSAGE_FAILURE",error:e.t0});case 11:case"end":return e.stop()}}),ft,null,[[0,7]])}function St(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Oe.e)("CANCEL_MESSAGE_REQUEST",Ct);case 2:case"end":return n.stop()}}),pt)}function gt(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Oe.a)([Object(Oe.c)(xt),Object(Oe.c)(St)]);case 2:case"end":return n.stop()}}),dt)}var ht=s.a.mark(vt);function vt(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Oe.a)([Object(Oe.b)(lt),Object(Oe.b)(gt)]);case 2:case"end":return n.stop()}}),ht)}var _t=Object(Ee.a)(),It=Object(pe.e)(de,Object(pe.a)(_t));_t.run(vt),i.a.render(a.a.createElement(_.a,{store:It},a.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[135,1,2]]]);
//# sourceMappingURL=main.3506d4aa.chunk.js.map