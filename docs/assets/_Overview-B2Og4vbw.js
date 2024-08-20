import{j as e}from"./jsx-runtime-DBEcOq3S.js";import{useMDXComponents as i}from"./index-CA_HyBnq.js";import{ae as r,af as o}from"./index-B9NPBQHP.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-B2H5jMKo.js";import"../sb-preview/runtime.js";import"./index-BqTDQIm7.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./_defineProperty-DSxlPr5D.js";import"./_overArg-BZNRQ6_9.js";import"./_baseAssignValue-DD5bxUnJ.js";import"./_getPrototype-By7W0WFf.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";function s(n){const t={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Documentation/Components Folder/Files/Overview"}),`
`,e.jsx(t.h2,{id:"component-folder-structure",children:"Component Folder Structure"}),`
`,e.jsxs(t.p,{children:["A component is made up of a few files. The names are ",e.jsx(t.em,{children:"really"})," just a naming convention and you can use this however you want."]}),`
`,e.jsxs(t.p,{children:["While the standarrd files are ",e.jsx(t.code,{children:"component.tsx"}),", ",e.jsx(t.code,{children:"index.ts"}),", ",e.jsx(t.code,{children:"story.tsx"}),", and ",e.jsx(t.code,{children:"variable.tsx"}),"; the only required file is ",e.jsx(t.code,{children:"component.tsx"}),"."]}),`
`,e.jsx(o,{code:`•
├── component.tsx
├── index.ts
├── story.tsx
└── variables.tsx`}),`
`,e.jsx(t.h2,{id:"component-file-types",children:"Component File Types"}),`
`,e.jsx(t.h3,{id:"componenttsx",children:"component.tsx"}),`
`,e.jsx(o,{language:"tsx",code:`import * as React from "react"

import { cn } from "@/lib/utils"

export interface ComponentProps extends HTMLDivElement {}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, ...props }, ref) => (
    <div
        className={cn(
            "component-level-utility-classes",
            "state:component-level-override-classes",
            className
        )}
        ref={ref}
        {...props}
    />
    )
  )
)
Component.displayName = "Component"

export { Component }
`}),`
`,e.jsx(t.h3,{id:"indexts",children:"index.ts"}),`
`,e.jsx(o,{language:"ts",code:"export * from './component';"}),`
`,e.jsx(t.h3,{id:"storytsx",children:"story.tsx"}),`
`,e.jsx(o,{language:"tsx",code:`import type { Meta, StoryObj } from '@storybook/react';
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
`,e.jsx(t.h3,{id:"demotsx",children:"demo.tsx"}),`
`,e.jsx(o,{language:"tsx",code:`import { Component } from "@/components"
   
  export function ComponentDemo() {
    return (
      <Component />
    )
  }
  `}),`
`,e.jsx(t.h3,{id:"docsmdx",children:"docs.mdx"}),`
`,e.jsx(o,{language:"md",code:`import { Meta } from '@storybook/blocks'

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
`,e.jsx(t.h3,{id:"variantstsx",children:"variants.tsx"}),`
`,e.jsx(o,{language:"tsx",code:`import { cva } from "class-variance-authority"


const componentVariants = cva(
    [
        "default-utility-classes",
        "hover:default-utility-classes",
        "active:default-utility-classes"
    ]
    {
      variants: {
        propName: {
            variantOption: [
                "utility-classes",
                "hover:utility-classes",
                "active:utility-classes"
            ]
        },
        color: {
            red: [
                "text-red-500",
                "hover:bg-red-500 hover:text-white",
                "active:bg-red-500/50",
            ],
            blue: [
                "text-blue-500",
                "hover:bg-blue-500 hover:text-white",
                "active:bg-blue-500/50",
            ]

        }
      },
      defaultVariants: {
        propName: "variantOption",
        color: "red",
      },
    }
  )

export default componentVariants`})]})}function M(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{M as default};
