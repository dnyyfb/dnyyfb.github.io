(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207b58"],{a24e:function(t,a,o){"use strict";o.r(a);var e=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("VContainer",[t.loaded?o("VRow",{attrs:{dense:""}},[o("VCol",[o("BiliobCard",{attrs:{title:"群组基本信息"}},[o("BiliobAuthorGroupInfoForm",{attrs:{gid:this.$route.params.gid,name:t.name,desc:t.desc,"tag-list":t.tagList}})],1)],1),o("VCol",{attrs:{cols:"12"}},[o("BiliobCard",{attrs:{title:"添加或移除UP主"}},[o("VRow",[o("VCol",{attrs:{cols:"12"}},[o("VTextField",{attrs:{outlined:"","hide-details":"",label:"UP主ID"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.addNewTag(t.newTag)}},model:{value:t.uid,callback:function(a){t.uid=a},expression:"uid"}})],1)],1),o("VRow",[o("VSpacer"),o("VCol",{attrs:{cols:"auto"}},[o("VRadioGroup",{attrs:{row:""},model:{value:t.operationType,callback:function(a){t.operationType=a},expression:"operationType"}},t._l([["add","添加"],["del","移除"]],(function(t){return o("VRadio",{key:t[1],attrs:{label:""+t[1],value:t[0]}})})),1)],1),o("VCol",{staticClass:"align-self-center",attrs:{cols:"auto"}},[o("VBtn",{attrs:{disabled:void 0==t.uid||""==t.uid,large:"",color:"primary",loading:t.authorLoading},on:{click:t.authorSubmit}},[o("VIcon",{attrs:{left:""}},[t._v(" mdi-pencil ")]),t._v(" 提交 ")],1)],1)],1)],1)],1),o("VCol",{attrs:{cols:"12"}},[o("BiliobCard",{attrs:{title:"危险操作"}},[o("VRow",{attrs:{dense:""}},[o("VCol",{attrs:{cols:"auto"}},[o("VBtn",{attrs:{color:"error",large:""},on:{click:function(a){return a.stopPropagation(),t.deleteGroup(a)}}},[t._v(" 删除群组 ")])],1),o("VCol",{attrs:{cols:"auto"}},[o("VBtn",{attrs:{disabled:"",color:"warning",large:""}},[t._v(" TODO: 转交群组 ")])],1),o("VCol",{attrs:{cols:"auto"}},[o("VBtn",{attrs:{disabled:"",color:"green",large:""}},[t._v(" TODO: 添加编辑者 ")])],1)],1)],1)],1)],1):o("VRow",{attrs:{dense:""}},[o("VCol",[o("VSkeletonLoader",{staticClass:"elevation-1",attrs:{type:"card"}})],1)],1)],1)},i=[],r=(o("99af"),o("b0c0"),{data:function(){return{loaded:!1,operationType:"add",uid:void 0,authorLoading:!1,infoLoading:!1}},mounted:function(){var t=this;void 0==this.$db.author.group.detail[this.$route.params.gid]?this.axios.get("/author/group/".concat(this.$route.params.gid)).then((function(a){t.$db.author.group.detail[t.$route.params.gid]=a.data,t.loadData()})):this.loadData()},methods:{loadData:function(){var t=this.$db.author.group.detail[this.$route.params.gid];this.loaded=!0,this.name=t.name,this.desc=t.desc,this.tagList=t.tagList},authorSubmit:function(){var t=this;this.authorLoading=!0,this.axios.put("/author/group/".concat(this.$route.params.gid,"/").concat(this.operationType,"/").concat(this.uid)).then((function(){t.authorLoading=!1}))},deleteGroup:function(){this.axios.delete("/author/group/".concat(this.$route.params.gid))}}}),n=r,s=o("2877"),d=o("6544"),l=o.n(d),u=o("8336"),c=o("62ad"),p=o("a523"),h=o("132d"),V=o("67b6"),g=o("43a6"),f=o("0fd9"),b=o("3129"),m=o("2fa4"),C=o("8654"),v=Object(s["a"])(n,e,i,!1,null,null,null);a["default"]=v.exports;l()(v,{VBtn:u["a"],VCol:c["a"],VContainer:p["a"],VIcon:h["a"],VRadio:V["a"],VRadioGroup:g["a"],VRow:f["a"],VSkeletonLoader:b["a"],VSpacer:m["a"],VTextField:C["a"]})}}]);