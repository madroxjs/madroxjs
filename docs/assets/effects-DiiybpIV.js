import{j as e}from"./jsx-runtime-DBEcOq3S.js";import{useMDXComponents as o}from"./index-CA_HyBnq.js";import{ae as x,af as s}from"./index-CedqTxrV.js";import{Documentation as r,SourceCode as l}from"./effects-BuJgTjaK.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DfedjKFc.js";import"../sb-preview/runtime.js";import"./index-BqTDQIm7.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./_defineProperty-DSxlPr5D.js";import"./_overArg-BZNRQ6_9.js";import"./_baseAssignValue-DD5bxUnJ.js";import"./_getPrototype-By7W0WFf.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";const i={boxShadow:{sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",DEFAULT:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",xl:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","2xl":"0 25px 50px -12px rgb(0 0 0 / 0.25)",inner:"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",none:"none"},boxShadowColor:({theme:d})=>d("colors"),opacity:{0:"0",5:"0.05",10:"0.1",15:"0.15",20:"0.2",25:"0.25",30:"0.3",35:"0.35",40:"0.4",45:"0.45",50:"0.5",55:"0.55",60:"0.6",65:"0.65",70:"0.7",75:"0.75",80:"0.8",85:"0.85",90:"0.9",95:"0.95",100:"1"}},h=`export default {
    boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        none: 'none',
    },
    boxShadowColor: ({ theme }) => theme('colors'),
    opacity: {
        0: '0',
        5: '0.05',
        10: '0.1',
        15: '0.15',
        20: '0.2',
        25: '0.25',
        30: '0.3',
        35: '0.35',
        40: '0.4',
        45: '0.45',
        50: '0.5',
        55: '0.55',
        60: '0.6',
        65: '0.65',
        70: '0.7',
        75: '0.75',
        80: '0.8',
        85: '0.85',
        90: '0.9',
        95: '0.95',
        100: '1',
      },
    
}`;function c(d){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...o(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Tailwind/Theme/Effects"}),`
`,e.jsxs(n.h1,{id:"effects-jump-to-source",children:["Effects ",e.jsx("small",{className:"text-xs",children:e.jsx(n.a,{href:"#source-code",children:"Jump to source"})})]}),`
`,e.jsx(n.h2,{id:"box-shadow",children:e.jsx(n.a,{href:"https://tailwindcss.com/docs/box-shadow",rel:"nofollow",children:"Box Shadow"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"boxShadow"})," property allows you to control the shadow effect applied to elements. Each shadow is specified with various parameters that define its appearance."]}),`
`,e.jsx(s,{language:"js",code:`boxShadow: ${JSON.stringify(i.boxShadow,null,2)}`}),`
`,e.jsx(n.h3,{id:"sm",children:e.jsx(n.code,{children:"sm"})}),`
`,e.jsx(n.p,{children:"A minimal shadow effect, perfect for subtle elevation."}),`
`,e.jsx(s,{language:"tsx",code:`sm: ${i.boxShadow.sm}`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),": Horizontal offset (no horizontal shift)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"1px"}),": Vertical offset (shadow moves ",e.jsx(n.code,{children:"1px"})," down from the element)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"2px"}),": Blur radius (the shadow becomes more blurred with this value)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),": Spread radius (no change to the shadow’s size)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rgb(0 0 0 / 0.05)"}),": Color with ",e.jsx(n.code,{children:"5%"})," opacity."]}),`
`]}),`
`,e.jsx(n.h3,{id:"default",children:e.jsx(n.code,{children:"DEFAULT"})}),`
`,e.jsx(n.p,{children:"Combines two shadows for a balanced medium effect."}),`
`,e.jsx(s,{language:"tsx",code:`DEFAULT: ${i.boxShadow.DEFAULT}`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"0 1px 3px 0 rgb(0 0 0 / 0.1)"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),": Horizontal offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"1px"}),": Vertical offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"3px"}),": Blur radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),": Spread radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rgb(0 0 0 / 0.1)"}),": Color with ",e.jsx(n.code,{children:"10%"})," opacity."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"0 1px 2px -1px rgb(0 0 0 / 0.1)"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),": Horizontal offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"1px"}),": Vertical offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"2px"}),": Blur radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"-1px"}),": Spread radius (reduces the size of the shadow)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rgb(0 0 0 / 0.1)"}),": Color with ",e.jsx(n.code,{children:"10%"})," opacity."]}),`
`]}),`
`,e.jsx(n.h3,{id:"md",children:e.jsx(n.code,{children:"md"})}),`
`,e.jsx(n.p,{children:"Provides a medium shadow effect with added depth."}),`
`,e.jsx(s,{language:"tsx",code:`md: ${i.boxShadow.md}`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"0 4px 6px -1px rgb(0 0 0 / 0.1)"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),": Horizontal offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"4px"}),": Vertical offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"6px"}),": Blur radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"-1px"}),": Spread radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rgb(0 0 0 / 0.1)"}),": Color with ",e.jsx(n.code,{children:"10%"})," opacity."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"0 2px 4px -2px rgb(0 0 0 / 0.1)"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),": Horizontal offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"2px"}),": Vertical offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"4px"}),": Blur radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"-2px"}),": Spread radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rgb(0 0 0 / 0.1)"}),": Color with ",e.jsx(n.code,{children:"10%"})," opacity."]}),`
`]}),`
`,e.jsx(n.h3,{id:"lg",children:e.jsx(n.code,{children:"lg"})}),`
`,e.jsx(n.p,{children:"Creates a more pronounced shadow effect with greater depth."}),`
`,e.jsx(s,{language:"tsx",code:`lg: ${i.boxShadow.lg}`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"0 10px 15px -3px rgb(0 0 0 / 0.1)"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),": Horizontal offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"10px"}),": Vertical offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"15px"}),": Blur radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"-3px"}),": Spread radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rgb(0 0 0 / 0.1)"}),": Color with ",e.jsx(n.code,{children:"10%"})," opacity."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"0 4px 6px -4px rgb(0 0 0 / 0.1)"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),": Horizontal offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"4px"}),": Vertical offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"6px"}),": Blur radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"-4px"}),": Spread radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rgb(0 0 0 / 0.1)"}),": Color with ",e.jsx(n.code,{children:"10%"})," opacity."]}),`
`]}),`
`,e.jsx(n.h3,{id:"xl",children:e.jsx(n.code,{children:"xl"})}),`
`,e.jsx(n.p,{children:"Offers a strong shadow effect for high elevation."}),`
`,e.jsx(s,{language:"tsx",code:`xl: ${i.boxShadow.xl}`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"0 20px 25px -5px rgb(0 0 0 / 0.1)"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),": Horizontal offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"20px"}),": Vertical offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"25px"}),": Blur radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"-5px"}),": Spread radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rgb(0 0 0 / 0.1)"}),": Color with ",e.jsx(n.code,{children:"10%"})," opacity."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"0 8px 10px -6px rgb(0 0 0 / 0.1)"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),": Horizontal offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"8px"}),": Vertical offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"10px"}),": Blur radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"-6px"}),": Spread radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rgb(0 0 0 / 0.1)"}),": Color with ",e.jsx(n.code,{children:"10%"})," opacity."]}),`
`]}),`
`,e.jsx(n.h3,{id:"2xl",children:e.jsx(n.code,{children:"2xl"})}),`
`,e.jsx(n.p,{children:"A very large shadow with substantial depth, suitable for prominent elements."}),`
`,e.jsx(s,{language:"tsx",code:`'2xl': ${i.boxShadow["2xl"]}`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),": Horizontal offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"25px"}),": Vertical offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"50px"}),": Blur radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"-12px"}),": Spread radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rgb(0 0 0 / 0.25)"}),": Color with ",e.jsx(n.code,{children:"25%"})," opacity."]}),`
`]}),`
`,e.jsx(n.h3,{id:"inner",children:e.jsx(n.code,{children:"inner"})}),`
`,e.jsx(n.p,{children:"Creates a subtle inner shadow effect, giving the appearance of the content being pressed into the element."}),`
`,e.jsx(s,{language:"tsx",code:`inner: ${i.boxShadow.inner}`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"inset"}),": Indicates that the shadow is applied inside the element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),": Horizontal offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"2px"}),": Vertical offset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"4px"}),": Blur radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),": Spread radius."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rgb(0 0 0 / 0.05)"}),": Color with ",e.jsx(n.code,{children:"5%"})," opacity."]}),`
`]}),`
`,e.jsx(n.h3,{id:"none",children:e.jsx(n.code,{children:"none"})}),`
`,e.jsx(n.p,{children:"Removes any shadow effect, resulting in a flat appearance."}),`
`,e.jsx(s,{language:"tsx",code:`none: ${i.boxShadow.none}`}),`
`,e.jsx(n.h2,{id:"opacity",children:e.jsx(n.a,{href:"https://tailwindcss.com/docs/opacity",rel:"nofollow",children:"Opacity"})}),`
`,e.jsxs(n.p,{children:["Defines the opacity utility classes for different levels of transparency. ",e.jsx("small",{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/opacity",rel:"nofollow",children:"MDN Opacity"})})]}),`
`,e.jsx(s,{language:"js",code:`opacity: ${JSON.stringify(i.opacity,null,2)}`}),`
`,typeof r=="function"&&r().toString()!==""&&e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Extended Documentation"}),e.jsx(r,{})]}),`
`,e.jsx(n.h2,{id:"source-code",children:"Source Code"}),`
`,e.jsx(s,{language:"js",code:h}),`
`,typeof l=="function"&&l().toString()!==""&&e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{children:"Extended Source Code"}),e.jsx(l,{})]})]})}function E(d={}){const{wrapper:n}={...o(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(c,{...d})}):c(d)}export{E as default};
