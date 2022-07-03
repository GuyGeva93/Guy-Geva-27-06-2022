(function(){"use strict";var t={5957:function(t,e,a){var r=a(144),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",{staticClass:"app-layout"},[a("NavBar"),a("router-view")],1)],1)},n=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{dense:""}},[a("div",{staticClass:"d-flex align-center"},[a("span",[t._v("G-Weather")])]),a("v-spacer"),a("span",{staticClass:"hidden-sm-and-up"},[a("v-btn",{attrs:{depressed:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[a("v-icon",[t._v("mdi-menu")])],1)],1),a("ToolBarItems"),a("v-navigation-drawer",{attrs:{absolute:"",temporary:"",right:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.link,link:""}},[a("v-list-item-icon",{attrs:{small:""}},[a("v-icon",[t._v("mdi-"+t._s(e.icon))])],1),t._v(" "+t._s(e.title)+" ")],1)})),1)],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar-items",{staticClass:"hidden-xs-only"},[a("v-btn",{attrs:{to:"/",text:""}},[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-home")]),t._v(" Home ")],1),a("v-btn",{attrs:{to:"/favorites",text:""}},[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-star")]),t._v(" Favorites ")],1)],1)},l=[],u=a(1001),v=a(3453),d=a.n(v),f=a(680),m=a(6428),p=a(7921),h={},y=(0,u.Z)(h,s,l,!1,null,null,null),g=y.exports;d()(y,{VBtn:f.Z,VIcon:m.Z,VToolbarItems:p.lj});var w={data(){return{drawer:!1,items:[{title:"Home",link:"/",icon:"home"},{title:"Favorites",link:"favorites",icon:"fav"}]}},components:{ToolBarItems:g}},Z=w,_=a(8320),D=a(6816),b=a(7620),C=a(459),x=a(8903),V=a(9762),L=(0,u.Z)(Z,c,i,!1,null,null,null),S=L.exports;d()(L,{VAppBar:_.Z,VBtn:f.Z,VIcon:m.Z,VList:D.Z,VListItem:b.Z,VListItemIcon:C.Z,VNavigationDrawer:x.Z,VSpacer:V.Z});var F={name:"App",components:{NavBar:S}},T=F,$=a(7524),E=a(7877),k=(0,u.Z)(T,o,n,!1,null,null,null),O=k.exports;d()(k,{VApp:$.Z,VMain:E.Z});var N=a(8345),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.currLocation?a("v-container",[a("CitySearch"),a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("h2",[t._v(t._s(t.currLocation[0].LocationName))])]),a("v-spacer",{attrs:{md:"4"}}),a("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"12",md:"4"}},[a("h2",[t._v("Add To Favorites")])])],1),a("v-sheet",{staticClass:"d-flex justify-center align-center forecast-header",attrs:{height:"200px"}},[t._v(" Sunny ")]),a("CityForecast",{attrs:{locationWeather:t.currLocation}})],1):t._e()},W=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-spacer"),a("v-col",[a("v-autocomplete",{directives:[{name:"debounce",rawName:"v-debounce",value:t.search,expression:"search"}],attrs:{loading:t.isLoading,label:"Search for a place..",items:t.items},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1),a("v-spacer")],1)},q=[];const A="r5oVA7p3VRNxxaxROGl1Xa5miQ1RbFET",B={saveToStorage:P,loadFromStorage:M};function P(t,e){var a=JSON.stringify(e);localStorage.setItem(t,a)}function M(t){var e=localStorage.getItem(t),a=JSON.parse(e);return a}const R=a(9669),H="http://dataservice.accuweather.com",G="215854",J={getCurrentWeather:z,getFiveDayForecast:K,autoComplete:Q};async function z(t){try{const e=await R.get(`${H}/currentconditions/v1/${t}?apikey=${A}&details=false`);return console.log("Success",e.data),e.data}catch(e){console.log("Error =>",e)}}async function K(t=G,e="Tel Aviv"){let a=B.loadFromStorage("defLocation");if(!a||!a.length)try{console.log("From API");const a=await R.get(`${H}/forecasts/v1/daily/5day/${t}?apikey=${A}&metric=true`);return a.data.DailyForecasts[0].LocationName=e,B.saveToStorage("defLocation",a.data.DailyForecasts),a.data.DailyForecasts}catch(r){console.log("Error =>",r)}return console.log("From storage"),a}async function Q(t){if(console.log("autocomplete",t),t)try{const e=await R.get(`${H}/locations/v1/cities/autocomplete?apikey=${A}&q=${t}`);let a=e.data.map((t=>{let e={[t.LocalizedName]:t.Key};return e}));return a}catch(e){console.log("Error =>",e)}}var X={data(){return{locations:null,items:null,isLoading:!1,query:null}},methods:{async search(t){this.locations=await J.autoComplete(t),this.items=this.locations.map((t=>{const e={text:Object.keys(t),value:Object.values(t)};return e})),this.isLoading=!1},async getWeather(){console.log("getWeather",this.query),console.log("cityCode",cityCode)}},watch:{async query(t){console.log("query (watch) val - ",t);const e=this.$store.dispatch("fetchWeather",{locationCode:t,locationName:this.query});this.$emit("locationSelected",e)}}},U=X,Y=a(2656),tt=a(2102),et=a(2877),at=(0,u.Z)(U,I,q,!1,null,null,null),rt=at.exports;d()(at,{VAutocomplete:Y.Z,VCol:tt.Z,VRow:et.Z,VSpacer:V.Z});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"d-flex justify-space-between"},t._l(t.locationWeather,(function(e){return a("v-card",{key:e.EpochDate,staticClass:"card text-center"},[a("v-card-title",{staticClass:"justify-center"},[t._v(t._s(t.getDay(e.Date)))]),a("v-spacer"),a("v-card-text",[t._v(t._s(e.Temperature.Maximum.Value)+"℃")])],1)})),1)},nt=[],ct={props:{locationWeather:{type:Array,default:null,require:!1}},methods:{getDay(t){const e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=new Date(t);return e[a.getDay()]}},data(){return{fiveDayForecast:[{EpochDate:1,Date:new Date("2022-07-02T07:00:00+03:00").getDay(),value:"30"},{EpochDate:2,Date:new Date("2022-07-03T07:00:00+03:00").getDay(),value:"30"},{EpochDate:3,Date:new Date("2022-07-04T07:00:00+03:00").getDay(),value:"30"},{EpochDate:4,Date:new Date("2022-07-05T07:00:00+03:00").getDay(),value:"30"},{EpochDate:5,Date:new Date("2022-07-06T07:00:00+03:00").getDay(),value:"30"}]}},computed:{weather(){return this.data}}},it=ct,st=a(3237),lt=a(7118),ut=a(9846),vt=(0,u.Z)(it,ot,nt,!1,null,"2af7691c",null),dt=vt.exports;d()(vt,{VCard:st.Z,VCardText:lt.ZB,VCardTitle:lt.EB,VContainer:ut.Z,VSpacer:V.Z});var ft={name:"Home",components:{CitySearch:rt,CityForecast:dt},async created(){await this.$store.dispatch("fetchWeather",{locationCode:null,locationName:null})},data(){return{defLocation:null,items:null}},computed:{currLocation(){return console.log(this.$store.getters.currLocation),this.$store.getters.currLocation},locationName(){return this.$store.getters.locationName}}},mt=ft,pt=a(3385),ht=(0,u.Z)(mt,j,W,!1,null,"28dd1c68",null),yt=ht.exports;d()(ht,{VCol:tt.Z,VContainer:ut.Z,VRow:et.Z,VSheet:pt.Z,VSpacer:V.Z});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Favorites")])},wt=[],Zt={},_t=Zt,Dt=(0,u.Z)(_t,gt,wt,!1,null,null,null),bt=Dt.exports;r.Z.use(N.Z);const Ct=[{path:"/",name:"home",component:yt},{path:"/favorites",name:"favorites",component:bt}],xt=new N.Z({routes:Ct});var Vt=xt,Lt=a(629);r.Z.use(Lt.ZP);var St=new Lt.ZP.Store({state:{currLocationWeather:null,favorites:null},getters:{currLocation({currLocationWeather:t}){return t},favorites({favorites:t}){return t}},mutations:{setCurrLocation(t,e){t.currLocationWeather=e},addFavorite(t,e){t.favorites.push(e)},setLocationName(t,e){t.locationName=e}},actions:{async getDefaultWeather({commit:t}){try{const e=await J.getFiveDayForecast();return t("setCurrLocation",e),e}catch(e){console.log("Error =>",e)}},async fetchWeather({commit:t},{locationCode:e,locationName:a}){try{if(!e||!a){const e=await J.getFiveDayForecast();return void t("setCurrLocation",e)}const r=await J.getFiveDayForecast(e,a);t("setCurrLocation",r)}catch(r){console.log("Error =>",r)}}},modules:{}}),Ft=a(9132);r.Z.use(Ft.Z);var Tt=new Ft.Z({}),$t=a(2892),Et=a.n($t);r.Z.config.productionTip=!1,r.Z.use(Et(),{lock:!1,listenTo:"keyup",defaultTime:"3000ms",fireOnEmpty:!1,trim:!1}),new r.Z({router:Vt,store:St,vuetify:Tt,render:t=>t(O)}).$mount("#app")}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,r,o,n){if(!r){var c=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],n=t[u][2];for(var i=!0,s=0;s<r.length;s++)(!1&n||c>=n)&&Object.keys(a.O).every((function(t){return a.O[t](r[s])}))?r.splice(s--,1):(i=!1,n<c&&(c=n));if(i){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[r,o,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,n,c=r[0],i=r[1],s=r[2],l=0;if(c.some((function(e){return 0!==t[e]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(s)var u=s(a)}for(e&&e(r);l<c.length;l++)n=c[l],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},r=self["webpackChunkvue_weather"]=self["webpackChunkvue_weather"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(5957)}));r=a.O(r)})();
//# sourceMappingURL=app.ff0b31ca.js.map