import{j as e}from"./jsx-runtime-DBEcOq3S.js";import{useMDXComponents as s}from"./index-CA_HyBnq.js";import{ae as i,af as r}from"./index-DqyB5r8P.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-5MdjxzLk.js";import"../sb-preview/runtime.js";import"./index-BqTDQIm7.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./_defineProperty-DSxlPr5D.js";import"./_overArg-BZNRQ6_9.js";import"./_baseAssignValue-DD5bxUnJ.js";import"./_getPrototype-By7W0WFf.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";function o(t){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Documentation/Components Folder/Files"}),`
`,e.jsx(n.h2,{id:"component-folder-structure",children:"Component Folder Structure"}),`
`,e.jsxs(n.p,{children:["A component is made up of a few files. The names are ",e.jsx(n.em,{children:"really"})," just a naming convention and you can use this however you want."]}),`
`,e.jsxs(n.p,{children:["While the standarrd files are ",e.jsx(n.code,{children:"component.tsx"}),", ",e.jsx(n.code,{children:"index.ts"}),", ",e.jsx(n.code,{children:"story.tsx"}),", and ",e.jsx(n.code,{children:"variable.tsx"}),"; the only required file is ",e.jsx(n.code,{children:"component.tsx"}),"."]}),`
`,e.jsx(r,{code:`•
├── component.tsx
├── index.ts
├── story.tsx
└── variables.tsx`}),`
`,e.jsx(n.h2,{id:"component-file-types",children:"Component File Types"}),`
`,e.jsx(n.h3,{id:"componenttsx",children:"component.tsx"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import * as React from "react"\r
\r
import { cn } from "@/lib/utils"\r
\r
export interface ComponentProps extends HTMLDivElement {}\r
\r
const Component = React.forwardRef<HTMLDivElement, ComponentProps>(\r
  ({ className, ...props }, ref) => (\r
    <div\r
        className={cn(\r
            "component-level-utility-classes",\r
            "state:component-level-override-classes",\r
            className\r
        )}\r
        ref={ref}\r
        {...props}\r
    />\r
    )\r
  )\r
)\r
Component.displayName = "Component"\r
\r
export { Component }
`})}),`
`,e.jsx(n.h3,{id:"indexts",children:"index.ts"}),`
`,e.jsx(r,{language:"ts",code:"export * from './component';"}),`
`,e.jsx(n.h3,{id:"storytsx",children:"story.tsx"}),`
`,e.jsx(r,{language:"tsx",code:`import type { Meta, StoryObj } from '@storybook/react';
import { Component } from '.';
import { ComponentDemo } from './demo'

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    docs: {
      subtitle: 'Lorem ipsum.',
      description: {
        component: '[Documentation Link](https://example.com)'
      },
    },
  },
  args: { },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {};
export const Demo: Story = {
    render: () => <ComponentDemo />
};
`}),`
`,e.jsx(n.h3,{id:"demotsx",children:"demo.tsx"}),`
`,e.jsx(r,{language:"tsx",code:`import { Component } from "@/components"
   
  export function ComponentDemo() {
    return (
      <Component />
    )
  }
  `}),`
`,e.jsx(n.h3,{id:"docsmdx",children:"docs.mdx"}),`
`,e.jsx(r,{language:"md",code:`import { Meta } from '@storybook/blocks'

# Natura an longa regna solus adigitque crimen

<Meta title="Foo/Bar/Bizz/Bazz" />

## Requiem habet consistuntque undas

Lorem markdownum avenis non circumtulit quis, mora vidit celebrabere. Per
caedit, sollicita [corpora pacis](http://pectus.io/vocat): temone luctibus data
vulgatos. Ministrarum genus vaticinatus hanc dextera, dant canes, hostile. Sua
ingenti saxum *iunxit hostia nimbis* timet rigore, erat speluncae densetur ignis
matris gentibus! Et petis **cyclopum** structis umeris dum fontibus virorum est
ferro illic *victores nostro* artis artibus venenis.

Murmur se garrula? Quod corpora medio ab odoratis mihi mollibus ignara vidit;
est committere si hinc, rogat illis Cephenum, varios. Alis atque, non ausam
hominumque memores alvo est. *Ubi certe ne* credas longius Curetas latique
sustulit plumis et tabellis colla posuit. Ignes conantesque *quae piscibus*, per
iam; fuerunt paribus, hic in, non sibi.
`}),`
`,e.jsx(n.h3,{id:"variantstsx",children:"variants.tsx"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { cva } from "class-variance-authority"\r
\r
\r
const componentVariants = cva(\r
    [\r
        "default-utility-classes",\r
        "hover:default-utility-classes",\r
        "active:default-utility-classes"\r
    ]\r
    {\r
      variants: {\r
        propName: {\r
            variantOption: [\r
                "utility-classes",\r
                "hover:utility-classes",\r
                "active:utility-classes"\r
            ]\r
        },\r
        color: {\r
            red: [\r
                "text-red-500",\r
                "hover:bg-red-500 hover:text-white",\r
                "active:bg-red-500/50",\r
            ],\r
            blue: [\r
                "text-blue-500",\r
                "hover:bg-blue-500 hover:text-white",\r
                "active:bg-blue-500/50",\r
            ]\r
\r
        }\r
      },\r
      defaultVariants: {\r
        propName: "variantOption",\r
        color: "red",\r
      },\r
    }\r
  )\r
\r
export default componentVariants
`})})]})}function M(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{M as default};
