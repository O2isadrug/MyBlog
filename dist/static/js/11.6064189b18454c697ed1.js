webpackJsonp([11],{"6+PD":function(e,s){},yJ2L:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"message"},[t("div",{staticClass:"main"},[t("div",{staticClass:"d-title"},[e._v("交友，吐槽，留言，建议")]),e._v(" "),t("div",{staticClass:"content"},[t("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:e.message,callback:function(s){e.message="string"==typeof s?s.trim():s},expression:"message"}}),e._v(" "),t("div",{staticClass:"d-fourBlock"}),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.fuckMessage}},[e._v("吐槽")])],1)])])},staticRenderFns:[]};var n=t("C7Lr")({name:"Message",data:function(){return{url:"/message",message:""}},methods:{fuckMessage:function(){var e=this;if(""!=this.message){var s={msg:this.message,username:this.$store.state.login_name};this.$axios.post(this.url+"/insert",s).then(function(s){200==s.data.code?e.$message({message:s.data.message,type:"success"}):e.$message({message:s.data.message,type:"warning"})})}else this.$message({message:"吐槽内容可别忘填了",type:"warning"})}}},a,!1,function(e){t("6+PD")},null,null);s.default=n.exports}});
//# sourceMappingURL=11.6064189b18454c697ed1.js.map