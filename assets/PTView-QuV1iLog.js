import{B as _,U as g,h as b,R as B,s as k,j as w,o as l,c as u,a as s,k as d,n as P,m as a,l as h,w as c,p as q,b as m,d as i,q as C,v as $,T as I,t as x,r as L}from"./index-B6Bc_yCb.js";import{s as A}from"./index-BZwr_f9B.js";import{s as D}from"./index-BXgb8l7v.js";var S=function(o){var t=o.dt;return`
.p-panel {
    border: 1px solid `.concat(t("panel.border.color"),`;
    border-radius: `).concat(t("panel.border.radius"),`;
    background: `).concat(t("panel.background"),`;
    color: `).concat(t("panel.color"),`;
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: `).concat(t("panel.header.padding"),`;
    background: `).concat(t("panel.header.background"),`;
    color: `).concat(t("panel.header.color"),`;
    border-style: solid;
    border-width: `).concat(t("panel.header.border.width"),`;
    border-color: `).concat(t("panel.header.border.color"),`;
    border-radius: `).concat(t("panel.header.border.radius"),`;
}

.p-panel-toggleable .p-panel-header {
    padding: `).concat(t("panel.toggleable.header.padding"),`;
}

.p-panel-title {
    line-height: 1;
    font-weight: `).concat(t("panel.title.font.weight"),`;
}

.p-panel-content {
    padding: `).concat(t("panel.content.padding"),`;
}

.p-panel-footer {
    padding: `).concat(t("panel.footer.padding"),`;
}
`)},T={root:function(o){var t=o.props;return["p-panel p-component",{"p-panel-toggleable":t.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},U=_.extend({name:"panel",theme:S,classes:T}),H={name:"BasePanel",extends:k,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:U,provide:function(){return{$pcPanel:this,$parentInstance:this}}},f={name:"Panel",extends:H,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(o){this.id=o||g()},collapsed:function(o){this.d_collapsed=o}},mounted:function(){this.id=this.id||g()},methods:{toggle:function(o){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:o,value:this.d_collapsed})},onKeyDown:function(o){(o.code==="Enter"||o.code==="NumpadEnter"||o.code==="Space")&&(this.toggle(o),o.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:D,MinusIcon:A,Button:b},directives:{ripple:B}},K=["id"],M=["id","aria-labelledby"];function E(e,o,t,v,n,r){var p=w("Button");return l(),u("div",a({class:e.cx("root")},e.ptmi("root")),[s("div",a({class:e.cx("header")},e.ptm("header")),[d(e.$slots,"header",{id:n.id+"_header",class:P(e.cx("title"))},function(){return[e.header?(l(),u("span",a({key:0,id:n.id+"_header",class:e.cx("title")},e.ptm("title")),x(e.header),17,K)):m("",!0)]}),s("div",a({class:e.cx("headerActions")},e.ptm("headerActions")),[d(e.$slots,"icons"),e.toggleable?(l(),h(p,a({key:0,id:n.id+"_header",class:e.cx("pcToggleButton"),"aria-label":r.buttonAriaLabel,"aria-controls":n.id+"_content","aria-expanded":!n.d_collapsed,unstyled:e.unstyled,onClick:r.toggle,onKeydown:r.onKeyDown},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:c(function(y){return[d(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:n.d_collapsed},function(){return[(l(),h(q(n.d_collapsed?"PlusIcon":"MinusIcon"),a({class:y.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):m("",!0)],16)],16),i(I,a({name:"p-toggleable-content"},e.ptm("transition")),{default:c(function(){return[C(s("div",a({id:n.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":n.id+"_header"},e.ptm("contentContainer")),[s("div",a({class:e.cx("content")},e.ptm("content")),[d(e.$slots,"default")],16),e.$slots.footer?(l(),u("div",a({key:0,class:e.cx("footer")},e.ptm("footer")),[d(e.$slots,"footer")],16)):m("",!0)],16,M),[[$,!n.d_collapsed]])]}),_:3},16)],16)}f.render=E;const N={class:"p-6"},V=s("p",{class:"mt-3"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),j=s("p",{class:"mt-3"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),R=s("p",{class:"mt-3"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),z={class:"mt-3"},J={__name:"PTView",setup(e){const o=L({hooks:{onMounted:()=>{console.log("onMounted!")},onUnmounted:()=>{console.log("onUnMounted!")}}});return(t,v)=>{const n=f,r=b;return l(),u("main",N,[i(n,{header:"Header",toggleable:"",class:"mb-3",pt:{header:p=>({id:"panelHeader",style:{"user-select":"none"},class:["border-rose-100",{"bg-rose-400 text-rose-100":p.state.d_collapsed,"text-rose-700 bg-rose-100":!p.state.d_collapsed}]}),title:"text-xl",content:{class:"text-lg text-gray-400"}}},{default:c(()=>[V]),_:1},8,["pt"]),i(n,{header:"Header",toggleable:"",class:"mb-3",pt:{root:{class:"border border-dashed border-2"},header:{id:"headerId","data-header-info":"headerInfo",class:"text-rose-700 bg-rose-100 text-xl"}}},{default:c(()=>[j]),_:1}),i(n,{header:"Header",toggleable:"","pt:root:class":"border border-dashed border-2","pt:header:id":"headerId","pt:header:data-header-info":"headerInfo","pt:header:class":"text-rose-700 bg-rose-100 text-xl"},{default:c(()=>[R]),_:1}),s("div",z,[i(r,{label:"Home",icon:"pi pi-home",class:"me-3",pt:o.value},null,8,["pt"]),i(r,{label:"Check",icon:"pi pi-check",severity:"info"})])])}}};export{J as default};
