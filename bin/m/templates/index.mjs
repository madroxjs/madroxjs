import * as changeCase from "change-case";

export const componentTemplate = (componentName) => {
    const componentNameTitleCase = changeCase.pascalCase(componentName)
    const componentNameCamelCase = changeCase.camelCase(componentName)
    return `import { forwardRef} from 'react'
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"
import { ${componentNameCamelCase}Variants } from '.'

import { cn } from "@/lib/utils"

export interface ${componentNameTitleCase}Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ${componentNameCamelCase}Variants> {
  asChild?: boolean
}

const ${componentNameTitleCase} = forwardRef<HTMLDivElement, ${componentNameTitleCase}Props>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(${componentNameCamelCase}Variants({ className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
${componentNameTitleCase}.displayName = "${componentNameTitleCase}"

export { ${componentNameTitleCase} }
`
}

export const  indexTemplate = () => `export * from './component'
export * from './variants'
`

export const storyTemplate = (componentName) => {
    const componentNameTitleCase = changeCase.pascalCase(componentName)

    return `import type { Meta, StoryObj } from '@storybook/react';

import { ${componentNameTitleCase} } from '.';


const meta: Meta<typeof ${componentNameTitleCase}> = {
  component: ${componentNameTitleCase},
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof ${componentNameTitleCase}>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
`
}

export const variantsTemplate = (componentName) => {
    const componentNameCamelCase = changeCase.camelCase(componentName)

    return `import { cva } from "class-variance-authority"


export const ${componentNameCamelCase}Variants = cva(
    [],
    {
      variants: {},
      defaultVariants: {},
    }
  )

export default ${componentNameCamelCase}Variants`
}

export const documentationTemplate = (componentName, options) => {
  if(options.docs) {
    options
  }


  return (`
    ${componentName}
  `)
}

export const atomTemplate = (componentName) => componentTemplate(componentName)
export const moleculeTemplate = (componentName) => componentTemplate(componentName)
export const organismTemplate = (componentName) => componentTemplate(componentName)
export const templateTemplate = (componentName) => componentTemplate(componentName)
export const pageTemplate = (componentName) => componentTemplate(componentName)