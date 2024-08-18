import{j as t}from"./jsx-runtime-DBEcOq3S.js";import{useMDXComponents as i}from"./index-CA_HyBnq.js";import{ae as r,af as o}from"./index-9Gb1hbk7.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Dniuvwnh.js";import"../sb-preview/runtime.js";import"./index-BqTDQIm7.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./_defineProperty-DSxlPr5D.js";import"./_overArg-BZNRQ6_9.js";import"./_baseAssignValue-DD5bxUnJ.js";import"./_getPrototype-By7W0WFf.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";function s(n){const e={h2:"h2",h3:"h3",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Documentation/Components/File Types/Overview"}),`
`,t.jsx(e.h2,{id:"component-folder-structure",children:"Component Folder Structure"}),`
`,t.jsx(o,{code:`•
├── component.tsx
├── index.ts
├── story.tsx
├── demo.tsx
├── docs.mdx
└── variables.tsx`}),`
`,t.jsx(e.h2,{id:"component-file-types",children:"Component File Types"}),`
`,t.jsx(e.h3,{id:"componenttsx",children:"component.tsx"}),`
`,t.jsx(o,{language:"tsx",code:`import * as React from "react"

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
`,t.jsx(e.h3,{id:"indexts",children:"index.ts"}),`
`,t.jsx(o,{language:"ts",code:"export * from './component';"}),`
`,t.jsx(e.h3,{id:"storytsx",children:"story.tsx"}),`
`,t.jsx(o,{language:"tsx",code:`import type { Meta, StoryObj } from '@storybook/react';
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
`,t.jsx(e.h3,{id:"demotsx",children:"demo.tsx"}),`
`,t.jsx(o,{language:"tsx",code:`import { Component } from "@/components"
   
  export function ComponentDemo() {
    return (
      <Component />
    )
  }
  `}),`
`,t.jsx(e.h3,{id:"docsmdx",children:"docs.mdx"}),`
`,t.jsx(o,{language:"md",code:`import { Meta } from '@storybook/blocks'

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
`,t.jsx(e.h3,{id:"variantstsx",children:"variants.tsx"}),`
`,t.jsx(o,{language:"tsx",code:`import { cva } from "class-variance-authority"


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

export default componentVariants`})]})}function M(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{M as default};
