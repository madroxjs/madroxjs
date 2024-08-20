import{j as e}from"./jsx-runtime-DBEcOq3S.js";import{useMDXComponents as t}from"./index-CA_HyBnq.js";import{ae as d,af as n}from"./index-B9NPBQHP.js";import{Documentation as i,SourceCode as c}from"./interactivity-DW1Br85Q.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-B2H5jMKo.js";import"../sb-preview/runtime.js";import"./index-BqTDQIm7.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./_defineProperty-DSxlPr5D.js";import"./_overArg-BZNRQ6_9.js";import"./_baseAssignValue-DD5bxUnJ.js";import"./_getPrototype-By7W0WFf.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";const o={accentColor:({theme:s})=>({...s("colors"),auto:"auto"}),caretColor:({theme:s})=>s("colors"),cursor:{auto:"auto",default:"default",pointer:"pointer",wait:"wait",text:"text",move:"move",help:"help","not-allowed":"not-allowed",none:"none","context-menu":"context-menu",progress:"progress",cell:"cell",crosshair:"crosshair","vertical-text":"vertical-text",alias:"alias",copy:"copy","no-drop":"no-drop",grab:"grab",grabbing:"grabbing","all-scroll":"all-scroll","col-resize":"col-resize","row-resize":"row-resize","n-resize":"n-resize","e-resize":"e-resize","s-resize":"s-resize","w-resize":"w-resize","ne-resize":"ne-resize","nw-resize":"nw-resize","se-resize":"se-resize","sw-resize":"sw-resize","ew-resize":"ew-resize","ns-resize":"ns-resize","nesw-resize":"nesw-resize","nwse-resize":"nwse-resize","zoom-in":"zoom-in","zoom-out":"zoom-out"},scrollMargin:({theme:s})=>({...s("spacing")}),scrollPadding:({theme:s})=>s("spacing"),willChange:{auto:"auto",scroll:"scroll-position",contents:"contents",transform:"transform"}},a=`export default {
    accentColor: ({ theme }) => ({
        ...theme('colors'),
        auto: 'auto',
    }),
    caretColor: ({ theme }) => theme('colors'),
    cursor: {
        auto: 'auto',
        default: 'default',
        pointer: 'pointer',
        wait: 'wait',
        text: 'text',
        move: 'move',
        help: 'help',
        'not-allowed': 'not-allowed',
        none: 'none',
        'context-menu': 'context-menu',
        progress: 'progress',
        cell: 'cell',
        crosshair: 'crosshair',
        'vertical-text': 'vertical-text',
        alias: 'alias',
        copy: 'copy',
        'no-drop': 'no-drop',
        grab: 'grab',
        grabbing: 'grabbing',
        'all-scroll': 'all-scroll',
        'col-resize': 'col-resize',
        'row-resize': 'row-resize',
        'n-resize': 'n-resize',
        'e-resize': 'e-resize',
        's-resize': 's-resize',
        'w-resize': 'w-resize',
        'ne-resize': 'ne-resize',
        'nw-resize': 'nw-resize',
        'se-resize': 'se-resize',
        'sw-resize': 'sw-resize',
        'ew-resize': 'ew-resize',
        'ns-resize': 'ns-resize',
        'nesw-resize': 'nesw-resize',
        'nwse-resize': 'nwse-resize',
        'zoom-in': 'zoom-in',
        'zoom-out': 'zoom-out',
    },
    scrollMargin: ({ theme }) => ({
        ...theme('spacing'),
    }),
    scrollPadding: ({ theme }) => theme('spacing'),
    willChange: {
        auto: 'auto',
        scroll: 'scroll-position',
        contents: 'contents',
        transform: 'transform',
    },    
}`;function l(s){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Tailwind/Theme/Interactivity"}),`
`,e.jsxs(r.h1,{id:"interactivity-jump-to-source",children:[e.jsx(r.a,{href:"https://tailwindcss.com/docs/interactivity",rel:"nofollow",children:"Interactivity"})," ",e.jsx("small",{className:"text-xs",children:e.jsx(r.a,{href:"#source-code",children:"Jump to source"})})]}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"interactivity"})," property provides utilities for controlling various interactive behaviors in Tailwind CSS. These include cursor styles, scroll margins, and will-change properties."]}),`
`,e.jsx(r.h2,{id:"accentcolor",children:e.jsx(r.code,{children:"accentColor"})}),`
`,e.jsx(r.p,{children:"Sets the accent color for elements."}),`
`,e.jsx(n,{language:"tsx",code:`accentColor: ${o.accentColor}`}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"auto"}),": Uses the default accent color from the theme."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"{theme('colors')}"}),": Uses the colors defined in the theme."]}),`
`]}),`
`,e.jsx(r.h2,{id:"caretcolor",children:e.jsx(r.code,{children:"caretColor"})}),`
`,e.jsx(r.p,{children:"Controls the color of the text cursor (caret)."}),`
`,e.jsx(n,{language:"tsx",code:`caretColor: ${o.caretColor}`}),`
`,e.jsx(r.h2,{id:"cursor",children:e.jsx(r.code,{children:"cursor"})}),`
`,e.jsx(r.p,{children:"Defines various cursor styles."}),`
`,e.jsx(n,{language:"tsx",code:`cursor: ${JSON.stringify(o.cursor,null,2)}`}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"auto"}),": Default cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"default"}),": Default arrow cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"pointer"}),": Clickable pointer cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"wait"}),": Wait cursor (hourglass)."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"text"}),": Text selection cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"move"}),": Move cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"help"}),": Help cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"not-allowed"}),": Not allowed cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"none"}),": No cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"context-menu"}),": Context menu cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"progress"}),": Progress cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"cell"}),": Table cell cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"crosshair"}),": Crosshair cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"vertical-text"}),": Vertical text cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"alias"}),": Alias cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"copy"}),": Copy cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"no-drop"}),": No drop cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"grab"}),": Grab cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"grabbing"}),": Grabbing cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"all-scroll"}),": All scroll cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"col-resize"}),": Column resize cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"row-resize"}),": Row resize cursor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"n-resize"}),", ",e.jsx(r.code,{children:"e-resize"}),", ",e.jsx(r.code,{children:"s-resize"}),", ",e.jsx(r.code,{children:"w-resize"}),": North, East, South, West resize cursors."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"ne-resize"}),", ",e.jsx(r.code,{children:"nw-resize"}),", ",e.jsx(r.code,{children:"se-resize"}),", ",e.jsx(r.code,{children:"sw-resize"}),": North-East, North-West, South-East, South-West resize cursors."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"ew-resize"}),", ",e.jsx(r.code,{children:"ns-resize"}),": East-West, North-South resize cursors."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"nesw-resize"}),", ",e.jsx(r.code,{children:"nwse-resize"}),": Diagonal resize cursors."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"zoom-in"}),", ",e.jsx(r.code,{children:"zoom-out"}),": Zoom in and out cursors."]}),`
`]}),`
`,e.jsx(r.h2,{id:"scrollmargin",children:e.jsx(r.code,{children:"scrollMargin"})}),`
`,e.jsx(r.p,{children:"Controls the margin around scrollable elements."}),`
`,e.jsx(n,{language:"tsx",code:`scrollMargin: ${o.scrollMargin}`}),`
`,e.jsx(r.h2,{id:"scrollpadding",children:e.jsx(r.code,{children:"scrollPadding"})}),`
`,e.jsx(r.p,{children:"Controls the padding within scrollable elements."}),`
`,e.jsx(n,{language:"tsx",code:`scrollPadding: ${o.scrollPadding}`}),`
`,e.jsx(r.h2,{id:"willchange",children:e.jsx(r.code,{children:"willChange"})}),`
`,e.jsx(r.p,{children:"Specifies which properties will change on an element."}),`
`,e.jsx(n,{language:"tsx",code:`willChange: ${JSON.stringify(o.willChange,null,2)}`}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"auto"}),": Default behavior."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"scroll"}),": Indicates scroll position might change."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"contents"}),": Indicates the contents of the element might change."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"transform"}),": Indicates the element might be transformed."]}),`
`]}),`
`,typeof i=="function"&&i().toString()!==""&&e.jsxs(e.Fragment,{children:[e.jsx(r.h2,{children:"Extended Documentation"}),e.jsx(i,{})]}),`
`,e.jsx(r.h2,{id:"source-code",children:"Source Code"}),`
`,e.jsx(n,{language:"js",code:a}),`
`,typeof c=="function"&&c().toString()!==""&&e.jsxs(e.Fragment,{children:[e.jsx(r.h3,{children:"Extended Source Code"}),e.jsx(c,{})]})]})}function N(s={}){const{wrapper:r}={...t(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(l,{...s})}):l(s)}export{N as default};
