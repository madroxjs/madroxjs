import{j as n}from"./jsx-runtime-DBEcOq3S.js";import{useMDXComponents as o}from"./index-CA_HyBnq.js";import{ae as d,af as t}from"./index-DqyB5r8P.js";import{Documentation as c,SourceCode as s}from"./sizing-Dzde_6ic.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-5MdjxzLk.js";import"../sb-preview/runtime.js";import"./index-BqTDQIm7.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./_defineProperty-DSxlPr5D.js";import"./_overArg-BZNRQ6_9.js";import"./_baseAssignValue-DD5bxUnJ.js";import"./_getPrototype-By7W0WFf.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";const r={height:({theme:i})=>({auto:"auto",...i("spacing"),"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%",full:"100%",screen:"100vh",svh:"100svh",lvh:"100lvh",dvh:"100dvh",min:"min-content",max:"max-content",fit:"fit-content"}),maxHeight:({theme:i})=>({...i("spacing"),none:"none",full:"100%",screen:"100vh",svh:"100svh",lvh:"100lvh",dvh:"100dvh",min:"min-content",max:"max-content",fit:"fit-content"}),maxWidth:({theme:i,breakpoints:e})=>({...i("spacing"),none:"none",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch",...e(i("screens"))}),minHeight:({theme:i})=>({...i("spacing"),full:"100%",screen:"100vh",svh:"100svh",lvh:"100lvh",dvh:"100dvh",min:"min-content",max:"max-content",fit:"fit-content"}),minWidth:({theme:i})=>({...i("spacing"),full:"100%",min:"min-content",max:"max-content",fit:"fit-content"}),size:({theme:i})=>({auto:"auto",...i("spacing"),"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"}),width:({theme:i})=>({auto:"auto",...i("spacing"),"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%",screen:"100vw",svw:"100svw",lvw:"100lvw",dvw:"100dvw",min:"min-content",max:"max-content",fit:"fit-content"})},l=`export default {\r
    height: ({ theme }) => ({\r
      auto: 'auto',\r
      ...theme('spacing'),\r
      '1/2': '50%',\r
      '1/3': '33.333333%',\r
      '2/3': '66.666667%',\r
      '1/4': '25%',\r
      '2/4': '50%',\r
      '3/4': '75%',\r
      '1/5': '20%',\r
      '2/5': '40%',\r
      '3/5': '60%',\r
      '4/5': '80%',\r
      '1/6': '16.666667%',\r
      '2/6': '33.333333%',\r
      '3/6': '50%',\r
      '4/6': '66.666667%',\r
      '5/6': '83.333333%',\r
      full: '100%',\r
      screen: '100vh',\r
      svh: '100svh',\r
      lvh: '100lvh',\r
      dvh: '100dvh',\r
      min: 'min-content',\r
      max: 'max-content',\r
      fit: 'fit-content',\r
  }),\r
  maxHeight: ({ theme }) => ({\r
      ...theme('spacing'),\r
      none: 'none',\r
      full: '100%',\r
      screen: '100vh',\r
      svh: '100svh',\r
      lvh: '100lvh',\r
      dvh: '100dvh',\r
      min: 'min-content',\r
      max: 'max-content',\r
      fit: 'fit-content',\r
  }),\r
  maxWidth: ({ theme, breakpoints }) => ({\r
    ...theme('spacing'),\r
    none: 'none',\r
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
    full: '100%',\r
    min: 'min-content',\r
    max: 'max-content',\r
    fit: 'fit-content',\r
    prose: '65ch',\r
    ...breakpoints(theme('screens')),\r
  }),\r
  minHeight: ({ theme }) => ({\r
    ...theme('spacing'),\r
    full: '100%',\r
    screen: '100vh',\r
    svh: '100svh',\r
    lvh: '100lvh',\r
    dvh: '100dvh',\r
    min: 'min-content',\r
    max: 'max-content',\r
    fit: 'fit-content',\r
  }),\r
  minWidth: ({ theme }) => ({\r
    ...theme('spacing'),\r
    full: '100%',\r
    min: 'min-content',\r
    max: 'max-content',\r
    fit: 'fit-content',\r
  }),\r
  size: ({ theme }) => ({\r
    auto: 'auto',\r
    ...theme('spacing'),\r
    '1/2': '50%',\r
    '1/3': '33.333333%',\r
    '2/3': '66.666667%',\r
    '1/4': '25%',\r
    '2/4': '50%',\r
    '3/4': '75%',\r
    '1/5': '20%',\r
    '2/5': '40%',\r
    '3/5': '60%',\r
    '4/5': '80%',\r
    '1/6': '16.666667%',\r
    '2/6': '33.333333%',\r
    '3/6': '50%',\r
    '4/6': '66.666667%',\r
    '5/6': '83.333333%',\r
    '1/12': '8.333333%',\r
    '2/12': '16.666667%',\r
    '3/12': '25%',\r
    '4/12': '33.333333%',\r
    '5/12': '41.666667%',\r
    '6/12': '50%',\r
    '7/12': '58.333333%',\r
    '8/12': '66.666667%',\r
    '9/12': '75%',\r
    '10/12': '83.333333%',\r
    '11/12': '91.666667%',\r
    full: '100%',\r
    min: 'min-content',\r
    max: 'max-content',\r
    fit: 'fit-content',\r
  }),\r
  width: ({ theme }) => ({\r
    auto: 'auto',\r
    ...theme('spacing'),\r
    '1/2': '50%',\r
    '1/3': '33.333333%',\r
    '2/3': '66.666667%',\r
    '1/4': '25%',\r
    '2/4': '50%',\r
    '3/4': '75%',\r
    '1/5': '20%',\r
    '2/5': '40%',\r
    '3/5': '60%',\r
    '4/5': '80%',\r
    '1/6': '16.666667%',\r
    '2/6': '33.333333%',\r
    '3/6': '50%',\r
    '4/6': '66.666667%',\r
    '5/6': '83.333333%',\r
    '1/12': '8.333333%',\r
    '2/12': '16.666667%',\r
    '3/12': '25%',\r
    '4/12': '33.333333%',\r
    '5/12': '41.666667%',\r
    '6/12': '50%',\r
    '7/12': '58.333333%',\r
    '8/12': '66.666667%',\r
    '9/12': '75%',\r
    '10/12': '83.333333%',\r
    '11/12': '91.666667%',\r
    full: '100%',\r
    screen: '100vw',\r
    svw: '100svw',\r
    lvw: '100lvw',\r
    dvw: '100dvw',\r
    min: 'min-content',\r
    max: 'max-content',\r
    fit: 'fit-content',\r
  }),\r
\r
}`;function h(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Tailwind/Theme/Sizing"}),`
`,n.jsxs(e.h1,{id:"sizing-jump-to-source",children:[n.jsx(e.a,{href:"https://tailwindcss.com/docs/width",rel:"nofollow",children:"Sizing"})," ",n.jsx("small",{className:"text-xs",children:n.jsx(e.a,{href:"#source-code",children:"Jump to source"})})]}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"sizing"})," property includes utilities for managing the size of elements, including height, width, and maximum and minimum sizes."]}),`
`,n.jsx(e.h2,{id:"height",children:n.jsx(e.code,{children:"height"})}),`
`,n.jsx(e.p,{children:"Defines the height of elements with various options."}),`
`,n.jsx(t,{language:"tsx",code:`height: ${r.height}`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"auto"}),": Default height value."]}),`
`,n.jsxs(e.li,{children:["Percentage-based values (e.g., ",n.jsx(e.code,{children:"50%"}),", ",n.jsx(e.code,{children:"33.333333%"}),"): Specifies the height relative to the containing block."]}),`
`,n.jsxs(e.li,{children:["Fixed values (e.g., ",n.jsx(e.code,{children:"100vh"}),", ",n.jsx(e.code,{children:"100svh"}),", etc.): Defines the height based on viewport units or content size."]}),`
`]}),`
`,n.jsx(e.h2,{id:"maxheight",children:n.jsx(e.code,{children:"maxHeight"})}),`
`,n.jsx(e.p,{children:"Sets the maximum height of elements."}),`
`,n.jsx(t,{language:"tsx",code:`maxHeight: ${r.maxHeight}`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"none"}),": No maximum height."]}),`
`,n.jsxs(e.li,{children:["Full height (e.g., ",n.jsx(e.code,{children:"100%"}),", ",n.jsx(e.code,{children:"100vh"}),", etc.): Defines the maximum height."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"min-content"}),", ",n.jsx(e.code,{children:"max-content"}),", ",n.jsx(e.code,{children:"fit-content"}),": Sizes based on content."]}),`
`]}),`
`,n.jsx(e.h2,{id:"maxwidth",children:n.jsx(e.code,{children:"maxWidth"})}),`
`,n.jsx(e.p,{children:"Sets the maximum width of elements."}),`
`,n.jsx(t,{language:"tsx",code:`maxWidth: ${r.maxWidth}`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"none"}),": No maximum width."]}),`
`,n.jsxs(e.li,{children:["Fixed values (e.g., ",n.jsx(e.code,{children:"20rem"}),", ",n.jsx(e.code,{children:"24rem"}),", etc.): Defines the maximum width."]}),`
`,n.jsxs(e.li,{children:["Percentage-based values (",n.jsx(e.code,{children:"100%"}),"), content-based values (",n.jsx(e.code,{children:"min-content"}),", ",n.jsx(e.code,{children:"max-content"}),", ",n.jsx(e.code,{children:"fit-content"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"prose"}),": A special value for content width (65ch)."]}),`
`]}),`
`,n.jsx(e.h2,{id:"minheight",children:n.jsx(e.code,{children:"minHeight"})}),`
`,n.jsx(e.p,{children:"Defines the minimum height of elements."}),`
`,n.jsx(t,{language:"tsx",code:`minHeight: ${r.minHeight}`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"full"}),", ",n.jsx(e.code,{children:"screen"}),", ",n.jsx(e.code,{children:"svh"}),", ",n.jsx(e.code,{children:"lvh"}),", ",n.jsx(e.code,{children:"dvh"}),": Specifies minimum height based on viewport or content size."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"min-content"}),", ",n.jsx(e.code,{children:"max-content"}),", ",n.jsx(e.code,{children:"fit-content"}),": Sizes based on content."]}),`
`]}),`
`,n.jsx(e.h2,{id:"minwidth",children:n.jsx(e.code,{children:"minWidth"})}),`
`,n.jsx(e.p,{children:"Defines the minimum width of elements."}),`
`,n.jsx(t,{language:"tsx",code:`minWidth: ${r.minWidth}`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"full"}),": Full width."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"min-content"}),", ",n.jsx(e.code,{children:"max-content"}),", ",n.jsx(e.code,{children:"fit-content"}),": Sizes based on content."]}),`
`]}),`
`,n.jsx(e.h2,{id:"size",children:n.jsx(e.code,{children:"size"})}),`
`,n.jsx(e.p,{children:"Defines the size of elements."}),`
`,n.jsx(t,{language:"tsx",code:`size: ${r.size}`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"auto"}),": Default size value."]}),`
`,n.jsxs(e.li,{children:["Percentage-based values (e.g., ",n.jsx(e.code,{children:"50%"}),", ",n.jsx(e.code,{children:"33.333333%"}),"): Specifies the size relative to the containing block."]}),`
`,n.jsxs(e.li,{children:["Fixed values (",n.jsx(e.code,{children:"100%"}),", ",n.jsx(e.code,{children:"min-content"}),", ",n.jsx(e.code,{children:"max-content"}),", ",n.jsx(e.code,{children:"fit-content"}),")."]}),`
`,n.jsxs(e.li,{children:["Fractional units (e.g., ",n.jsx(e.code,{children:"1/12"}),", ",n.jsx(e.code,{children:"2/12"}),"): Defines size in a 12-column grid system."]}),`
`]}),`
`,n.jsx(e.h2,{id:"width",children:n.jsx(e.code,{children:"width"})}),`
`,n.jsx(e.p,{children:"Sets the width of elements."}),`
`,n.jsx(t,{language:"tsx",code:`width: ${r.width}`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"auto"}),": Default width value."]}),`
`,n.jsxs(e.li,{children:["Percentage-based values (e.g., ",n.jsx(e.code,{children:"50%"}),", ",n.jsx(e.code,{children:"33.333333%"}),"): Specifies the width relative to the containing block."]}),`
`,n.jsxs(e.li,{children:["Fixed values (",n.jsx(e.code,{children:"100vw"}),", ",n.jsx(e.code,{children:"100svw"}),", etc.): Defines width based on viewport units or content size."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"min-content"}),", ",n.jsx(e.code,{children:"max-content"}),", ",n.jsx(e.code,{children:"fit-content"}),": Sizes based on content."]}),`
`]}),`
`,typeof c=="function"&&c().toString()!==""&&n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:"Extended Documentation"}),n.jsx(c,{})]}),`
`,n.jsx(e.h2,{id:"source-code",children:"Source Code"}),`
`,n.jsx(t,{language:"js",code:l}),`
`,typeof s=="function"&&s().toString()!==""&&n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{children:"Extended Source Code"}),n.jsx(s,{})]})]})}function $(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(h,{...i})}):h(i)}export{$ as default};
