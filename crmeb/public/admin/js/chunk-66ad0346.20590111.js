(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-66ad0346"],{"25d7":function(t,s,a){"use strict";var e=a("7ce7");a.n(e).a},6181:function(t,s,a){},"67f0":function(t,s,a){"use strict";var e=a("6181");a.n(e).a},"71d3":function(t,s,a){"use strict";var e=a("7957");a.n(e).a},7957:function(t,s,a){},"7afb":function(t,s,a){"use strict";a.r(s);var e=a("f3f3"),i=(a("a434"),a("d81d"),a("2f62")),o=a("47c5"),l={name:"live_detail",data:function(){return{option:{form:{labelWidth:"150px"}},FormData:{},loading:!1}},methods:{getData:function(t){var s=this;this.loading=!0,Object(o.d)(t).then((function(t){s.FormData=t.data,s.loading=!1})).catch((function(t){s.$Message.error(t.msg),s.loading=!1}))}}},n=(a("67f0"),a("2877")),c=(l=Object(n.a)(l,(function(){var t=this,s=t.$createElement;s=t._self._c||s;return s("div",{staticClass:"divBox"},[s("div",[s("div",{staticClass:"box-container"},[s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("直播间名称：")]),s("span",{staticClass:"info"},[t._v(t._s(t.FormData.name))])]),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("主播微信号：")]),s("span",{staticClass:"info"},[t._v(t._s(t.FormData.anchor_wechat))])]),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("直播间ID：")]),s("span",{staticClass:"info"},[t._v(t._s(t.FormData.room_id))])]),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("主播昵称：")]),s("span",{staticClass:"info"},[t._v(t._s(t.FormData.anchor_name))])]),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("手机号：")]),s("span",{staticClass:"info"},[t._v(t._s(t.FormData.phone))])]),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("直播状态：")]),s("span",{staticClass:"info"},[t._v(t._s(t._f("liveReviewStatusFilter")(t.FormData.live_status)))])]),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("直播开始时间：")]),s("span",{staticClass:"info"},[t._v(t._s(t.FormData.start_time))])]),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("直播结束时间：")]),s("span",{staticClass:"info"},[t._v(t._s(t.FormData.end_time))])]),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("直播间类型：")]),s("span",{staticClass:"info"},[t._v(t._s(t._f("broadcastType")(t.FormData.type)))])]),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("显示类型：")]),s("span",{staticClass:"info"},[t._v(t._s(t._f("broadcastDisplayType")(t.FormData.screen_type)))])]),s("div",{staticClass:"list sp image"},[s("label",{staticClass:"name"},[t._v("背景图：")]),s("img",{staticStyle:{"max-width":"150px",height:"80px"},attrs:{src:t.FormData.cover_img}})]),s("div",{staticClass:"list sp image"},[s("label",{staticClass:"name"},[t._v("分享图：")]),s("img",{staticStyle:{"max-width":"150px",height:"80px"},attrs:{src:t.FormData.share_img}})]),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("是否关闭点赞：")]),s("span",{staticClass:"info blue"},[t._v(t._s(t._f("filterClose")(t.FormData.close_like)))])]),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("是否关闭货架：")]),s("span",{staticClass:"info blue"},[t._v(t._s(t._f("filterClose")(t.FormData.close_goods)))])]),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("是否关闭评论：")]),s("span",{staticClass:"info blue"},[t._v(t._s(t._f("filterClose")(t.FormData.close_comment)))])]),s("div",{staticClass:"list"},[s("label",{staticClass:"name"},[t._v("是否显示直播回放：")]),s("span",{staticClass:"info blue"},[t._v(t._s(t._f("filterClose")(t.FormData.replay_status)))])])])])])}),[],!1,null,"ba270f42",null).exports,a("99af"),a("c4ad")),r={name:"add_goods",components:{goodsList:c.default},props:{datas:{type:Object,default:function(){return{}}}},data:function(){return{modals:!1,goodsList:[]}},methods:{getProductId:function(t){var s=this;this.goodsList=this.goodsList.concat(t),this.$nextTick((function(t){setTimeout((function(){s.modals=!1}),300)}))},bindDelete:function(t){this.goodsList.splice(t,1)},bindSub:function(){var t=[];this.goodsList.map((function(s){t.push(s.product_id)})),this.$emit("getData",t)}}};a("25d7"),l={name:"live",components:{detailsFrom:l,addGoods:Object(n.a)(r,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"item"},[a("span",[t._v("直播间名称：")]),t._v("\n    "+t._s(t.datas.name)+"\n  ")]),a("div",{staticClass:"item"},[a("span",[t._v("直播间ID：")]),t._v("\n    "+t._s(t.datas.id)+"\n  ")]),a("div",{staticClass:"item box"},[t._l(t.goodsList,(function(s,e){return a("div",{key:e,staticClass:"box-item"},[a("img",{attrs:{src:s.image,alt:""}}),a("Icon",{attrs:{type:"ios-close-circle",size:"20"},on:{click:function(s){return t.bindDelete(e)}}})],1)})),a("div",{staticClass:"upload-box",on:{click:function(s){t.modals=!0}}},[a("Icon",{attrs:{type:"ios-camera-outline",size:"36"}})],1)],2),a("Button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:t.bindSub}},[t._v("提交")]),a("Modal",{staticClass:"paymentFooter",attrs:{title:"商品列表",scrollable:"",width:"900","footer-hide":!0},model:{value:t.modals,callback:function(s){t.modals=s},expression:"modals"}},[t.modals?a("goods-list",{ref:"goodslist",attrs:{ischeckbox:!0,liveStatus:!0},on:{getProductId:t.getProductId}}):t._e()],1)],1)}),[],!1,null,"0c428ad0",null).exports,goodsList:c.default},data:function(){return{isShowBox:!1,modals:!1,total:0,grid:{xl:7,lg:7,md:12,sm:24,xs:24},formValidate:{status:"",kerword:"",page:1,limit:20},treeData:{withdrawal:[{title:"全部",value:""},{title:"直播中",value:1},{title:"未开始",value:2},{title:"已结束",value:3}]},columns1:[{key:"id",title:"直播间ID",minWidth:35},{key:"name",minWidth:35,title:"直播间名称"},{key:"anchor_name",minWidth:35,title:"主播昵称"},{key:"anchor_wechat",minWidth:35,title:"主播微信号"},{key:"start_time",minWidth:35,title:"直播开始时间"},{key:"end_time",minWidth:35,title:"计划结束时间"},{key:"add_time",minWidth:35,title:"创建时间"},{slot:"is_mer_show",title:"显示状态",minWidth:80},{slot:"status",minWidth:35,title:"直播状态"},{key:"sort",minWidth:35,title:"排序"},{slot:"action",fixed:"right",title:"操作",minWidth:120}],tabList:[],loading:!1,activeItem:{}}},computed:Object(e.a)(Object(e.a)({},Object(i.e)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:80},labelPosition:function(){return this.isMobile?"top":"left"}}),created:function(){this.getList()},methods:{getList:function(){var t=this;this.loading=!0,Object(o.j)(this.formValidate).then((function(s){t.total=s.data.count,t.tabList=s.data.list,t.loading=!1}))},selChange:function(){this.formValidate.page=1,this.getList()},menusAdd:function(){this.$router.push({path:"/admin/marketing/live/add_live_room"})},pageChange:function(t){this.formValidate.page=t,this.getList()},onchangeIsShow:function(t){var s=this,a=t.id;t=t.is_show;Object(o.l)(a,t).then((function(t){s.$Message.success(t.msg)})).catch((function(t){s.$Message.error(t.msg)}))},detail:function(t){this.modals=!0,this.$refs.studioDetail.getData(t.id)},addGoods:function(t){this.activeItem=t,this.isShowBox=!0},getData:function(t){var s=this;Object(o.k)({room_id:this.activeItem.id,goods_ids:t}).then((function(t){s.$Message.success(t.msg),s.isShowBox=!1,s.$refs.liveAdd.goodsList=[]})).catch((function(t){s.$Message.error(t.msg),s.isShowBox=!1,s.$refs.liveAdd.goodsList=[]}))},syncRoom:function(){var t=this;Object(o.n)().then((function(s){t.$Message.success(s.msg),t.getList()})).catch((function(s){t.$Message.error(res.msg)}))},del:function(t,s,a){var e=this;s={title:s,num:a,url:"live/room/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(s).then((function(t){e.$Message.success(t.msg),e.tabList.splice(a,1),e.getList()})).catch((function(t){e.$Message.error(t.msg)}))},getProductId:function(t){var s=[];t.map((function(t){s.push(t.product_id)})),this.getData(s)}}},a("71d3"),r=Object(n.a)(l,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"formValidate",staticClass:"tabform",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{attrs:{gutter:24,type:"flex"}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"直播状态："}},[a("RadioGroup",{staticClass:"mr15",attrs:{type:"button"},on:{"on-change":t.selChange},model:{value:t.formValidate.status,callback:function(s){t.$set(t.formValidate,"status",s)},expression:"formValidate.status"}},t._l(t.treeData.withdrawal,(function(s,e){return a("Radio",{key:e,attrs:{label:s.value}},[t._v(t._s(s.title))])})),1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"搜索："}},[a("Input",{staticStyle:{width:"30%"},attrs:{search:"","enter-button":"",placeholder:"请输入直播间名称/ID/主播昵称/微信号","element-id":"name"},on:{"on-search":t.selChange},model:{value:t.formValidate.kerword,callback:function(s){t.$set(t.formValidate,"kerword",s)},expression:"formValidate.kerword"}})],1)],1)],1),a("Row",{attrs:{type:"flex"}},[a("Col",t._b({},"Col",t.grid,!1),[a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-system_menus-add"],expression:"['setting-system_menus-add']"}],attrs:{type:"primary",icon:"md-add"},on:{click:function(s){return t.menusAdd("添加直播间")}}},[t._v("添加直播间")]),a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-system_menus-add"],expression:"['setting-system_menus-add']"}],staticStyle:{"margin-left":"20px"},attrs:{icon:"md-list",type:"success"},on:{click:t.syncRoom}},[t._v("同步直播间")])],1)],1)],1),a("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.tabList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"is_mer_show",fn:function(s){var e=s.row;return s.index,[a("i-switch",{attrs:{value:e.is_show,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(s){return t.onchangeIsShow(e)}},model:{value:e.is_show,callback:function(s){t.$set(e,"is_show",s)},expression:"row.is_show"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"status",fn:function(s){var e=s.row;return s.index,[a("div",[t._v(t._s(t._f("liveReviewStatusFilter")(e.live_status)))])]}},{key:"action",fn:function(s){var e=s.row,i=s.index;return[a("a",{on:{click:function(s){return t.detail(e,"详情")}}},[t._v("详情")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(s){return t.del(e,"删除这条信息",i)}}},[t._v("删除")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(s){return t.addGoods(e)}}},[t._v("添加商品")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),a("Modal",{staticClass:"paymentFooter",attrs:{title:"直播间详情",scrollable:"",width:"700","footer-hide":!0},model:{value:t.modals,callback:function(s){t.modals=s},expression:"modals"}},[a("details-from",{ref:"studioDetail"})],1),a("Modal",{staticClass:"paymentFooter",attrs:{title:"添加商品",scrollable:"",width:"700","footer-hide":!0},model:{value:t.isShowBox,callback:function(s){t.isShowBox=s},expression:"isShowBox"}},[t.isShowBox?a("goods-list",{ref:"goodslist",attrs:{ischeckbox:!0,liveStatus:!0},on:{getProductId:t.getProductId}}):t._e()],1)],1)}),[],!1,null,"059b0d35",null);s.default=r.exports},"7ce7":function(t,s,a){}}]);