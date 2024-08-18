import{j as n}from"./jsx-runtime-DBEcOq3S.js";import{useMDXComponents as l}from"./index-CA_HyBnq.js";import{ae as c,af as o}from"./index-1DlV7qbF.js";import{Documentation as s,SourceCode as r}from"./animation-Dz1gf4wd.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DXrmAvQI.js";import"../sb-preview/runtime.js";import"./index-BqTDQIm7.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./_defineProperty-DSxlPr5D.js";import"./_overArg-BZNRQ6_9.js";import"./_baseAssignValue-DD5bxUnJ.js";import"./_getPrototype-By7W0WFf.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";const d=`export default {
  animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
  },
  keyframes: {
  spin: {
    to: {
      transform: 'rotate(360deg)',
    },
  },
  ping: {
    '75%, 100%': {
      transform: 'scale(2)',
      opacity: '0',
    },
  },
  pulse: {
    '50%': {
      opacity: '.5',
    },
  },
  bounce: {
    '0%, 100%': {
      transform: 'translateY(-25%)',
      animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
    },
    '50%': {
      transform: 'none',
      animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
    },
  },
  },
  transitionDelay: {
    0: '0s',
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
  transitionDuration: {
    DEFAULT: '150ms',
    0: '0s',
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
  transitionProperty: {
    none: 'none',
    all: 'all',
    DEFAULT:
      'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
    colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform',
  },
  transitionTimingFunction: {
    DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
}`,e={animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",bounce:"bounce 1s infinite"},keyframes:{spin:{to:{transform:"rotate(360deg)"}},ping:{"75%, 100%":{transform:"scale(2)",opacity:"0"}},pulse:{"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},transitionDelay:{0:"0s",75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},transitionDuration:{DEFAULT:"150ms",0:"0s",75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},transitionProperty:{none:"none",all:"all",DEFAULT:"color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",colors:"color, background-color, border-color, text-decoration-color, fill, stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}};function a(t){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Tailwind/Theme/Animation"}),`
`,n.jsxs(i.h1,{id:"animation-controls-jump-to-source",children:["Animation Controls ",n.jsx("small",{className:"text-xs",children:n.jsx(i.a,{href:"#source-code",children:"Jump to source"})})]}),`
`,n.jsx(i.h2,{id:"animation",children:n.jsx(i.a,{href:"https://tailwindcss.com/docs/animation",rel:"nofollow",children:"Animation"})}),`
`,n.jsxs(i.p,{children:["Defines the animations with their names and keyframe properties. ",n.jsx("small",{children:n.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation",rel:"nofollow",children:"MDN Animation"})})]}),`
`,n.jsx(o,{language:"js",code:`animation: ${JSON.stringify(e.animation,null,2)}`}),`
`,n.jsx(i.h3,{id:"none",children:"None"}),`
`,n.jsx(i.p,{children:"No animation applied."}),`
`,n.jsx(o,{language:"js",code:`none: ${JSON.stringify(e.animation.none,null,2)}`}),`
`,n.jsx(i.h3,{id:"spin",children:n.jsx(i.a,{href:"https://tailwindcss.com/docs/animation#spin",rel:"nofollow",children:"Spin"})}),`
`,n.jsx(i.p,{children:"Adds a linear spin animation to elements like loading indicators."}),`
`,n.jsx(o,{language:"js",code:`spin: ${JSON.stringify(e.animation.spin,null,2)}`}),`
`,n.jsx(i.h3,{id:"ping",children:n.jsx(i.a,{href:"https://tailwindcss.com/docs/animation#ping",rel:"nofollow",children:"Ping"})}),`
`,n.jsx(i.p,{children:"Make an element scale and fade like a radar ping or ripple of water — useful for things like notification badges."}),`
`,n.jsx(o,{language:"js",code:`ping: ${JSON.stringify(e.animation.ping,null,2)}`}),`
`,n.jsx(i.h3,{id:"pulse",children:n.jsx(i.a,{href:"https://tailwindcss.com/docs/animation#pulse",rel:"nofollow",children:"Pulse"})}),`
`,n.jsx(i.p,{children:"Utility to make an element gently fade in and out — useful for things like skeleton loaders."}),`
`,n.jsx(o,{language:"js",code:`pulse: ${JSON.stringify(e.animation.pulse,null,2)}`}),`
`,n.jsx(i.h3,{id:"bounce",children:n.jsx(i.a,{href:"https://tailwindcss.com/docs/animation#bounce",rel:"nofollow",children:"Bounce"})}),`
`,n.jsx(i.p,{children:"Makes an element bounce up and down — useful for things like “scroll down” indicators."}),`
`,n.jsx(o,{language:"js",code:`bounce: ${JSON.stringify(e.animation.bounce,null,2)}`}),`
`,n.jsx(i.h2,{id:"keyframes",children:n.jsx(i.a,{href:"https://tailwindcss.com/docs/keyframes",rel:"nofollow",children:"Keyframes"})}),`
`,n.jsxs(i.p,{children:["Defines the keyframes for the animations. ",n.jsx("small",{children:n.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes",rel:"nofollow",children:"MDN Keyframes"})})]}),`
`,n.jsx(o,{language:"js",code:`keyframes: ${JSON.stringify(e.keyframes,null,2)}`}),`
`,n.jsx(i.h2,{id:"transition-delay",children:n.jsx(i.a,{href:"https://tailwindcss.com/docs/transition-delay",rel:"nofollow",children:"Transition Delay"})}),`
`,n.jsxs(i.p,{children:["Specifies the delay before the transition starts. ",n.jsx("small",{children:n.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay",rel:"nofollow",children:"MDN Transition Delay"})})]}),`
`,n.jsx(o,{language:"js",code:`transitionDelay: ${JSON.stringify(e.transitionDelay,null,2)}`}),`
`,n.jsx(i.h2,{id:"transition-duration",children:n.jsx(i.a,{href:"https://tailwindcss.com/docs/transition-duration",rel:"nofollow",children:"Transition Duration"})}),`
`,n.jsxs(i.p,{children:["Specifies the duration of the transition. ",n.jsx("small",{children:n.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration",rel:"nofollow",children:"MDN Transition Duration"})})]}),`
`,n.jsx(o,{language:"js",code:`transitionDuration: ${JSON.stringify(e.transitionDuration,null,2)}`}),`
`,n.jsx(i.h2,{id:"transition-property",children:n.jsx(i.a,{href:"https://tailwindcss.com/docs/transition-property",rel:"nofollow",children:"Transition Property"})}),`
`,n.jsxs(i.p,{children:["Specifies the properties to which transitions should apply. ",n.jsx("small",{children:n.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property",rel:"nofollow",children:"MDN Transition Property"})})]}),`
`,n.jsx(o,{language:"js",code:`trainsitionProperty: ${JSON.stringify(e.trainsitionProperty,null,2)}`}),`
`,n.jsx(i.h2,{id:"transition-timing-function",children:n.jsx(i.a,{href:"https://tailwindcss.com/docs/transition-timing-function",rel:"nofollow",children:"Transition Timing Function"})}),`
`,n.jsxs(i.p,{children:["Specifies the speed curve of the transition effect. ",n.jsx("small",{children:n.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function",rel:"nofollow",children:"MDN Transition Timing Function"})})]}),`
`,n.jsx(o,{language:"js",code:`transitionTimingFunction: ${JSON.stringify(e.transitionTimingFunction,null,2)}`}),`
`,n.jsx(i.h3,{id:"default",children:"DEFAULT"}),`
`,n.jsx(i.p,{children:'This is the default easing function, commonly known as "ease" in CSS. It creates a smooth transition that starts slowly, speeds up in the middle, and then slows down again towards the end.'}),`
`,n.jsx(o,{language:"js",code:`DEFAULT: ${JSON.stringify(e.transitionTimingFunction.DEFAULT,null,2)}`}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"0.4, 0"}),": Controls the initial portion of the transition, making it start slowly."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"0.2, 1"}),": Controls the end portion of the transition, making it slow down towards the end."]}),`
`]}),`
`,n.jsx(i.h3,{id:"linear",children:"linear"}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.code,{children:"linear"})," easing function creates a transition that occurs at a constant speed from start to finish. There are no accelerations or decelerations."]}),`
`,n.jsx(o,{language:"js",code:`linear: ${JSON.stringify(e.transitionTimingFunction.linear,null,2)}`}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"This means the change happens at the same rate throughout the duration, resulting in a straight line when plotted on a graph."}),`
`]}),`
`,n.jsx(i.h3,{id:"in",children:"in"}),`
`,n.jsx(i.p,{children:'This is the "ease-in" function, which starts slowly and then speeds up.'}),`
`,n.jsx(o,{language:"js",code:`in: ${JSON.stringify(e.transitionTimingFunction.in,null,2)}`}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"0.4, 0"}),": Controls the initial portion of the transition, making it start slowly."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"1, 1"}),": Controls the end portion, making it finish quickly."]}),`
`]}),`
`,n.jsx(i.h3,{id:"out",children:"out"}),`
`,n.jsx(i.p,{children:'This is the "ease-out" function, which starts quickly and then slows down towards the end.'}),`
`,n.jsx(o,{language:"js",code:`out: ${JSON.stringify(e.transitionTimingFunction.out,null,2)}`}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"0, 0"}),": Controls the initial portion of the transition, making it start quickly."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"0.2, 1"}),": Controls the end portion, making it slow down towards the end."]}),`
`]}),`
`,n.jsx(i.h3,{id:"in-out",children:"in-out"}),`
`,n.jsx(i.p,{children:'This is the "ease-in-out" function, which starts slowly, speeds up in the middle, and then slows down again at the end.'}),`
`,n.jsx(o,{language:"js",code:`'in-out': ${JSON.stringify(e.transitionTimingFunction["in-out"],null,2)}`}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"0.4, 0"}),": Controls the initial portion of the transition, making it start slowly."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"0.2, 1"}),": Controls the end portion of the transition, making it slow down towards the end."]}),`
`]}),`
`,typeof s=="function"&&s().toString()!==""&&n.jsxs(n.Fragment,{children:[n.jsx(i.h2,{children:"Extended Documentation"}),n.jsx(s,{})]}),`
`,n.jsx(i.h2,{id:"source-code",children:"Source Code"}),`
`,n.jsx(o,{language:"js",code:d}),`
`,typeof r=="function"&&r().toString()!==""&&n.jsxs(n.Fragment,{children:[n.jsx(i.h3,{children:"Extended Source Code"}),n.jsx(r,{})]})]})}function z(t={}){const{wrapper:i}={...l(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(a,{...t})}):a(t)}export{z as default};
