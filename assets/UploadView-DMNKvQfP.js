import{N as _,o as i,c as p,m as l,a as m,B as P,a3 as j,a4 as V,a5 as $,a6 as N,R as q,a7 as A,s as z,j as w,I as ee,l as g,w as y,q as R,k as h,p as B,b,v as ne,T as te,L as D,t as F,a8 as oe,a9 as W,h as O,aa as se,K as E,d as v,n as C,J as M,ab as ae,ac as K,a1 as le,r as ie,ad as re}from"./index-CB1Sao8h.js";import{s as ce}from"./index-xpiUSFfi.js";var G={name:"UploadIcon",extends:_},ue=m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"},null,-1),de=[ue];function pe(e,t,n,s,a,o){return i(),p("svg",l({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),de,16)}G.render=pe;var fe=function(t){var n=t.dt;return`
.p-message {
    border-radius: `.concat(n("message.border.radius"),`;
    outline-width: `).concat(n("message.border.width"),`;
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: `).concat(n("message.content.padding"),`;
    gap: `).concat(n("message.content.gap"),`;
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin: 0 0 0 auto;
    overflow: hidden;
    position: relative;
    width: `).concat(n("message.close.button.width"),`;
    height: `).concat(n("message.close.button.height"),`;
    border-radius: `).concat(n("message.close.button.border.radius"),`;
    background: transparent;
    transition: background `).concat(n("message.transition.duration"),", color ").concat(n("message.transition.duration"),", outline-color ").concat(n("message.transition.duration"),", box-shadow ").concat(n("message.transition.duration"),`, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: `).concat(n("message.close.icon.size"),`;
    width: `).concat(n("message.close.icon.size"),`;
    height: `).concat(n("message.close.icon.size"),`;
}

.p-message-close-button:focus-visible {
    outline-width: `).concat(n("message.close.button.focus.ring.width"),`;
    outline-style: `).concat(n("message.close.button.focus.ring.style"),`;
    outline-offset: `).concat(n("message.close.button.focus.ring.offset"),`;
}

.p-message-info {
    background: `).concat(n("message.info.background"),`;
    outline-color: `).concat(n("message.info.border.color"),`;
    color: `).concat(n("message.info.color"),`;
    box-shadow: `).concat(n("message.info.shadow"),`;
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: `).concat(n("message.info.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("message.info.close.button.focus.ring.shadow"),`;
}

.p-message-info .p-message-close-button:hover {
    background: `).concat(n("message.info.close.button.hover.background"),`;
}

.p-message-success {
    background: `).concat(n("message.success.background"),`;
    outline-color: `).concat(n("message.success.border.color"),`;
    color: `).concat(n("message.success.color"),`;
    box-shadow: `).concat(n("message.success.shadow"),`;
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: `).concat(n("message.success.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("message.success.close.button.focus.ring.shadow"),`;
}

.p-message-success .p-message-close-button:hover {
    background: `).concat(n("message.success.close.button.hover.background"),`;
}

.p-message-warn {
    background: `).concat(n("message.warn.background"),`;
    outline-color: `).concat(n("message.warn.border.color"),`;
    color: `).concat(n("message.warn.color"),`;
    box-shadow: `).concat(n("message.warn.shadow"),`;
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: `).concat(n("message.warn.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("message.warn.close.button.focus.ring.shadow"),`;
}

.p-message-warn .p-message-close-button:hover {
    background: `).concat(n("message.warn.close.button.hover.background"),`;
}

.p-message-error {
    background: `).concat(n("message.error.background"),`;
    outline-color: `).concat(n("message.error.border.color"),`;
    color: `).concat(n("message.error.color"),`;
    box-shadow: `).concat(n("message.error.shadow"),`;
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: `).concat(n("message.error.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("message.error.close.button.focus.ring.shadow"),`;
}

.p-message-error .p-message-close-button:hover {
    background: `).concat(n("message.error.close.button.hover.background"),`;
}

