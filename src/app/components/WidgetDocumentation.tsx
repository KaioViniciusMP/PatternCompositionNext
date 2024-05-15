'use client' //precisa disso ao usar o onClick
import { Bell, X, Check } from "lucide-react";
import { Notification } from "./Notification";

export default function WidgetDocumentation(){
    return(
        <>
        <Notification.Root>
          <Notification.NotificationIcon icon={Bell} />
          <Notification.NotificationContent>
            Seja muito Bem vindo a Postall Log
          </Notification.NotificationContent>

          <Notification.ActionsButton>
            <Notification.ActionButton onClick={() => console.log("cancel")}>
              <Notification.NotificationIcon icon={X} />
            </Notification.ActionButton>

            <Notification.ActionButton onClick={() => console.log("confirm")}>
              <Notification.NotificationIcon icon={Check} />
            </Notification.ActionButton>
          </Notification.ActionsButton>
        </Notification.Root>
        </>
    )
}