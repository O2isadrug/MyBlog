webpackJsonp([4],{"9S8W":function(e,t,s){"use strict";var i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"speak"},[t("div",{staticClass:"main"},[t("div",{staticClass:"content"},[t("div",[this._v("A wilful man will have his way")]),this._v(" "),t("div",[this._v("\n        生活如果虐待了你\n        "),t("br"),this._v("\n        就给它迎头痛击\n      ")])])])])}]};t.a=i},FHJu:function(e,t){},GLZv:function(e,t){},RWkw:function(e,t){},YYZO:function(e,t,s){"use strict";var i=s("FHJu"),a=s.n(i),n=s("9S8W");var o=function(e){s("RWkw")},r=s("C7Lr")(a.a,n.a,!1,o,"data-v-a7447c12",null);t.default=r.exports},dIqY:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"Register",components:{Speak:s("YYZO").default},data:function(){return{url:"/user",custom:{phone:"",password:"",username:""},tips_message:"填写邮箱",code_email:"",verity_timer:"点这！获取验证码",verity_type:"primary",verity_disabled:!1,code:"",timer:null}},methods:{goToLogin:function(){this.$router.push("/login")},getVerityCode:function(){var e=this;this.$store.state.email_reg.test(this.code_email)?this.$axios.get(this.url+"/emailVerity/"+this.code_email).then(function(t){if(200==t.data.code){e.tips_message="填写验证码";var s=60;e.timer=setInterval(function(){--s>0?e.verity_timer=s+"秒后重新获取":(clearInterval(e.timer),e.tips_message="填写邮箱",e.verity_disabled=!1,e.verity_timer="点这！获取验证码")},1e3),e.verity_disabled=!0,e.code_email="",e.code=t.data.body,e.$message({message:t.data.message,type:"success"})}else e.$message({message:t.data.message,type:"warning"})}):this.$message({message:"邮箱不正确",type:"warning"})},register:function(){var e=this;/^1[3456789]\d{9}$/.test(this.custom.phone)&&this.custom.username.length<=6&&""!=this.custom.password&&this.code==this.code_email&&""!=this.code?this.$axios.post(this.url+"/register",this.custom).then(function(t){200==t.data.code?(e.$message({message:t.data.message,type:"success"}),e.$router.push("/login")):e.$message({message:t.data.message,type:"warning"})}):this.$message({message:"注册的信息好像不要符合要求",type:"warning"})}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"register"},[s("div",{staticClass:"main"},[s("Speak"),e._v(" "),s("div",{staticClass:"content"},[s("el-input",{attrs:{placeholder:"昵称能不能有点创意","prefix-icon":"el-icon-s-custom",maxlength:"6",clearable:""},model:{value:e.custom.username,callback:function(t){e.$set(e.custom,"username","string"==typeof t?t.trim():t)},expression:"custom.username"}}),e._v(" "),s("div",{staticClass:"d-twoBlock"}),e._v(" "),s("el-input",{attrs:{placeholder:"我认为这里填手机号比较好","prefix-icon":"el-icon-phone",clearable:""},model:{value:e.custom.phone,callback:function(t){e.$set(e.custom,"phone","string"==typeof t?t.trim():t)},expression:"custom.phone"}}),e._v(" "),s("div",{staticClass:"d-twoBlock"}),e._v(" "),s("div",{staticClass:"verity display-flex"},[s("div",{staticClass:"left"},[s("el-input",{attrs:{placeholder:e.tips_message,"prefix-icon":"el-icon-question",clearable:""},model:{value:e.code_email,callback:function(t){e.code_email="string"==typeof t?t.trim():t},expression:"code_email"}})],1),e._v(" "),s("div",{staticClass:"right"},[s("el-button",{attrs:{type:e.verity_type,disabled:e.verity_disabled},on:{click:e.getVerityCode}},[e._v(e._s(e.verity_timer))])],1)]),e._v(" "),s("div",{staticClass:"d-twoBlock"}),e._v(" "),s("el-input",{attrs:{placeholder:"你想填支付密码也行",type:"password","show-password":"","prefix-icon":"el-icon-s-grid",clearable:""},model:{value:e.custom.password,callback:function(t){e.$set(e.custom,"password","string"==typeof t?t.trim():t)},expression:"custom.password"}}),e._v(" "),s("div",{staticClass:"d-twoBlock"}),e._v(" "),s("div",{staticClass:"bottom display-flex"},[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.register}},[e._v("注册")]),e._v(" "),s("div",{staticClass:"forget display-flex"},[s("span",{on:{click:e.goToLogin}},[e._v("有帐号了,还来注册")])])],1)],1)],1)])},staticRenderFns:[]};var n=s("C7Lr")(i,a,!1,function(e){s("GLZv")},"data-v-0f08a62e",null);t.default=n.exports}});
//# sourceMappingURL=4.253165e50630fd56726d.js.map