.p-message-secondary {
    background: `).concat(n("message.secondary.background"),`;
    outline-color: `).concat(n("message.secondary.border.color"),`;
    color: `).concat(n("message.secondary.color"),`;
    box-shadow: `).concat(n("message.secondary.shadow"),`;
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: `).concat(n("message.secondary.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("message.secondary.close.button.focus.ring.shadow"),`;
}

.p-message-secondary .p-message-close-button:hover {
    background: `).concat(n("message.secondary.close.button.hover.background"),`;
}

.p-message-contrast {
    background: `).concat(n("message.contrast.background"),`;
    outline-color: `).concat(n("message.contrast.border.color"),`;
    color: `).concat(n("message.contrast.color"),`;
    box-shadow: `).concat(n("message.contrast.shadow"),`;
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: `).concat(n("message.contrast.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("message.contrast.close.button.focus.ring.shadow"),`;
}

.p-message-contrast .p-message-close-button:hover {
    background: `).concat(n("message.contrast.close.button.hover.background"),`;
}

.p-message-text {
    font-size: `).concat(n("message.text.font.size"),`;
    font-weight: `).concat(n("message.text.font.weight"),`;
}

.p-message-icon {
    font-size: `).concat(n("message.icon.size"),`;
    width: `).concat(n("message.icon.size"),`;
    height: `).concat(n("message.icon.size"),`;
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}
`)},me={root:function(t){var n=t.props;return"p-message p-component p-message-"+n.severity},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},ge=P.extend({name:"message",theme:fe,classes:me}),he={name:"BaseMessage",extends:z,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:ge,provide:function(){return{$pcMessage:this,$parentInstance:this}}},Y={name:"Message",extends:he,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var t=this;this.life&&setTimeout(function(){t.visible=!1,t.$emit("life-end")},this.life)},methods:{close:function(t){this.visible=!1,this.$emit("close",t)}},computed:{iconComponent:function(){return{info:j,success:V,warn:$,error:N}[this.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:q},components:{TimesIcon:A,InfoCircleIcon:j,CheckIcon:V,ExclamationTriangleIcon:$,TimesCircleIcon:N}};function I(e){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(e)}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,s)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?H(Object(n),!0).forEach(function(s){be(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function be(e,t,n){return(t=ve(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ve(e){var t=ye(e,"string");return I(t)=="symbol"?t:t+""}function ye(e,t){if(I(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t||"default");if(I(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var we=["aria-label"];function Be(e,t,n,s,a,o){var c=w("TimesIcon"),r=ee("ripple");return i(),g(te,l({name:"p-message",appear:""},e.ptmi("transition")),{default:y(function(){return[R(m("div",l({class:e.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("root")),[e.$slots.container?h(e.$slots,"container",{key:0,closeCallback:o.close}):(i(),p("div",l({key:1,class:e.cx("content")},e.ptm("content")),[h(e.$slots,"icon",{class:"p-message-icon"},function(){return[(i(),g(B(e.icon?"span":null),l({class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16,["class"]))]}),e.$slots.default?(i(),p("div",l({key:0,class:["p-message-text",e.cx("text")]},e.ptm("text")),[h(e.$slots,"default")],16)):b("",!0),e.closable?R((i(),p("button",l({key:1,class:e.cx("closeButton"),"aria-label":o.closeAriaLabel,type:"button",onClick:t[0]||(t[0]=function(f){return o.close(f)})},Z(Z({},e.closeButtonProps),e.ptm("closeButton"))),[h(e.$slots,"closeicon",{},function(){return[e.closeIcon?(i(),p("i",l({key:0,class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16)):(i(),g(c,l({key:1,class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,we)),[[r]]):b("",!0)],16))],16),[[ne,a.visible]])]}),_:3},16)}Y.render=Be;var Ce=function(t){var n=t.dt;return`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: `.concat(n("progressbar.height"),`;
    background: `).concat(n("progressbar.background"),`;
    border-radius: `).concat(n("progressbar.border.radius"),`;
}

.p-progressbar-value {
    margin: 0;
    background: `).concat(n("progressbar.value.background"),`;
}

