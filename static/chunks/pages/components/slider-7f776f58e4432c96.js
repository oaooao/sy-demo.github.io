(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[850],{7258:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/slider",function(){return t(9217)}])},9217:function(e,n,t){"use strict";t.r(n),t.d(n,{SliderItem:function(){return c}});var r=t(1527),i=t(959),u=t(5149),l=t(4015);let s=e=>{let{children:n,initialOffsetX:t,className:s,contentWidth:c}=e,{innerWidth:a}=(0,i.useContext)(u.SizeContext),o=(0,i.useRef)(t),f=(0,i.useRef)(null),d=(0,i.useRef)(null),m=a<c;return(0,l.default)(m,(0,i.useCallback)(()=>{let{current:e}=f,{current:n}=d;e&&n&&(o.current+=.5,e.scrollLeft=o.current,e.scrollLeft>=n.clientWidth&&(o.current=0,e.scrollLeft=0))},[])),(0,r.jsxs)("div",{ref:f,className:"overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none  ".concat(s),children:[(0,r.jsx)("div",{ref:d,className:"inline-block",children:n}),(0,r.jsx)("div",{className:m?"inline-block":"hidden",children:n})]})},c=e=>{let{children:n,width:t}=e;return(0,r.jsx)("div",{className:"inline-flex justify-center items-center mx-4",style:{width:t},children:n})};n.default=s},4015:function(e,n,t){"use strict";t.r(n);var r=t(959);let i=(e,n)=>{let t=(0,r.useRef)(),i=(0,r.useCallback)(()=>{n(),t.current=requestAnimationFrame(i)},[n]);(0,r.useEffect)(()=>{if(e)return t.current=requestAnimationFrame(i),()=>{if(t.current)return cancelAnimationFrame(t.current)}},[e,i])};n.default=i},5149:function(e,n,t){"use strict";t.r(n),t.d(n,{SizeContext:function(){return u}});var r=t(1527),i=t(959);let u=i.createContext({innerWidth:0}),l=e=>{let{children:n}=e,[t,l]=(0,i.useState)(0),s=(0,i.useCallback)(()=>{l(window.innerWidth)},[]);return(0,i.useEffect)(()=>(s(),window.addEventListener("resize",s,{passive:!0}),()=>window.removeEventListener("resize",s)),[s]),(0,r.jsx)(u.Provider,{value:{innerWidth:t},children:n})};n.default=l}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7258)}),_N_E=e.O()}]);