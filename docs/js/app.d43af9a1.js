(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/firstProject/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1d51":function(t,e,n){t.exports=n.p+"img/Spinner-1s-200px.dbd4ad21.gif"},"2b1b":function(t,e,n){t.exports=n.p+"img/1.b4c9da9a.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"background-color":"black"},attrs:{id:"app"}},[n("router-view")],1)},s=[],r={name:"App"},o=r,l=n("2877"),c=Object(l["a"])(o,a,s,!1,null,null,null),u=c.exports,d=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column align-items-center justify-content-center bg-white",staticStyle:{"max-width":"600px",height:"100vh",margin:"auto"}},[n("div",{staticClass:"text-center"},[t._m(0),n("h5",{staticClass:"mt-5",staticStyle:{"font-weight":"700"}},[t._v(" 스낵으로 보는 내 성격, SPTI ")]),n("button",{staticClass:"p-4 pl-5 pr-5 mt-5 m-3",staticStyle:{border:"none","border-radius":"20px","text-shadow":"none","background-color":"#ff5100",color:"white"},on:{click:function(e){return t.clickPage()}}},[t._m(1),n("p",{staticClass:"m-0 mt-2",staticStyle:{"font-size":"16px"}},[t._v("현재 총 "+t._s(t.people)+"명이 참여했어요.")])]),t._m(2)])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticStyle:{"line-height":"50px","font-weight":"700"}},[t._v("내 성격에 딱! "),n("br"),t._v(" 어울리는 스낵은? ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("strong",{staticStyle:{"font-size":"21px"}},[t._v(" 테스트 시작하기"),n("br")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-top":"50px"}},[i("img",{attrs:{src:n("2b1b"),alt:"",width:"100px;"}})])}],h={name:"App",components:{},data:function(){return{people:1}},methods:{clickPage:function(){window.open("./page","_self")}}},m=h,b=(n("ee9b"),Object(l["a"])(m,p,f,!1,null,"e0bda596",null)),g=b.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column align-items-center justify-content-center bg-white",staticStyle:{"max-width":"500px",height:"100vh",margin:"auto"}},[n("div",{staticClass:"w-100 pr-4 pl-4 mt-3 pt-4"},[n("input",{attrs:{type:"range",min:"1",max:"12",disabled:""},domProps:{value:t.click+1}})]),n("Hooper",{ref:"carousel",staticClass:"h-75",attrs:{transition:700,mouseDrag:!1,wheelControl:!1,keysControl:!1,touchDrag:!1}},t._l(t.sample,(function(e,i){return n("Slide",{key:i,staticClass:"w-100"},[n("div",{staticClass:"w-100"},[n("div",{staticClass:"text-center p-4 mt-4 mb-4"},[n("strong",{staticStyle:{"font-size":"23px","white-space":"pre-wrap"}},[t._v(" "+t._s(e.info)+" ")])]),n("div",{staticClass:"d-flex flex-column text-center m-auto pt-3",staticStyle:{width:"90%"}},[n("button",{staticClass:"mb-4",attrs:{disabled:t.isDisabled},on:{click:function(e){return t.changeNumber1()}}},[n("strong",{staticStyle:{"white-space":"pre-wrap"}},[t._v(" "+t._s(e.data1)+" ")])]),n("button",{attrs:{disabled:t.isDisabled},on:{click:function(e){return t.changeNumber2()}}},[n("strong",{staticStyle:{"white-space":"pre-wrap"}},[t._v(" "+t._s(e.data2)+" ")])])])])])})),1)],1)},_=[],w=(n("a9e3"),[{name:1,info:"친구와의 약속이 취소됐을 때 \n 나는",data1:'"뭐야 ㅡ_ㅡ;;" \n다른친구에게 연락해서 나오라고 한다',data2:"올 ㅋ 개이득\n 혼자 집에서 뒹굴뒹굴 거린다"},{name:2,info:"예전에 한 번 먹어본 과자에\n대해서 나는",data1:"한번 먹어봤지만 생생하게 기억한다.",data2:"한번 먹어봤는데 어떻게 기억해?"},{name:3,info:"내 최애 과자가 맛없다고 소문이 났을 때 나는",data1:'"음~~ 냠냠 굿~"\n아랑곳하지않고 계속 먹는다.',data2:'"맛이 변했나?.."\n 괜히 맛없게 느껴진다.'},{name:4,info:"내 최애 과자가 맛없다고 소문이 났을 때 나는",data1:'"음~~ 냠냠 굿~"\n아랑곳하지않고 계속 먹는다.',data2:'"맛이 변했나?.."\n 괜히 맛없게 느껴진다.'},{name:5,info:"내 최애 과자가 맛없다고 소문이 났을 때 나는",data1:'"음~~ 냠냠 굿~" 아랑곳하지않고 계속 먹는다.',data2:'"맛이 변했나?.." 괜히 맛없게 느껴진다.'},{name:6,info:"내 최애 과자가 맛없다고 소문이 났을 때 나는",data1:'"음~~ 냠냠 굿~" 아랑곳하지않고 계속 먹는다.',data2:'"맛이 변했나?.." 괜히 맛없게 느껴진다.'},{name:7,info:"내 최애 과자가 맛없다고 소문이 났을 때 \n 나는",data1:'"음~~ 냠냠 굿~" 아랑곳하지않고 계속 먹는다.',data2:'"맛이 변했나?.." 괜히 맛없게 느껴진다.'},{name:8,info:"내 최애 과자가 맛없다고 소문이 났을 때 나는",data1:'"음~~ 냠냠 굿~" 아랑곳하지않고 계속 먹는다.',data2:'"맛이 변했나?.." 괜히 맛없게 느껴진다.'},{name:9,info:"내 최애 과자가 맛없다고 소문이 났을 때 나는",data1:'"음~~ 냠냠 굿~" 아랑곳하지않고 계속 먹는다.',data2:'"맛이 변했나?.." 괜히 맛없게 느껴진다.'},{name:10,info:"내 최애 과자가 맛없다고 소문이 났을 때 나는",data1:'"음~~ 냠냠 굿~" 아랑곳하지않고 계속 먹는다.',data2:'"맛이 변했나?.." 괜히 맛없게 느껴진다.'},{name:11,info:"내 최애 과자가 맛없다고 소문이 났을 때 나는",data1:'"음~~ 냠냠 굿~" 아랑곳하지않고 계속 먹는다.',data2:'"맛이 변했나?.." 괜히 맛없게 느껴진다.'},{name:12,info:"내 최애 과자가 맛없다고 소문이 났을 때 나는",data1:'"음~~ 냠냠 굿~" 아랑곳하지않고 계속 먹는다.',data2:'"맛이 변했나?.." 괜히 맛없게 느껴진다.'}]),x=n("7e04"),y=(n("955f"),{created:function(){var t=this;setTimeout((function(){t.isDisabled=!0}),2e3)},data:function(){return{click:0,btn1:0,btn2:0,btnResult:0,sample:w,result:Number(this.query),isDisabled:!1}},components:{Hooper:x["a"],Slide:x["b"]},props:{query:String},methods:{changeNumber1:function(){var t=this;this.click++,this.btn1=this.btn1+1,this.$refs.carousel.slideNext(),12===this.click&&(this.btnResult=this.btn1+this.btn2,window.open("./Loading?id=".concat(this.btnResult),"_self")),this.isDisabled=!0,setTimeout((function(){t.isDisabled=!1}),700)},changeNumber2:function(){var t=this;this.click++,this.btn2=this.btn2+2,this.$refs.carousel.slideNext(),12==this.click&&(this.btnResult=this.btn1+this.btn2,window.open("./Loading?id=".concat(this.btnResult),"_self")),this.isDisabled=!0,setTimeout((function(){t.isDisabled=!1}),700)}}}),C=y,S=(n("5d0b"),Object(l["a"])(C,v,_,!1,null,"69033ec5",null)),k=S.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column bg-white",staticStyle:{"max-width":"600px",margin:"auto",padding:"50px 20px 80px 20px"}},[n("div",[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),n("div",{staticClass:"mt-3"},[n("div",{staticClass:"p-3 d-flex flex-column justify-content-center align-items-center"},[n("button",{staticClass:"mb-4 w-100",on:{click:function(e){return t.test()}}},[n("strong",{staticStyle:{"font-size":"19px"}},[t._v("테스트 다시하기")])]),n("button",{staticClass:"w-100",on:{click:function(e){return t.playStore()}}},[n("strong",{staticStyle:{"font-size":"19px"}},[t._v("더 많은 화장품 구경하기")])])])]),n("div",{staticClass:"fixed-bottom"},[n("div",{staticClass:"p-3 d-flex flex-row rounded-top",staticStyle:{"max-width":"600px",margin:"auto","background-color":"#ffbc4b"}},[n("div",{staticClass:"text-center rounded",staticStyle:{width:"85%",border:"2px solid white"},on:{click:function(e){return t.playStore()}}},[t._m(5)]),n("div",{staticClass:"text-center ml-3 rounded",staticStyle:{width:"15%",border:"2px solid white"}},[n("a",{attrs:{href:""}},[n("p",{staticClass:"m-0 p-2",staticStyle:{color:"white"}},[n("i",[n("svg",{staticClass:"bi bi-share-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])])])])])])])])},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-4 text-center"},[n("h2",{staticClass:"font-weight-bold"},[t._v("당신은 이런 사람!")]),n("strong",{staticStyle:{"font-size":"21px","margin-top":"15px"}},[t._v("쩌리형 고자")]),n("div",{staticClass:"rounded mt-4 p-3",staticStyle:{height:"300px"}},[n("img",{attrs:{src:"https://d29dbfyawlamz6.cloudfront.net/static_v1.8.11/img/test_content/chunmyung/results/ISFP.png",alt:"1",width:"250px;"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-4 mt-3 rounded bg-light"},[n("div",[n("p",{staticClass:"font-weight-bold"},[t._v("Type.")]),n("ul",[n("li",[t._v("혹시 모쏠인가요?")]),n("li",[t._v("짝사랑을 할 때 당신은 홍길동 뺨치는 대작가에요. 이렇게 소설을 잘 쓸거면 차라리 웹소설 연재를 해서 돈을 벌거 그랬나봐요.")]),n("li",[t._v("여기저기에 '나이렇게 할까, 저렇게 할까' 물어봐 놓고 정작 실행을 잘 못해요.")]),n("li",[t._v("이성을 이성으로만 봐서 연애를 시작하기 힘들 수 있어요. 그렇지만 그런성격이 막상 연애를 시작하면 더 장점이 될 수 있어요. 파이팅?")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-light mt-3 p-4 bg-light rounded"},[n("p",{staticClass:"font-weight-bold"},[t._v("Tip.")]),n("ul",[n("li",[t._v("사소하게 상처받는 일들이 많은데 서운하거나 속상한 게 있어도 말 안하고 참는 편이에요. 서운해 하는게 티가나요. 근데 말은 안해줘요. 그런 부분이 상대방은 오히려 답답하거나 서운할 수 있어요.")]),n("li",[t._v("만약 지금 사랑을 하지 않고 있다면 조금 더 결단력을 가져봐요. 어차피 모 아니면 도인 인생 아니겠어요? 머릿속 그 소설 실사화 한 번 해보는거에요.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-3"},[n("div",{staticClass:"p-4 bg-light text-center"},[n("p",{staticClass:"m-0 font-weight-bold"},[t._v("나와 맞지않는 화장품은 이런 화장품!")]),n("img",{attrs:{src:"https://d29dbfyawlamz6.cloudfront.net/static_v1.8.11/img/test_content/chunmyung/results/ENFJ.png",alt:"",width:"200px;"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-3"},[n("div",{staticClass:"p-3 bg-light text-center"},[n("p",{staticClass:"font-weight-bold"},[t._v("내 결과 공유하기")]),n("a",{attrs:{href:""}},[n("img",{attrs:{src:"https://d29dbfyawlamz6.cloudfront.net/static_v1.8.11/img/SNS/kakaotalk-logo%402x.png",alt:"",width:"55px"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"https://bit.ly/3cp1b6g"}},[n("p",{staticClass:"m-0 p-2 font-weight-bold",staticStyle:{color:"white","font-size":"17px"}},[t._v("화장품 추천!")])])}],E={data:function(){return{result:this.query}},props:{query:String},methods:{test:function(){window.open("./","_self")},playStore:function(){window.open("https://bit.ly/3cp1b6g","_self")}}},O=E,P=(n("b03f"),Object(l["a"])(O,j,$,!1,null,null,null)),q=P.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"on-cancel":t.onCancel,"is-full-page":t.fullPage,width:90,height:90},on:{"update:active":function(e){t.isLoading=e}}}),i("img",{staticStyle:{position:"absolute",top:"45%",left:"50%",transform:"translateX(-50%)"},attrs:{src:n("1d51"),alt:"",width:"100px;"}})],1)},D=[],T=n("9062"),L=n.n(T),N=(n("e40d"),{created:function(){window.addEventListener("load",this.doAjax)},props:{query:String},data:function(){return{isLoading:!1,fullPage:!0,result:this.query}},components:{Loading:L.a},methods:{doAjax:function(){var t=this;setTimeout((function(){window.open("./result?id=".concat(t.result),"_self")}),3e3)},onCancel:function(){console.log("User cancelled the loader.")},pageChange:function(){this.isLoading=!1}}}),A=N,M=Object(l["a"])(A,z,D,!1,null,null,null),R=M.exports;i["a"].use(d["a"]);var J=[{path:"/",name:"home",component:g},{path:"/page",name:"page",component:k,props:function(t){return{query:t.query.id}}},{path:"/result",name:"result",component:q,props:function(t){return{query:t.query.id}}},{path:"/Loading",name:"load",component:R,props:function(t){return{query:t.query.id}}}],F=new d["a"]({mode:"history",base:"/firstProject/",routes:J});i["a"].config.productionTip=!1,new i["a"]({router:F,render:function(t){return t(u)}}).$mount("#app")},"5d0b":function(t,e,n){"use strict";n("7616")},7616:function(t,e,n){},"84f5":function(t,e,n){},b03f:function(t,e,n){"use strict";n("c0e1")},c0e1:function(t,e,n){},ee9b:function(t,e,n){"use strict";n("84f5")}});
//# sourceMappingURL=app.d43af9a1.js.map