.p-progressbar-label {
    color: `).concat(n("progressbar.label.color"),`;
    font-size: `).concat(n("progressbar.label.font.size"),`;
    font-weight: `).concat(n("progressbar.label.font.weight"),`;
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
`)},Fe={root:function(t){var n=t.instance;return["p-progressbar p-component",{"p-progressbar-determinate":n.determinate,"p-progressbar-indeterminate":n.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},ke=P.extend({name:"progressbar",theme:Ce,classes:Fe}),Ie={name:"BaseProgressBar",extends:z,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:ke,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},J={name:"ProgressBar",extends:Ie,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},Se=["aria-valuenow"];function Le(e,t,n,s,a,o){return i(),p("div",l({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptmi("root")),[o.determinate?(i(),p("div",l({key:0,class:e.cx("value"),style:o.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(i(),p("div",l({key:0,class:e.cx("label")},e.ptm("label")),[h(e.$slots,"default",{},function(){return[D(F(e.value+"%"),1)]})],16)):b("",!0)],16)):o.indeterminate?(i(),p("div",l({key:1,class:e.cx("value")},e.ptm("value")),null,16)):b("",!0)],16,Se)}J.render=Le;var ze=function(t){var n=t.dt;return`
.p-fileupload input[type="file"] {
    display: none;
}

.p-fileupload-advanced {
    border: 1px solid `.concat(n("fileupload.border.color"),`;
    border-radius: `).concat(n("fileupload.border.radius"),`;
    background: `).concat(n("fileupload.background"),`;
    color: `).concat(n("fileupload.color"),`;
}

.p-fileupload-header {
    display: flex;
    align-items: center;
    padding: `).concat(n("fileupload.header.padding"),`;
    background: `).concat(n("fileupload.header.background"),`;
    color: `).concat(n("fileupload.header.color"),`;
    border-style: solid;
    border-width: `).concat(n("fileupload.header.border.width"),`;
    border-color: `).concat(n("fileupload.header.border.color"),`;
    border-radius: `).concat(n("fileupload.header.border.radius"),`;
    gap: `).concat(n("fileupload.header.gap"),`;
}

.p-fileupload-content {
    border: 1px solid transparent;
    position: relative;
    transition: border-color `).concat(n("fileupload.transition.duration"),`;
    padding: `).concat(n("fileupload.content.padding"),`;
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: `).concat(n("fileupload.progressbar.height"),`;
}

.p-fileupload-file-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1.125rem;
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: `).concat(n("fileupload.file.padding"),`;
    border-bottom: 1px solid `).concat(n("fileupload.file.border.color"),`;
    gap: `).concat(n("fileupload.file.gap"),`;
}

.p-fileupload-file:last-child {
    border-bottom: 0;
}

.p-fileupload-file-info {
    display: flex;
    flex-direction: column;
    gap: `).concat(n("fileupload.file.info.gap"),`;
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-left: auto;
}

.p-fileupload-highlight {
    border: 1px dashed `).concat(n("fileupload.content.highlight.border.color"),`;
}

.p-fileupload-advanced .p-message {
    margin-top: 0;
}

