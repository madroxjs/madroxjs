import{j as t}from"./jsx-runtime-DBEcOq3S.js";import{useMDXComponents as s}from"./index-CA_HyBnq.js";import{ae as m,af as n}from"./index-CedqTxrV.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DfedjKFc.js";import"../sb-preview/runtime.js";import"./index-BqTDQIm7.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./_defineProperty-DSxlPr5D.js";import"./_overArg-BZNRQ6_9.js";import"./_baseAssignValue-DD5bxUnJ.js";import"./_getPrototype-By7W0WFf.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";function r(o){const e={h1:"h1",h2:"h2",h3:"h3",h4:"h4",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"atomic-folder-structure",children:"Atomic Folder Structure"}),`
`,t.jsx(m,{title:"Documentation/Components/Folder Structure"}),`
`,t.jsx(n,{code:`•
└── components
    ├── Atoms/
    ├── Molecules/
    ├── Organisms/
    ├── Templates/
    ├── Pages/
    └── index.ts`}),`
`,t.jsx(e.h2,{id:"general-component-folder-structure",children:"General Component Folder Structure"}),`
`,t.jsx(n,{code:`•
└── components/
    └── {AtomicType}/
        └── {ComponentName}/
            ├── component.tsx
            ├── index.ts
            ├── story.ts
            ├── variables.tsx
            ├── demo.tsx
            └── docs.mdx`}),`
`,t.jsx(e.h3,{id:"pages-specific-folder-structure",children:"Pages Specific Folder Structure"}),`
`,t.jsx(n,{code:`•
└── components/
    └── Pages
        └── path-segment
            ├── component.tsx
            ├── demo.tsx
            ├── index.ts
            ├── story.ts
            ├── docs.mdx
            └── variables.tsx`}),`
`,t.jsx(e.h4,{id:"index-folder-structure",children:"Index Folder Structure"}),`
`,t.jsx(n,{code:`•
└── components/
    └── Pages
        ├── _index
        └── foobar
            └── _index`})]})}function y(o={}){const{wrapper:e}={...s(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{y as default};
