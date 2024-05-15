import { Check, X } from "lucide-react"

interface NotificationActionsProps{
    //onCancelAction: () => void
    //onSubmitAction: () => void
}

export function NotificationActions({/*onCancelAction, onSubmitAction*/} : NotificationActionsProps){
    return(
        <div className="flex gap-2 self-center">
            <button  className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500">
                <X className="w-3 h-3 text-zinc-50"/>
            </button>
            <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500">
                <Check className="w-3 h-3 text-zinc-50"/>
            </button>
        </div>
    )
}