import React, { ReactNode } from "react"

interface NavbarRootProps{
    children: ReactNode
}

export default function NavbarRoot({children}: NavbarRootProps) {
    return (
        <header className="flex bg-slate-900 h-14 justify-between p-4">
            {children}
        </header>
    )
}