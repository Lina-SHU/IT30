import{B as k,s as T,o as c,c as h,m as r,l as p,b as v,a as b,p as s,w as l,v as U,q as f,x as O,T as q,n as A,A as M,a1 as x,y as J,a2 as L,a3 as G,R as Q,J as W,U as N,a4 as X,k as $,K as _,L as K,d as g,t as H,a5 as Y,r as F,M as E}from"./index-DIUupp1h.js";var Z=function(o){var n=o.dt;return`
.p-card {
    background: `.concat(n("card.background"),`;
    color: `).concat(n("card.color"),`;
    box-shadow: `).concat(n("card.shadow"),`;
    border-radius: `).concat(n("card.border.radius"),`;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: `).concat(n("card.caption.gap"),`;
}

.p-card-body {
    padding: `).concat(n("card.body.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("card.body.gap"),`;
}

.p-card-title {
    font-size: `).concat(n("card.title.font.size"),`;
    font-weight: `).concat(n("card.title.font.weight"),`;
}

.p-card-subtitle {
    color: `).concat(n("card.subtitle.color"),`;
}
`)},ee={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},ne=k.extend({name:"card",theme:Z,classes:ee}),oe={name:"BaseCard",extends:T,style:ne,provide:function(){return{$pcCard:this,$parentInstance:this}}},V={name:"Card",extends:oe,inheritAttrs:!1};function te(e,o,n,a,d,t){return c(),h("div",r({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(c(),h("div",r({key:0,class:e.cx("header")},e.ptm("header")),[p(e.$slots,"header")],16)):v("",!0),b("div",r({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(c(),h("div",r({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(c(),h("div",r({key:0,class:e.cx("title")},e.ptm("title")),[p(e.$slots,"title")],16)):v("",!0),e.$slots.subtitle?(c(),h("div",r({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[p(e.$slots,"subtitle")],16)):v("",!0)],16)):v("",!0),b("div",r({class:e.cx("content")},e.ptm("content")),[p(e.$slots,"content")],16),e.$slots.footer?(c(),h("div",r({key:1,class:e.cx("footer")},e.ptm("footer")),[p(e.$slots,"footer")],16)):v("",!0)],16)],16)}V.render=te;var ae={root:"p-accordioncontent",content:"p-accordioncontent-content"},ce=k.extend({name:"accordioncontent",classes:ae}),re={name:"BaseAccordionContent",extends:T,props:{as:{type:String,default:"DIV"},asChild:{type:Boolean,default:!1}},style:ce,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},S={name:"AccordionContent",extends:re,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return r(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function ie(e,o,n,a,d,t){return e.asChild?p(e.$slots,"default",{key:1,class:A(e.cx("root")),active:t.$pcAccordionPanel.active,a11yAttrs:t.a11yAttrs}):(c(),s(q,r({key:0,name:"p-toggleable-content"},e.ptm("transition",t.ptParams)),{default:l(function(){return[!t.$pcAccordion.lazy||t.$pcAccordionPanel.active?U((c(),s(f(e.as),r({key:0,class:e.cx("root")},t.attrs),{default:l(function(){return[b("div",r({class:e.cx("content")},e.ptm("content",t.ptParams)),[p(e.$slots,"default")],16)]}),_:3},16,["class"])),[[O,t.$pcAccordion.lazy?!0:t.$pcAccordionPanel.active]]):v("",!0)]}),_:3},16))}S.render=ie;var de={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},se=k.extend({name:"accordionheader",classes:de}),le={name:"BaseAccordionHeader",extends:T,props:{as:{type:String,default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:se,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},B={name:"AccordionHeader",extends:le,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(o){switch(o.code){case"ArrowDown":this.onArrowDownKey(o);break;case"ArrowUp":this.onArrowUpKey(o);break;case"Home":this.onHomeKey(o);break;case"End":this.onEndKey(o);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(o);break}},onArrowDownKey:function(o){var n=this.findNextPanel(this.findPanel(o.currentTarget));n?this.changeFocusedPanel(o,n):this.onHomeKey(o),o.preventDefault()},onArrowUpKey:function(o){var n=this.findPrevPanel(this.findPanel(o.currentTarget));n?this.changeFocusedPanel(o,n):this.onEndKey(o),o.preventDefault()},onHomeKey:function(o){var n=this.findFirstPanel();this.changeFocusedPanel(o,n),o.preventDefault()},onEndKey:function(o){var n=this.findLastPanel();this.changeFocusedPanel(o,n),o.preventDefault()},onEnterKey:function(o){this.changeActiveValue(),o.preventDefault()},findPanel:function(o){return o==null?void 0:o.closest('[data-pc-name="accordionpanel"]')},findHeader:function(o){return M(o,'[data-pc-name="accordionheader"]')},findNextPanel:function(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?o:o.nextElementSibling;return a?x(a,"data-p-disabled")?this.findNextPanel(a):this.findHeader(a):null},findPrevPanel:function(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?o:o.previousElementSibling;return a?x(a,"data-p-disabled")?this.findPrevPanel(a):this.findHeader(a):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(o,n){J(this.findHeader(n))}},computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return r(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}},components:{ChevronUpIcon:L,ChevronDownIcon:G},directives:{ripple:Q}};function ue(e,o,n,a,d,t){var m=W("ripple");return e.asChild?p(e.$slots,"default",{key:1,class:A(e.cx("root")),active:t.$pcAccordionPanel.active,a11yAttrs:t.a11yAttrs,onClick:t.onClick}):U((c(),s(f(e.as),r({key:0,class:e.cx("root"),onClick:t.onClick},t.attrs),{default:l(function(){return[p(e.$slots,"default",{active:t.$pcAccordionPanel.active}),p(e.$slots,"toggleicon",{active:t.$pcAccordionPanel.active,class:A(e.cx("toggleicon"))},function(){return[t.$pcAccordionPanel.active?(c(),s(f(t.$pcAccordion.$slots.collapseicon?t.$pcAccordion.$slots.collapseicon:t.$pcAccordion.collapseIcon?"span":"ChevronDownIcon"),r({key:0,class:[t.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",t.ptParams)),null,16,["class"])):(c(),s(f(t.$pcAccordion.$slots.expandicon?t.$pcAccordion.$slots.expandicon:t.$pcAccordion.expandIcon?"span":"ChevronUpIcon"),r({key:1,class:[t.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",t.ptParams)),null,16,["class"]))]})]}),_:3},16,["class","onClick"])),[[m]])}B.render=ue;var pe={root:function(o){var n=o.instance,a=o.props;return["p-accordionpanel",{"p-accordionpanel-active":n.active,"p-disabled":a.disabled}]}},he=k.extend({name:"accordionpanel",classes:pe}),fe={name:"BaseAccordionPanel",extends:T,props:{value:{type:String,default:void 0},disabled:{type:Boolean,default:!1},as:{type:String,default:"DIV"},asChild:{type:Boolean,default:!1}},style:he,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},D={name:"AccordionPanel",extends:fe,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return r(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function ve(e,o,n,a,d,t){return e.asChild?p(e.$slots,"default",{key:1,class:A(e.cx("root")),active:t.active,a11yAttrs:t.a11yAttrs}):(c(),s(f(e.as),r({key:0,class:e.cx("root")},t.attrs),{default:l(function(){return[p(e.$slots,"default")]}),_:3},16,["class"]))}D.render=ve;var ge=function(o){var n=o.dt;return`
.p-accordionpanel {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: `.concat(n("accordion.panel.border.width"),`;
    border-color: `).concat(n("accordion.panel.border.color"),`;
}

.p-accordionheader {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: `).concat(n("accordion.header.padding"),`;
    color: `).concat(n("accordion.header.color"),`;
    background: `).concat(n("accordion.header.background"),`;
    border-style: solid;
    border-width: `).concat(n("accordion.header.border.width"),`;
    border-color: `).concat(n("accordion.header.border.color"),`;
    font-weight: `).concat(n("accordion.header.font.weight"),`;
    border-radius: `).concat(n("accordion.header.border.radius"),`;
    transition: background `).concat(n("accordion.transition.duration"),"; color ").concat(n("accordion.transition.duration"),"color ").concat(n("accordion.transition.duration"),", outline-color ").concat(n("accordion.transition.duration"),", box-shadow ").concat(n("accordion.transition.duration"),`;
    outline-color: transparent;
}

.p-accordionpanel:first-child > .p-accordionheader {
    border-width: `).concat(n("accordion.header.first.border.width"),`;
    border-top-left-radius: `).concat(n("accordion.header.first.top.border.radius"),`;
    border-top-right-radius: `).concat(n("accordion.header.first.top.border.radius"),`;
}

.p-accordionpanel:last-child > .p-accordionheader {
    border-bottom-left-radius: `).concat(n("accordion.header.last.bottom.border.radius"),`;
    border-bottom-right-radius: `).concat(n("accordion.header.last.bottom.border.radius"),`;
}

.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
    border-bottom-left-radius: `).concat(n("accordion.header.last.active.bottom.border.radius"),`;
    border-bottom-right-radius:`).concat(n("accordion.header.last.active.bottom.border.radius"),`;
}

.p-accordionheader-toggle-icon {
    color: `).concat(n("accordion.header.toggle.icon.color"),`;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    box-shadow: `).concat(n("accordion.header.focus.ring.shadow"),`;
    outline: `).concat(n("accordion.header.focus.ring.width")," ").concat(n("accordion.header.focus.ring.style")," ").concat(n("accordion.header.focus.ring.color"),`;
    outline-offset: `).concat(n("accordion.header.focus.ring.offset"),`;
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
    background: `).concat(n("accordion.header.hover.background"),`;
    color: `).concat(n("accordion.header.hover.color"),`
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: `).concat(n("accordion.header.toggle.icon.hover.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    background: `).concat(n("accordion.header.active.background"),`;
    color: `).concat(n("accordion.header.active.color"),`
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
    color: `).concat(n("accordion.header.toggle.icon.active.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover  {
    background: `).concat(n("accordion.header.active.hover.background"),`;
    color: `).concat(n("accordion.header.active.hover.color"),`
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover  .p-accordionheader-toggle-icon {
    color: `).concat(n("accordion.header.toggle.icon.active.hover.color"),`;
}

.p-accordioncontent-content {
    border-style: solid;
    border-width: `).concat(n("accordion.content.border.width"),`;
    border-color: `).concat(n("accordion.content.border.color"),`;
    background-color: `).concat(n("accordion.content.background"),`;
    color: `).concat(n("accordion.content.color"),`;
    padding: `).concat(n("accordion.content.padding"),`
}
`)},me={root:"p-accordion p-component"},be=k.extend({name:"accordion",theme:ge,classes:me}),Ae={name:"BaseAccordion",extends:T,props:{value:{type:[String,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:be,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},R={name:"Accordion",extends:Ae,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(o){this.id=o||N()},value:function(o){this.d_value=o},activeIndex:{immediate:!0,handler:function(o){this.hasAccordionTab&&(this.d_value=this.multiple?o==null?void 0:o.map(String):o==null?void 0:o.toString())}}},mounted:function(){this.id=this.id||N()},methods:{isItemActive:function(o){var n;return this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.includes(o):this.d_value===o},updateValue:function(o){var n,a=this.isItemActive(o);this.multiple?a?this.d_value=this.d_value.filter(function(d){return d!==o}):this.d_value?this.d_value.push(o):this.d_value=[o]:this.d_value=a?null:o,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.map(Number):Number(this.d_value)),this.$emit(a?"tab-close":"tab-open",{originalEvent:void 0,index:Number(o)})},isAccordionTab:function(o){return o.type.name==="AccordionTab"},getTabProp:function(o,n){return o.props?o.props[n]:void 0},getKey:function(o,n){return this.getTabProp(o,"header")||n},getHeaderPT:function(o,n){var a=this;return{root:r({onClick:function(t){return a.onTabClick(t,n)}},this.getTabProp(o,"headerProps"),this.getTabPT(o,"header",n)),toggleicon:r(this.getTabProp(o,"headeractionprops"),this.getTabPT(o,"headeraction",n))}},getContentPT:function(o,n){return{root:r(this.getTabProp(o,"contentProps"),this.getTabPT(o,"toggleablecontent",n)),transition:this.getTabPT(o,"transition",n),content:this.getTabPT(o,"content",n)}},getTabPT:function(o,n,a){var d=this.tabs.length,t={props:o.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:a,count:d,first:a===0,last:a===d-1,active:this.isItemActive("".concat(a))}};return r(this.ptm("accordiontab.".concat(n),t),this.ptmo(this.getTabProp(o,"pt"),n,t))},onTabClick:function(o,n){this.$emit("tab-click",{originalEvent:o,index:n})}},computed:{tabs:function(){var o=this;return this.$slots.default().reduce(function(n,a){return o.isAccordionTab(a)?n.push(a):a.children&&a.children instanceof Array&&a.children.forEach(function(d){o.isAccordionTab(d)&&n.push(d)}),n},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:D,AccordionHeader:B,AccordionContent:S,ChevronUpIcon:L,ChevronRightIcon:X}};function ye(e,o,n,a,d,t){var m=$("AccordionHeader"),I=$("AccordionContent"),w=$("AccordionPanel");return c(),h("div",r({class:e.cx("root")},e.ptmi("root")),[t.hasAccordionTab?(c(!0),h(_,{key:0},K(t.tabs,function(i,u){return c(),s(w,{key:t.getKey(i,u),value:"".concat(u),pt:{root:t.getTabPT(i,"root",u)},disabled:t.getTabProp(i,"disabled")},{default:l(function(){return[g(m,{class:A(t.getTabProp(i,"headerClass")),pt:t.getHeaderPT(i,u)},{toggleicon:l(function(y){return[y.active?(c(),s(f(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),r({key:0,class:[e.collapseIcon,y.class],"aria-hidden":"true",ref_for:!0},t.getTabPT(i,"headericon",u)),null,16,["class"])):(c(),s(f(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),r({key:1,class:[e.expandIcon,y.class],"aria-hidden":"true",ref_for:!0},t.getTabPT(i,"headericon",u)),null,16,["class"]))]}),default:l(function(){return[i.children&&i.children.headericon?(c(),s(f(i.children.headericon),{key:0,isTabActive:t.isItemActive("".concat(u)),active:t.isItemActive("".concat(u)),index:u},null,8,["isTabActive","active","index"])):v("",!0),i.props&&i.props.header?(c(),h("span",r({key:1,ref_for:!0},t.getTabPT(i,"headertitle",u)),H(i.props.header),17)):v("",!0),i.children&&i.children.header?(c(),s(f(i.children.header),{key:2})):v("",!0)]}),_:2},1032,["class","pt"]),g(I,{pt:t.getContentPT(i,u)},{default:l(function(){return[(c(),s(f(i)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):p(e.$slots,"default",{key:1})],16)}R.render=ye;const Pe={class:"bg-surface-200 min-h-screen p-6"},$e={class:"grid grid-cols-6 gap-4"},ke={class:"col-span-2"},Te={class:"col-span-4"},Ie={__name:"AccordionView",setup(e){const o=Y(),n=F([{title:"Header I",value:"0",items:[{name:"page1",path:"/accordion/page1"}]},{title:"Header II",value:"1",items:[{name:"page2",path:"/accordion/page2"}]}]),a=F("0"),d=(t,m)=>(o.fullPath===t.path&&(a.value=m),o.fullPath===t.path);return(t,m)=>{const I=B,w=$("router-link"),i=S,u=D,y=R,z=$("RouterView"),j=V;return c(),h("main",Pe,[b("div",$e,[b("div",ke,[g(y,{value:a.value},{default:l(()=>[(c(!0),h(_,null,K(n.value,P=>(c(),s(u,{value:P.value,key:P},{default:l(()=>[g(I,null,{default:l(()=>[E(H(P.title),1)]),_:2},1024),g(i,null,{default:l(()=>[(c(!0),h(_,null,K(P.items,C=>(c(),s(w,{key:C,to:C.path,class:A({"text-primary-500":d(C,P.value)})},{default:l(()=>[E(H(C.name),1)]),_:2},1032,["to","class"]))),128))]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),b("div",Te,[g(j,null,{content:l(()=>[g(z)]),_:1})])])])}}};export{Ie as default};
