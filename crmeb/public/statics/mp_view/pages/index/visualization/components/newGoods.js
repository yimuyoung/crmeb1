(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/newGoods"],{"02b9":function(t,e,i){"use strict";var n=i("4871"),s=i.n(n);s.a},4871:function(t,e,i){},"7b22":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("a43a"),s=i("26cb"),r=i("768b"),o=a(i("9ad2"));function a(t){return t&&t.__esModule?t:{default:t}}function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var f=getApp(),d={name:"goodList",mixins:[o.default],props:{dataConfig:{type:Object,default:function(){}}},computed:c({},(0,s.mapGetters)(["uid"])),watch:{dataConfig:{immediate:!0,handler:function(t,e){t&&(this.isShow=t.isShow.val,this.selectType=t.tabConfig.tabVal,this.$set(this,"selectId",t.selectConfig.activeValue||""),this.$set(this,"type",t.selectSortConfig.activeValue),this.salesOrder=1==t.goodsSort.type?"desc":"",this.newsOrder=2==t.goodsSort.type?"news":"",this.ids=t.ids?t.ids.join(","):"",this.numConfig=t.numConfig.val,this.titleInfo=t.titleInfo.list,this.productslist())}}},created:function(){},mounted:function(){},data:function(){return{firstList:[],firstInfo:this.$t("多个优质商品最新上架"),name:this.$options.name,isShow:!0,isIframe:f.globalData.isIframe,selectType:0,selectId:"",salesOrder:"",newsOrder:"",ids:"",page:1,limit:this.$config.LIMIT,type:"",numConfig:0,titleInfo:[]}},methods:{productslist:function(){var t=this,e={};e=t.selectType?{page:t.page,limit:t.limit,type:t.type,ids:t.ids,selectType:t.selectType}:{page:t.page,limit:t.numConfig<=t.limit?t.numConfig:t.limit,type:t.type,newsOrder:t.newsOrder,salesOrder:t.salesOrder,selectId:t.selectId,selectType:t.selectType},(0,r.getHomeProducts)(e).then((function(e){t.firstList=e.data.list})).catch((function(e){t.$util.Tips({title:e})}))},gopage:function(e){(0,n.goPage)().then((function(i){t.navigateTo({url:e})}))},goDetail:function(e){var i=this;(0,n.goPage)().then((function(s){(0,n.goShopDetail)(e,i.uid).then((function(i){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id)})}))}))}}};e.default=d}).call(this,i("543d")["default"])},b2b7:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={easyLoadimage:function(){return Promise.all([i.e("common/vendor"),i.e("components/easy-loadimage/easy-loadimage")]).then(i.bind(null,"e3c3"))}},s=function(){var t=this,e=t.$createElement,i=(t._self._c,t.isShow&&t.firstList.length?t.$t(t.titleInfo[0].val):null),n=t.isShow&&t.firstList.length?t.$t(t.titleInfo[1].val):null,s=t.isShow&&t.firstList.length?t.$t("更多"):null,r=t.$t("￥"),o=t.isShow&&t.firstList.length?t.__map(t.firstList,(function(e,i){var n=t.__get_orig(e),s=e.activity&&"1"===e.activity.type?t.$t("秒杀"):null,r=e.activity&&"2"===e.activity.type?t.$t("砍价"):null,o=e.activity&&"3"===e.activity.type?t.$t("拼团"):null;return{$orig:n,m3:s,m4:r,m5:o}})):null,a=!t.isShow&&t.isIframe&&t.firstList.length?t.$t("更多"):null,l=t.$t("￥"),c=!t.isShow&&t.isIframe&&t.firstList.length?t.__map(t.firstList,(function(e,i){var n=t.__get_orig(e),s=e.activity&&"1"===e.activity.type?t.$t("秒杀"):null,r=e.activity&&"2"===e.activity.type?t.$t("砍价"):null,o=e.activity&&"3"===e.activity.type?t.$t("拼团"):null;return{$orig:n,m8:s,m9:r,m10:o}})):null,u=t.isIframe&&!t.firstList.length?t.$t("更多"):null,f=t.isIframe&&!t.firstList.length?t.$t("首发新品，暂无数据"):null;t.$mp.data=Object.assign({},{$root:{m0:i,m1:n,m2:s,m6:r,l0:o,m7:a,m11:l,l1:c,m12:u,m13:f}})},r=[]},cb3c:function(t,e,i){"use strict";i.r(e);var n=i("7b22"),s=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=s.a},f45b:function(t,e,i){"use strict";i.r(e);var n=i("b2b7"),s=i("cb3c");for(var r in s)"default"!==r&&function(t){i.d(e,t,(function(){return s[t]}))}(r);i("02b9");var o,a=i("f0c5"),l=Object(a["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=l.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/newGoods-create-component',
    {
        'pages/index/visualization/components/newGoods-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f45b"))
        })
    },
    [['pages/index/visualization/components/newGoods-create-component']]
]);
