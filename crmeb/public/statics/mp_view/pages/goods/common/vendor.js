(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/common/vendor"],{a84a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getLotteryData=s,e.startLottery=a,e.receiveLottery=r,e.getLotteryList=u;var o=i(n("844e"));function i(t){return t&&t.__esModule?t:{default:t}}function s(t){return o.default.get("v2/lottery/info/".concat(t))}function a(t){return o.default.post("v2/lottery",t)}function r(t){return o.default.post("v2/lottery/receive",t)}function u(t){return o.default.get("v2/lottery/record",t)}},c77c:function(t,e){function n(t,e){this.timer=null,this.startIndex=t.startIndex-1||0,this.count=0,this.winingIndex=t.winingIndex||0,this.totalCount=t.totalCount||6,this.speed=t.speed||100,this.domData=t.domData,this.rollFn(),this.callback=e}n.prototype={rollFn:function(){var t=this;this.startIndex++,this.startIndex>=this.domData.length-1&&(this.startIndex=0,this.count++),this.count>=this.totalCount&&this.startIndex===this.winingIndex?("function"===typeof this.callback&&setTimeout((function(){t.callback(t.startIndex,t.count)}),400),clearInterval(this.timer)):(this.count>=this.totalCount-1&&(this.speed+=30),this.timer=setTimeout((function(){t.callback(t.startIndex,t.count),t.rollFn()}),this.speed))}},t.exports=n}}]);