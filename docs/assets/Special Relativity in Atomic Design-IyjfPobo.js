import{j as e}from"./jsx-runtime-DBEcOq3S.js";import{useMDXComponents as s}from"./index-CA_HyBnq.js";import{ae as a,af as o}from"./index-CQGfXO-m.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-W4cvx9L_.js";import"../sb-preview/runtime.js";import"./index-BqTDQIm7.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./_defineProperty-DSxlPr5D.js";import"./_overArg-BZNRQ6_9.js";import"./_baseAssignValue-DD5bxUnJ.js";import"./_getPrototype-By7W0WFf.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";function i(t){const n={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"special-relativity-in-atomic-design",children:"Special Relativity in Atomic Design"}),`
`,e.jsx(a,{title:"Documentation/Atomic Design/Special Relativity in Atomic Design"}),`
`,e.jsx(n.h2,{id:"general-relativity-in-atomic-design",children:"General Relativity in Atomic Design"}),`
`,e.jsx(n.p,{children:'In the "general relativity" framework of atomic design, as popularized by Brad Frost, the definitions and roles are universally agreed upon:'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Atoms"}),": Fundamental, stateless building blocks like buttons, inputs, and labels. They are the simplest UI components and purely presentational."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Molecules"}),": Combinations of atoms that form more complex components. Molecules manage local state or contain subcomponents, allowing for interactive and functional UI elements like a form group with an input and label."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Organisms"}),": More complex structures composed of groups of molecules and atoms, such as a header or a user profile section. Organisms might manage more extensive local state and interactions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Templates"}),": Page-level layouts that combine organisms to create page structures without specific content. They define the layout and structure."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pages"}),": Templates filled with actual content, delivering the final product. Pages are the highest level in this hierarchy, representing fully realized web pages."]}),`
`]}),`
`,e.jsx(n.h2,{id:"special-relativity-in-atomic-design-1",children:"Special Relativity in Atomic Design"}),`
`,e.jsx(n.p,{children:'In the "special relativity" framework, atomic design is tailored to the needs and architecture of a specific design library. Here, molecules manage local state or have subcomponents, making them key players in managing interactions and functionality:'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Atoms"}),": Defined as stateless, fundamental building blocks specific to the design library. They are the simplest components and are purely presentational."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Molecules"}),": Components that manage local state or have subcomponents. They are versatile and complex, handling specific interactions and state requirements within the design library. Examples include a dropdown menu or a form field with validation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Organisms"}),": Complex components that may leverage GraphQL (or a similar state management system) to manage and pass down state. They combine molecules and atoms to form sophisticated structures within the design library, such as a dashboard or a navigation bar."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Templates and Pages"}),": In this special relativity framework, templates and pages might be seen as interchangeable. Both are used to arrange organisms and create comprehensive layouts, with templates focusing on structure and pages on final content delivery."]}),`
`]}),`
`,e.jsx(o,{code:`•
└── components
    ├── Atoms/
    ├── Molecules/
    ├── Organisms/
    ├── Templates/
    ├── Pages/
    └── index.ts`})]})}function D(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{D as default};