.p-fileupload-basic {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: `).concat(n("fileupload.basic.gap"),`;
}
`)},Ue={root:function(t){var n=t.props;return["p-fileupload p-fileupload-".concat(n.mode," p-component")]},header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},De=P.extend({name:"fileupload",theme:ze,classes:Ue}),Ee={name:"BaseFileUpload",extends:z,props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null,chooseButtonProps:{type:null,default:null},uploadButtonProps:{type:Object,default:function(){return{severity:"secondary"}}},cancelButtonProps:{type:Object,default:function(){return{severity:"secondary"}}}},style:De,provide:function(){return{$pcFileUpload:this,$parentInstance:this}}},X={name:"FileContent",hostName:"FileUpload",extends:z,emits:["remove"],props:{files:{type:Array,default:function(){return[]}},badgeSeverity:{type:String,default:"warn"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize:function(t){var n,s=1024,a=3,o=((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(o[0]);var c=Math.floor(Math.log(t)/Math.log(s)),r=parseFloat((t/Math.pow(s,c)).toFixed(a));return"".concat(r," ").concat(o[c])}},components:{Button:O,Badge:se,TimesIcon:A}},Me=["alt","src","width"];function Te(e,t,n,s,a,o){var c=w("Badge"),r=w("TimesIcon"),f=w("Button");return i(!0),p(M,null,E(n.files,function(d,u){return i(),p("div",l({key:d.name+d.type+d.size,class:e.cx("file"),ref_for:!0},e.ptm("file")),[m("img",l({role:"presentation",class:e.cx("fileThumbnail"),alt:d.name,src:d.objectURL,width:n.previewWidth,ref_for:!0},e.ptm("fileThumbnail")),null,16,Me),m("div",l({class:e.cx("fileInfo"),ref_for:!0},e.ptm("fileInfo")),[m("div",l({class:e.cx("fileName"),ref_for:!0},e.ptm("fileName")),F(d.name),17),m("span",l({class:e.cx("fileSize"),ref_for:!0},e.ptm("fileSize")),F(o.formatSize(d.size)),17)],16),v(c,{value:n.badgeValue,class:C(e.cx("pcFileBadge")),severity:n.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcFileBadge")},null,8,["value","class","severity","unstyled","pt"]),m("div",l({class:e.cx("fileActions"),ref_for:!0},e.ptm("fileActions")),[v(f,{onClick:function(S){return e.$emit("remove",u)},text:"",rounded:"",severity:"danger",class:C(e.cx("pcFileRemoveButton")),unstyled:e.unstyled,pt:e.ptm("pcFileRemoveButton")},{icon:y(function(k){return[n.templates.fileremoveicon?(i(),g(B(n.templates.fileremoveicon),{key:0,class:C(k.class),file:d,index:u},null,8,["class","file","index"])):(i(),g(r,l({key:1,class:k.class,"aria-hidden":"true",ref_for:!0},e.ptm("pcFileRemoveButton").icon),null,16,["class"]))]}),_:2},1032,["onClick","class","unstyled","pt"])],16)],16)}),128)}X.render=Te;function U(e){return Oe(e)||Ae(e)||Q(e)||Pe()}function Pe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ae(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Oe(e){if(Array.isArray(e))return T(e)}function L(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Q(e))||t){n&&(e=n);var s=0,a=function(){};return{s:a,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(d){throw d},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,c=!0,r=!1;return{s:function(){n=n.call(e)},n:function(){var d=n.next();return c=d.done,d},e:function(d){r=!0,o=d},f:function(){try{c||n.return==null||n.return()}finally{if(r)throw o}}}}function Q(e,t){if(e){if(typeof e=="string")return T(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}function T(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=Array(t);n<t;n++)s[n]=e[n];return s}var x={name:"FileUpload",extends:Ee,inheritAttrs:!1,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],duplicateIEEvent:!1,data:function(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{upload:function(){this.hasFiles&&this.uploader()},onBasicUploaderClick:function(t){t.button===0&&!this.hasFiles&&this.$refs.fileInput.click()},onFileSelect:function(t){if(t.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.messages=[],this.files=this.files||[];var n=t.dataTransfer?t.dataTransfer.files:t.target.files,s=L(n),a;try{for(s.s();!(a=s.n()).done;){var o=a.value;this.isFileSelected(o)||this.validate(o)&&(this.isImage(o)&&(o.objectURL=window.URL.createObjectURL(o)),this.files.push(o))}}catch(c){s.e(c)}finally{s.f()}this.$emit("select",{originalEvent:t,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.uploader(),t.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose:function(){this.$refs.fileInput.click()},uploader:function(){var t=this;if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{var n=new XMLHttpRequest,s=new FormData;this.$emit("before-upload",{xhr:n,formData:s});var a=L(this.files),o;try{for(a.s();!(o=a.n()).done;){var c=o.value;s.append(this.name,c,c.name)}}catch(r){a.e(r)}finally{a.f()}n.upload.addEventListener("progress",function(r){r.lengthComputable&&(t.progress=Math.round(r.loaded*100/r.total)),t.$emit("progress",{originalEvent:r,progress:t.progress})}),n.onreadystatechange=function(){if(n.readyState===4){var r;t.progress=0,n.status>=200&&n.status<300?(t.fileLimit&&(t.uploadedFileCount+=t.files.length),t.$emit("upload",{xhr:n,files:t.files})):t.$emit("error",{xhr:n,files:t.files}),(r=t.uploadedFiles).push.apply(r,U(t.files)),t.clear()}},n.open("POST",this.url,!0),this.$emit("before-send",{xhr:n,formData:s}),n.withCredentials=this.withCredentials,n.send(s)}},clear:function(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1},isFileSelected:function(t){if(this.files&&this.files.length){var n=L(this.files),s;try{for(n.s();!(s=n.n()).done;){var a=s.value;if(a.name+a.type+a.size===t.name+t.type+t.size)return!0}}catch(o){n.e(o)}finally{n.f()}}return!1},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},validate:function(t){return this.accept&&!this.isFileTypeValid(t)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",t.name).replace("{1}",this.accept)),!1):this.maxFileSize&&t.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",t.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid:function(t){var n=this.accept.split(",").map(function(r){return r.trim()}),s=L(n),a;try{for(s.s();!(a=s.n()).done;){var o=a.value,c=this.isWildcard(o)?this.getTypeClass(t.type)===this.getTypeClass(o):t.type==o||this.getFileExtension(t).toLowerCase()===o.toLowerCase();if(c)return!0}}catch(r){s.e(r)}finally{s.f()}return!1},getTypeClass:function(t){return t.substring(0,t.indexOf("/"))},isWildcard:function(t){return t.indexOf("*")!==-1},getFileExtension:function(t){return"."+t.name.split(".").pop()},isImage:function(t){return/^image\//.test(t.type)},onDragEnter:function(t){this.disabled||(t.stopPropagation(),t.preventDefault())},onDragOver:function(t){this.disabled||(!this.isUnstyled&&oe(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!0),t.stopPropagation(),t.preventDefault())},onDragLeave:function(){this.disabled||(!this.isUnstyled&&W(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1))},onDrop:function(t){if(!this.disabled){!this.isUnstyled&&W(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1),t.stopPropagation(),t.preventDefault();var n=t.dataTransfer?t.dataTransfer.files:t.target.files,s=this.multiple||n&&n.length===1;s&&this.onFileSelect(t)}},remove:function(t){this.clearInputElement();var n=this.files.splice(t,1)[0];this.files=U(this.files),this.$emit("remove",{file:n,files:this.files})},removeUploadedFile:function(t){var n=this.uploadedFiles.splice(t,1)[0];this.uploadedFiles=U(this.uploadedFiles),this.$emit("remove-uploaded-file",{file:n,files:this.uploadedFiles})},clearInputElement:function(){this.$refs.fileInput.value=""},clearIEInput:function(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize:function(t){var n,s=1024,a=3,o=((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(o[0]);var c=Math.floor(Math.log(t)/Math.log(s)),r=parseFloat((t/Math.pow(s,c)).toFixed(a));return"".concat(r," ").concat(o[c])},isFileLimitExceeded:function(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit:function(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose:function(){this.messages=null}},computed:{isAdvanced:function(){return this.mode==="advanced"},isBasic:function(){return this.mode==="basic"},chooseButtonClass:function(){return[this.cx("pcChooseButton"),this.class]},basicFileChosenLabel:function(){var t;if(this.auto)return this.chooseButtonLabel;if(this.hasFiles){var n;return this.files&&this.files.length===1?this.files[0].name:(n=this.$primevue.config.locale)===null||n===void 0||(n=n.fileChosenMessage)===null||n===void 0?void 0:n.replace("{0}",this.files.length)}return((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.noFileChosenMessage)||""},hasFiles:function(){return this.files&&this.files.length>0},hasUploadedFiles:function(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled:function(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled:function(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled:function(){return this.disabled||!this.hasFiles},chooseButtonLabel:function(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel:function(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel:function(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel:function(){return this.$primevue.config.locale.completed},pendingLabel:function(){return this.$primevue.config.locale.pending}},components:{Button:O,ProgressBar:J,Message:Y,FileContent:X,PlusIcon:ce,UploadIcon:G,TimesIcon:A},directives:{ripple:q}},je=["multiple","accept","disabled"],Ve=["files"],$e=["accept","disabled","multiple"];function Ne(e,t,n,s,a,o){var c=w("Button"),r=w("ProgressBar"),f=w("Message"),d=w("FileContent");return o.isAdvanced?(i(),p("div",l({key:0,class:e.cx("root")},e.ptmi("root")),[m("input",l({ref:"fileInput",type:"file",onChange:t[0]||(t[0]=function(){return o.onFileSelect&&o.onFileSelect.apply(o,arguments)}),multiple:e.multiple,accept:e.accept,disabled:o.chooseDisabled},e.ptm("input")),null,16,je),m("div",l({class:e.cx("header")},e.ptm("header")),[h(e.$slots,"header",{files:a.files,uploadedFiles:a.uploadedFiles,chooseCallback:o.choose,uploadCallback:o.uploader,clearCallback:o.clear},function(){return[v(c,l({label:o.chooseButtonLabel,class:o.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onClick:o.choose,onKeydown:K(o.choose,["enter"]),onFocus:o.onFocus,onBlur:o.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:y(function(u){return[h(e.$slots,"chooseicon",{},function(){return[(i(),g(B(e.chooseIcon?"span":"PlusIcon"),l({class:[u.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onClick","onKeydown","onFocus","onBlur","pt"]),e.showUploadButton?(i(),g(c,l({key:0,class:e.cx("pcUploadButton"),label:o.uploadButtonLabel,onClick:o.uploader,disabled:o.uploadDisabled,unstyled:e.unstyled},e.uploadButtonProps,{pt:e.ptm("pcUploadButton")}),{icon:y(function(u){return[h(e.$slots,"uploadicon",{},function(){return[(i(),g(B(e.uploadIcon?"span":"UploadIcon"),l({class:[u.class,e.uploadIcon],"aria-hidden":"true"},e.ptm("pcUploadButton").icon,{"data-pc-section":"uploadbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):b("",!0),e.showCancelButton?(i(),g(c,l({key:1,class:e.cx("pcCancelButton"),label:o.cancelButtonLabel,onClick:o.clear,disabled:o.cancelDisabled,unstyled:e.unstyled},e.cancelButtonProps,{pt:e.ptm("pcCancelButton")}),{icon:y(function(u){return[h(e.$slots,"cancelicon",{},function(){return[(i(),g(B(e.cancelIcon?"span":"TimesIcon"),l({class:[u.class,e.cancelIcon],"aria-hidden":"true"},e.ptm("pcCancelButton").icon,{"data-pc-section":"cancelbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):b("",!0)]})],16),m("div",l({ref:"content",class:e.cx("content"),onDragenter:t[1]||(t[1]=function(){return o.onDragEnter&&o.onDragEnter.apply(o,arguments)}),onDragover:t[2]||(t[2]=function(){return o.onDragOver&&o.onDragOver.apply(o,arguments)}),onDragleave:t[3]||(t[3]=function(){return o.onDragLeave&&o.onDragLeave.apply(o,arguments)}),onDrop:t[4]||(t[4]=function(){return o.onDrop&&o.onDrop.apply(o,arguments)})},e.ptm("content"),{"data-p-highlight":!1}),[h(e.$slots,"content",{files:a.files,uploadedFiles:a.uploadedFiles,removeUploadedFileCallback:o.removeUploadedFile,removeFileCallback:o.remove,progress:a.progress,messages:a.messages},function(){return[o.hasFiles?(i(),g(r,{key:0,value:a.progress,showValue:!1,unstyled:e.unstyled,pt:e.ptm("pcProgressbar")},null,8,["value","unstyled","pt"])):b("",!0),(i(!0),p(M,null,E(a.messages,function(u){return i(),g(f,{key:u,severity:"error",onClose:o.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:y(function(){return[D(F(u),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),o.hasFiles?(i(),p("div",{key:1,class:C(e.cx("fileList"))},[v(d,{files:a.files,onRemove:o.remove,badgeValue:o.pendingLabel,previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):b("",!0),o.hasUploadedFiles?(i(),p("div",{key:2,class:C(e.cx("fileList"))},[v(d,{files:a.uploadedFiles,onRemove:o.removeUploadedFile,badgeValue:o.completedLabel,badgeSeverity:"success",previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):b("",!0)]}),e.$slots.empty&&!o.hasFiles&&!o.hasUploadedFiles?(i(),p("div",ae(l({key:0},e.ptm("empty"))),[h(e.$slots,"empty")],16)):b("",!0)],16)],16)):o.isBasic?(i(),p("div",l({key:1,class:e.cx("root")},e.ptmi("root")),[(i(!0),p(M,null,E(a.messages,function(u){return i(),g(f,{key:u,severity:"error",onClose:o.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessages")},{default:y(function(){return[D(F(u),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),v(c,l({label:o.chooseButtonLabel,class:o.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onMouseup:o.onBasicUploaderClick,onKeydown:K(o.choose,["enter"]),onFocus:o.onFocus,onBlur:o.onBlur},e.ptm("pcButton")),{icon:y(function(u){return[!o.hasFiles||e.auto?h(e.$slots,"uploadicon",{key:0},function(){return[(i(),g(B(e.uploadIcon?"span":"UploadIcon"),l({class:[u.class,e.uploadIcon],"aria-hidden":"true"},e.ptm("pcButton").icon),null,16,["class"]))]}):h(e.$slots,"chooseicon",{key:1},function(){return[(i(),g(B(e.chooseIcon?"span":"PlusIcon"),l({class:[u.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onMouseup","onKeydown","onFocus","onBlur"]),e.auto?b("",!0):h(e.$slots,"filelabel",{key:0,class:C(e.cx("filelabel"))},function(){return[m("span",{class:C(e.cx("filelabel")),files:a.files},F(o.basicFileChosenLabel),11,Ve)]}),o.hasFiles?b("",!0):(i(),p("input",l({key:1,ref:"fileInput",type:"file",accept:e.accept,disabled:e.disabled,multiple:e.multiple,onChange:t[5]||(t[5]=function(){return o.onFileSelect&&o.onFileSelect.apply(o,arguments)}),onFocus:t[6]||(t[6]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:t[7]||(t[7]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},e.ptm("input")),null,16,$e))],16)):b("",!0)}x.render=Ne;const Re={class:"p-6"},We={class:"card flex gap-6 items-center justify-center mb-6"},Ke={class:"card flex justify-center mb-6"},He={class:"card MB-6"},Ze=m("span",null,"可拖曳檔案到此處",-1),qe=m("span",null,"可拖曳檔案到此處",-1),Je={__name:"UploadView",setup(e){const t=le(),n=ie(),s=()=>{n.value.upload()},a=()=>{t.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3})},o=r=>{console.log(r),t.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3})},c=r=>{console.log(r),new FormData().append("file",r.files[0])};return(r,f)=>{const d=re,u=x,k=O;return i(),p("main",Re,[m("div",We,[v(d),v(u,{ref_key:"fileupload",ref:n,mode:"basic",name:"demo[]",url:"/api/upload",accept:"image/*",maxFileSize:1e6,onUpload:a},null,512),v(k,{label:"上傳",onClick:s,severity:"secondary"})]),m("div",Ke,[v(u,{mode:"basic",name:"demo[]",url:"/api/upload",accept:"image/*",maxFileSize:1e6,onUpload:a,auto:!0,chooseLabel:"選擇檔案"})]),m("div",He,[v(u,{name:"demo[]",url:"/api/upload",onUpload:f[0]||(f[0]=S=>o(S)),multiple:!0,accept:"image/*",maxFileSize:1e6},{empty:y(()=>[Ze]),_:1})]),m("div",null,[v(u,{onUploader:f[1]||(f[1]=S=>c(S)),customUpload:!0,accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"},{empty:y(()=>[qe]),_:1})])])}}};export{Je as default};
