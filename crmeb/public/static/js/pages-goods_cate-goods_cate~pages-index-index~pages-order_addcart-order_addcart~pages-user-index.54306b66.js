(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods_cate-goods_cate~pages-index-index~pages-order_addcart-order_addcart~pages-user-index"],{"0fd1":function(t,a,e){"use strict";e.r(a);var n=e("1092"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},1092:function(t,a,e){"use strict";var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e("a656"),o=e("a43a"),r=n(e("9ad2")),s=getApp(),c={name:"tabBar",props:{pagePath:null,dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,a){t&&(this.isShow=t.isShow.val)}}},mixins:[r.default],data:function(){return{name:this.$options.name,page:"/pages/index/index",tabbar:this.$Cache.get("TAB_BAR")?JSON.parse(this.$Cache.get("TAB_BAR")):[],isShow:!0,isIframe:s.globalData.isIframe}},mounted:function(){this.tabbar.length||this.getDiyData()},methods:{getDiyData:function(){var t=this;(0,i.getDiy)().then((function(a){var e=a.data.tabBar.default.tabBarList.list;t.$Cache.set("TAB_BAR",e),t.tabbar=e})).catch((function(t){uni.showToast({title:t,icon:"none"})}))},changeTab:function(t){var a=this;(0,o.goPage)().then((function(e){a.page=t.link,uni.switchTab({url:a.page,fail:function(){uni.navigateTo({url:a.page})}})}))}}};a.default=c},2473:function(t,a,e){"use strict";var n=e("3fc9"),i=e.n(n);i.a},"3fc9":function(t,a,e){var n=e("5efa");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("564de6a8",n,!0,{sourceMap:!1,shadowMode:!1})},"5efa":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.borderShow[data-v-5d8e0dab]{position:fixed}.borderShow .uni-tabbar[data-v-5d8e0dab]::after{content:" ";position:absolute;left:0;top:0;width:100%;height:100%;border:1px dashed #007aff;box-sizing:border-box}.uni-tabbar[data-v-5d8e0dab]{position:fixed;bottom:0;left:0;z-index:999;width:100%;height:%?98?%;height:calc(98rpx+ constant(safe-area-inset-bottom));height:calc(%?98?% + env(safe-area-inset-bottom));padding-bottom:calc(constant(safe-area-inset-bottom));padding-bottom:calc(env(safe-area-inset-bottom));box-sizing:border-box;border-top:solid %?1?% #f3f3f3;background-color:#fff;box-shadow:0 0 %?17?% %?1?% hsla(0,0%,80.8%,.32);display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-around}.uni-tabbar .uni-tabbar_item[data-v-5d8e0dab]{width:100%;font-size:%?20?%;text-align:center}.uni-tabbar .uni-tabbar_icon[data-v-5d8e0dab]{height:%?50?%;width:%?50?%;text-align:center;margin:0 auto}.uni-tabbar .uni-tabbar_icon uni-image[data-v-5d8e0dab]{width:100%;height:100%}.uni-tabbar .uni-tabbar_label[data-v-5d8e0dab]{font-size:%?24?%;color:#282828}.uni-tabbar .uni-tabbar_label.active[data-v-5d8e0dab]{color:var(--view-theme)}',""]),t.exports=a},"7edb":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{style:t.colorStyle},[t.isShow&&t.tabbar.length&&!t.isIframe?e("v-uni-view",{staticClass:"uni-tabbar acea-row row-around row-middle"},t._l(t.tabbar,(function(a,n){return e("v-uni-view",{key:n,staticClass:"uni-tabbar_item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(a)}}},[e("v-uni-view",{staticClass:"uni-tabbar_icon"},[a.link==t.pagePath?e("v-uni-image",{attrs:{mode:"aspectFit",src:a.imgList[0]}}):e("v-uni-image",{attrs:{mode:"aspectFit",src:a.imgList[1]}})],1),e("v-uni-view",{staticClass:"uni-tabbar_label",class:{active:a.link==t.pagePath}},[t._v(t._s(t.$t(a.name)))])],1)})),1):t._e(),t.isIframe&&t.tabbar.length?e("v-uni-view",{staticClass:"uni-tabbar acea-row row-around row-middle"},t._l(t.tabbar,(function(a,n){return e("v-uni-view",{key:n,staticClass:"uni-tabbar_item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(a)}}},[e("v-uni-view",{staticClass:"uni-tabbar_icon"},[a.link==t.pagePath?e("v-uni-image",{attrs:{mode:"aspectFit",src:a.imgList[0]}}):e("v-uni-image",{attrs:{mode:"aspectFit",src:a.imgList[1]}})],1),e("v-uni-view",{staticClass:"uni-tabbar_label",class:{active:a.link==t.pagePath}},[t._v(t._s(t.$t(a.name)))])],1)})),1):t._e(),t.isIframe&&!t.tabbar.length?e("v-uni-view",{staticClass:"empty-img uni-tabbar acea-row row-around row-middle"},[t._v(t._s(t.$t("暂无数据，请设置")))]):t._e()],1)},o=[]},8247:function(t,a,e){"use strict";e.r(a);var n=e("cef3"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},a43a:function(t,a,e){"use strict";e("99af"),e("d3b7"),Object.defineProperty(a,"__esModule",{value:!0}),a.goShopDetail=i,a.goPage=o;var n=getApp();function i(t,a){return new Promise((function(e){t.activity&&"1"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.activity.id,"&time=").concat(t.activity.time,"&status=1")}):t.activity&&"2"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.activity.id,"&bargain=").concat(a)}):t.activity&&"3"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.activity.id)}):e(t)}))}function o(){return new Promise((function(t){if(0!=n.globalData.isIframe)return!1;t(!0)}))}},be85:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.newData?e("v-uni-view",[e("v-uni-view",{staticClass:"page-footer",attrs:{id:"target"}},t._l(t.newData.menuList,(function(a,n){return e("v-uni-view",{key:n,staticClass:"foot-item",style:{"background-color":t.newData.bgColor.color[0].item},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goRouter(a)}}},[a.link==t.activityTab?[e("v-uni-image",{staticClass:"active",attrs:{src:a.imgList[0]}}),e("v-uni-view",{staticClass:"txt",style:{color:t.newData.activeTxtColor.color[0].item}},[t._v(t._s(t.$t(a.name)))])]:[e("v-uni-image",{attrs:{src:a.imgList[1]}}),e("v-uni-view",{staticClass:"txt",style:{color:t.newData.txtColor.color[0].item}},[t._v(t._s(t.$t(a.name)))])],"/pages/order_addcart/order_addcart"===a.link&&t.cartNum>0?e("div",{staticClass:"count-num"},[t._v(t._s(t.cartNum>99?"99+":t.cartNum))]):t._e()],2)})),1)],1):t._e()},o=[]},cef3:function(t,a,e){"use strict";(function(t){var n=e("4ea4");e("a9e3"),e("ac1f"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,o=n(e("ade3")),r=n(e("5530")),s=e("26cb"),c=e("18f5"),u=e("5ba0"),d=(i={name:"pageFooter",props:{status:{type:Number|String,default:1},countNum:{type:Number|String,default:0}},data:function(){return{newData:void 0,footHeight:0,isShow:!1}},computed:(0,r.default)({},(0,s.mapState)({configData:function(t){return t.app.pageFooter}}))},(0,o.default)(i,"computed",(0,s.mapGetters)(["isLogin","cartNum","activityTab"])),(0,o.default)(i,"watch",{activityTab:{handler:function(t,a){},deep:!0},configData:{handler:function(t,a){var e=this,n=uni.createSelectorQuery().in(this);this.newData=t,this.$nextTick((function(){n.select("#target").boundingClientRect((function(t){uni.$emit("footHeight",t.height),t&&(e.footHeight=t.height+50)})).exec()}))},deep:!0}}),(0,o.default)(i,"created",(function(){var t=getCurrentPages(),a=t[t.length-1].route;this.$store.commit("ACTIVITYTAB","/"+a)})),(0,o.default)(i,"mounted",(function(){var t=this;(0,c.getNavigation)().then((function(a){uni.setStorageSync("pageFoot",a.data),t.$store.commit("FOOT_UPLOAD",a.data),t.newData=a.data}));uni.hideTabBar(),this.newData=this.$store.state.app.pageFooter,this.isLogin&&this.getCartNum()})),(0,o.default)(i,"methods",{goRouter:function(t){var a=getCurrentPages(),e=a[a.length-1].route;this.$store.commit("ACTIVITYTAB",t.link),t.link!="/"+e&&uni.switchTab({url:t.link,fail:function(a){uni.redirectTo({url:t.link})}})},getCartNum:function(){var t=this,a=this;(0,u.getCartCounts)().then((function(e){a.cartCount=e.data.count,t.$store.commit("indexData/setCartNum",e.data.count>99?"...":e.data.count)}))}}),i);a.default=d}).call(this,e("5a52")["default"])},d9d0:function(t,a,e){var n=e("eb94");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("08b44c22",n,!0,{sourceMap:!1,shadowMode:!1})},dfc4:function(t,a,e){"use strict";var n=e("d9d0"),i=e.n(n);i.a},eb94:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page-footer[data-v-666709aa]{position:fixed;left:0;bottom:0;z-index:999;display:flex;align-items:center;justify-content:space-around;flex-wrap:nowrap;width:100%;height:%?98?%;height:calc(98rpx+ constant(safe-area-inset-bottom));height:calc(%?98?% + env(safe-area-inset-bottom));box-sizing:border-box;border-top:solid %?1?% #f3f3f3;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:#fff;box-shadow:0 0 %?17?% %?1?% hsla(0,0%,80.8%,.32);padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.page-footer .foot-item[data-v-666709aa]{display:flex;width:-webkit-max-content;width:max-content;align-items:center;justify-content:center;flex-direction:column;position:relative;width:100%;height:100%}.page-footer .foot-item .count-num[data-v-666709aa]{position:absolute;display:flex;justify-content:center;align-items:center;width:%?40?%;height:%?40?%;top:%?0?%;right:calc(50% - %?55?%);color:#fff;font-size:%?20?%;background-color:#fd502f;border-radius:50%;padding:%?4?%}.page-footer .foot-item .active[data-v-666709aa]{-webkit-animation:mymove-data-v-666709aa 1s 1;animation:mymove-data-v-666709aa 1s 1}@-webkit-keyframes mymove-data-v-666709aa{0%{-webkit-transform:scale(1);transform:scale(1)\n    /*开始为原始大小*/}10%{-webkit-transform:scale(.8);transform:scale(.8)}30%{-webkit-transform:scale(1.1);transform:scale(1.1)\n    /*放大1.1倍*/}50%{-webkit-transform:scale(.9);transform:scale(.9)\n    /*放大1.1倍*/}70%{-webkit-transform:scale(1.05);transform:scale(1.05)}90%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes mymove-data-v-666709aa{0%{-webkit-transform:scale(1);transform:scale(1)\n    /*开始为原始大小*/}10%{-webkit-transform:scale(.8);transform:scale(.8)}30%{-webkit-transform:scale(1.1);transform:scale(1.1)\n    /*放大1.1倍*/}50%{-webkit-transform:scale(.9);transform:scale(.9)\n    /*放大1.1倍*/}70%{-webkit-transform:scale(1.05);transform:scale(1.05)}90%{-webkit-transform:scale(1);transform:scale(1)}}.page-footer .foot-item uni-image[data-v-666709aa]{height:%?50?%;width:%?50?%;text-align:center;margin:0 auto}.page-footer .foot-item .txt[data-v-666709aa]{font-size:%?24?%}',""]),t.exports=a},fa6b:function(t,a,e){"use strict";e.r(a);var n=e("be85"),i=e("8247");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("dfc4");var r,s=e("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"666709aa",null,!1,n["a"],r);a["default"]=c.exports},fd5d:function(t,a,e){"use strict";e.r(a);var n=e("7edb"),i=e("0fd1");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("2473");var r,s=e("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"5d8e0dab",null,!1,n["a"],r);a["default"]=c.exports}}]);