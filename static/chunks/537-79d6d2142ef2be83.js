"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[537],{7537:function(e,t,r){r.d(t,{ZP:function(){return ep}});var i=r(959),n=r(7598),o=r(6203),a=r(4490),l=r(2840),s=r(2586),c=r(9734);let d={default:{$$navbarItemActiveColor:"$colors$link",$$navbarItemHighlightBackgroundColor:"$colors$primaryLight",$$navbarItemHighlightTextColor:"$colors$primaryLightContrast",$$navbarItemHighlightSolidBackgroundColor:"$colors$primary",$$navbarItemHighlightSolidTextColor:"$colors$primarySolidContrast"},neutral:{$$navbarItemActiveColor:"$colors$neutral",$$navbarItemHighlightBackgroundColor:"$colors$neutralLight",$$navbarItemHighlightTextColor:"$colors$text",$$navbarItemHighlightSolidBackgroundColor:"$colors$neutral",$$navbarItemHighlightSolidTextColor:"$colors$neutralSolidContrast"},primary:{$$navbarItemActiveColor:"$colors$primary",$$navbarItemHighlightBackgroundColor:"$colors$primaryLight",$$navbarItemHighlightTextColor:"$colors$primaryLightContrast",$$navbarItemHighlightSolidBackgroundColor:"$colors$primary",$$navbarItemHighlightSolidTextColor:"$colors$primarySolidContrast"},secondary:{$$navbarItemActiveColor:"$colors$secondary",$$navbarItemHighlightBackgroundColor:"$colors$secondaryLight",$$navbarItemHighlightTextColor:"$colors$secondaryLightContrast",$$navbarItemHighlightSolidBackgroundColor:"$colors$secondary",$$navbarItemHighlightSolidTextColor:"$colors$secondarySolidContrast"},success:{$$navbarItemActiveColor:"$colors$success",$$navbarItemHighlightBackgroundColor:"$colors$successLight",$$navbarItemHighlightTextColor:"$colors$successLightContrast",$$navbarItemHighlightSolidBackgroundColor:"$colors$success",$$navbarItemHighlightSolidTextColor:"$colors$successSolidContrast"},warning:{$$navbarItemActiveColor:"$colors$warning",$$navbarItemHighlightBackgroundColor:"$colors$warningLight",$$navbarItemHighlightTextColor:"$colors$warningLightContrast",$$navbarItemHighlightSolidBackgroundColor:"$colors$warning",$$navbarItemHighlightSolidTextColor:"$colors$warningSolidContrast"},error:{$$navbarItemActiveColor:"$colors$error",$$navbarItemHighlightBackgroundColor:"$colors$errorLight",$$navbarItemHighlightTextColor:"$colors$errorLightContrast",$$navbarItemHighlightSolidBackgroundColor:"$colors$error",$$navbarItemHighlightSolidTextColor:"$colors$errorSolidContrast"}},u=(0,s.zo)("li",{mb:0,display:"flex",alignItems:"center",listStyleType:"none",lineHeight:"inherit"}),h=(0,s.zo)("ul",{m:0,listStyle:"none",lineHeight:"$xs",li:{mb:0}}),$=(0,s.zo)(u,{opacity:0,paddingBottom:"$6",fontSize:"$lg",lineHeight:"$lg",fontWeight:"$normal",transformOrigin:"top",variants:{activeColor:d,isActive:{true:{color:"$$navbarItemActiveColor",fontWeight:"$semibold"}},disableAnimation:{true:{transition:"none"}}},defaultVariants:{activeColor:"default"}}),g=(0,s.zo)(h,{py:"$8",px:"$$navbarPadding",overflowY:"scroll",maxHeight:"100%"}),v=(0,s.zo)("div",{$$navbarListColor:"$colors$text",$$navbarListBackgroundColor:"$colors$background",$$navbarListBlurBackgroundColor:"$colors$backgroundAlpha",$$navbarListBlur:"16px",position:"absolute",top:0,left:0,right:0,background:"$$navbarListBackgroundColor",width:"100%",height:"0px",zIndex:"$4",boxSizing:"border-box",overflow:"hidden",variants:{isOpen:{true:{top:"$$navbarHeight",pb:"$$navbarHeight",height:"100vh"}},disableBlur:{false:{"@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))":{bg:"$$navbarListBlurBackgroundColor",backdropFilter:"saturate(180%) blur($$navbarListBlur)","@media screen and (-webkit-min-device-pixel-ratio:0)":{[`& ${g}`]:{bg:"$$navbarListBlurBackgroundColor",backdropFilter:"saturate(180%) blur($$navbarListBlur)"}}}}},disableAnimation:{true:{[`& ${$}`]:{transition:"none"}}}},defaultVariants:{disableBlur:"false"}},c.Zj),b=(0,s.zo)("div",{dflex:"center",flexDirection:"column",pointerEvents:"none",size:"22px","& .line":{height:"1px",width:"100%",backgroundColor:"$$navbarTextColor",transition:"transform 0.3s ease","&.top":{transform:"translateY(-4px) rotate(0deg)"},"&.bottom":{transform:"translateY(4px) rotate(0deg)"}},variants:{isExpanded:{true:{"& .line":{"&.top":{transform:"translateY(1px) rotate(45deg)"},"&.bottom":{transform:"translateY(0px) rotate(-45deg)"}}}}}}),m=(0,s.zo)("button",{appearance:"none",background:"transparent",border:"none",cursor:"pointer",p:"$2",transition:"box-shadow 0.25s ease 0s, opacity 0.25s ease 0s",variants:{isPressed:{true:{opacity:.7}}}},c.Zj,c.BM),p=(0,s.zo)("span",{display:"flex",flexWrap:"nowrap",flexDirection:"row",justifyContent:"flex-start",bg:"transparent",alignItems:"center",textDecoration:"none",fontSize:"$base",whiteSpace:"nowrap",boxSizing:"border-box"},c.Zj),x=(0,s.zo)(u,{$$navbarItemFontSize:"inherit",$$navbarItemFontWeight:"$fontWeights$normal",fontSize:"$$navbarItemFontSize",fontWeight:"$$navbarItemFontWeight",position:"relative","> *":{zIndex:"$2",fontSize:"inherit !important",fontWeight:"inherit !important"},":first-child":{boxSizing:"content-box"},"&:before":{opacity:0,zIndex:"$1",content:'""',display:"block",position:"absolute",top:0,left:0,right:0,bottom:0,borderRadius:"$sm"},"&:after":{opacity:0,zIndex:"$1",content:'""',display:"block",position:"absolute",left:"0",right:"0",bottom:"0",height:"$$navbarItemUnderlineHeight",borderRadius:"0px",background:"$$navbarItemActiveColor"},variants:{activeColor:d,isActive:{true:{color:"$$navbarItemActiveColor",$$navbarItemFontWeight:"$fontWeights$semibold"}},variant:{default:{},underline:{color:"inherit",height:"100%"},"underline-rounded":{color:"inherit",height:"100%"},highlight:{},"highlight-solid":{},"highlight-rounded":{},"highlight-solid-rounded":{}},underlineHeight:{light:{$$navbarItemUnderlineHeight:"2px"},normal:{$$navbarItemUnderlineHeight:"4px"},bold:{$$navbarItemUnderlineHeight:"6px"},extrabold:{$$navbarItemUnderlineHeight:"8px"},black:{$$navbarItemUnderlineHeight:"10px"}},isDisabled:{true:{opacity:.5,cursor:"not-allowed"}}},compoundVariants:[{isActive:!0,variant:"underline",css:{color:"inherit","&:after":{opacity:1}}},{isActive:!0,variant:"underline-rounded",css:{color:"inherit","&:after":{opacity:1,borderRadius:"calc($$navbarItemUnderlineHeight / 2)"}}},{isActive:!0,variant:"highlight",css:{color:"$$navbarItemHighlightTextColor","*:first-child":{color:"inherit"},"&:before":{opacity:1,background:"$$navbarItemHighlightBackgroundColor"}}},{isActive:!0,variant:"highlight-solid",css:{color:"$$navbarItemHighlightSolidTextColor","*:first-child":{color:"inherit"},"&:before":{opacity:1,background:"$$navbarItemHighlightSolidBackgroundColor"}}},{isActive:!0,variant:"highlight-rounded",css:{color:"$$navbarItemHighlightTextColor","*:first-child":{color:"inherit"},"&:before":{opacity:1,background:"$$navbarItemHighlightBackgroundColor"}}},{isActive:!0,variant:"highlight-solid-rounded",css:{color:"$$navbarItemHighlightSolidTextColor","*:first-child":{color:"inherit"},"&:before":{opacity:1,background:"$$navbarItemHighlightSolidBackgroundColor"}}}],defaultVariants:{variant:"default",activeColor:"default",underlineHeight:"normal"}},c.Zj),f=(0,s.zo)(u,{position:"absolute",top:"calc(50% - $$navbarItemMaxHeight * 0.5)",height:"$$navbarItemMaxHeight",background:"$neutralLight",borderRadius:"$sm",transition:"width 0.2s ease 0s, transform 0.2s ease 0s, opacity 0.2s ease 0s",variants:{color:d,isHighlightVariant:{true:{background:"$$navbarItemHighlightBackgroundColor"}},isHighlightSolidVariant:{true:{background:"$$navbarItemHighlightSolidBackgroundColor"}},isRounded:{true:{borderRadius:"$pill"}}}}),C=(0,s.zo)(h,{$$navbarContentItemGap:"$space$10",$$navbarContentItemHorizontalPadding:"$space$10",d:"flex",height:"100%",flexWrap:"nowrap",alignItems:"center",gap:"$$navbarContentItemGap",color:"inherit",variants:{enableCursorHighlight:{true:{zIndex:"$2",position:"relative"}}}},c.Zj),k=(0,s.zo)("div",{width:"100%",height:"$$navbarHeight",minHeight:"$$navbarHeight",display:"flex",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"center",position:"relative",boxSizing:"border-box",color:"inherit",px:"$$navbarPadding",bg:"$$navbarBackgroundColor",maxW:"$$navbarContainerMaxWidth",zIndex:"$5","@xsMax":{$$navbarPadding:"$space$6",$$navbarFloatingMargin:"$space$6"}}),y=(0,s.zo)("nav",{width:"100%",dflex:"center",position:"relative",height:"auto",color:"$$navbarTextColor",zIndex:"$2",variants:{variant:{static:{position:"static"},sticky:{top:0,right:0,left:0,position:"sticky"},floating:{top:0,right:0,left:0,position:"sticky","@safari":{top:"-5px"},[`& ${k}`]:{mt:"calc($$navbarFloatingMargin * 0.5)",mx:"$$navbarFloatingMargin",borderRadius:"$$navbarBorderRadius"},[`& ${g}`]:{px:"calc($$navbarFloatingMargin + $space$4)"}}},maxWidth:{xs:{$$navbarContainerMaxWidth:"$breakpoints$xs"},sm:{$$navbarContainerMaxWidth:"$breakpoints$sm"},md:{$$navbarContainerMaxWidth:"$breakpoints$md"},lg:{$$navbarContainerMaxWidth:"$breakpoints$lg"},xl:{$$navbarContainerMaxWidth:"$breakpoints$xl"},fluid:{$$navbarContainerMaxWidth:"100%"}},isBordered:{true:{[`& ${k}`]:{borderBottom:"$$navbarBorderWeight solid $$navbarBorderColor"}}},isCompact:{true:{$$navbarHeight:"$$navbarCompactHeight",$$navbarItemMaxHeight:"$$navbarCompactItemMaxHeight",$$navbarBorderRadius:"$radii$md"}},disableShadow:{false:{boxShadow:"$$navbarShadow"}},disableBlur:{false:{"@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))":{[`& ${k}`]:{bg:"$$navbarBlurBackgroundColor",backdropFilter:"saturate(180%) blur($$navbarBlur)"}}}}},compoundVariants:[{isBordered:!0,variant:"floating",css:{[`& ${k}`]:{border:"$$navbarBorderWeight solid $$navbarBorderColor"}}},{variant:"floating",disableShadow:!1,css:{boxShadow:"none",[`& ${k}`]:{boxShadow:"$$navbarShadow"}}}],defaultVariants:{variant:"static",maxWidth:"lg",isBordered:!1,disableShadow:!1,disableBlur:!1}});var I=r(1527);let H=(0,n.G)((e,t)=>{let r=(0,o.gy)(t),{children:i,className:n,...l}=e;return(0,I.jsx)(p,{ref:r,className:(0,a.Z)("nextui-navbar-brand",n),...l,children:i})});l.Ts&&(H.displayName="NextUI.NavbarBrand"),H.toString=()=>".nextui-navbar-brand";var S=r(7094);let[w,B]=(0,S.k)({strict:!1,name:"NavbarContentContext"});var N=r(551);let M=(0,n.G)((e,t)=>{let{children:r,...n}=e,s=function(e={}){let{gap:t="$10",variant:r="default",activeColor:n="default",underlineHeight:o="normal",enableCursorHighlight:a=!1,isCursorHighlightRounded:l=!1,css:s,style:c,className:d,...u}=e,[h,$]=(0,i.useState)(null),[g,v]=(0,i.useState)(null),[b,m]=(0,i.useState)(null),[p,x]=(0,i.useState)(null),[f,C]=(0,i.useState)(!0),k=(0,i.useRef)(null),y=(0,i.useRef)(null),I=null==r||null==r.toString?void 0:r.toString(),H=null==I.includes?void 0:I.includes("highlight"),S=null==I.includes?void 0:I.includes("highlight-solid"),w=(0,i.useMemo)(()=>l||(null==I.includes?void 0:I.includes("rounded")),[l,I]),B=(0,i.useMemo)(()=>H&&"$10"===t?"0px":t,[H,t]),M=(0,i.useMemo)(()=>f?"0ms":"200ms",[f]),T=(0,i.useMemo)(()=>b||p?1:0,[p,b]),z=(0,i.useMemo)(()=>h?H?`${h.width}px`:`calc(${h.width}px + var(--nextui--navbarContentItemHorizontalPadding))`:"0px",[I,h]),R=(0,i.useMemo)(()=>h&&g&&`translate(${h.left-g.left}px)`,[h,g]),L=(0,i.useMemo)(()=>H?"0px":"calc(var(--nextui--navbarContentItemHorizontalPadding) * 0.5 * -1)",[H]),j=(0,i.useMemo)(()=>(0,N.dG)({"--nextui--transitionDuration":M,"--nextui--opacity":T,"--nextui--width":z,"--nextui--transform":R,"--nextui--left":L},c||{}),[M,L,T,z,R,c]),P=(0,i.useMemo)(()=>h&&g&&a?{transitionDuration:"var(--nextui--transitionDuration)",opacity:"var(--nextui--opacity)",width:"var(--nextui--width)",transform:"var(--nextui--transform)",left:"var(--nextui--left)"}:{},[h,g,a]);return{css:s,gap:B,variant:r,activeColor:n,activeItem:p,updateActiveItem:e=>{var t;x(e),m(e),$(null==e||null==e.getBoundingClientRect?void 0:e.getBoundingClientRect()),v(null==(t=y.current)||null==t.getBoundingClientRect?void 0:t.getBoundingClientRect())},highlightedItem:b,underlineHeight:o,cursorHighlightRef:k,isRounded:w,isHighlightVariant:H,isHighlightSolidVariant:S,isCursorHighlightRounded:l,enableCursorHighlight:a,cursorHighlightCss:P,repositionHighlight:(e,t)=>{var r,i;(null==e?void 0:e.target)instanceof Element&&($(null==(r=e.target)||null==r.getBoundingClientRect?void 0:r.getBoundingClientRect()),v(null==(i=y.current)||null==i.getBoundingClientRect?void 0:i.getBoundingClientRect()),C(!b),m(t))},resetHighlight:()=>{p?(m(p),$(null==p||null==p.getBoundingClientRect?void 0:p.getBoundingClientRect())):m(null)},wrapperRef:y,className:d,style:j,otherProps:u}}(n),c=(0,o.gy)(t);return(0,I.jsx)(w,{value:s,children:(0,I.jsxs)(C,{ref:function(...e){return t=>{e.forEach(e=>(function(e,t){if(null!=e){if((0,l.mf)(e))e(t);else try{e.current=t}catch(r){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}})(e,t))}}(s.wrapperRef,c),className:(0,a.Z)("nextui-navbar-content",s.className),css:{gap:s.gap,...s.css},enableCursorHighlight:s.enableCursorHighlight,style:s.style,onMouseLeave:s.resetHighlight,...s.otherProps,children:[s.enableCursorHighlight&&(0,I.jsx)(f,{ref:s.cursorHighlightRef,className:"nextui-navbar-cursor-highlight",color:s.activeColor,css:s.cursorHighlightCss,isHighlightSolidVariant:s.isHighlightSolidVariant,isHighlightVariant:s.isHighlightVariant,isRounded:s.isRounded}),r]})})});l.Ts&&(M.displayName="NextUI.NavbarContent"),M.toString=()=>".nextui-navbar-content";var T=r(7116),z=r(3287),R=r(5041);let L=(0,s.zo)("p",{variants:{weight:{hairline:{fontWeight:"$hairline"},thin:{fontWeight:"$thin"},light:{fontWeight:"$light"},normal:{fontWeight:"$normal"},medium:{fontWeight:"$medium"},semibold:{fontWeight:"$semibold"},bold:{fontWeight:"$bold"},extrabold:{fontWeight:"$extrabold"},black:{fontWeight:"$black"}}}},c.Zj),j=i.forwardRef((e,t)=>{let{children:r,tag:n,color:a="default",transform:l,size:s,css:c,...d}=e,u=(0,o.gy)(t),h=(0,i.useMemo)(()=>(0,R.h1)(a)?"default"===a?"$text":`$${a}`:a,[a]);return(0,I.jsx)(L,{ref:u,as:n,css:{color:h,fontSize:s,tt:l,...c},...d,children:r})});l.Ts&&(j.displayName="NextUI.TextChild"),j.toString=()=>".nextui-text-child";var P=i.memo(j);let W=(e,t,r,i)=>{if(!e.length)return t;let n=e.slice(1,e.length);return(0,I.jsx)(P,{size:r,tag:e[0],transform:i,children:W(n,t,r)})},A=i.forwardRef((e,t)=>{let{h1:r=!1,h2:n=!1,h3:a=!1,h4:l=!1,h5:s=!1,h6:c=!1,b:d=!1,small:u=!1,i:h=!1,span:$=!1,del:g=!1,em:v=!1,blockquote:b=!1,transform:m="none",size:p,children:x,...f}=e,C=(0,o.gy)(t),k={h1:r,h2:n,h3:a,h4:l,h5:s,h6:c,blockquote:b},y={span:$,small:u,b:d,em:v,i:h,del:g},H=Object.keys(k).filter(e=>k[e]),S=Object.keys(y).filter(e=>y[e]),w=(0,i.useMemo)(()=>H[0]?H[0]:S[0]?S[0]:"p",[H,S]),B=S.filter(e=>e!==w),N=(0,i.useMemo)(()=>B.length?W(B,x,p,m):x,[B,x,p,m]);return(0,I.jsx)(P,{ref:C,size:p,tag:w,transform:m,...f,children:N})});l.Ts&&(A.displayName="NextUI.Text"),A.toString=()=>".nextui-text";var E=i.memo(A);let F=(0,n.G)((e,t)=>{var r;let{id:n,css:l,children:s,variant:c,activeColor:d,isActive:u,underlineHeight:h,onMouseEnter:$,onMouseLeave:g,isDisabled:v,className:b,...m}=e,p=B(),f=(0,o.gy)(t),C=c||(null==p?void 0:p.variant),k=null==C?void 0:C.toString(),y=null==k.includes?void 0:k.includes("highlight"),H=null==k.includes?void 0:k.includes("highlight-solid"),{hoverProps:S,isHovered:w}=(0,T.XI)({isDisabled:v}),M=(0,N.Me)(n);(0,i.useEffect)(()=>{f.current&&p&&null!=p&&p.enableCursorHighlight&&u&&y&&p.updateActiveItem(null==f?void 0:f.current)},[f,y,u]);let R=(0,i.useMemo)(()=>{var e;return!!p&&(null==(e=p.highlightedItem)?void 0:e.id)===M},[M,p]),L=(0,i.useMemo)(()=>{var e;return!(R||null==p||!p.enableCursorHighlight||!H||M!==(null==p||null==(e=p.activeItem)?void 0:e.id))},[p,M,R,H]),j=(0,i.useMemo)(()=>{let e=[],t=null==k.includes?void 0:k.includes("highlight-solid");return p||e.push({$$navbarContentItemGap:"$space$8"}),y&&(e.push({dflex:"center",height:"$$navbarItemMaxHeight"}),"string"==typeof s?e.push({px:"calc($$navbarContentItemHorizontalPadding * 0.5)"}):e.push({"*:first-child":{size:"100%",px:"calc($$navbarContentItemHorizontalPadding * 0.5)"}})),y&&null!=k.includes&&k.includes("rounded")&&!p.enableCursorHighlight&&e.push({"&:before":{borderRadius:"$pill"}}),p.enableCursorHighlight&&e.push({"&:before":{display:"none"}}),u&&!y&&e.push({$$navbarItemFontWeight:"$fontWeights$semibold"}),w&&p.enableCursorHighlight&&(y&&e.push({color:"$$navbarItemHighlightTextColor"}),t&&e.push({color:"$$navbarItemHighlightSolidTextColor"})),L&&e.push({color:"$$navbarItemActiveColor"}),{...(0,z.FB)(e),...l}},[s,l,p,k,L,u,w,y]),P="string"==typeof s?(0,I.jsx)(E,{children:s}):i.Children.only(s),W=i.cloneElement(P,{id:(null==(r=P.props)?void 0:r.id)||M,onMouseEnter:e=>{var t;if(null==p||!p.repositionHighlight)return void(null==$||$(e));(null==(t=e.target)?void 0:t.id)===M&&p.repositionHighlight(e,null==f?void 0:f.current),null==$||$(e)},onMouseLeave:e=>{null!=p&&p.resetHighlight&&p.enableCursorHighlight&&y&&p.resetHighlight(),null==g||g(e)}});return(0,I.jsx)(x,{ref:f,activeColor:d||(null==p?void 0:p.activeColor),className:(0,a.Z)("nextui-navbar-item",b),css:j,id:M,isActive:u,underlineHeight:h||(null==p?void 0:p.underlineHeight),variant:C,...(0,N.dG)(S,m),children:W})});l.Ts&&(F.displayName="NextUI.NavbarItem"),F.toString=()=>".nextui-navbar-item";var O=r(5231),V=r(3246);let D=(0,s.zo)("svg",{ml:"$1",as:"center",display:"flex",color:"currentColor"}),U=(0,s.zo)("a",{$$linkColor:"$colors$link",display:"inline-flex",alignItems:"center",lineHeight:"inherit",textDecoration:"none",width:"$fit",backgroundColor:"transparent",backgroundImage:"inherit",backgroundClip:"inherit",WebkitTextFillColor:"inherit",color:"$$linkColor",outline:"none",maxW:"$max","&:hover":{opacity:.8},"@motion":{transition:"none"},variants:{color:{inherit:{$$linkColor:"inherit"},default:{$$linkColor:"$colors$link"},text:{$$linkColor:"$colors$text"},primary:{$$linkColor:"$colors$primary"},secondary:{$$linkColor:"$colors$secondary"},success:{$$linkColor:"$colors$success"},warning:{$$linkColor:"$colors$warning"},error:{$$linkColor:"$colors$error"}},underline:{true:{"&:hover, &:active, &:focus":{textDecoration:"underline"}}},block:{true:{padding:"$2 $4",borderRadius:"$base","&:hover":{backgroundColor:"$$linkBackgroundColor"}}},animated:{true:{transition:"opacity 0.25s ease 0s, box-shadow 0.25s ease 0s"}}},compoundVariants:[{block:!0,animated:!0,css:{transition:"opacity 0.25s ease 0s, box-shadow 0.25s ease 0s, background 0.25s ease 0s","@motion":{transition:"none"}}}],defaultVariants:{color:"default",animated:!0}},c.BM),G=()=>(0,I.jsxs)(D,{className:"nextui-link-icon",fill:"none",height:"1em",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",children:[(0,I.jsx)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),(0,I.jsx)("path",{d:"M15 3h6v6"}),(0,I.jsx)("path",{d:"M10 14L21 3"})]});G.toString=()=>".nextui-link-icon";var Z=i.memo(G);let Y=(0,n.G)((e,t)=>{let{children:r,isExternal:n=!1,as:l,css:s,color:c="default",autoFocus:d,className:u,...h}=e,$=(0,o.gy)(t),{linkProps:g}=function(e,t){let r,{elementType:i="a",onPress:n,onPressStart:o,onPressEnd:a,onClick:l,isDisabled:s,...c}=e;"a"!==i&&(r={role:"link",tabIndex:s?void 0:0});let{focusableProps:d}=(0,O.kc)(e,t),{pressProps:u,isPressed:h}=(0,T.r7)({onPress:n,onPressStart:o,onPressEnd:a,isDisabled:s,ref:t}),$=(0,N.zL)(c,{labelable:!0}),g=(0,N.dG)(d,u);return{isPressed:h,linkProps:(0,N.dG)($,{...g,...r,"aria-disabled":s||void 0,onClick:e=>{u.onClick(e),l&&(l(e),console.warn("onClick is deprecated, please use onPress"))}})}}({...h,elementType:l},$),{isFocusVisible:v,focusProps:b}=(0,V.Fx)({autoFocus:d}),m=(0,i.useMemo)(()=>{let e=`$colors$${c}Light`;switch(c){case"inherit":case"text":e="$colors$textLight";break;case"default":e="$colors$linkLight"}return{...s,$$linkBackgroundColor:e}},[s,c]);return(0,I.jsx)(U,{ref:$,as:l,className:(0,a.Z)("nextui-link",u),color:c,css:m,isFocusVisible:v,...(0,N.dG)(g,b,h),children:(0,I.jsxs)(I.Fragment,{children:[r,n&&(0,I.jsx)(Z,{})]})})});l.Ts&&(Y.displayName="NextUI.Link"),Y.toString=()=>".nextui-link";let _=(0,n.G)((e,t)=>{let r=(0,o.gy)(t),{css:n,children:l,isActive:s,color:c,activeColor:d,underlineHeight:u,itemCss:h,itemClassName:$,isDisabled:g,hideIn:v,showIn:b,variant:m,className:p,...x}=e,f=(0,i.useMemo)(()=>c||null!=n&&n.$$linkColor?{...n}:{color:"inherit",height:"100%",width:"fit-content",...n},[c,n]);return(0,I.jsx)(F,{activeColor:d,className:$,css:h,hideIn:v,isActive:s,isDisabled:g,showIn:b,underlineHeight:u,variant:m,children:(0,I.jsx)(Y,{ref:r,className:(0,a.Z)("nextui-navbar-link",p),color:c,css:f,...x,children:l})})});l.Ts&&(_.displayName="NextUI.NavbarLink"),_.toString=()=>".nextui-navbar-link";var K=r(2544),q=r(8957);let X={scrollLayer:!1},J=new Map,Q=e=>!!(e.touches&&e.touches.length>1)||(e.preventDefault(),!1);var ee=(e,t)=>{if("undefined"==typeof document)return[!1,e=>e];let r=e||(0,i.useRef)(document.body),[n,o]=(0,i.useState)(!1),a={...X,...t||{}},l=()=>!a.scrollLayer&&!("undefined"==typeof window||!window.navigator)&&/iP(ad|hone|od)/.test(window.navigator.platform);return(0,i.useEffect)(()=>{if(!r||!r.current)return;let e=r.current.style.overflow;if(n){if(J.has(r.current))return;return l()?document.addEventListener("touchmove",Q,{passive:!1}):r.current.style.overflow="hidden",void J.set(r.current,{last:e})}if(J.has(r.current)){if(l())document.removeEventListener("touchmove",Q);else{let e=J.get(r.current);r.current.style.overflow=e.last}J.delete(r.current)}},[n,r]),[n,o]};let[et,er]=(0,S.k)({strict:!0,name:"NavbarContext",errorMessage:"useNavbarContext: `context` is undefined. Seems you forgot to wrap all navbar components within `<Navbar />`"}),ei=e=>{let{isExpanded:t=!1,className:r,...i}=e;return(0,I.jsxs)(b,{"aria-hidden":!0,className:(0,a.Z)("nextui-navbar-toggle-icon",r),isExpanded:t,tabIndex:-1,...i,children:[(0,I.jsx)("span",{className:"line top"}),(0,I.jsx)("span",{className:"line bottom"})]})};l.Ts&&(ei.displayName="NextUI.NavbarToggleIcon"),ei.toString=()=>".nextui-navbar-toggle-icon";let en=(0,n.G)((e,t)=>{let{children:r,className:n,autoFocus:l,onChange:s,as:c,css:d,...u}=e,{parentRef:h,setIsCollapseOpen:$}=er(),[,g]=ee(h,{scrollLayer:!0}),v=(0,o.gy)(t),b=(0,q.l)({...e,onChange:e=>{$(e),null==s||s(e),g(e)}}),{buttonProps:p,isPressed:x}=(0,K.k)(e,b,v),{isFocusVisible:f,focusProps:C}=(0,V.Fx)({autoFocus:l}),k=(0,i.useMemo)(()=>r||(0,I.jsx)(ei,{isExpanded:b.isSelected}),[r,b.isSelected]);return(0,I.jsx)(m,{ref:v,as:c,className:(0,a.Z)("nextui-navbar-toggle",n),css:d,isFocusVisible:f,isPressed:x,...(0,N.dG)(p,C,u),children:k})});l.Ts&&(en.displayName="NextUI.NavbarToggle"),en.toString=()=>".nextui-navbar-toggle";let[eo,ea]=(0,S.k)({strict:!1,name:"NavbarCollapseContext"}),el=(e,t)=>{let r=[];return[i.Children.map(e,e=>i.isValidElement(e)&&e.type===t?(r.push(e),null):e),r.length>=0?r:void 0]},es=e=>e.reduce((e,t)=>e.concat(Array.isArray(t)?es(t):t),[]);var ec=function(e,{threshold:t=0,root:r=null,rootMargin:n="0%",freezeOnceVisible:o=!1}={}){let[a,l]=(0,i.useState)(),s=(null==a?void 0:a.isIntersecting)&&o,c=!(null==a||!a.isIntersecting),d=([e])=>{l(e)};return(0,i.useEffect)(()=>{if("undefined"==typeof window)return;let i=null==e?void 0:e.current;if(!window.IntersectionObserver||s||!i)return;let o=new IntersectionObserver(d,{threshold:t,root:r,rootMargin:n});return o.observe(i),()=>o.disconnect()},[e,t,r,n,s]),{entry:a,setEntry:l,isVisible:c,isFrozen:s}};let ed=(0,n.G)((e,t)=>{var r;let{children:n,className:l,transitionDelay:s,transitionTime:c,transitionMatrix:d,disableAnimation:u,style:h,css:g,...v}=e,b=er(),m=ea(),p=(0,o.gy)(t),{isVisible:x,setEntry:f}=ec(p,{root:null==b||null==(r=b.parentRef)?void 0:r.current,freezeOnceVisible:b.isCollapseOpen});(0,i.useEffect)(()=>{!b.isCollapseOpen&&x&&f(null)},[x,b.isCollapseOpen]);let C=(0,i.useMemo)(()=>{var e;return null!=m&&m.items?null==(e=m.items)?void 0:e.findIndex(e=>{var t;return(null==e||null==(t=e.props)?void 0:t.children)===n}):-1},[null==m?void 0:m.items]),k=(0,i.useMemo)(()=>{var e,t,r;return{transitionDelay:null!=(e=null!=s?s:null==m?void 0:m.transitionDelay)?e:0,transitionTime:null!=(t=null!=c?c:null==m?void 0:m.transitionTime)?t:0,transitionMatrix:null!=(r=null!=d?d:null==m?void 0:m.transitionMatrix)?r:{in:"matrix(1, 0, 0, 1, 0, 0)",out:"matrix(0.97, 0, 0, 1, 0, 20)"}}},[s,c,d,m.transitionMatrix,m.transitionDelay,m.transitionTime]),y=(0,i.useMemo)(()=>m.items&&C>-1?C/m.items.length*500+k.transitionDelay:.1,[C,k.transitionDelay,null==m?void 0:m.items]),H=(0,i.useMemo)(()=>{let e=x&&!m.hasScrolled?y:0;return{"--nextui--collapseItemOpacity":x?1:0,"--nextui--collapseItemTransform":x?k.transitionMatrix.in:k.transitionMatrix.out,"--netxui--collapseItemTransition":!u&&b.isCollapseOpen?`opacity ${k.transitionTime}ms cubic-bezier(0.5, 0, 0, 1) ${e}ms, transform ${k.transitionTime}ms cubic-bezier(0.5, 0, 0, 1) ${e}ms`:"none"}},[C,x,u,y,k.transitionMatrix,k.transitionTime,b.isCollapseOpen,m.hasScrolled]);return(0,I.jsx)($,{ref:p,className:(0,a.Z)("nextui-navbar-collapse-item",l),css:{opacity:"var(--nextui--collapseItemOpacity)",transition:"var(--netxui--collapseItemTransition)",transform:"var(--nextui--collapseItemTransform)",...g},disableAnimation:u,style:{...h,...H},...v,children:n})});l.Ts&&(ed.displayName="NextUI.NavbarCollapseItem"),ed.toString=()=>".nextui-navbar-collapse-item";let eu=(0,n.G)((e,t)=>{let r=function(e={}){var t;let{css:r,children:n,ref:a,transitionDelay:l=0,transitionTime:s=350,transitionMatrix:c={in:"matrix(1, 0, 0, 1, 0, 0)",out:"matrix(0.97, 0, 0, 1, 0, 20)"},className:d,...u}=e,[h,$]=(0,i.useState)(!1),g=er(),v=(0,o.gy)(a),[,b]=el(n,ed),[,m]=ee(null,{scrollLayer:!0});(0,i.useEffect)(()=>{var e,t;g.isCollapseOpen?m(!0):(v.current&&(null==(t=v.current)||null==t.scrollTo||t.scrollTo({top:0})),$(!1),m(!1));let r=()=>{var e;v.current&&(null==(e=v.current)?void 0:e.scrollTop)>0&&!h&&$(!0)};return null==(e=v.current)||e.addEventListener("scroll",r),()=>{var e;null==(e=v.current)||e.removeEventListener("scroll",r)}},[g.isCollapseOpen]);let p=(0,i.useMemo)(()=>{var e;let t=[];return g.parentRef&&g.parentRef.current&&t.push({maxHeight:null==(e=g.parentRef.current)?void 0:e.clientHeight}),{...(0,z.FB)(t),...r}},[null==(t=g.parentRef)?void 0:t.current,r]);return{css:r,domRef:v,children:n,items:b,collpaseCss:p,isOpen:g.isCollapseOpen,hasScrolled:h,transitionDelay:l,transitionTime:s,transitionMatrix:c,className:d,otherProps:u}}({ref:t,...e});return(0,I.jsx)(eo,{value:r,children:(0,I.jsx)(v,{className:(0,a.Z)("nextui-navbar-collapse",r.className),css:r.collpaseCss,isOpen:r.isOpen,...r.otherProps,children:(0,I.jsx)(g,{ref:r.domRef,className:"nextui-navbar-collapse-wrapper",children:r.children})})})});l.Ts&&(eu.displayName="NextUI.NavbarCollapse"),eu.toString=()=>".nextui-navbar-collapse";let eh="undefined"!=typeof window;function e$(e){return eh?e?{x:e.scrollLeft,y:e.scrollTop}:{x:window.scrollX,y:window.scrollY}:{x:0,y:0}}var eg=e=>{let{elementRef:t,wait:r=30,callback:n,enabled:o}=e,a=(0,i.useRef)(o?e$(null==t?void 0:t.current):{x:0,y:0}),l=null,s=()=>{let e=e$(null==t?void 0:t.current);"function"==typeof n&&n({prevPos:a.current,currPos:e}),a.current=e,l=null};return(0,i.useEffect)(()=>{if(!o)return;let e=()=>{r?null===l&&(l=setTimeout(s,r)):s()},i=(null==t?void 0:t.current)||window;return i.addEventListener("scroll",e),()=>i.removeEventListener("scroll",e)},[null==t?void 0:t.current,r,o]),a.current},ev=r(757);let eb=(0,n.G)((e,t)=>{let{children:r,...n}=e,l=(0,o.gy)(t),c=function(e={}){let{css:t,containerCss:r,parentRef:n,isBordered:o,variant:a="static",height:l="76px",borderWeight:c="light",shouldHideOnScroll:d=!1,disableScrollHandler:u=!1,onScrollPositionChange:h,disableBlur:$=!1,className:g,...v}=e,[b,m]=(0,i.useState)(!1),[p,x]=(0,i.useState)(!1),{theme:f}=(0,ev.Z)(),C=(0,i.useMemo)(()=>o?`$borderWeights$${c}`:"0px",[o,c]),k=(0,i.useMemo)(()=>$||p,[$,p]),y=(0,i.useMemo)(()=>"number"==typeof l?`${l}px`:l,[l]);(0,s.zY)({":root":{$$navbarHeight:y,$$navbarCompactHeight:"calc($$navbarHeight * 0.7)",$$navbarTextColor:"$colors$text",$$navbarBackgroundColor:"$colors$background",$$navbarBlurBackgroundColor:"$colors$backgroundAlpha",$$navbarItemMaxHeight:"calc($$navbarHeight * 0.5)",$$navbarCompactItemMaxHeight:"calc($$navbarHeight * 0.5)",$$navbarBorderColor:"$colors$border",$$navbarBorderRadius:"$radii$lg",$$navbarPadding:"$space$10",$$navbarFloatingMargin:"$space$10",$$navbarContainerMaxWidth:"$breakpoints$lg",$$navbarShadow:"$shadows$md",$$navbarBorderWeight:C,$$navbarBlur:"10px"}})(),eg({elementRef:n,enabled:d||!u,callback:({prevPos:e,currPos:t})=>{null==h||h(t.y),d&&m(r=>{let i=t.y>e.y;return i!==r?i:r})}});let I=(0,i.useMemo)(()=>{var e,r,i,n,o,l;let s=[];return"floating"===a&&s.push({bg:`linear-gradient(180deg, ${(0,R.jK)(null==f||null==(e=f.colors)||null==(r=e.background)?void 0:r.value,.95)} 44%, ${(0,R.jK)(null==f||null==(i=f.colors)||null==(n=i.background)?void 0:n.value,.46)} 73%, ${(0,R.jK)(null==f||null==(o=f.colors)||null==(l=o.background)?void 0:l.value,0)})`}),d&&s.push({position:"sticky",top:0,right:0,left:0,transform:b?"translateY(-100%)":"translateY(0)",transition:"transform 400ms ease"}),{...(0,z.FB)(s),...t}},[t,null==f?void 0:f.colors,a,d,b]);return{css:t,variant:a,sticky:b,isBordered:o,containerCss:r,navbarCss:I,parentRef:n,borderWeight:c,shouldHideOnScroll:d,disableBlur:k,isCollapseOpen:p,setIsCollapseOpen:x,className:g,otherProps:v}}(n),[d,u]=el(r,eu);return(0,I.jsx)(et,{value:c,children:(0,I.jsxs)(y,{ref:l,className:(0,a.Z)("nextui-navbar",c.className),css:c.navbarCss,disableBlur:c.disableBlur,isBordered:c.isBordered,variant:c.variant,...c.otherProps,children:[(0,I.jsx)(k,{className:"nextui-navbar-container",css:c.containerCss,children:d}),u]})})});l.Ts&&(eb.displayName="NextUI.Navbar"),eb.toString=()=>".nextui-navbar";var em=eb;em.Brand=H,em.Content=M,em.Item=F,em.Link=_,em.Toggle=en,em.Collapse=eu,em.CollapseItem=ed;var ep=em}}]);