import{j as e}from"./jsx-runtime-DBEcOq3S.js";import{useMDXComponents as l}from"./index-CA_HyBnq.js";import{ae as d,af as r}from"./index-DqyB5r8P.js";import{Documentation as i,SourceCode as s}from"./layout-Dn7AT1TH.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-5MdjxzLk.js";import"../sb-preview/runtime.js";import"./index-BqTDQIm7.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./_defineProperty-DSxlPr5D.js";import"./_overArg-BZNRQ6_9.js";import"./_baseAssignValue-DD5bxUnJ.js";import"./_getPrototype-By7W0WFf.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";const o={aspectRatio:{auto:"auto",square:"1 / 1",video:"16 / 9"},columns:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},container:{},inset:({theme:t})=>({auto:"auto",...t("spacing"),"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%",full:"100%"}),objectPosition:{bottom:"bottom",center:"center",left:"left","left-bottom":"left bottom","left-top":"left top",right:"right","right-bottom":"right bottom","right-top":"right top",top:"top"},zIndex:{auto:"auto",0:"0",10:"10",20:"20",30:"30",40:"40",50:"50"}},a=`export default {\r
    aspectRatio: {\r
        auto: 'auto',\r
        square: '1 / 1',\r
        video: '16 / 9',\r
    },\r
    columns: {\r
        auto: 'auto',\r
        1: '1',\r
        2: '2',\r
        3: '3',\r
        4: '4',\r
        5: '5',\r
        6: '6',\r
        7: '7',\r
        8: '8',\r
        9: '9',\r
        10: '10',\r
        11: '11',\r
        12: '12',\r
        '3xs': '16rem',\r
        '2xs': '18rem',\r
        xs: '20rem',\r
        sm: '24rem',\r
        md: '28rem',\r
        lg: '32rem',\r
        xl: '36rem',\r
        '2xl': '42rem',\r
        '3xl': '48rem',\r
        '4xl': '56rem',\r
        '5xl': '64rem',\r
        '6xl': '72rem',\r
        '7xl': '80rem',\r
    },\r
    container: {},\r
    inset: ({ theme }) => ({\r
        auto: 'auto',\r
        ...theme('spacing'),\r
        '1/2': '50%',\r
        '1/3': '33.333333%',\r
        '2/3': '66.666667%',\r
        '1/4': '25%',\r
        '2/4': '50%',\r
        '3/4': '75%',\r
        full: '100%',\r
    }),\r
    objectPosition: {\r
        bottom: 'bottom',\r
        center: 'center',\r
        left: 'left',\r
        'left-bottom': 'left bottom',\r
        'left-top': 'left top',\r
        right: 'right',\r
        'right-bottom': 'right bottom',\r
        'right-top': 'right top',\r
        top: 'top',\r
    },\r
    zIndex: {\r
        auto: 'auto',\r
        0: '0',\r
        10: '10',\r
        20: '20',\r
        30: '30',\r
        40: '40',\r
        50: '50',\r
    },\r
\r
}`;function c(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Tailwind/Theme/Layout"}),`
`,e.jsxs(n.h1,{id:"layout-jump-to-source",children:[e.jsx(n.a,{href:"https://tailwindcss.com/docs/layout",rel:"nofollow",children:"Layout"})," ",e.jsx("small",{className:"text-xs",children:e.jsx(n.a,{href:"#source-code",children:"Jump to source"})})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"layout"})," property includes utilities for managing layout-related aspects such as aspect ratios, columns, container widths, and more."]}),`
`,e.jsx(n.h2,{id:"aspectratio",children:e.jsx(n.code,{children:"aspectRatio"})}),`
`,e.jsx(n.p,{children:"Defines aspect ratio utilities for maintaining specific aspect ratios in elements."}),`
`,e.jsx(r,{language:"tsx",code:`aspectRatio: ${JSON.stringify(o.aspectRatio,null,2)}`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"auto"}),": Default aspect ratio."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"square"}),": 1 / 1 aspect ratio (square)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"video"}),": 16 / 9 aspect ratio (widescreen)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"columns",children:e.jsx(n.code,{children:"columns"})}),`
`,e.jsx(n.p,{children:"Specifies the number of columns for a grid layout or container width."}),`
`,e.jsx(r,{language:"tsx",code:`columns: ${JSON.stringify(o.columns,null,2)}`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"auto"}),": Automatic column count based on content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"1"})," to ",e.jsx(n.code,{children:"12"}),": Defines the number of columns in a grid layout."]}),`
`,e.jsxs(n.li,{children:["Custom sizes (e.g., ",e.jsx(n.code,{children:"3xs"}),", ",e.jsx(n.code,{children:"2xs"}),", ",e.jsx(n.code,{children:"xs"}),", etc.): Sets column widths for different breakpoints and container sizes."]}),`
`]}),`
`,e.jsx(n.h2,{id:"container",children:e.jsx(n.code,{children:"container"})}),`
`,e.jsx(n.p,{children:"Configures container settings."}),`
`,e.jsx(r,{language:"tsx",code:`container: ${JSON.stringify(o.container,null,2)}`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Note"}),": Refer to Tailwind CSS documentation for default container settings."]}),`
`]}),`
`,e.jsx(n.h2,{id:"inset",children:e.jsx(n.code,{children:"inset"})}),`
`,e.jsx(n.p,{children:"Controls the inset (position) of elements relative to their containing block."}),`
`,e.jsx(r,{language:"tsx",code:`inset: ${o.inset}`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"auto"}),": Default inset value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"50%"}),", ",e.jsx(n.code,{children:"33.333333%"}),", ",e.jsx(n.code,{children:"66.666667%"}),", ",e.jsx(n.code,{children:"25%"}),", ",e.jsx(n.code,{children:"75%"}),", ",e.jsx(n.code,{children:"100%"}),": Specific percentage-based insets."]}),`
`]}),`
`,e.jsx(n.h2,{id:"objectposition",children:e.jsx(n.code,{children:"objectPosition"})}),`
`,e.jsx(n.p,{children:"Defines the alignment of an object within its container."}),`
`,e.jsx(r,{language:"tsx",code:`objectPosition: ${JSON.stringify(o.objectPosition,null,2)}`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bottom"}),", ",e.jsx(n.code,{children:"center"}),", ",e.jsx(n.code,{children:"left"}),", ",e.jsx(n.code,{children:"left-bottom"}),", ",e.jsx(n.code,{children:"left-top"}),", ",e.jsx(n.code,{children:"right"}),", ",e.jsx(n.code,{children:"right-bottom"}),", ",e.jsx(n.code,{children:"right-top"}),", ",e.jsx(n.code,{children:"top"}),": Various position options for object alignment."]}),`
`]}),`
`,e.jsx(n.h2,{id:"zindex",children:e.jsx(n.code,{children:"zIndex"})}),`
`,e.jsx(n.p,{children:"Controls the stack order of elements."}),`
`,e.jsx(r,{language:"tsx",code:`zIndex: ${JSON.stringify(o.zIndex,null,2)}`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"auto"}),": Default z-index value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),", ",e.jsx(n.code,{children:"10"}),", ",e.jsx(n.code,{children:"20"}),", ",e.jsx(n.code,{children:"30"}),", ",e.jsx(n.code,{children:"40"}),", ",e.jsx(n.code,{children:"50"}),": Predefined z-index values."]}),`
`]}),`
`,typeof i=="function"&&i().toString()!==""&&e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Extended Documentation"}),e.jsx(i,{})]}),`
`,e.jsx(n.h2,{id:"source-code",children:"Source Code"}),`
`,e.jsx(r,{language:"js",code:a}),`
`,typeof s=="function"&&s().toString()!==""&&e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{children:"Extended Source Code"}),e.jsx(s,{})]})]})}function N(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}export{N as default};
