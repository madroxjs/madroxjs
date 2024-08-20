import { forwardRef} from 'react'
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"
import { someAtomVariants } from '.'

import { cn } from "@/lib/utils"

export interface SomeAtomProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof someAtomVariants> {
  asChild?: boolean
}

const SomeAtom = forwardRef<HTMLDivElement, SomeAtomProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(someAtomVariants({ className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
SomeAtom.displayName = "SomeAtom"

export { SomeAtom }
