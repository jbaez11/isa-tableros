(function(e){function t(t){for(var s,i,o=t[0],c=t[1],l=t[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},r={app:0},n=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=a("f309");s["a"].use(r["a"]);var n=new r["a"]({}),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("router-view",{staticClass:"container px-5 sm:px-20 py-20  justify-center"})],1)},o=[],c={name:"App",components:{},data:function(){return{}}},l=c,d=a("2877"),u=Object(d["a"])(l,i,o,!1,null,null,null),f=u.exports,h=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex-col items-center"},[a("h1",{staticClass:"text-gray-700 text-6xl uppercase"},[e._v("error")]),a("router-link",{staticClass:"mt-5 text-xl text-green-600 hover:underline",attrs:{to:"/"}},[e._v("Volver a la página de Inicio")])],1)},v=[],b={},m=Object(d["a"])(b,p,v,!1,null,null,null),g=m.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("px-table-basekeywords")},k=[],_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app"},[a("v-app",[a("v-main",[a("v-card",{staticClass:"mx-auto mt-5",attrs:{color:"transparent","max-width":"1280",elevation:"0"}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",color:"#FF9B00"},on:{click:function(t){return e.formNuevo()}}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-plus")])],1),a("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],attrs:{id:"filter",placeholder:"Buscar...",type:"text",name:"filter"},domProps:{value:e.filter},on:{input:function(t){t.target.composing||(e.filter=t.target.value)}}}),a("v-simple-table",{staticClass:"mt-5",scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",{staticClass:"orange accent-3 "},[a("th",{staticClass:"white--text"},[e._v("KEYWORD")]),a("th",{staticClass:"white--text"},[e._v("MODULE")]),a("th",{staticClass:"white--text"},[e._v("CATEGORY")]),a("th",{staticClass:"white--text"},[e._v("ACCIONES")])])]),a("tbody",{directives:[{name:"show",rawName:"v-show",value:!e.filter,expression:"!filter"}]},e._l(e.displayedBasekeywords,(function(t){return a("tr",{key:t._id},[a("td",[e._v(e._s(t.keyword))]),a("td",[e._v(e._s(t.module))]),a("td",[e._v(e._s(t.category))]),a("td",[a("v-btn",{staticClass:"orange",attrs:{dark:"",small:"",fab:""},on:{click:function(a){return e.formEditar(t._id,t.keyword,t.module,t.category)}}},[a("v-icon",[e._v("mdi-pencil")])],1),a("v-btn",{staticClass:"error",attrs:{fab:"",dark:"",small:""},on:{click:function(a){return e.borrar(t._id)}}},[a("v-icon",[e._v("mdi-delete")])],1)],1)])})),0),e.filter?a("tbody",e._l(e.filteredBasekeywords,(function(t){return a("tr",{key:t._id},[a("td",[e._v(e._s(t.keyword))]),a("td",[e._v(e._s(t.module))]),a("td",[e._v(e._s(t.category))]),a("td",[a("v-btn",{staticClass:"orange",attrs:{dark:"",small:"",fab:""},on:{click:function(a){return e.formEditar(t._id,t.keyword,t.module,t.category)}}},[a("v-icon",[e._v("mdi-pencil")])],1),a("v-btn",{staticClass:"error",attrs:{fab:"",dark:"",small:""},on:{click:function(a){return e.borrar(t._id)}}},[a("v-icon",[e._v("mdi-delete")])],1)],1)])})),0):e._e()]},proxy:!0}])})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.filter,expression:"!filter"}]},[a("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[1!=e.page?a("v-btn",{on:{click:function(t){e.page--}}},[e._v(" Before ")]):e._e(),e._l(e.pages.slice(e.page-1,e.page+2),(function(t){return a("v-btn",{key:t,on:{click:function(a){e.page=t}}},[e._v(" "+e._s(t)+" ")])})),e.page<e.pages.length?a("v-btn",{on:{click:function(t){e.page++}}},[e._v(" Next ")]):e._e()],2)]),a("v-dialog",{attrs:{"max-width":"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-form",[a("v-card",[a("v-card-title",{staticClass:"orange accent-3 white--text"},[e._v("BaseKeyword")]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Keyword",solo:"",required:""},model:{value:e.basekeyword.keyword,callback:function(t){e.$set(e.basekeyword,"keyword",t)},expression:"basekeyword.keyword"}},[e._v(e._s(e.basekeyword.keyword))])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Module",solo:"",required:""},model:{value:e.basekeyword.module,callback:function(t){e.$set(e.basekeyword,"module",t)},expression:"basekeyword.module"}},[e._v(e._s(e.basekeyword.module))])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Category",solo:"",required:""},model:{value:e.basekeyword.category,callback:function(t){e.$set(e.basekeyword,"category",t)},expression:"basekeyword.category"}},[e._v(e._s(e.basekeyword.category))])],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue-grey",dark:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cancelar")]),a("v-btn",{attrs:{type:"submit",color:"orange accent-3",dark:""},on:{click:function(t){return e.guardar()}}},[e._v("Guardar")])],1)],1)],1)],1)],1)],1)],1)},w=[],j=(a("4de4"),a("caad"),a("fb6a"),a("2532"),a("96cf"),a("1da1")),x=window.location.pathname;console.log("currenturl",x);var C="https://backend-tableros-exhausted-raven-fv.mybluemix.net".concat(x,"/");console.log("url",C);var V={name:"PxTableBasekeywords",data:function(){return{filter:null,module:"",category:"",basekeywords:[],dialog:!1,operacion:"",basekeyword:{_id:null,keyword:"",module:this.module,category:this.category},page:1,perPage:10,pages:[]}},created:function(){this.mostrar()},methods:{mostrar:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get(C);case 2:a=t.sent,e.basekeywords=a.data.body;case 4:case"end":return t.stop()}}),t)})))()},paginate:function(e){var t=this.page,a=this.perPage,s=t*a-a,r=t*a;return e.slice(s,r)},setBasekeywords:function(){for(var e=Math.ceil(this.basekeywords.length/this.perPage),t=1;t<=e;t++)this.pages.push(t)},crear:function(){var e=this,t={keyword:this.basekeyword.keyword,module:this.basekeyword.module,category:this.basekeyword.category};this.axios.post(C,t).then((function(t){console.log(t.data),e.$swal.fire("¡Creado!","","success"),e.mostrar()})),this.basekeyword.keyword="",this.basekeyword.module="",this.basekeyword.category=""},editar:function(){var e=this,t={id:this.basekeyword._id,keyword:this.basekeyword.keyword,module:this.basekeyword.module,category:this.basekeyword.category};this.axios.patch(C+this.basekeyword._id,t).then((function(t){console.log(t),e.$swal.fire("¡Modificado!","","success"),e.mostrar()}))},borrar:function(e){var t=this;this.$swal.fire({title:"¿Confirma eliminar el registro?",confirmButtonText:"Confirmar",showCancelButton:!0}).then((function(a){if(a.isConfirmed)t.axios.delete(C+e).then((function(e){t.mostrar(),console.log(e)})),t.$swal.fire("¡Eliminado!","","success");else if(a.isDenied)return!1}))},guardar:function(){"crear"==this.operacion&&this.crear(),"editar"==this.operacion&&this.editar(),this.dialog=!1},formNuevo:function(){this.dialog=!0,this.operacion="crear",this.basekeyword.keyword="",this.basekeyword.module="",this.basekeyword.category=""},formEditar:function(e,t,a,s){this.basekeyword._id=e,this.basekeyword.keyword=t,this.basekeyword.module=a,this.basekeyword.category=s,this.dialog=!0,this.operacion="editar"}},computed:{displayedBasekeywords:function(){return this.paginate(this.basekeywords)},filteredBasekeywords:function(){var e=this;return this.basekeywords.filter((function(t){return t.keyword.toLowerCase().includes(e.filter.toLowerCase())}))}},watch:{basekeywords:function(){this.setBasekeywords()},checkFilterActivate:function(e){return null==this.filter?(console.log(e),null):null!=this.filter||void 0}}},B=V,E=a("6544"),O=a.n(E),A=a("7496"),$=a("8336"),N=a("b0af"),T=a("99d9"),P=a("62ad"),z=a("a523"),S=a("169a"),M=a("4bd4"),F=a("132d"),R=a("f6c4"),D=a("0fd9"),I=a("1f4f"),q=a("2fa4"),U=a("8654"),G=Object(d["a"])(B,_,w,!1,null,null,null),L=G.exports;O()(G,{VApp:A["a"],VBtn:$["a"],VCard:N["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VCol:P["a"],VContainer:z["a"],VDialog:S["a"],VForm:M["a"],VIcon:F["a"],VMain:R["a"],VRow:D["a"],VSimpleTable:I["a"],VSpacer:q["a"],VTextField:U["a"]});var K={name:"Basekeywords",components:{PxTableBasekeywords:L}},Y=K,J=Object(d["a"])(Y,y,k,!1,null,null,null),H=J.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("px-table-agents")},X=[],Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app"},[a("v-app",[a("v-main",[a("v-card",{staticClass:"mx-auto",attrs:{color:"transparent","max-width":"1280",elevation:"0"}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",color:"#FF9B00"},on:{click:function(t){return e.formNuevo()}}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-plus")])],1),a("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],attrs:{id:"filter",placeholder:"Buscar...",type:"text",name:"filter"},domProps:{value:e.filter},on:{input:function(t){t.target.composing||(e.filter=t.target.value)}}}),a("v-simple-table",{staticClass:"mt-5",scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",{staticClass:"orange accent-3 "},[a("th",{staticClass:"white--text "},[e._v("NAME")]),a("th",{staticClass:"white--text "},[e._v("iDENTIFICATION")]),a("th",{staticClass:"white--text "},[e._v("GENDER")]),a("th",{staticClass:"white--text "},[e._v("ACCIONES")])])]),a("tbody",{directives:[{name:"show",rawName:"v-show",value:!e.filter,expression:"!filter"}]},e._l(e.displayedAgents,(function(t){return a("tr",{key:t._id},[a("td",{},[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.identification))]),a("td",[e._v(e._s(t.gender))]),a("td",[a("v-btn",{staticClass:"orange",attrs:{dark:"",small:"",fab:""},on:{click:function(a){return e.formEditar(t._id,t.name,t.identification,t.gender)}}},[a("v-icon",[e._v("mdi-pencil")])],1),a("v-btn",{staticClass:"error",attrs:{fab:"",dark:"",small:""},on:{click:function(a){return e.borrar(t._id)}}},[a("v-icon",[e._v("mdi-delete")])],1)],1)])})),0),e.filter?a("tbody",e._l(e.filteredAgents,(function(t){return a("tr",{key:t._id},[a("td",{},[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.identification))]),a("td",[e._v(e._s(t.gender))]),a("td",[a("v-btn",{staticClass:"orange",attrs:{dark:"",small:"",fab:""},on:{click:function(a){return e.formEditar(t._id,t.name,t.identification,t.gender)}}},[a("v-icon",[e._v("mdi-pencil")])],1),a("v-btn",{staticClass:"error",attrs:{fab:"",dark:"",small:""},on:{click:function(a){return e.borrar(t._id)}}},[a("v-icon",[e._v("mdi-delete")])],1)],1)])})),0):e._e()]},proxy:!0}])})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.filter,expression:"!filter"}]},[a("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[1!=e.page?a("v-btn",{on:{click:function(t){e.page--}}},[e._v(" Before ")]):e._e(),e._l(e.pages.slice(e.page-1,e.page+2),(function(t){return a("v-btn",{key:t,on:{click:function(a){e.page=t}}},[e._v(" "+e._s(t)+" ")])})),e.page<e.pages.length?a("v-btn",{on:{click:function(t){e.page++}}},[e._v(" Next ")]):e._e()],2)]),a("v-dialog",{attrs:{"max-width":"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-form",[a("v-card",[a("v-card-title",{staticClass:"orange accent-3 white--text"},[e._v("Agent")]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Name",solo:"",required:""},model:{value:e.agent.name,callback:function(t){e.$set(e.agent,"name",t)},expression:"agent.name"}},[e._v(e._s(e.agent.name))])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Identification",solo:"",required:""},model:{value:e.agent.identification,callback:function(t){e.$set(e.agent,"identification",t)},expression:"agent.identification"}},[e._v(e._s(e.agent.identification))])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.agent.gender,expression:"agent.gender"}],staticStyle:{width:"80px",height:"50px"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.agent,"gender",t.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("Gender")]),a("option",[e._v("F")]),a("option",[e._v("M")]),a("option",[e._v("X")])])])],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue-grey",dark:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cancelar")]),a("v-btn",{attrs:{type:"submit",color:"orange accent-3",dark:""},on:{click:function(t){return e.guardar()}}},[e._v("Guardar")])],1)],1)],1)],1)],1)],1)],1)},Z=[],ee=(a("b0c0"),window.location.pathname);console.log("currenturl",ee);var te="https://backend-tableros-exhausted-raven-fv.mybluemix.net".concat(ee,"/");console.log("url",te);var ae={name:"PxTableAgents",data:function(){return{filter:null,gender:"",filterActive:null,agents:[],dialog:!1,operacion:"",agent:{_id:null,name:"",identification:"",gender:this.gender},page:1,perPage:10,pages:[]}},created:function(){this.mostrar()},methods:{mostrar:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get(te);case 2:a=t.sent,e.agents=a.data.body;case 4:case"end":return t.stop()}}),t)})))()},paginate:function(e){var t=this.page,a=this.perPage,s=t*a-a,r=t*a;return e.slice(s,r)},setAgents:function(){for(var e=Math.ceil(this.agents.length/this.perPage),t=1;t<=e;t++)this.pages.push(t)},crear:function(){var e=this,t={name:this.agent.name,identification:this.agent.identification,gender:this.agent.gender};this.axios.post(te,t).then((function(t){console.log(t),e.$swal.fire("¡Creado!","","success"),e.mostrar(),console.log(t)})),this.agent.name="",this.agent.identification="",this.agent.gender=""},editar:function(){var e=this,t={id:this.agent._id,name:this.agent.name,identification:this.agent.identification,gender:this.agent.gender};this.axios.patch(te+this.agent._id,t).then((function(t){console.log(t),e.$swal.fire("¡Modificado!","","success"),e.mostrar(),console.log(t)}))},borrar:function(e){var t=this;this.$swal.fire({title:"¿Confirma eliminar el registro?",confirmButtonText:"Confirmar",showCancelButton:!0}).then((function(a){if(a.isConfirmed)t.axios.delete(te+e).then((function(e){t.mostrar(),console.log(e)})),t.$swal.fire("¡Eliminado!","","success");else if(a.isDenied)return!1}))},guardar:function(){"crear"==this.operacion&&this.crear(),"editar"==this.operacion&&this.editar(),this.dialog=!1},formNuevo:function(){this.dialog=!0,this.operacion="crear",this.agent.name="",this.agent.identification="",this.agent.gender=""},formEditar:function(e,t,a,s){this.agent._id=e,this.agent.name=t,this.agent.identification=a,this.agent.gender=s,this.dialog=!0,this.operacion="editar"}},computed:{displayedAgents:function(){return this.paginate(this.agents)},filteredAgents:function(){var e=this;return this.agents.filter((function(t){return t.name.toUpperCase().includes(e.filter.toUpperCase())||t.identification.toUpperCase().includes(e.filter.toUpperCase())}))}},watch:{agents:function(){this.setAgents()},checkFilterActivate:function(e){return null==this.filter?(console.log(e),null):null!=this.filter||void 0}}},se=ae,re=Object(d["a"])(se,Q,Z,!1,null,null,null),ne=re.exports;O()(re,{VApp:A["a"],VBtn:$["a"],VCard:N["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VCol:P["a"],VContainer:z["a"],VDialog:S["a"],VForm:M["a"],VIcon:F["a"],VMain:R["a"],VRow:D["a"],VSimpleTable:I["a"],VSpacer:q["a"],VTextField:U["a"]});var ie={name:"Agents",components:{PxTableAgents:ne}},oe=ie,ce=Object(d["a"])(oe,W,X,!1,null,null,null),le=ce.exports,de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("px-table-basephrases")},ue=[],fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app"},[a("v-app",[a("v-main",[a("v-card",{staticClass:"mx-auto mt-5",attrs:{color:"transparent","max-width":"1280",elevation:"0"}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",color:"#FF9B00"},on:{click:function(t){return e.formNuevo()}}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-plus")])],1),a("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],attrs:{id:"filter",placeholder:"Buscar...",type:"text",name:"filter"},domProps:{value:e.filter},on:{input:function(t){t.target.composing||(e.filter=t.target.value)}}}),a("v-simple-table",{staticClass:"mt-5",scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",{staticClass:"orange accent-3 "},[a("th",{staticClass:"white--text"},[e._v("PHRASE")]),a("th",{staticClass:"white--text"},[e._v("MODULE")]),a("th",{staticClass:"white--text"},[e._v("CATEGORY")]),a("th",{staticClass:"white--text"},[e._v("ACCIONES")])])]),a("tbody",{directives:[{name:"show",rawName:"v-show",value:!e.filter,expression:"!filter"}]},e._l(e.displayedBasephrases,(function(t){return a("tr",{key:t._id},[a("td",[e._v(e._s(t.phrase))]),a("td",[e._v(e._s(t.module))]),a("td",[e._v(e._s(t.category))]),a("td",[a("v-btn",{staticClass:"orange",attrs:{dark:"",small:"",fab:""},on:{click:function(a){return e.formEditar(t._id,t.phrase,t.module,t.category)}}},[a("v-icon",[e._v("mdi-pencil")])],1),a("v-btn",{staticClass:"error",attrs:{fab:"",dark:"",small:""},on:{click:function(a){return e.borrar(t._id)}}},[a("v-icon",[e._v("mdi-delete")])],1)],1)])})),0),e.filter?a("tbody",e._l(e.filteredBasephrases,(function(t){return a("tr",{key:t._id},[a("td",[e._v(e._s(t.phrase))]),a("td",[e._v(e._s(t.module))]),a("td",[e._v(e._s(t.category))]),a("td",[a("v-btn",{staticClass:"orange",attrs:{dark:"",small:"",fab:""},on:{click:function(a){return e.formEditar(t._id,t.phrase,t.module,t.category)}}},[a("v-icon",[e._v("mdi-pencil")])],1),a("v-btn",{staticClass:"error",attrs:{fab:"",dark:"",small:""},on:{click:function(a){return e.borrar(t._id)}}},[a("v-icon",[e._v("mdi-delete")])],1)],1)])})),0):e._e()]},proxy:!0}])})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.filter,expression:"!filter"}]},[a("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[1!=e.page?a("v-btn",{on:{click:function(t){e.page--}}},[e._v(" Before ")]):e._e(),e._l(e.pages.slice(e.page-1,e.page+2),(function(t){return a("v-btn",{key:t,on:{click:function(a){e.page=t}}},[e._v(" "+e._s(t)+" ")])})),e.page<e.pages.length?a("v-btn",{on:{click:function(t){e.page++}}},[e._v(" Next ")]):e._e()],2)]),a("v-dialog",{attrs:{"max-width":"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-form",[a("v-card",[a("v-card-title",{staticClass:"orange accent-3 white--text"},[e._v("BasePhrase")]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Phrase",solo:"",required:""},model:{value:e.basephrase.phrase,callback:function(t){e.$set(e.basephrase,"phrase",t)},expression:"basephrase.phrase"}},[e._v(e._s(e.basephrase.phrase))])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Module",solo:"",required:""},model:{value:e.basephrase.module,callback:function(t){e.$set(e.basephrase,"module",t)},expression:"basephrase.module"}},[e._v(e._s(e.basephrase.module))])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Category",solo:"",required:""},model:{value:e.basephrase.category,callback:function(t){e.$set(e.basephrase,"category",t)},expression:"basephrase.category"}},[e._v(e._s(e.basephrase.category))])],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue-grey",dark:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cancelar")]),a("v-btn",{attrs:{type:"submit",color:"orange accent-3",dark:""},on:{click:function(t){return e.guardar()}}},[e._v("Guardar")])],1)],1)],1)],1)],1)],1)],1)},he=[],pe=window.location.pathname;console.log("currenturl",pe);var ve="https://backend-tableros-exhausted-raven-fv.mybluemix.net".concat(pe,"/");console.log("url",ve);var be={name:"PxTableBasephrases",data:function(){return{filter:null,module:"",category:"",basephrases:[],dialog:!1,operacion:"",basephrase:{_id:null,phrase:"",module:this.module,category:this.category},page:1,perPage:10,pages:[]}},created:function(){this.mostrar()},methods:{mostrar:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get(ve);case 2:a=t.sent,e.basephrases=a.data.body;case 4:case"end":return t.stop()}}),t)})))()},paginate:function(e){var t=this.page,a=this.perPage,s=t*a-a,r=t*a;return e.slice(s,r)},setBasephrases:function(){for(var e=Math.ceil(this.basephrases.length/this.perPage),t=1;t<=e;t++)this.pages.push(t)},crear:function(){var e=this,t={phrase:this.basephrase.phrase,module:this.basephrase.module,category:this.basephrase.category};this.axios.post(ve,t).then((function(t){console.log("respuesta response.data",t.data),e.$swal.fire("¡Creado!","","success"),e.mostrar()})),this.basephrase.phrase="",this.basephrase.module="",this.basephrase.category=""},editar:function(){var e=this,t={id:this.basephrase._id,phrase:this.basephrase.phrase,module:this.basephrase.module,category:this.basephrase.category};this.axios.patch(ve+this.basephrase._id,t).then((function(t){console.log(t),e.$swal.fire("¡Modificado!","","success"),e.mostrar()}))},borrar:function(e){var t=this;this.$swal.fire({title:"¿Confirma eliminar el registro?",confirmButtonText:"Confirmar",showCancelButton:!0}).then((function(a){if(a.isConfirmed)t.axios.delete(ve+e).then((function(e){t.mostrar(),console.log(e)})),t.$swal.fire("¡Eliminado!","","success");else if(a.isDenied)return!1}))},guardar:function(){"crear"==this.operacion&&this.crear(),"editar"==this.operacion&&this.editar(),this.dialog=!1},formNuevo:function(){this.dialog=!0,this.operacion="crear",this.basephrase.phrase="",this.basephrase.module="",this.basephrase.category=""},formEditar:function(e,t,a,s){this.basephrase._id=e,this.basephrase.phrase=t,this.basephrase.module=a,this.basephrase.category=s,this.dialog=!0,this.operacion="editar"}},computed:{displayedBasephrases:function(){return this.paginate(this.basephrases)},filteredBasephrases:function(){var e=this;return this.basephrases.filter((function(t){return t.phrase.toLowerCase().includes(e.filter.toLowerCase())}))}},watch:{basephrases:function(){this.setBasephrases()},checkFilterActivate:function(e){return null==this.filter?(console.log(e),null):null!=this.filter||void 0}}},me=be,ge=Object(d["a"])(me,fe,he,!1,null,null,null),ye=ge.exports;O()(ge,{VApp:A["a"],VBtn:$["a"],VCard:N["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VCol:P["a"],VContainer:z["a"],VDialog:S["a"],VForm:M["a"],VIcon:F["a"],VMain:R["a"],VRow:D["a"],VSimpleTable:I["a"],VSpacer:q["a"],VTextField:U["a"]});var ke={name:"Basephrases",components:{PxTableBasephrases:ye}},_e=ke,we=Object(d["a"])(_e,de,ue,!1,null,null,null),je=we.exports;s["a"].use(h["a"]);var xe=new h["a"]({mode:"history",routes:[{path:"*",name:"error",component:g},{path:"/:bd/basekeywords",name:"basekeywords",component:H},{path:"/:bd/agents",name:"agents",component:le},{path:"/:bd/basephrases",name:"basephrases",component:je}]}),Ce=a("bc3a"),Ve=a.n(Ce),Be=a("2106"),Ee=a.n(Be),Oe=a("30ef"),Ae=a.n(Oe),$e=a("d842"),Ne=a("05c2"),Te=a("5886");a("4413");s["a"].use(Te["a"]),s["a"].use(Ee.a,Ve.a),s["a"].use(Ne["VueSpinners"]),s["a"].use($e["a"].use(Ae.a)),s["a"].config.productionTip=!1,new s["a"]({router:xe,vuetify:n,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.3af0422c.js.map