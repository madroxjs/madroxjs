import{j as e}from"./jsx-runtime-DBEcOq3S.js";import{useMDXComponents as l}from"./index-CA_HyBnq.js";import{ae as d,af as o}from"./index-Cs70M9Vn.js";import{Documentation as s,SourceCode as r}from"./layout-DB8y1VwT.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BhW2JJgF.js";import"../sb-preview/runtime.js";import"./index-BqTDQIm7.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./_defineProperty-DSxlPr5D.js";import"./_overArg-BZNRQ6_9.js";import"./_baseAssignValue-DD5bxUnJ.js";import"./_getPrototype-By7W0WFf.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";const i={aspectRatio:{auto:"auto",square:"1 / 1",video:"16 / 9"},columns:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},container:{},inset:({theme:t})=>({auto:"auto",...t("spacing"),"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%",full:"100%"}),objectPosition:{bottom:"bottom",center:"center",left:"left","left-bottom":"left bottom","left-top":"left top",right:"right","right-bottom":"right bottom","right-top":"right top",top:"top"},zIndex:{auto:"auto",0:"0",10:"10",20:"20",30:"30",40:"40",50:"50"}},a=`export default {
    aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
    },
    columns: {
        auto: 'auto',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        '3xs': '16rem',
        '2xs': '18rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
    },
    container: {},
    inset: ({ theme }) => ({
        auto: 'auto',
        ...theme('spacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        full: '100%',
    }),
    objectPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
    },
    zIndex: {
        auto: 'auto',
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
    },

}`;function c(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Tailwind/Theme/Layout"}),`
`,e.jsxs(n.h1,{id:"layout-jump-to-source",children:[e.jsx(n.a,{href:"https://tailwindcss.com/docs/layout",rel:"nofollow",children:"Layout"})," ",e.jsx("small",{className:"text-xs",children:e.jsx(n.a,{href:"#source-code",children:"Jump to source"})})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"layout"})," property includes utilities for managing layout-related aspects such as aspect ratios, columns, container widths, and more."]}),`
`,e.jsx(n.h2,{id:"aspectratio",children:e.jsx(n.code,{children:"aspectRatio"})}),`
`,e.jsx(n.p,{children:"Defines aspect ratio utilities for maintaining specific aspect ratios in elements."}),`
`,e.jsx(o,{language:"tsx",code:`aspectRatio: ${JSON.stringify(i.aspectRatio,null,2)}`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"auto"}),": Default aspect ratio."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"square"}),": 1 / 1 aspect ratio (square)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"video"}),": 16 / 9 aspect ratio (widescreen)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"columns",children:e.jsx(n.code,{children:"columns"})}),`
`,e.jsx(n.p,{children:"Specifies the number of columns for a grid layout or container width."}),`
`,e.jsx(o,{language:"tsx",code:`columns: ${JSON.stringify(i.columns,null,2)}`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"auto"}),": Automatic column count based on content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"1"})," to ",e.jsx(n.code,{children:"12"}),": Defines the number of columns in a grid layout."]}),`
`,e.jsxs(n.li,{children:["Custom sizes (e.g., ",e.jsx(n.code,{children:"3xs"}),", ",e.jsx(n.code,{children:"2xs"}),", ",e.jsx(n.code,{children:"xs"}),", etc.): Sets column widths for different breakpoints and container sizes."]}),`
`]}),`
`,e.jsx(n.h2,{id:"container",children:e.jsx(n.code,{children:"container"})}),`
`,e.jsx(n.p,{children:"Configures container settings."}),`
`,e.jsx(o,{language:"tsx",code:`container: ${JSON.stringify(i.container,null,2)}`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Note"}),": Refer to Tailwind CSS documentation for default container settings."]}),`
`]}),`
`,e.jsx(n.h2,{id:"inset",children:e.jsx(n.code,{children:"inset"})}),`
`,e.jsx(n.p,{children:"Controls the inset (position) of elements relative to their containing block."}),`
`,e.jsx(o,{language:"tsx",code:`inset: ${i.inset}`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"auto"}),": Default inset value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"50%"}),", ",e.jsx(n.code,{children:"33.333333%"}),", ",e.jsx(n.code,{children:"66.666667%"}),", ",e.jsx(n.code,{children:"25%"}),", ",e.jsx(n.code,{children:"75%"}),", ",e.jsx(n.code,{children:"100%"}),": Specific percentage-based insets."]}),`
`]}),`
`,e.jsx(n.h2,{id:"objectposition",children:e.jsx(n.code,{children:"objectPosition"})}),`
`,e.jsx(n.p,{children:"Defines the alignment of an object within its container."}),`
`,e.jsx(o,{language:"tsx",code:`objectPosition: ${JSON.stringify(i.objectPosition,null,2)}`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bottom"}),", ",e.jsx(n.code,{children:"center"}),", ",e.jsx(n.code,{children:"left"}),", ",e.jsx(n.code,{children:"left-bottom"}),", ",e.jsx(n.code,{children:"left-top"}),", ",e.jsx(n.code,{children:"right"}),", ",e.jsx(n.code,{children:"right-bottom"}),", ",e.jsx(n.code,{children:"right-top"}),", ",e.jsx(n.code,{children:"top"}),": Various position options for object alignment."]}),`
`]}),`
`,e.jsx(n.h2,{id:"zindex",children:e.jsx(n.code,{children:"zIndex"})}),`
`,e.jsx(n.p,{children:"Controls the stack order of elements."}),`
`,e.jsx(o,{language:"tsx",code:`zIndex: ${JSON.stringify(i.zIndex,null,2)}`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"auto"}),": Default z-index value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),", ",e.jsx(n.code,{children:"10"}),", ",e.jsx(n.code,{children:"20"}),", ",e.jsx(n.code,{children:"30"}),", ",e.jsx(n.code,{children:"40"}),", ",e.jsx(n.code,{children:"50"}),": Predefined z-index values."]}),`
`]}),`
`,typeof s=="function"&&s().toString()!==""&&e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Extended Documentation"}),e.jsx(s,{})]}),`
`,e.jsx(n.h2,{id:"source-code",children:"Source Code"}),`
`,e.jsx(o,{language:"js",code:a}),`
`,typeof r=="function"&&r().toString()!==""&&e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{children:"Extended Source Code"}),e.jsx(r,{})]})]})}function N(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}export{N as default};
