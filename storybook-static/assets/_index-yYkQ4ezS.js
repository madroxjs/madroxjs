import{j as e}from"./jsx-runtime-DBEcOq3S.js";import{useMDXComponents as t}from"./index-CA_HyBnq.js";import{ae as c}from"./index-DqyB5r8P.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-5MdjxzLk.js";import"../sb-preview/runtime.js";import"./index-BqTDQIm7.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./_defineProperty-DSxlPr5D.js";import"./_overArg-BZNRQ6_9.js";import"./_baseAssignValue-DD5bxUnJ.js";import"./_getPrototype-By7W0WFf.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";const i=""+new URL("1_hello_world-C2KOhCPH.png",import.meta.url).href,d=""+new URL("3_children-D6AtV2L7.png",import.meta.url).href,r=({src:o})=>{const n={img:"img",...t()};return e.jsx(n.img,{src:o})};function s(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Documentation/How To Create/Pages/Manually"}),`
`,`
`,e.jsx(n.h1,{id:"creating-a-custom-atom-from-scratch",children:"Creating a Custom Atom from Scratch"}),`
`,`
`,e.jsxs(n.p,{children:["First create a ",e.jsx(n.code,{children:"Component"})," folder in ",e.jsx(n.code,{children:"./src/components/Atoms"})," with both a ",e.jsx(n.code,{children:"component.tsx"})," and an ",e.jsx(n.code,{children:"index.ts"})," file."]}),`
`,e.jsx(n.h2,{id:"files",children:"Files"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`•\r
└── components/\r
    └── Atoms/\r
        └── Atom/\r
            ├── component.tsx\r
            ├── index.ts\r
            └── story.tsx
`})}),`
`,e.jsxs(n.p,{children:['Create a simple "hello world" Atom in ',e.jsx(n.code,{children:"component.tsx"})," and export it from ",e.jsx(n.code,{children:"index.ts"}),":"]}),`
`,e.jsx(n.h3,{id:"componenttsx",children:e.jsx(n.code,{children:"component.tsx"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const Atom = () => <div>Hello World</div>
`})}),`
`,e.jsx(n.h3,{id:"indexts",children:e.jsx(n.code,{children:"index.ts"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export * from './component'
`})}),`
`,e.jsx(n.h3,{id:"storytsx",children:e.jsx(n.code,{children:"story.tsx"})}),`
`,e.jsxs(n.p,{children:["Then import the Atom component into a Storybook ",e.jsx(n.code,{children:"story.tsx"})," file"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type { Meta, StoryObj } from '@storybook/react';\r
import { Atom } from '.';\r
\r
const meta: Meta<typeof Atom> = {\r
  component: Atom,\r
  title: "Components/Atoms/Atom"\r
};\r
\r
export default meta;\r
type Story = StoryObj<typeof Atom>;\r
\r
export const Default: Story = {};
`})}),`
`,e.jsx(r,{src:i}),`
`,e.jsx(n.h2,{id:"pass-down-those-props",children:"Pass Down Those Props"}),`
`,e.jsx(n.p,{children:"But this is Typescript! Guess what we need."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`type AtomProps = React.HTMLAttributes<HTMLDivElement>\r

`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"AtomProps"})," type is really the ",e.jsx(n.code,{children:"HTMLAttributes"})," from the ",e.jsx(n.code,{children:"HTMLDivElement"}),". This way we can inherit things like ",e.jsx(n.code,{children:"children"})," and ",e.jsx(n.code,{children:"className"}),"."]}),`
`,e.jsxs(n.p,{children:["Set those ",e.jsx(n.code,{children:"AtomsProps"})," to the ",e.jsx(n.code,{children:"props"})," argument in the Atom component and pass it along."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const Atom = (props:AtomProps) => <div {...props} />\r

`})}),`
`,e.jsxs(n.p,{children:["And update the story show some children, and let's throw an empty ",e.jsx(n.code,{children:"className"})," on there."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const Default: Story = {\r
  args: {\r
    className: "",\r
    children: "Hello universe!"\r
  }\r
};\r
\r

`})}),`
`,e.jsxs(n.p,{children:["Now when you go to the ",e.jsx(n.a,{href:"http://localhost:7001/?path=/docs/components-atoms-atom--docs",rel:"nofollow",children:"story in Storybook"})," you'll see your children set from the story."]}),`
`,e.jsx(r,{src:d}),`
`,e.jsx(n.p,{children:"There's also an empty textbox for className."})]})}function T(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{r as Image,T as default};
