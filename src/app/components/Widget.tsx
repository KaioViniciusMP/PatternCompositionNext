import { Check, Rocket, X } from "lucide-react";
import { NotificationIcon } from "./NotificationRocket/NotificationIcon";
import { NotificationRoot } from "./NotificationRocket/NotificationRoot";
import { NotificationContent } from "./NotificationRocket/NotificationContent";
import { NotificationActions } from "./NotificationRocket/NotificationActions";
import NotificationActionButton from "./NotificationRocket/NotificationActionButton";

export function Widget() {
    return (
        <div className="m-5">
            <div className="bg-zinc-200 dark:bg-zinc-800 pt-4 px-6 flex items-center justify-between">
                <span className="font-bold">Notificações</span>
                <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
                    MARCAR TODAS COMO VISTAS
                </button>
            </div>

            <div>
                <div className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
                    Recentes
                </div>
                <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
                    <NotificationRoot>
                        <NotificationIcon icon={Rocket} />
                        <NotificationContent text="Bem vindo a esse projeto" />
                        <NotificationActions>
                            <NotificationActionButton onClick={() => { }} icon={X} />
                            <NotificationActionButton onClick={() => { }} icon={Check} />
                        </NotificationActions>
                    </NotificationRoot>
                </div>
            </div>

            <div>
                <div className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
                    Antigas
                </div>
                <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
                    <NotificationRoot>
                        <NotificationIcon icon={Rocket} />
                        <NotificationContent text="Bem vindo a esse projeto" />
                        <NotificationActions>
                            <NotificationActionButton onClick={() => { }} icon={Check} />
                        </NotificationActions>
                    </NotificationRoot>
                </div>
            </div>
            <div>
                <div className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
                    Antigas
                </div>
                <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
                    <NotificationRoot>
                        <NotificationContent text="Bem vindo a esse projeto" />
                        <NotificationActions>
                            <NotificationActionButton onClick={() => { }} icon={Check} />
                        </NotificationActions>
                    </NotificationRoot>
                </div>
            </div>
        </div>
    )
}