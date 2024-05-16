import { ReactNode } from "react"

interface NavbarActionsLinksProps{
    children: ReactNode
}
    
export function NavbarActionsLinks({children}: NavbarActionsLinksProps) {
    return (
        <div className="flex gap-3">
          {children}
        </div>
    )
}

