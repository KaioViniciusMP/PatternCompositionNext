import { ButtonHTMLAttributes, LinkHTMLAttributes } from "react";

interface NavbarActionLinkProps {
    text: string
}
export function NavbarActionLink({text, ...rest}:NavbarActionLinkProps){
    return(
        <h3 {...rest} className="text-white font-bold">{text}</h3>
    )
}