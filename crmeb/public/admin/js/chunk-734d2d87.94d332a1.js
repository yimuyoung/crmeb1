(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-734d2d87"],{1289:function(t,e,a){},"1fd8":function(t,e,a){"use strict";var r=a("1289");a.n(r).a},"3d87":function(t,e,a){a=a("4930"),t.exports=a&&!!Symbol.for&&!!Symbol.keyFor},"428f":function(t,e,a){a=a("da84"),t.exports=a},"57b9":function(t,e,a){var r=a("c65b"),i=a("d066"),s=a("b622"),o=a("cb2d");t.exports=function(){var t=i("Symbol"),e=(t=t&&t.prototype,t&&t.valueOf),a=s("toPrimitive");t&&!t[a]&&o(t,a,(function(t){return r(e,this)}),{arity:1})}},"5a47":function(t,e,a){var r=a("23e7"),i=a("4930"),s=a("d039"),o=a("7418"),n=a("7b0b");r({target:"Object",stat:!0,forced:!i||s((function(){o.f(1)}))},{getOwnPropertySymbols:function(t){var e=o.f;return e?e(n(t)):[]}})},"746f":function(t,e,a){var r=a("428f"),i=a("1a2d"),s=a("e538"),o=a("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:s.f(t)})}},a4d3:function(t,e,a){a("d9f5"),a("b4f8"),a("c513"),a("e9c4"),a("5a47")},b4f8:function(t,e,a){var r=a("23e7"),i=a("d066"),s=a("1a2d"),o=a("577e"),n=a("5692"),l=(a=a("3d87"),n("string-to-symbol-registry")),c=n("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!a},{for:function(t){var e;t=o(t);return s(l,t)?l[t]:(e=i("Symbol")(t),l[t]=e,c[e]=t,e)}})},c513:function(t,e,a){var r=a("23e7"),i=a("1a2d"),s=a("d9b5"),o=a("0d51"),n=a("5692"),l=(a=a("3d87"),n("symbol-to-string-registry"));r({target:"Symbol",stat:!0,forced:!a},{keyFor:function(t){if(!s(t))throw TypeError(o(t)+" is not a symbol");if(i(l,t))return l[t]}})},d9f5:function(t,e,a){"use strict";function r(t,e){var a=it[t]=k(X);return J(a,{type:A,tag:t,description:e}),g||(a.description=e),a}function i(t,e,a){return t===K&&i(st,e,a),w(t),e=C(e),w(a),(v(it,e)?(a.enumerable?(v(t,U)&&t[U][e]&&(t[U][e]=!1),a=k(a,{enumerable:x(0,!1)})):(v(t,U)||tt(t,U,x(1,{})),t[U][e]=!0),nt):tt)(t,e,a)}function s(t,e){w(t);var a=V(e);e=$(a).concat(c(a));return H(e,(function(e){g&&!u(o,a,e)||i(t,e,a[e])})),t}function o(t){t=C(t);var e=u(at,this,t);return!(this===K&&v(it,t)&&!v(st,t))&&(!(e||!v(this,t)||!v(it,t)||v(this,U)&&this[U][t])||e)}function n(t,e){var a;t=V(t),e=C(e);if(t!==K||!v(it,e)||v(st,e))return!(a=Z(t,e))||!v(it,e)||v(t,U)&&t[U][e]||(a.enumerable=!0),a}function l(t){t=et(V(t));var e=[];return H(t,(function(t){v(it,t)||v(M,t)||rt(e,t)})),e}function c(t){var e=t===K,a=(t=et(e?st:V(t)),[]);return H(t,(function(t){!v(it,t)||e&&!v(K,t)||rt(a,it[t])})),a}var d=a("23e7"),m=a("da84"),u=a("c65b"),f=a("e330"),p=a("c430"),g=a("83ab"),h=a("4930"),b=a("d039"),v=a("1a2d"),y=a("3a9b"),w=a("825a"),V=a("fc6a"),C=a("a04b"),_=a("577e"),x=a("5c6c"),k=a("7c73"),$=a("df75"),P=a("241c"),O=a("057f"),I=a("7418"),S=a("06cf"),D=a("9bf2"),T=a("37e8"),F=a("d1e7"),E=a("cb2d"),j=a("5692"),q=a("f772"),M=a("d012"),z=a("90e3"),R=a("b622"),N=a("e538"),W=a("746f"),L=a("57b9"),B=a("d44e"),G=a("69f3"),H=a("b727").forEach,U=q("hidden"),A="Symbol",J=(a="prototype",G.set),Q=G.getterFor(A),K=Object[a],X=(q=m.Symbol,q&&q[a]),Y=m.TypeError,Z=(G=m.QObject,S.f),tt=D.f,et=O.f,at=F.f,rt=f([].push),it=j("symbols"),st=j("op-symbols"),ot=(m=j("wks"),!G||!G[a]||!G[a].findChild),nt=g&&b((function(){return 7!=k(tt({},"a",{get:function(){return tt(this,"a",{value:7}).a}})).a}))?function(t,e,a){var r=Z(K,e);r&&delete K[e],tt(t,e,a),r&&t!==K&&tt(K,e,r)}:tt;h||(E(X=(q=function(){if(y(X,this))throw Y("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?_(arguments[0]):void 0,e=z(t),a=function(t){this===K&&u(a,st,t),v(this,U)&&v(this[U],e)&&(this[U][e]=!1),nt(this,e,x(1,t))};return g&&ot&&nt(K,e,{configurable:!0,set:a}),r(e,t)})[a],"toString",(function(){return Q(this).tag})),E(q,"withoutSetter",(function(t){return r(z(t),t)})),F.f=o,D.f=i,T.f=s,S.f=n,P.f=O.f=l,I.f=c,N.f=function(t){return r(R(t),t)},g&&(tt(X,"description",{configurable:!0,get:function(){return Q(this).description}}),p||E(K,"propertyIsEnumerable",o,{unsafe:!0}))),d({global:!0,constructor:!0,wrap:!0,forced:!h,sham:!h},{Symbol:q}),H($(m),(function(t){W(t)})),d({target:A,stat:!0,forced:!h},{useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),d({target:"Object",stat:!0,forced:!h,sham:!g},{create:function(t,e){return void 0===e?k(t):s(k(t),e)},defineProperty:i,defineProperties:s,getOwnPropertyDescriptor:n}),d({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:l}),L(),B(q,A),M[U]=!0},e01a:function(t,e,a){"use strict";var r,i,s,o,n,l,c,d=a("23e7"),m=a("83ab"),u=a("da84"),f=a("e330"),p=a("1a2d"),g=a("1626"),h=a("3a9b"),b=a("577e"),v=a("9bf2").f,y=(a=a("e893"),u.Symbol),w=y&&y.prototype;!m||!g(y)||"description"in w&&void 0===y().description||(r={},a(u=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:b(arguments[0]),e=h(w,this)?new y(t):void 0===t?y():y(t);return""===t&&(r[e]=!0),e},y),(u.prototype=w).constructor=u,i="Symbol(test)"==String(y("test")),s=f(w.toString),o=f(w.valueOf),n=/^Symbol\((.*)\)[^)]+$/,l=f("".replace),c=f("".slice),v(w,"description",{configurable:!0,get:function(){var t=o(this),e=s(t);return p(r,t)?"":""===(t=i?c(e,7,-1):l(e,n,"$1"))?void 0:t}}),d({global:!0,constructor:!0,forced:!0},{Symbol:u}))},e538:function(t,e,a){a=a("b622"),e.f=a},fac5f:function(t,e,a){"use strict";a.r(e);var r=a("d0ff"),i=a("c964"),s=a("fc11"),o=a("f3f3"),n=(a("96cf"),a("a4d3"),a("e01a"),a("d3b7"),a("159b"),a("a434"),a("4e82"),a("a9e3"),a("d81d"),a("99af"),a("2f62")),l=a("c4ad"),c=a("a069"),d=a("b0e7"),m=a("5334"),u=a("b7be"),f=a("c4c8");l={name:"storePersellCreate",components:{goodsList:l.default,uploadPictures:d.a,WangEditor:c.a,freightTemplate:m.a},data:function(){return{submitOpen:!1,spinShow:!1,isChoice:"",current:0,modalPic:!1,grid:{xl:12,lg:20,md:24,sm:24,xs:24},grid2:{xl:8,lg:8,md:12,sm:24,xs:24},gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},modals:!1,modal_loading:!1,images:[],templateList:[],columns:[],specsData:[],picTit:"",tableIndex:0,formValidate:{images:[],info:"",title:"",image:"",unit_name:"",stock:1,sales:0,deliver_time:3,sort:0,status:1,section_time:[],description:"",id:0,product_id:0,num:1,deposit:1,temp_id:"",attrs:[],items:[]},ruleValidate:{image:[{required:!0,message:"请选择主图",trigger:"change"}],images:[{required:!0,type:"array",message:"请选择主图",trigger:"change"},{type:"array",min:1,message:"Choose two hobbies at best",trigger:"change"}],title:[{required:!0,message:"请输入预售名称",trigger:"blur"}],info:[{required:!0,message:"请输入预售简介",trigger:"blur"}],section_time:[{required:!0,type:"array",message:"请选择活动时间",trigger:"change"}],unit_name:[{required:!0,message:"请输入单位",trigger:"blur"}],price:[{required:!0,type:"number",message:"请输入预售价",trigger:"blur"}],cost:[{required:!0,type:"number",message:"请输入成本价",trigger:"blur"}],stock:[{required:!0,type:"number",message:"请输入库存",trigger:"blur"}],give_integral:[{required:!0,type:"number",message:"请输入赠送积分",trigger:"blur"}],effective_time:[{required:!0,type:"number",message:"请输入预售时效(单位 小时)",trigger:"blur"}],people:[{required:!0,type:"number",message:"请输入预售人数",trigger:"blur"}],num:[{required:!0,type:"number",message:"请输入购买数量限制",trigger:"blur"}],deposit:[{required:!0,type:"number",message:"请输入定金金额",trigger:"blur"}],once_num:[{required:!0,type:"number",message:"请输入单次购买数量限制",trigger:"blur"}],virtualPeople:[{required:!0,type:"number",message:"请输入虚拟成团补齐人数",trigger:"blur"}],temp_id:[{required:!0,message:"请选择运费模板",trigger:"change",type:"number"}]},copy:0}},computed:Object(o.a)(Object(o.a)({},Object(n.e)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:155},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){0!=this.$route.params.id&&(this.copy=this.$route.params.copy,this.current=1,this.getInfo()),this.productGetTemplate()},methods:{getEditorContent:function(t){this.formValidate.description=t},freight:function(){this.$refs.template.id=0,this.$refs.template.isTemplate=!0},productAttrs:function(t){var e=this;Object(u.fb)(t.id,6).then((function(t){t=t.data.info,e.specsData=t.attrs,e.specsData.forEach((function(t,a){e.$set(e.specsData[a],"id",a)})),e.formValidate.items=t.items,e.columns=t.header,e.columns.unshift({type:"selection",width:60,align:"center"}),e.inputChange(t)})).catch((function(t){e.$Message.error(t.msg)}))},inputChange:function(t){var e=this,a=[];t.header.forEach((function(t,e){1===t.type&&a.push({index:e,key:t.key,title:t.title})})),a.forEach((function(t,a){var r=t.title,i=t.key;e.columns.splice(t.index,1,{title:r,key:i,align:"center",minWidth:100,render:function(t,a){return t("div",[t("InputNumber",{props:{min:1,max:"price"===i?1e7:a.row.stock,value:"price"===i?a.row.price:a.row.quota},on:{"on-change":function(t){"price"===i?a.row.price=t:a.row.quota=t<a.row.stock?t:a.row.stock,e.specsData[a.index]=a.row,e.formValidate.attrs&&e.formValidate.attrs.length&&e.formValidate.attrs.forEach((function(t,r){t.id===a.row.id&&e.formValidate.attrs.splice(r,1,a.row)}))}}})])}})}))},changeCheckbox:function(t){this.formValidate.attrs=t},productGetTemplate:function(){var t=this;Object(f.u)().then((function(e){t.templateList=e.data}))},validate:function(t,e,a){!1===e&&this.$Message.error(a)},getProductId:function(t){var e=this;this.modal_loading=!1,this.modals=!1,setTimeout((function(){var a;e.formValidate=(a={images:t.slider_image,info:t.store_info,title:t.store_name,image:t.image,unit_name:t.unit_name,stock:t.stock,sales:t.sales,sort:t.sort,section_time:[],deliver_time:3,num:1,deposit:1,description:t.description,id:0},Object(s.a)(a,"num",1),Object(s.a)(a,"status",1),Object(s.a)(a,"product_id",t.id),Object(s.a)(a,"temp_id",t.temp_id),a),e.productAttrs(t)}),500)},cancel:function(){this.modals=!1},onchangeTime:function(t){this.formValidate.section_time=t},getInfo:function(){var t=this;this.spinShow=!0,Object(u.db)(this.$route.params.id).then(function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(a){var r,i,s,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in r=t,i=a.data.info,s={type:"selection",width:60,align:"center"},t.formValidate=i,t.formValidate.virtualPeople=parseInt(t.formValidate.people-t.formValidate.people*(t.formValidate.virtual/100)),t.$set(t.formValidate,"items",i.attrs.items),t.columns=i.attrs.header,t.columns.unshift(s),t.specsData=i.attrs.value,r.specsData.forEach((function(t,e){r.$set(r.specsData[e],"id",e)})),s=i.attrs,o=[],i.attrs.value)i.attrs.value[n]._checked&&o.push(i.attrs.value[n]);r.formValidate.attrs=o,r.inputChange(s),t.spinShow=!1;case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$Message.error(e)}))},next:function(t){var e=this,a=this;2===this.current?this.$refs[t].validate((function(t){if(!t)return!1;1==e.copy&&(e.formValidate.copy=1),e.formValidate.id=Number(e.$route.params.id)||0,e.submitOpen=!0,e.formValidate.virtual=parseInt((e.formValidate.people-e.formValidate.virtualPeople)/e.formValidate.people*100),Object(u.cb)(e.formValidate).then(function(){var t=Object(i.a)(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.submitOpen=!1,e.$Message.success(a.msg),setTimeout((function(){e.$router.push({path:"/admin/marketing/presell/index"})}),500);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.submitOpen=!1,e.$Message.error(t.msg)}))})):1===this.current?this.$refs[t].validate((function(t){if(!t)return e.$Message.warning("请完善您的信息");if(a.formValidate.people<2)return a.$Message.error("预售人数必须大于2");if(a.formValidate.num<0)return a.$Message.error("购买数量限制必须大于0");if(!a.formValidate.attrs)return a.$Message.error("请选择属性规格");for(var r in a.formValidate.attrs){if(a.formValidate.attrs[r].quota<=0)return a.$Message.error("预售限量必须大于0");if(e.formValidate.attrs[r].quota>e.formValidate.attrs[r].stock)return e.$Message.error("预售限量不能超过规格库存")}e.current+=1})):this.formValidate.image?this.current+=1:this.$Message.warning("请选择商品")},step:function(){this.current--},getContent:function(t){this.formValidate.description=t},modalPicTap:function(t,e,a){this.modalPic=!0,this.isChoice="dan"===t?"单选":"多选",this.picTit=e,this.tableIndex=a},getPic:function(t){"danFrom"===this.picTit?this.formValidate.image=t.att_dir:(this.formValidate.attrs&&this.formValidate.attrs.length&&this.$set(this.specsData[this.tableIndex],"_checked",!0),this.specsData[this.tableIndex].pic=t.att_dir),this.modalPic=!1},getPicD:function(t){var e=this;this.images=t,this.images.map((function(t){e.formValidate.images.push(t.att_dir),e.formValidate.images=e.formValidate.images.splice(0,10)})),this.modalPic=!1},handleRemove:function(t){this.images.splice(t,1),this.formValidate.images.splice(t,1)},changeGoods:function(){this.modals=!0,this.$refs.goodslist.formValidate.is_virtual=0,this.$refs.goodslist.getList(),this.$refs.goodslist.goodsCategory()},handleDragStart:function(t,e){this.dragging=e},handleDragEnd:function(t,e){this.dragging=null},handleDragOver:function(t){t.dataTransfer.dropEffect="move"},handleDragEnter:function(t,e){var a;t.dataTransfer.effectAllowed="move",e!==this.dragging&&(a=(t=Object(r.a)(this.formValidate.images)).indexOf(this.dragging),e=t.indexOf(e),t.splice.apply(t,[e,0].concat(Object(r.a)(t.splice(a,1)))),this.formValidate.images=t)}}},a("1fd8"),d=a("2877"),c=Object(d.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("router-link",{attrs:{to:{path:"/admin/marketing/presell/index"}}},[a("Button",{staticClass:"mr20",attrs:{icon:"ios-arrow-back",size:"small"}},[t._v("返回 ")])],1),a("span",{staticClass:"ivu-page-header-title mr20",domProps:{textContent:t._s(0!=t.$route.params.id?"编辑预售商品":"添加预售商品")}})],1)]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Row",{staticClass:"mt30 acea-row row-middle row-center",attrs:{type:"flex"}},[a("Col",{attrs:{span:"20"}},[a("Steps",{attrs:{current:t.current}},[a("Step",{attrs:{title:"选择预售商品"}}),a("Step",{attrs:{title:"填写基础信息"}}),a("Step",{attrs:{title:"修改商品详情"}})],1)],1),a("Col",{attrs:{span:"23"}},[a("Form",{ref:"formValidate",staticClass:"form mt30",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},on:{"on-validate":t.validate},nativeOn:{submit:function(t){t.preventDefault()}}},[0===t.current?a("FormItem",{attrs:{label:"选择商品：",prop:"image_input"}},[a("div",{staticClass:"picBox",on:{click:t.changeGoods}},[t.formValidate.image?a("div",{staticClass:"pictrue"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.formValidate.image,expression:"formValidate.image"}]})]):a("div",{staticClass:"upLoad acea-row row-center-wrapper"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"26"}})],1)])]):t._e(),a("Row",{directives:[{name:"show",rawName:"v-show",value:1===t.current,expression:"current === 1"}],attrs:{type:"flex"}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"商品主图：",prop:"image"}},[a("div",{staticClass:"picBox",on:{click:function(e){return t.modalPicTap("dan","danFrom")}}},[t.formValidate.image?a("div",{staticClass:"pictrue"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.formValidate.image,expression:"formValidate.image"}]})]):a("div",{staticClass:"upLoad acea-row row-center-wrapper"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"26"}})],1)])])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"商品轮播图：",prop:"images"}},[a("div",{staticClass:"acea-row"},[t._l(t.formValidate.images,(function(e,r){return a("div",{key:r,staticClass:"pictrue",attrs:{draggable:"true"},on:{dragstart:function(a){return t.handleDragStart(a,e)},dragover:function(a){return a.preventDefault(),t.handleDragOver(a,e)},dragenter:function(a){return t.handleDragEnter(a,e)},dragend:function(a){return t.handleDragEnd(a,e)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"item"}]}),a("Button",{staticClass:"btndel",attrs:{shape:"circle",icon:"md-close"},nativeOn:{click:function(e){return t.handleRemove(r)}}})],1)})),t.formValidate.images.length<10?a("div",{staticClass:"upLoad acea-row row-center-wrapper",on:{click:function(e){return t.modalPicTap("duo")}}},[a("Icon",{attrs:{type:"ios-camera-outline",size:"26"}})],1):t._e()],2)])],1),a("Col",{attrs:{span:"24"}},[a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"预售名称：",prop:"title","label-for":"title"}},[a("Input",{attrs:{placeholder:"请输入预售名称","element-id":"title"},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"预售简介：",prop:"info","label-for":"info"}},[a("Input",{attrs:{placeholder:"请输入预售简介",type:"textarea",rows:4,"element-id":"info"},model:{value:t.formValidate.info,callback:function(e){t.$set(t.formValidate,"info",e)},expression:"formValidate.info"}})],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"预售活动时间：",prop:"section_time"}},[a("div",{staticClass:"acea-row row-middle"},[a("DatePicker",{staticClass:"perW20",attrs:{editable:!1,type:"datetimerange",format:"yyyy-MM-dd HH:mm",placeholder:"请选择活动时间",value:t.formValidate.section_time},on:{"on-change":t.onchangeTime},model:{value:t.formValidate.section_time,callback:function(e){t.$set(t.formValidate,"section_time",e)},expression:"formValidate.section_time"}}),a("div",{staticClass:"ml10 grey"},[t._v("设置活动开启结束时间，用户可以在设置时间内发起参与预售")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"发货时间：",prop:"deliver_time"}},[a("div",{staticClass:"acea-row row-middle"},[a("span",{staticClass:"mr10"},[t._v("预售活动结束后")]),a("InputNumber",{attrs:{placeholder:"请输入发货时间",precision:0,min:1},model:{value:t.formValidate.deliver_time,callback:function(e){t.$set(t.formValidate,"deliver_time",e)},expression:"formValidate.deliver_time"}}),a("span",{staticClass:"ml10"},[t._v(" 天之内 ")]),a("div",{staticClass:"ml10 grey"})],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"运费模板：",prop:"temp_id"}},[a("div",{staticClass:"acea-row row-middle"},[a("Select",{staticClass:"perW20",model:{value:t.formValidate.temp_id,callback:function(e){t.$set(t.formValidate,"temp_id",e)},expression:"formValidate.temp_id"}},t._l(t.templateList,(function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name)+" ")])})),1),a("div",{staticClass:"ml10 col",on:{click:t.freight}},[t._v("添加运费模板")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"总购买数量限制：",prop:"num"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{min:1,placeholder:"请输入总数量限制",precision:0,"element-id":"num"},model:{value:t.formValidate.num,callback:function(e){t.$set(t.formValidate,"num",e)},expression:"formValidate.num"}}),a("div",{staticClass:"ml10 grey"},[t._v("\n                    该商品活动期间内，用户可购买的最大数量。例如设置为4，表示本次活动有效期内，每个用户最多可购买4件\n                  ")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"单位：",prop:"unit_name","label-for":"unit_name"}},[a("Input",{staticClass:"perW20",attrs:{placeholder:"请输入单位","element-id":"unit_name"},model:{value:t.formValidate.unit_name,callback:function(e){t.$set(t.formValidate,"unit_name",e)},expression:"formValidate.unit_name"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"排序："}},[a("InputNumber",{staticClass:"perW10",attrs:{placeholder:"请输入排序","element-id":"sort",precision:0},model:{value:t.formValidate.sort,callback:function(e){t.$set(t.formValidate,"sort",e)},expression:"formValidate.sort"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"活动状态：",props:"status","label-for":"status"}},[a("RadioGroup",{attrs:{"element-id":"status"},model:{value:t.formValidate.status,callback:function(e){t.$set(t.formValidate,"status",e)},expression:"formValidate.status"}},[a("Radio",{staticClass:"radio",attrs:{label:1}},[t._v("上架")]),a("Radio",{attrs:{label:0}},[t._v("下架")])],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"规格选择："}},[a("Table",{attrs:{data:t.specsData,columns:t.columns,border:""},on:{"on-selection-change":t.changeCheckbox},scopedSlots:t._u([{key:"pic",fn:function(e){var r=e.row,i=e.index;return[a("div",{staticClass:"acea-row row-middle row-center-wrapper",on:{click:function(e){return t.modalPicTap("dan","danTable",i)}}},[r.pic?a("div",{staticClass:"pictrue pictrueTab"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r.pic,expression:"row.pic"}]})]):a("div",{staticClass:"upLoad pictrueTab acea-row row-center-wrapper"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"21"}})],1)])]}}])})],1)],1)],1),a("Row",{directives:[{name:"show",rawName:"v-show",value:2===t.current,expression:"current === 2"}]},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"内容："}},[a("WangEditor",{staticStyle:{width:"90%"},attrs:{content:t.formValidate.description},on:{editorContent:t.getEditorContent}})],1)],1)],1),a("FormItem",[a("Button",{directives:[{name:"show",rawName:"v-show",value:0!==t.current,expression:"current !== 0"}],staticClass:"submission mr15",attrs:{disabled:t.$route.params.id&&1===t.current},on:{click:t.step}},[t._v("上一步\n            ")]),a("Button",{staticClass:"submission",attrs:{type:"primary",disabled:t.submitOpen&&2===t.current},domProps:{textContent:t._s(2===t.current?"提交":"下一步")},on:{click:function(e){return t.next("formValidate")}}})],1)],1),t.spinShow?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1),a("Modal",{staticClass:"paymentFooter",attrs:{title:"商品列表",footerHide:"",scrollable:"",width:"900"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[a("goods-list",{ref:"goodslist",on:{getProductId:t.getProductId}})],1),a("Modal",{attrs:{width:"950px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":888},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?a("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic,getPicD:t.getPicD}}):t._e()],1),a("freight-template",{ref:"template",on:{addSuccess:t.productGetTemplate}})],1)}),[],!1,null,"34a3ade4",null);e.default=c.exports}}]);