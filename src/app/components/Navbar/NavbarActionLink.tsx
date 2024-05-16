import { ButtonHTMLAttributes, LinkHTMLAttributes } from "react";

interface NavbarActionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string,
}
export function NavbarActionLink({text, ...rest}:NavbarActionLinkProps){
    return(
        <a {...rest} className="text-white font-bold">{text}</a>
    )
}