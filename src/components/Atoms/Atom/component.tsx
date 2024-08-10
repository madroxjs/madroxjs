import { HTMLAttributes } from "react"

type AtomProps = HTMLAttributes<HTMLDivElement>

export const Atom = (props:AtomProps) => <div className="border-4 border-orange-500" {...props} />

Atom.displayName = "Atom"