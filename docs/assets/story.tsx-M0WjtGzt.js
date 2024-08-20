import{j as o}from"./jsx-runtime-DBEcOq3S.js";import{useMDXComponents as n}from"./index-CA_HyBnq.js";import{ae as m,af as p}from"./index-B9NPBQHP.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-B2H5jMKo.js";import"../sb-preview/runtime.js";import"./index-BqTDQIm7.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./_defineProperty-DSxlPr5D.js";import"./_overArg-BZNRQ6_9.js";import"./_baseAssignValue-DD5bxUnJ.js";import"./_getPrototype-By7W0WFf.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";function r(t){const e={h1:"h1",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e.h1,{id:"storybook-story",children:"Storybook Story"}),`
`,o.jsx(m,{title:"Documentation/Components Folder/Files/story.tsx"}),`
`,o.jsx(p,{language:"tsx",code:`import type { Meta, StoryObj } from '@storybook/react';
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
`})]})}function b(t={}){const{wrapper:e}={...n(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(r,{...t})}):r(t)}export{b as default};
