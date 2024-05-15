import { ButtonHTMLAttributes, ElementType } from "react"

interface NotificationActionsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ElementType
}

export default function NotificationActionButton({icon: Icon, ...rest} : NotificationActionsProps) {
    return (
        <button {...rest} className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500">
            <Icon className="w-3 h-3 text-zinc-50" />
        </button>
    )
}