(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cca5d174"],{"03ecd":function(t,a,e){t.exports=e.p+"img/mobilehead.1c931282.png"},3137:function(t,a,e){"use strict";e.r(a);var i=e("c964"),r=(e("96cf"),e("d9e2"),e("a434"),e("ac1f"),e("1276"),e("a15b"),e("d708")),s=e("b562"),o=e("c42b"),n=e("c276"),l=(o={name:"follow",components:{newsCategory:o.a},data:function(){var t=this;return{delfromData:{},isShow:!1,maxCols:4,scrollerHeight:"600",contentTop:"130",contentWidth:"98%",modals:!1,val:"",formatImg:["jpg","jpeg","png","bmp","gif"],formatVoice:["mp3","wma","wav","amr"],header:{},formValidate:{status:1,type:"",key:this.$route.params.key||"",data:{content:"",src:"",list:[]},id:0},fileUrl:r.a.apiBaseURL+"/file/upload/1",ruleValidate:{val:[{required:!0,validator:function(a,e,i){0===t.labelarr.length?i(new Error("请输入后回车")):i()},trigger:"change"}],type:[{required:!0,message:"请选择消息类型",trigger:"change"}],content:[{required:!0,validator:function(a,e,i){"text"===t.formValidate.type&&(""===t.formValidate.data.content?i(new Error("请填写规则内容")):i())},trigger:"blur"}],src:[{required:!0,validator:function(a,e,i){"image"===t.formValidate.type&&""===t.formValidate.data.src?i(new Error("请上传")):i()},trigger:"change"}]},labelarr:[]}},watch:{$route:function(t,a){this.$route.params.key||"0"!==this.$route.params.id?(this.formValidate.key=this.$route.params.key,this.details()):(this.labelarr=[],this.$refs.formValidate.resetFields())}},computed:{imgUrl:function(){var t=r.a.apiBaseURL.indexOf("/adminapi/");return r.a.apiBaseURL.substring(0,t)}},mounted:function(){this.getToken(),(this.$route.params.key||this.$route.params.id&&"0"!==this.$route.params.id)&&this.details()},methods:{getCentList:function(t){this.formValidate.data.list=t.new,this.modals=!1},addlabel:function(){-1===this.labelarr.indexOf(this.val)&&this.labelarr.push(this.val),this.val=""},handleClose:function(t,a){a=this.labelarr.indexOf(a),this.labelarr.splice(a,1)},details:function(){var t=this,a="",e={};e=this.$route.params.id?(a="app/wechat/keyword/"+this.$route.params.id,{}):(a="app/wechat/reply",{key:{key:this.formValidate.key}});Object(s.f)(a,e).then(function(){var a=Object(i.a)(regeneratorRuntime.mark((function a(e){var i,r;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=e.data.info||{},r=i.data||{},t.formValidate={status:i.status,type:i.type,key:i.key,data:{content:r.content,src:r.src,list:r.list},id:i.id},t.$route.params.id&&(t.labelarr=t.formValidate.key.split(",")||[]);case 4:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(a){t.$Message.error(a.msg)}))},changePic:function(){this.modals=!0},RuleFactor:function(t){switch(t){case"text":this.formValidate.data.src="",this.formValidate.data.list=[];break;case"news":this.formValidate.data.src="",this.formValidate.data.content="";break;default:this.formValidate.data.list=[],this.formValidate.data.content="",this.formValidate.data.src=""}},getToken:function(){this.header["Authori-zation"]="Bearer "+Object(n.d)("token")},handleSuccess:function(t,a){200===t.status?(this.formValidate.data.src=t.data.src,this.$Message.success(t.msg)):this.$Message.error(t.msg)},handleFormatError:function(t){"image"===this.formValidate.type?this.$Message.warning("请上传bmp/png/jpeg/jpg/gif格式的图片"):this.$Message.warning("请上传mp3/wma/wav/amr格式的语音")},handleMaxSize:function(t){this.$Message.warning("请上传文件2M以内的文件")},submenus:function(t){var a=this;this.$refs[t].validate((function(t){if(!t)return!1;t={},t=a.$route.params.id?(a.formValidate.key=a.labelarr.join(","),{url:"app/wechat/keyword/"+a.$route.params.id,key:a.formValidate}):{url:"app/wechat/keyword/"+a.formValidate.id,key:a.formValidate},Object(s.g)(t).then(function(){var t=Object(i.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.operation(),a.$Message.success(e.msg);case 2:case"end":return t.stop()}}),t)})));return function(a){return t.apply(this,arguments)}}()).catch((function(t){a.$Message.error(t.msg)}))}))},operation:function(){var t=this;this.$route.params.id&&"0"===this.$route.params.id?this.$Modal.confirm({title:"提示",content:"<p>是否继续添加？</p>",okText:"是",cancelText:"否",loading:!0,onOk:function(){setTimeout((function(){t.$Modal.remove(),t.labelarr=[],t.val="",t.$refs.formValidate.resetFields()}),1e3)},onCancel:function(){setTimeout((function(){t.$Modal.remove(),t.$router.push({path:"/admin/app/wechat/reply/keyword"})}),500)}}):this.$route.params.id&&"0"!==this.$route.params.id&&(this.$Modal.remove(),this.$router.push({path:"/admin/app/wechat/reply/keyword"}))}}},e("d869"),e("2877"));l=Object(l.a)(o,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[i("Row",{attrs:{gutter:24,type:"flex"}},[i("Col",{staticClass:"ml40",attrs:{span:"24"}},[i("Col",{attrs:{span:24}},[i("Col",{staticClass:"left mb15",attrs:{xl:7,lg:7,md:22,sm:22,xs:22}},[i("img",{staticClass:"top",attrs:{src:e("03ecd")}}),i("img",{staticClass:"bottom",attrs:{src:e("58b1")}}),i("div",{staticClass:"centent"},[i("div",{staticClass:"time-wrapper"},[i("span",{staticClass:"time"},[t._v("9:36")])]),"news"!==t.formValidate.type?i("div",{staticClass:"view-item text-box clearfix"},[i("div",{staticClass:"avatar fl"},[i("img",{attrs:{src:e("4795")}})]),i("div",{staticClass:"box-content fl"},["text"===t.formValidate.type?i("span",{domProps:{textContent:t._s(t.formValidate.data.content)}}):t._e(),t.formValidate.data.src?i("div",{staticClass:"box-content_pic"},[i("img",{attrs:{src:t.formValidate.data.src?t.imgUrl+t.formValidate.data.src:""}})]):t._e()])]):t._e(),"news"===t.formValidate.type?i("div",t._l(t.formValidate.data.list,(function(a,e){return i("div",{key:e},[0===e?i("div",[i("div",{staticClass:"news_pic",style:{backgroundImage:"url("+a.image_input[0]+")",backgroundSize:"100% 100%"}}),i("span",{staticClass:"news_sp"},[t._v(t._s(a.title))])]):i("div",{staticClass:"news_cent"},[a.synopsis?i("span",{staticClass:"news_sp1"},[t._v(t._s(a.title))]):t._e(),0!==a.image_input.length?i("div",{staticClass:"news_cent_img"},[i("img",{attrs:{src:a.image_input[0]}})]):t._e()])])})),0):t._e()])]),i("Col",{attrs:{xl:11,lg:12,md:22,sm:22,xs:22}},[i("Col",{staticClass:"userAlert",attrs:{span:"24"}},[i("div",{staticClass:"box-card right"},[i("Form",{ref:"formValidate",staticClass:"mt20",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":100},nativeOn:{submit:function(t){t.preventDefault()}}},[t.$route.params.id?i("FormItem",{attrs:{label:"关键字：",prop:"val"}},[i("div",{staticClass:"arrbox"},[t._l(t.labelarr,(function(a,e){return i("Tag",{key:e,attrs:{name:a,closable:!0},on:{"on-close":t.handleClose}},[t._v(t._s(a)+"\n                      ")])})),i("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"arrbox_ip",staticStyle:{width:"90%"},attrs:{placeholder:"输入后回车"},domProps:{value:t.val},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.addlabel(a)},input:function(a){a.target.composing||(t.val=a.target.value)}}})],2)]):t._e(),i("FormItem",{attrs:{label:"消息状态："}},[i("RadioGroup",{model:{value:t.formValidate.status,callback:function(a){t.$set(t.formValidate,"status",a)},expression:"formValidate.status"}},[i("Radio",{attrs:{label:1}},[t._v("启用")]),i("Radio",{attrs:{label:0}},[t._v("禁用")])],1)],1),i("FormItem",{attrs:{label:"消息类型：",prop:"type"}},[i("Select",{staticStyle:{width:"90%"},attrs:{placeholder:"请选择规则状态"},on:{"on-change":function(a){return t.RuleFactor(t.formValidate.type)}},model:{value:t.formValidate.type,callback:function(a){t.$set(t.formValidate,"type",a)},expression:"formValidate.type"}},[i("Option",{attrs:{value:"text"}},[t._v("文字消息")]),i("Option",{attrs:{value:"image"}},[t._v("图片消息")]),i("Option",{attrs:{value:"news"}},[t._v("图文消息")]),i("Option",{attrs:{value:"voice"}},[t._v("声音消息")])],1)],1),"text"===t.formValidate.type?i("FormItem",{attrs:{label:"消息内容：",prop:"content"}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formValidate.data.content,expression:"formValidate.data.content"}],staticStyle:{width:"90%"},attrs:{placeholder:"请填写消息内容"},domProps:{value:t.formValidate.data.content},on:{input:function(a){a.target.composing||t.$set(t.formValidate.data,"content",a.target.value)}}})]):t._e(),"news"===t.formValidate.type?i("FormItem",{attrs:{label:"选取图文："}},[i("Button",{attrs:{type:"info"},on:{click:t.changePic}},[t._v("选择图文消息")])],1):t._e(),"image"===t.formValidate.type||"voice"===t.formValidate.type?i("FormItem",{attrs:{label:"image"===t.formValidate.type?"图片地址：":"语音地址：",prop:"src"}},[i("div",{staticClass:"acea-row row-middle"},[i("Input",{staticClass:"mr15",staticStyle:{width:"75%"},attrs:{readonly:"readonly",placeholder:"default size"},model:{value:t.formValidate.data.src,callback:function(a){t.$set(t.formValidate.data,"src",a)},expression:"formValidate.data.src"}}),i("Upload",{staticClass:"mr20",staticStyle:{"margin-top":"1px"},attrs:{"show-upload-list":!1,action:t.fileUrl,"on-success":t.handleSuccess,format:"image"===t.formValidate.type?t.formatImg:t.formatVoice,"max-size":2048,headers:t.header,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize}},[i("Button",{attrs:{type:"primary"}},[t._v("上传")])],1)],1),i("span",{directives:[{name:"show",rawName:"v-show",value:"image"===t.formValidate.type,expression:"formValidate.type === 'image'"}]},[t._v("文件最大2Mb，支持bmp/png/jpeg/jpg/gif格式")]),i("span",{directives:[{name:"show",rawName:"v-show",value:"voice"===t.formValidate.type,expression:"formValidate.type === 'voice'"}]},[t._v("文件最大2Mb，支持mp3/wma/wav/amr格式,播放长度不超过60s")])]):t._e()],1)],1)]),i("Col",{attrs:{span:24}},[i("div",{staticClass:"acea-row row-center"},[i("Button",{staticClass:"mr20",attrs:{type:"primary"},on:{click:function(a){return t.submenus("formValidate")}}},[t._v("保存并发布 ")])],1)])],1)],1)],1)],1)],1),i("Modal",{staticClass:"modelBox",attrs:{scrollable:"",title:"发送消息",width:"1200",height:"800","footer-hide":""},model:{value:t.modals,callback:function(a){t.modals=a},expression:"modals"}},[t.modals?i("news-category",{attrs:{scrollerHeight:t.scrollerHeight,contentTop:t.contentTop,contentWidth:t.contentWidth,maxCols:t.maxCols},on:{getCentList:t.getCentList}}):t._e()],1)],1)}),[],!1,null,"6970a120",null);a.default=l.exports},4795:function(t,a,e){t.exports=e.p+"img/head.cfd4b538.gif"},"58b1":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAyCAIAAACib5WDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE1NEJCMUE0NzZGNDExRTVBOTBBQTZFOEFEMjc4NTkzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE1NEJCMUE1NzZGNDExRTVBOTBBQTZFOEFEMjc4NTkzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTU0QkIxQTI3NkY0MTFFNUE5MEFBNkU4QUQyNzg1OTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTU0QkIxQTM3NkY0MTFFNUE5MEFBNkU4QUQyNzg1OTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4yWLBJAAABuklEQVR42uzcu0ocURzA4XWxMIWiQhJwtVhxMW0wEkWj+AwWgm9gJfgggpVPoElEUwUCKRNFJaQWsygWXvAKXlBZGw8KIiIJmWFnGPg+pjiryMIffpxzRLemUqnkUlUul0ulUg74f3kjAAEDAgYEDAIGBAwIGBAwCBgQMCBgEHAMlZub8BglJK825s/vHxzOfl4Ii9GR4devXhooZGYHPjo+mfk0f3l5FZ6wCC8NFDKzA+fz+aHB/scvDRQyE3BzU2N4DBEyeYQGBAxU5wi9sbm1+ut3W2shznucnp296Sx1tBeNGxINeG39z+jIcPy3+Tj3RcCQ9BG6ob7+fjE5NR2eaOugtdBi1pD0Dvzg6vo68hpIOeAXdXWR10CV1Pz9c6F/LC4P9PfGf5ufSysf+nqe/ZbPhYZq3YGfiHD7BdI/Qrv9QuYDdvsFd2B3YEjjDgxk+Aidu/sd1T9vueEUPTE+ZrhgBwai7sA7u3tPvhJtaz0/vzBrSDrg7ndvv377/vAX0dFs7+y+7+4ya0g64I72ov8iAndgQMCAgEHAgIABAYOAAQEDAgYEDAIGBAwIGBAwCBhIy60AAwBiy5esmSYLKgAAAABJRU5ErkJggg=="},"7b33":function(t,a,e){},a15b:function(t,a,e){"use strict";var i=e("23e7"),r=e("e330"),s=e("44ad"),o=e("fc6a"),n=(e=e("a640"),r([].join));r=s!=Object,s=e("join",",");i({target:"Array",proto:!0,forced:r||!s},{join:function(t){return n(o(this),void 0===t?",":t)}})},d869:function(t,a,e){"use strict";var i=e("7b33");e.n(i).a}}]);