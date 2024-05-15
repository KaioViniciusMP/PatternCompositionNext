import Image from "next/image";
'use client' //precisa disso ao usar o onClick
import { Bell, X, Check } from "lucide-react";
import { Notification } from "./components/Notification";

export default function Home() {
  return (
    <main>
      <div className="bg-black w-80 rounded-ee">
        <div className="flex bg-white/20">
          <h1 className="font-bold">Notificações</h1>
          <h1 className="font-bold text-purple-800">Marcar todas como lidas</h1>
        </div>
        <label className="text-gray-400">Recentes</label>

        <Notification.Root>
          <Notification.Icon icon={Bell} />
          <Notification.Content>
            Seja muito Bem vindo a Postall Log
          </Notification.Content>

          <Notification.ActionsButton>
            <Notification.ActionButton onClick={() => console.log("cancel")}>
              <Notification.Icon icon={X} />
            </Notification.ActionButton>

            <Notification.ActionButton onClick={() => console.log("confirm")}>
              <Notification.Icon icon={Check} />
            </Notification.ActionButton>
          </Notification.ActionsButton>
        </Notification.Root>
      </div>
    </main>
  );
}
