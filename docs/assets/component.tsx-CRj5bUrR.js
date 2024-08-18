import{j as e}from"./jsx-runtime-DBEcOq3S.js";import{useMDXComponents as s}from"./index-CA_HyBnq.js";import{ae as r,af as o}from"./index-CQGfXO-m.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-W4cvx9L_.js";import"../sb-preview/runtime.js";import"./index-BqTDQIm7.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./_defineProperty-DSxlPr5D.js";import"./_overArg-BZNRQ6_9.js";import"./_baseAssignValue-DD5bxUnJ.js";import"./_getPrototype-By7W0WFf.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";function i(t){const n={code:"code",h1:"h1",h3:"h3",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"component-file",children:"Component File"}),`
`,e.jsx(r,{title:"Documentation/Components Folder/Files/component.tsx"}),`
`,e.jsx(n.p,{children:"Components are written in React, with Tailwind, Radix UI (via ShadCn/ui), GraphQL (via Apollo). They follow Atomic Design hierarchy and utilize tailwind-merge, clsx, and class-variance-authority to handle classes."}),`
`,e.jsx(n.h3,{id:"bare-component",children:"Bare Component"}),`
`,e.jsx(n.p,{children:"A bare component doesn't have any variants. The is the simpilist way to write a new component."}),`
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
`,e.jsx(n.h3,{id:"component-with-variants",children:"Component with Variants"}),`
`,e.jsxs(n.p,{children:["Variants targeted with attributes like ",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"color"}),", ",e.jsx(n.code,{children:"outline"}),", etc."]}),`
`,e.jsx(o,{language:"tsx",code:`

`}),`
`,e.jsx(n.h3,{id:"component-with-subcomponents",children:"Component with Subcomponents"}),`
`,e.jsxs(n.p,{children:["A component that has additional components defined in it's ",e.jsx(n.code,{children:"component.tsx"})," file. These"]}),`
`,e.jsx(o,{language:"tsx",code:""})]})}function D(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{D as default};
