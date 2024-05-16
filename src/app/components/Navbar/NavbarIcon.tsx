import { ElementType } from "react"

type IconProps = {
    icon: ElementType
}

export default function NavbarIcon({icon: Icon} : IconProps){
    return(
       <Icon className="w-6 h-6 flex items-center text-violet-500 mt-3" />
    )
}