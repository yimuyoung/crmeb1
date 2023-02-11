require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/admin/statistics/index"],{"4b93":function(e,t,i){"use strict";(function(e){i("7b91");a(i("66fd"));var t=a(i("5c28"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=i,e(t.default)}).call(this,i("543d")["createPage"])},"5c28":function(e,t,i){"use strict";i.r(t);var a=i("7780"),n=i("e8bf");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("a19f");var s,o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);t["default"]=c.exports},7780:function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=(e._self._c,e.$t("今天")),a=e.$t("昨天"),n=e.$t("最近7天"),r=e.$t("本月"),s=e.$t("自定义"),o=1==this.where.type?e.$t("营业额（元）"):null,c=1!=this.where.type?e.$t("订单量（份）"):null,h=e.$t("增长率"),l=e.$t("增长"),u=e.$t("单位"),d=1==e.where.type?e.$t("元."):null,f=1!=e.where.type?e.$t("分."):null,m=e.$t("详细数据"),g=e.$t("日期"),p=e.$t("订单数"),w=e.$t("成交额");e.$mp.data=Object.assign({},{$root:{m0:i,m1:a,m2:n,m3:r,m4:s,m5:o,m6:c,m7:h,m8:l,m9:u,m10:d,m11:f,m12:m,m13:g,m14:p,m15:w}})},r=[]},"8e26":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(i("b84a")),n=i("b65d");function r(e){return e&&e.__esModule?e:{default:e}}var s=function(){Promise.all([i.e("pages/admin/common/vendor"),i.e("pages/admin/components/uni-calendar/uni-calendar")]).then(function(){return resolve(i("0601"))}.bind(null,i)).catch(i.oe)},o=null,c=(new Date).getFullYear(),h=(new Date).getMonth()+1,l=(new Date).getDate(),u={name:"Statistics",components:{uniCalendar:s},props:{},data:function(){return{value:[[c,h,l-1],[c,h,l]],isrange:!0,weekSwitch:!1,ismulti:!1,monFirst:!0,clean:!1,lunar:!1,renderValues:[],monthRange:[],current:!1,where:{start:"",stop:"",type:""},types:"",time:"",title:"",growth_rate:"",increase_time:"",increase_time_status:"",time_price:"",loaded:!1,loading:!1,filter:{page:1,limit:10,start:"",stop:""},list:[],cWidth:"",cHeight:"",pixelRatio:1,textarea:"",LineA:{categories:["2012","2013","2014","2015","2016","2017"],series:[{data:[35,8,25,37,4,20]}]},info:{startDate:"",endDate:"",lunar:!1,range:!0,insert:!1,selected:[],showMonth:!1},type:"",before:"",after:""}},watch:{"$route.params":function(e){var t=this;void 0!=e&&(t.setType(e.type),t.setTime(e.time),t.getIndex())}},onLoad:function(t){this.type=t.type,t.before&&(this.before=t.before),t.after&&(this.after=t.after),this.setType(t.type),this.setTime(t.time),this.cWidth=e.upx2px(690),this.cHeight=e.upx2px(500),this.getInfo()},computed:{monthRangeText:function(){return this.monthRange.length?this.$t("固定"):this.$t("指定范围")}},methods:{getIndex:function(){var e=[],t=[],i=this;(0,n.getStatisticsTime)(i.where).then((function(a){var n=a.data.chart,r=[],s=[];n.forEach((function(e){r.push(e.time),s.push(e.num)})),i.growth_rate=a.data.growth_rate,i.increase_time=a.data.increase_time,i.increase_time_status=a.data.increase_time_status,i.time_price=a.data.time,a.data.chart.forEach((function(i,a){e.push(i.time),t.push(i.num)})),i.LineA.categories=e,i.LineA.series[0].data=t,i.showLineA("canvasLineA",i.LineA)}),(function(e){i.$util.Tips({title:e})}))},setTime:function(e){var t=this;this.time=e;var i=(new Date).getFullYear(),a=(new Date).getMonth()+1,n=(new Date).getDate();switch(this.list=[],this.filter.page=1,this.loaded=!1,this.loading=!1,e){case"today":this.where.start=new Date(Date.parse(i+"/"+a+"/"+n)).getTime()/1e3,this.where.stop=new Date(Date.parse(i+"/"+a+"/"+n)).getTime()/1e3+86400-1,this.title=this.$t("今天"),this.getIndex(),this.getInfo();break;case"yesterday":this.where.start=new Date(Date.parse(i+"/"+a+"/"+n)).getTime()/1e3-86400,this.where.stop=new Date(Date.parse(i+"/"+a+"/"+n)).getTime()/1e3-1,this.title=this.$t("昨天"),this.getIndex(),this.getInfo();break;case"month":this.where.start=new Date(i,(new Date).getMonth(),1).getTime()/1e3,this.where.stop=new Date(i,a,1).getTime()/1e3-1,this.title=this.$t("本月"),this.getIndex(),this.getInfo();break;case"seven":this.where.start=new Date(Date.parse(i+"/"+a+"/"+n)).getTime()/1e3+86400-604800,this.where.stop=new Date(Date.parse(i+"/"+a+"/"+n)).getTime()/1e3+86400-1,this.title=this.$t("最近7天"),this.getIndex(),this.getInfo();break;case"date":var r=new Date(t.before).getTime()/1e3,s=new Date(t.after).getTime()/1e3;t.where.start=r,t.where.stop=s,Promise.all([t.getIndex(),t.getInfo()]);break}},setType:function(e){switch(e){case"price":this.where.type=1;break;case"order":this.where.type=2;break}},dateTitle:function(){e.navigateTo({url:"/pages/admin/custom_date/index?type="+this.type})},close:function(){this.current=!1},getInfo:function(){var e=this;e.loading||e.loaded||(e.loading=!0,e.filter.start=e.where.start,e.filter.stop=e.where.stop,(0,n.getStatisticsMonth)(e.filter).then((function(t){e.loading=!1,e.loaded=t.data.length<e.filter.limit,e.list.push.apply(e.list,t.data),e.filter.page=e.filter.page+1}),(function(t){e.$util.Tips({title:t})})))},showLineA:function(e,t){var i=this;o=new a.default({$this:i,canvasId:e,type:"line",fontSize:11,padding:[15,15,0,15],legend:{show:!1,padding:5,lineHeight:11,margin:5},dataLabel:!0,dataPointShape:!0,dataPointShapeType:"hollow",background:"#FFFFFF",pixelRatio:i.pixelRatio,categories:t.categories,series:t.series,animation:!0,enableScroll:!0,xAxis:{disableGrid:!1,type:"grid",gridType:"dash",itemCount:4,scrollShow:!0,scrollAlign:"left"},yAxis:{gridType:"dash",splitNumber:8,min:0,max:30,format:function(e){return e.toFixed(0)}},width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,extra:{line:{type:"straight"}}})},touchLineA:function(e){o.scrollStart(e)},moveLineA:function(e){o.scroll(e)},touchEndLineA:function(e){o.scrollEnd(e)},confirm:function(e){var t=this;if(e.range.after&&e.range.before){var i=new Date(e.range.before+" 00:00:00").getTime()/1e3,a=new Date(e.range.after+" 23:59:59").getTime()/1e3;t.where.start=i,t.where.stop=a,t.list=[],t.filter.page=1,t.loaded=!1,t.loading=!1,Promise.all([t.getIndex(),t.getInfo()])}}},onReachBottom:function(){this.getInfo()}};t.default=u}).call(this,i("543d")["default"])},a03c:function(e,t,i){},a19f:function(e,t,i){"use strict";var a=i("a03c"),n=i.n(a);n.a},e8bf:function(e,t,i){"use strict";i.r(t);var a=i("8e26"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a}},[["4b93","common/runtime","common/vendor","pages/admin/common/vendor"]]]);