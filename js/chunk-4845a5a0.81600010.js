(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4845a5a0"],{bf35:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("VContainer",[e("VRow",{attrs:{dense:""}},[e("VCol",[e("BiliobCard",{attrs:{title:"观测者议会"}},[e("VRow",{attrs:{dense:""}},[e("VCol",{attrs:{cols:"12"}},[e("VueMarkdown",{attrs:{source:"观测者议会是了解观测者需求的平台。具备一定权限的观测者能够在此提出议程，所有观测者都能够决定支持或是反对某项议程。目前只有**高级研究员**以上才能够提出议程，提出议程需要消耗**50点积分**。"}})],1),e("VCol",[e("RouterLink",{attrs:{to:"/faq#观测者议会相关问题"}},[t._v(" 前往FAQ查看相关问题 ")])],1)],1)],1)],1)],1),e("VRow",{attrs:{dense:""}},[e("VCol",{attrs:{cols:"12"}},[e("VCard",{attrs:{elevation:"3"}},[e("VTabs",[e("VTab",{on:{click:function(a){a.stopPropagation(),t.filter=0}}},[e("VBadge",{attrs:{inline:"",content:t.waiting.toString()}},[t._v(" 未处理 ")])],1),e("VTab",{on:{click:function(a){a.stopPropagation(),t.filter=1}}},[e("VBadge",{attrs:{inline:"",content:t.pending.toString()}},[t._v(" 进行中 ")])],1),e("VTab",{on:{click:function(a){a.stopPropagation(),t.filter=2}}},[e("VBadge",{attrs:{inline:"",content:t.finished.toString()}},[t._v(" 已处理 ")])],1),e("VTab",{on:{click:function(a){a.stopPropagation(),t.filter=3}}},[e("VBadge",{attrs:{inline:"",content:t.closed.toString()}},[t._v(" 已丢弃 ")])],1)],1)],1)],1)],1),e("VSlideYTransition",{attrs:{"hide-on-leave":"",mode:"out-in"}},[t.loading?e("VRow",{attrs:{dense:""}},[e("VCol",{attrs:{cols:"12"}},[e("VSkeletonLoader",{staticStyle:{width:"'100%'"},attrs:{elevation:"3",type:"card"}})],1)],1):t._e()],1),e("VRow",{attrs:{dense:""}},[e("VCol",[e("VSlideYTransition",{attrs:{group:"",mode:"out-in"}},[t.empty?e("BiliobCard",{key:"hint",attrs:{title:"提示"}},[t._v(" 该列表当前为空。 ")]):t._e(),e("VSlideYTransition",{key:"test",attrs:{group:"",mode:"out-in"}},t._l(t.agendas,(function(a){return e("div",{key:a.id,staticClass:"test"},[e("BiliobCard",{key:a.id,staticClass:"mb-2"},[void 0!=t.$db.user&&void 0!=t.$db.user.id&&t.$db.user.id.counter==a.creator.id.counter?e("VMenu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e("VBtn",t._g(t._b({staticStyle:{right:"10px"},attrs:{absolute:"",icon:""}},"VBtn",n,!1),i),[e("VIcon",[t._v(" mdi-dots-horizontal ")])],1)]}}],null,!0)},[e("VList",[e("VListItem",{attrs:{color:"error"},on:{click:function(e){return t.deleteAgenda(a.id)}}},[e("VListItemIcon",[e("VIcon",[t._v("mdi-delete")])],1),e("VListItemTitle",[t._v("删除")])],1)],1)],1):t._e(),e("div",{staticClass:"text--disabled overline"},[t._v(" "+t._s(a.id)+" ")]),t.$vuetify.breakpoint.lgAndUp?e("VRow",{staticClass:"title text--primary",attrs:{"no-gutters":""}},[e("VCol",{attrs:{cols:"auto"}},[t._v(" "+t._s(a.title)+" "),e("BiliobAgendaTypeChip",{staticClass:"ml-2 align-self-center",attrs:{value:a.type}}),e("BiliobAgendaStateChip",{staticClass:"align-self-center",attrs:{value:a.state}})],1),e("VSpacer"),e("span",{staticClass:"font-weight-black primary--text"},[t._v(" "+t._s(t.$numberFormat(a.score)))])],1):e("VRow",{staticClass:"title text--primary",attrs:{dense:""}},[e("VCol",{attrs:{cols:"auto"}},[t._v(" "+t._s(a.title)+" ")]),t.$vuetify.breakpoint.lgAndUp?e("VCol",{attrs:{cols:"auto"}},[e("BiliobAgendaTypeChip",{staticClass:"align-self-center",attrs:{value:a.type}}),e("BiliobAgendaStateChip",{staticClass:"align-self-center",attrs:{value:a.state}})],1):t._e(),t.$vuetify.breakpoint.lgAndUp?e("VCol",{attrs:{cols:"auto"}},[e("span",{staticClass:"font-weight-black primary--text"},[t._v(" "+t._s(t.$numberFormat(a.score)))])]):t._e()],1),e("VRow",[e("VCol",[e("div",{staticClass:"caption"},[t._v(" "+t._s(void 0!=a.creator.nickName?a.creator.nickName:t.$db.user.nickName)+" / "+t._s(t.$timeFormat(a.createTime,"YYYY-MM-DD HH:mm:ss"))+" ")]),e("div",[t._v(" "+t._s(a.desc)+" ")])])],1),e("div",[e("VRow",{staticClass:"caption",attrs:{"no-gutters":""}},[e("VCol",{staticClass:"success--text",attrs:{cols:"6"}},[t._v(" 支持："+t._s(t.$numberFormat(a.favorScore))+"("+t._s(a.favorCount)+"人) ")]),e("VCol",{staticClass:"text-right error--text",attrs:{cols:"6"}},[t._v(" 反对："+t._s(t.$numberFormat(a.againstScore))+"("+t._s(a.againstCount)+"人) ")])],1),"见齐"==t.$db.user.role?e("VRow",{attrs:{dense:""}},[e("VCol",{attrs:{cols:"3"}},[e("VBtn",{attrs:{block:"",color:"primary",tile:"",outlined:""},on:{click:function(e){return t.modifyState(a.id,0)}}},[t._v(" 等待 ")])],1),e("VCol",{attrs:{cols:"3"}},[e("VBtn",{attrs:{block:"",color:"primary",tile:"",outlined:""},on:{click:function(e){return t.modifyState(a.id,3)}}},[t._v(" 处理 ")])],1),e("VCol",{attrs:{cols:"3"}},[e("VBtn",{attrs:{block:"",color:"primary",tile:"",outlined:""},on:{click:function(e){return t.modifyState(a.id,1)}}},[t._v(" 完成 ")])],1),e("VCol",{attrs:{cols:"3"}},[e("VBtn",{attrs:{block:"",color:"primary",tile:"",outlined:""},on:{click:function(e){return t.modifyState(a.id,2)}}},[t._v(" 丢弃 ")])],1)],1):t._e(),e("VRow",{attrs:{dense:""}},[e("VCol",{attrs:{cols:Math.round(a.favorCount/(a.againstCount+a.favorCount)*6)}},[e("VBtn",{attrs:{block:"",color:"success",tile:"",depressed:""},on:{click:function(e){return t.postOpinion("support",a.id)}}},[e("VIcon",{attrs:{left:t.$vuetify.breakpoint.lgAndUp}},[t._v(" mdi-thumb-up ")]),t.$vuetify.breakpoint.lgAndUp?e("span",[t._v(" 支持 ")]):t._e()],1)],1),e("VCol",{attrs:{cols:"3"}},[e("VBtn",{attrs:{color:"warning",tile:"",depressed:"",block:""},on:{click:function(e){return t.postOpinion("abstain",a.id)}}},[e("VIcon",{attrs:{left:t.$vuetify.breakpoint.lgAndUp}},[t._v(" mdi-thumbs-up-down ")]),t.$vuetify.breakpoint.lgAndUp?e("span",[t._v(" 中立 ")]):t._e()],1)],1),e("VCol",{attrs:{cols:Math.round(9-a.favorCount/(a.againstCount+a.favorCount)*6)}},[e("VBtn",{attrs:{color:"error",block:"",tile:"",depressed:""},on:{click:function(e){return t.postOpinion("against",a.id)}}},[e("VIcon",{attrs:{left:t.$vuetify.breakpoint.lgAndUp}},[t._v(" mdi-thumb-down ")]),t.$vuetify.breakpoint.lgAndUp?e("span",[t._v(" 反对 ")]):t._e()],1)],1)],1)],1)],1)],1)})),0)],1),t.loading||t.empty?t._e():e("VRow",{attrs:{dense:""}},[e("VCol",{attrs:{cols:"6"}},[e("VBtn",{attrs:{color:"primary",block:"",outlined:"",disabled:0==t.page},on:{click:function(a){t.$vuetify.goTo(0),t.page--}}},[t._v(" 上一页 ")])],1),e("VCol",{attrs:{cols:"6"}},[e("VBtn",{attrs:{block:"",color:"primary",outlined:"",disabled:t.agendas.length<20},on:{click:function(a){t.$vuetify.goTo(0),t.page++}}},[t._v(" 下一页 ")])],1)],1)],1)],1)],1)},n=[],o=(e("99af"),e("4de4"),e("fb6a"),e("a434"),e("b64b"),e("d0ff")),s={data:function(){return{agendas:[],page:0,sort:1,filter:0,empty:!1,loading:!0,waiting:0,pending:0,finished:0,closed:0}},watch:{sort:function(){this.page=0,this.loadData()},filter:function(){this.page=0,this.loadData()},page:function(){this.loadData()},"$db.agenda":{handler:function(t,a){this.agendas=this.$db.agenda[this.filter][this.sort].slice(20*this.page,20+20*this.page)},deep:!0}},mounted:function(){var t=this;this.axios("/agenda/state").then((function(a){t.waiting=null!=a.data.waiting?a.data.waiting:0,t.pending=null!=a.data.pending?a.data.pending:0,t.finished=null!=a.data.finished?a.data.finished:0,t.closed=null!=a.data.closed?a.data.closed:0})),this.page=0,this.loadData()},methods:{loadData:function(){var t=this;if(void 0==this.$db.agenda||void 0==this.$db.agenda[this.filter]||void 0==this.$db.agenda[this.filter][this.sort]||this.$db.agenda[this.filter][this.sort].length<=20*this.page&&0!=this.$db.agenda[this.filter][this.sort].length){this.loading=!0,this.agendas=[];var a=this.page,e=this.sort,i=this.filter;this.axios.get("/agenda",{params:{p:a,sort:e,filter:i}}).then((function(a){var n;void 0==t.$db.agenda&&(t.$db.agenda={}),void 0==t.$db.agenda[i]&&(t.$db.agenda[i]={}),void 0==t.$db.agenda[i][e]&&(t.$db.agenda[i][e]=[]),(n=t.$db.agenda[i][e]).push.apply(n,Object(o["a"])(a.data)),t.loading=!1,0!=t.$db.agenda[i][e].length?t.filter==i&&(t.agendas=t.$db.agenda[i][e].slice(20*t.page,20+20*t.page)):t.empty=!0}))}else this.loading=!1,0==this.$db.agenda[this.filter][this.sort].length?this.empty=!0:this.empty=!1,this.agendas=this.$db.agenda[this.filter][this.sort].slice(20*this.page,20+20*this.page)},color:function(t){switch(t){case 1:return"blue";case 2:return"orange";case 3:return"red";default:return"green"}},deleteAgenda:function(t){var a=this;this.axios.delete("/agenda/".concat(t)).then((function(e){if(-1!=e.data.code)for(var i=0;i<Object.keys(a.$db.agenda).length;i++)for(var n=Object.keys(a.$db.agenda)[i],o=0;o<Object.keys(a.$db.agenda).length;o++)for(var s=Object.keys(a.$db.agenda[n])[o],r=0;r<a.$db.agenda[n][s].length;r++){var l=a.$db.agenda[n][s][r];l.id==t&&a.$db.agenda[n][s].splice(r,1)}}))},modifyState:function(t,a){this.axios.put("/agenda/".concat(t,"/state/").concat(a))},postOpinion:function(t,a){var e=this;this.axios.post("/agenda/".concat(a,"/").concat(t)).then((function(t){for(var a=0;a<Object.keys(e.$db.agenda).length;a++)for(var i=Object.keys(e.$db.agenda)[a],n=e.$db.agenda[i],o=Object.keys(n),s=0;s<o.length;s++){for(var r=0;r<n[o[s]].length;r++)n[o[s]][r].id==t.data.data.id&&(n[o[s]][r]["againstCount"]=t.data.data["againstCount"],n[o[s]][r]["againstScore"]=t.data.data["againstScore"],n[o[s]][r]["favorCount"]=t.data.data["favorCount"],n[o[s]][r]["favorScore"]=t.data.data["favorScore"],n[o[s]][r]["score"]=t.data.data["score"]);e.$db.agenda[i][o[s]]=e.$db.agenda[i][o[s]].sort((function(t,a){return-t.score+a.score}))}}))}}},r=s,l=e("2877"),d=e("6544"),c=e.n(d),u=(e("a9e3"),e("c9e9")),f=e("f3f3"),g=(e("ff44"),e("132d")),h=e("a9ad"),p=e("7560"),b=e("f2e7"),v=e("f40d"),m=e("fe6c"),V=e("58df"),C=e("80d2"),$=Object(V["a"])(h["a"],Object(m["b"])(["left","bottom"]),p["a"],b["a"],v["a"]).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return Object(f["a"])({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(C["g"])(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,a=this.$attrs["aria-label"]||t.t(this.label),e=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":a,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),i=this.$createElement("span",e,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i},genBadgeContent:function(){if(!this.dot){var t=Object(C["s"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(g["a"],this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var a=[this.genBadgeWrapper()],e=[Object(C["s"])(this)],i=this.$attrs,n=(i["aria-atomic"],i["aria-label"],i["aria-live"],i.role,i.title,Object(u["a"])(i,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?e.unshift(a):e.push(a),t("span",{staticClass:"v-badge",attrs:n,class:this.classes},e)}}),y=e("8336"),_=e("b0af"),k=e("62ad"),B=e("a523"),w=e("8860"),S=e("da13"),O=e("34c3"),T=e("5d23"),R=e("e449"),A=e("0fd9"),j=e("3129"),x=e("0789"),I=e("2fa4"),L=e("71a3"),Y=e("fe57"),U=Object(l["a"])(r,i,n,!1,null,null,null);a["default"]=U.exports;c()(U,{VBadge:$,VBtn:y["a"],VCard:_["a"],VCol:k["a"],VContainer:B["a"],VIcon:g["a"],VList:w["a"],VListItem:S["a"],VListItemIcon:O["a"],VListItemTitle:T["c"],VMenu:R["a"],VRow:A["a"],VSkeletonLoader:j["a"],VSlideYTransition:x["h"],VSpacer:I["a"],VTab:L["a"],VTabs:Y["a"]})},ff44:function(t,a,e){}}]);