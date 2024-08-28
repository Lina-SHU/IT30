import{B as M,a_ as A,aw as U,ag as z,s as H,o as f,c as g,a as d,m as v,b as y,r as m,a$ as I,d as u,aP as V,S as B,g as T,h as C}from"./index-B6Bc_yCb.js";import{s as K}from"./index-Fqnafh6d.js";import"./index-BXgb8l7v.js";var N=function(e){var t=e.dt;return`
.p-slider {
    position: relative;
    background: `.concat(t("slider.track.background"),`;
    border-radius: `).concat(t("slider.border.radius"),`;
}

.p-slider-handle {
    cursor: grab;
    touch-action: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: `).concat(t("slider.handle.height"),`;
    width: `).concat(t("slider.handle.width"),`;
    background: `).concat(t("slider.handle.background"),`;
    border-radius: `).concat(t("slider.handle.border.radius"),`;
    transition: background `).concat(t("slider.transition.duration"),", color ").concat(t("slider.transition.duration"),", border-color ").concat(t("slider.transition.duration"),", box-shadow ").concat(t("slider.transition.duration"),", outline-color ").concat(t("slider.transition.duration"),`;
    outline-color: transparent;
}

.p-slider-handle::before {
    content: "";
    width: `).concat(t("slider.handle.content.width"),`;
    height: `).concat(t("slider.handle.content.height"),`;
    display: block;
    background: `).concat(t("slider.handle.content.background"),`;
    border-radius: `).concat(t("slider.handle.content.border.radius"),`;
    box-shadow: `).concat(t("slider.handle.content.shadow"),`;
    transition: background `).concat(t("slider.transition.duration"),`;
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    background: `).concat(t("slider.handle.hover.background"),`;
}

.p-slider:not(.p-disabled) .p-slider-handle:hover::before {
    background: `).concat(t("slider.handle.content.hover.background"),`;
}

.p-slider-handle:focus-visible {
    border-color: `).concat(t("slider.handle.focus.border.color"),`;
    box-shadow: `).concat(t("slider.handle.focus.ring.shadow"),`;
    outline: `).concat(t("slider.handle.focus.ring.width")," ").concat(t("slider.handle.focus.ring.style")," ").concat(t("slider.handle.focus.ring.color"),`;
    outline-offset: `).concat(t("slider.handle.focus.ring.offset"),`;
}

.p-slider-range {
    display: block;
    background: `).concat(t("slider.range.background"),`;
    border-radius: `).concat(t("slider.border.radius"),`;
}

.p-slider.p-slider-horizontal {
    height: `).concat(t("slider.track.size"),`;
}

.p-slider-horizontal .p-slider-range {
    top: 0;
    left: 0;
    height: 100%;
}

.p-slider-horizontal .p-slider-handle {
    top: 50%;
    margin-top: calc(-1 * calc(`).concat(t("slider.handle.height"),` / 2));
    margin-left: calc(-1 * calc(`).concat(t("slider.handle.width"),` / 2));
}

.p-slider-vertical {
    min-height: 100px;
    width: `).concat(t("slider.track.size"),`;
}

.p-slider-vertical .p-slider-handle {
    left: 50%;
    margin-left: calc(-1 * calc(`).concat(t("slider.handle.width"),` / 2));
    margin-bottom: calc(-1 * calc(`).concat(t("slider.handle.height"),` / 2));
}

.p-slider-vertical .p-slider-range {
    bottom: 0;
    left: 0;
    width: 100%;
}
`)},W={handle:{position:"absolute"},range:{position:"absolute"}},j={root:function(e){var t=e.props;return["p-slider p-component",{"p-disabled":t.disabled,"p-slider-horizontal":t.orientation==="horizontal","p-slider-vertical":t.orientation==="vertical"}]},range:"p-slider-range",handle:"p-slider-handle"},R=M.extend({name:"slider",theme:N,classes:j,inlineStyles:W}),Y={name:"BaseSlider",extends:H,props:{modelValue:[Number,Array],min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},step:{type:Number,default:null},range:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:R,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function X(n){return q(n)||G(n)||O(n)||F()}function F(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(n,e){if(n){if(typeof n=="string")return D(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?D(n,e):void 0}}function G(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function q(n){if(Array.isArray(n))return D(n)}function D(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}var k={name:"Slider",extends:Y,inheritAttrs:!1,emits:["update:modelValue","change","slideend"],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var e=this.$el.getBoundingClientRect();this.initX=e.left+A(),this.initY=e.top+U(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(e){var t,r=e.touches?e.touches[0].pageX:e.pageX,l=e.touches?e.touches[0].pageY:e.pageY;this.orientation==="horizontal"?t=(r-this.initX)*100/this.barWidth:t=(this.initY+this.barHeight-l)*100/this.barHeight;var i=(this.max-this.min)*(t/100)+this.min;if(this.step){var a=this.range?this.value[this.handleIndex]:this.value,c=i-a;c<0?i=a+Math.ceil(i/this.step-a/this.step)*this.step:c>0&&(i=a+Math.floor(i/this.step-a/this.step)*this.step)}else i=Math.floor(i);this.updateModel(e,i)},updateModel:function(e,t){var r=parseFloat(t.toFixed(10)),l;this.range?(l=this.value?X(this.value):[],this.handleIndex==0?(r<this.min?r=this.min:r>=this.max&&(r=this.max),l[0]=r):(r>this.max?r=this.max:r<=this.min&&(r=this.min),l[1]=r)):(r<this.min?r=this.min:r>this.max&&(r=this.max),l=r),this.$emit("update:modelValue",l),this.$emit("change",l)},onDragStart:function(e,t){this.disabled||(this.$el.setAttribute("data-p-sliding",!0),this.dragging=!0,this.updateDomData(),this.range&&this.value[0]===this.max?this.handleIndex=0:this.handleIndex=t,e.currentTarget.focus(),e.preventDefault())},onDrag:function(e){this.dragging&&(this.setValue(e),e.preventDefault())},onDragEnd:function(e){this.dragging&&(this.dragging=!1,this.$el.setAttribute("data-p-sliding",!1),this.$emit("slideend",{originalEvent:e,value:this.value}))},onBarClick:function(e){this.disabled||z(e.target,"data-pc-section")!=="handle"&&(this.updateDomData(),this.setValue(e))},onMouseDown:function(e,t){this.bindDragListeners(),this.onDragStart(e,t)},onKeyDown:function(e,t){switch(this.handleIndex=t,e.code){case"ArrowDown":case"ArrowLeft":this.decrementValue(e,t),e.preventDefault();break;case"ArrowUp":case"ArrowRight":this.incrementValue(e,t),e.preventDefault();break;case"PageDown":this.decrementValue(e,t,!0),e.preventDefault();break;case"PageUp":this.incrementValue(e,t,!0),e.preventDefault();break;case"Home":this.updateModel(e,this.min),e.preventDefault();break;case"End":this.updateModel(e,this.max),e.preventDefault();break}},decrementValue:function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,l;this.range?this.step?l=this.value[t]-this.step:l=this.value[t]-1:this.step?l=this.value-this.step:!this.step&&r?l=this.value-10:l=this.value-1,this.updateModel(e,l),e.preventDefault()},incrementValue:function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,l;this.range?this.step?l=this.value[t]+this.step:l=this.value[t]+1:this.step?l=this.value+this.step:!this.step&&r?l=this.value+10:l=this.value+1,this.updateModel(e,l),e.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener("mousemove",this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener("mouseup",this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&(document.removeEventListener("mousemove",this.dragListener),this.dragListener=null),this.dragEndListener&&(document.removeEventListener("mouseup",this.dragEndListener),this.dragEndListener=null)}},computed:{value:function(){var e;if(this.range){var t,r,l,i;return[(t=(r=this.modelValue)===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:this.min,(l=(i=this.modelValue)===null||i===void 0?void 0:i[1])!==null&&l!==void 0?l:this.max]}return(e=this.modelValue)!==null&&e!==void 0?e:this.min},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},rangeStyle:function(){if(this.range){var e=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,t=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{left:t+"%",width:e+"%"}:{bottom:t+"%",height:e+"%"}}else return this.horizontal?{width:this.handlePosition+"%"}:{height:this.handlePosition+"%"}},handleStyle:function(){return this.horizontal?{left:this.handlePosition+"%"}:{bottom:this.handlePosition+"%"}},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]?(this.value[0]<this.min?0:this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2?(this.value[1]>this.max?100:this.value[1]-this.min)*100/(this.max-this.min):100},rangeStartHandleStyle:function(){return this.horizontal?{left:this.rangeStartPosition+"%"}:{bottom:this.rangeStartPosition+"%"}},rangeEndHandleStyle:function(){return this.horizontal?{left:this.rangeEndPosition+"%"}:{bottom:this.rangeEndPosition+"%"}}}},J=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"],Q=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"],Z=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"];function $(n,e,t,r,l,i){return f(),g("div",v({class:n.cx("root"),onClick:e[15]||(e[15]=function(){return i.onBarClick&&i.onBarClick.apply(i,arguments)})},n.ptmi("root"),{"data-p-sliding":!1}),[d("span",v({class:n.cx("range"),style:[n.sx("range"),i.rangeStyle]},n.ptm("range")),null,16),n.range?y("",!0):(f(),g("span",v({key:0,class:n.cx("handle"),style:[n.sx("handle"),i.handleStyle],onTouchstartPassive:e[0]||(e[0]=function(a){return i.onDragStart(a)}),onTouchmovePassive:e[1]||(e[1]=function(a){return i.onDrag(a)}),onTouchend:e[2]||(e[2]=function(a){return i.onDragEnd(a)}),onMousedown:e[3]||(e[3]=function(a){return i.onMouseDown(a)}),onKeydown:e[4]||(e[4]=function(a){return i.onKeyDown(a)}),tabindex:n.tabindex,role:"slider","aria-valuemin":n.min,"aria-valuenow":n.modelValue,"aria-valuemax":n.max,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-orientation":n.orientation},n.ptm("handle")),null,16,J)),n.range?(f(),g("span",v({key:1,class:n.cx("handle"),style:[n.sx("handle"),i.rangeStartHandleStyle],onTouchstartPassive:e[5]||(e[5]=function(a){return i.onDragStart(a,0)}),onTouchmovePassive:e[6]||(e[6]=function(a){return i.onDrag(a)}),onTouchend:e[7]||(e[7]=function(a){return i.onDragEnd(a)}),onMousedown:e[8]||(e[8]=function(a){return i.onMouseDown(a,0)}),onKeydown:e[9]||(e[9]=function(a){return i.onKeyDown(a,0)}),tabindex:n.tabindex,role:"slider","aria-valuemin":n.min,"aria-valuenow":n.modelValue?n.modelValue[0]:null,"aria-valuemax":n.max,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-orientation":n.orientation},n.ptm("startHandler")),null,16,Q)):y("",!0),n.range?(f(),g("span",v({key:2,class:n.cx("handle"),style:[n.sx("handle"),i.rangeEndHandleStyle],onTouchstartPassive:e[10]||(e[10]=function(a){return i.onDragStart(a,1)}),onTouchmovePassive:e[11]||(e[11]=function(a){return i.onDrag(a)}),onTouchend:e[12]||(e[12]=function(a){return i.onDragEnd(a)}),onMousedown:e[13]||(e[13]=function(a){return i.onMouseDown(a,1)}),onKeydown:e[14]||(e[14]=function(a){return i.onKeyDown(a,1)}),tabindex:n.tabindex,role:"slider","aria-valuemin":n.min,"aria-valuenow":n.modelValue?n.modelValue[1]:null,"aria-valuemax":n.max,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-orientation":n.orientation},n.ptm("endHandler")),null,16,Z)):y("",!0)],16)}k.render=$;const _={class:"p-6"},ee={class:"mb-6"},ne={class:"mb-6"},te={class:"mb-6"},ae={class:"flex flex-col items-center"},ie={class:"card flex justify-center"},re={class:"flex flex-col items-center"},le={class:"mb-3"},oe={class:"flex mb-3"},se=["src"],me={__name:"SliderView",setup(n){const e=m(null),t=m(0),r=m([100,100,0]),l=m([{label:"對比度",value:0},{label:"亮度",value:1},{label:"棕褐色系",value:2}]),i=I(()=>({filter:`contrast(${r.value[0]}%) brightness(${r.value[1]}%) sepia(${r.value[2]}%)`})),a=m(null),c=m(null),w=m(null),L=p=>{const o=p.files[0];c.value=window.URL.createObjectURL(o)},x=async()=>{const p=w.value.getContext("2d");p.filter=i.value.filter,p.drawImage(a.value,0,0,a.value.clientWidth,a.value.clientHeight);const o=w.value.toDataURL("image/jpeg"),h=document.createElement("a");h.href=o,h.download="downloadImg",document.body.appendChild(h),h.click(),document.body.removeChild(h)};return(p,o)=>{const h=B,b=k,S=T,E=K,P=C;return f(),g("main",_,[d("div",ee,[u(h,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=s=>e.value=s),modelModifiers:{number:!0},class:"mb-6"},null,8,["modelValue"]),u(b,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=s=>e.value=s),class:"w-56"},null,8,["modelValue"])]),d("div",ne,[u(h,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=s=>e.value=s),modelModifiers:{number:!0},class:"mb-6"},null,8,["modelValue"]),u(b,{modelValue:e.value,"onUpdate:modelValue":o[3]||(o[3]=s=>e.value=s),step:25,class:"w-56"},null,8,["modelValue"])]),d("div",te,[d("div",ae,[d("img",{alt:"user header",class:"w-full md:w-80 rounded mb-6",src:"https://images.unsplash.com/photo-1723984834599-5357b87f727c?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",style:V(i.value)},null,4),u(S,{modelValue:t.value,"onUpdate:modelValue":o[4]||(o[4]=s=>t.value=s),options:l.value,optionLabel:"label",optionValue:"value",class:"mb-4"},null,8,["modelValue","options"]),u(b,{modelValue:r.value[t.value],"onUpdate:modelValue":o[5]||(o[5]=s=>r.value[t.value]=s),class:"w-56",min:0,max:200},null,8,["modelValue"])])]),d("div",ie,[d("div",re,[d("div",le,[d("div",oe,[u(E,{name:"demo[]",mode:"basic",accept:"image/*",onUploader:o[6]||(o[6]=s=>L(s)),customUpload:!0,maxFileSize:1e6,auto:!0}),u(P,{label:"下載圖片",severity:"info",onClick:x,class:"ms-5"})]),c.value?(f(),g("img",{key:0,ref_key:"imageRef",ref:a,src:c.value,alt:"image",style:V(i.value)},null,12,se)):y("",!0),d("canvas",{ref_key:"canvasImage",ref:w,class:"hidden",width:"1000",height:"1000"},null,512)]),u(S,{modelValue:t.value,"onUpdate:modelValue":o[7]||(o[7]=s=>t.value=s),options:l.value,optionLabel:"label",optionValue:"value",class:"mb-4"},null,8,["modelValue","options"]),u(b,{modelValue:r.value[t.value],"onUpdate:modelValue":o[8]||(o[8]=s=>r.value[t.value]=s),class:"w-56",min:0,max:200},null,8,["modelValue"])])])])}}};export{me as default};
