(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Test"],{"65d4":function(e,t,n){"use strict";n.r(t);n("99af");var o=n("7a23"),c=Object(o["withScopeId"])("data-v-7daf1b19");Object(o["pushScopeId"])("data-v-7daf1b19");var a=Object(o["createVNode"])("p",null,"全局组件测试",-1),r=Object(o["createTextVNode"])("全局加载 3 秒"),l=Object(o["createTextVNode"])("局部加载 "),u=Object(o["createVNode"])("p",null,"vuex测试",-1),d=Object(o["createVNode"])("p",null,"app模块",-1),i=Object(o["createTextVNode"])("确认"),p=Object(o["createVNode"])("p",null,"根模块",-1),f=Object(o["createTextVNode"])("更改并打开");Object(o["popScopeId"])();var s=c((function(e,t){var n=Object(o["resolveComponent"])("full-loading"),s=Object(o["resolveComponent"])("a-button"),b=Object(o["resolveComponent"])("a-col"),j=Object(o["resolveComponent"])("a-row"),O=Object(o["resolveComponent"])("a-card"),V=Object(o["resolveComponent"])("a-tag"),_=Object(o["resolveComponent"])("a-input"),N=Object(o["resolveComponent"])("a-form-item"),g=Object(o["resolveComponent"])("a-form");return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Object(o["createVNode"])(O,{class:"card"},{default:c((function(){return[Object(o["createVNode"])(n,{show:e.loading,text:e.loadingText},null,8,["show","text"]),a,Object(o["createVNode"])(j,null,{default:c((function(){return[Object(o["createVNode"])(b,{span:12},{default:c((function(){return[Object(o["createVNode"])(s,{type:"primary",onClick:e.openFullLoading},{default:c((function(){return[r]})),_:1},8,["onClick"])]})),_:1}),Object(o["createVNode"])(b,{span:12},{default:c((function(){return[Object(o["createVNode"])(s,{onClick:e.openPartLoading},{default:c((function(){return[l]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1}),Object(o["createVNode"])(O,{class:"card"},{default:c((function(){return[u,Object(o["createVNode"])(j,null,{default:c((function(){return[Object(o["createVNode"])(b,{span:12},{default:c((function(){return[d,Object(o["createVNode"])("p",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.app,(function(e,t,n){return Object(o["openBlock"])(),Object(o["createBlock"])(V,{key:n,color:"pink"},{default:c((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])("".concat(t,":").concat(e)),1)]})),_:2},1024)})),128))]),Object(o["createVNode"])(g,{"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:c((function(){return[Object(o["createVNode"])(N,{label:"更改主题名"},{default:c((function(){return[Object(o["createVNode"])(j,null,{default:c((function(){return[Object(o["createVNode"])(b,{span:18},{default:c((function(){return[Object(o["createVNode"])(_,{value:e.inputValue,"onUpdate:value":t[1]||(t[1]=function(t){return e.inputValue=t})},null,8,["value"])]})),_:1}),Object(o["createVNode"])(b,{span:6},{default:c((function(){return[Object(o["createVNode"])(s,{type:"success",onClick:e.changeTheme},{default:c((function(){return[i]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["label-col","wrapper-col"])]})),_:1}),Object(o["createVNode"])(b,{span:12},{default:c((function(){return[p,Object(o["createVNode"])("p",null,[Object(o["createVNode"])(V,{color:"pink"},{default:c((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])("loadingText:".concat(e.loadingText)),1)]})),_:1})]),Object(o["createVNode"])(g,{"label-col":{span:6},"wrapper-col":e.wrapperCol},{default:c((function(){return[Object(o["createVNode"])(N,{label:"全局加载文字"},{default:c((function(){return[Object(o["createVNode"])(j,null,{default:c((function(){return[Object(o["createVNode"])(b,{span:16},{default:c((function(){return[Object(o["createVNode"])(_,{value:e.globalLoadingText,"onUpdate:value":t[2]||(t[2]=function(t){return e.globalLoadingText=t})},null,8,["value"])]})),_:1}),Object(o["createVNode"])(b,{offset:"2",span:6},{default:c((function(){return[Object(o["createVNode"])(s,{type:"success",onClick:e.changeText},{default:c((function(){return[f]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["wrapper-col"])]})),_:1})]})),_:1})]})),_:1})])})),b=Object(o["defineComponent"])({data:function(){return{labelCol:{span:4},wrapperCol:{span:14},loading:!1,inputValue:"",globalLoadingText:""}},created:function(){},computed:{app:function(){return this.$store.state.app},loadingText:function(){return this.$store.state.loadingText}},methods:{changeTheme:function(){this.$store.__s("app.theme",this.inputValue)},changeText:function(){var e=this;this.$store.__s("loadingText",this.globalLoadingText),this.$store.__s("fullLoading",!0),setTimeout((function(){e.$store.__s("fullLoading",!1)}),3e3)},openPartLoading:function(){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1}),3e3)},openFullLoading:function(){var e=this;this.$store.__s("loadingText","全局加载中"),this.$store.__s("fullLoading",!0),setTimeout((function(){e.$store.__s("fullLoading",!1)}),3e3)}}});n("dca7");b.render=s,b.__scopeId="data-v-7daf1b19";t["default"]=b},d465:function(e,t,n){},dca7:function(e,t,n){"use strict";n("d465")}}]);