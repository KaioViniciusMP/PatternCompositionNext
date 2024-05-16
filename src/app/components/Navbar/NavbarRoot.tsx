import React, { ReactNode } from "react"

interface NavbarRootProps{
    children: ReactNode
}

export default function NavbarRoot({children}: NavbarRootProps) {
    return (
        <header className="flex items-center bg-black h-14 justify-between p-4">
            {children}
        </header>
    )
}