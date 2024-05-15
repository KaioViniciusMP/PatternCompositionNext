import { ElementType } from "react";

type IconProps = {
    icon: ElementType;
};

export function NotificationIcon({ icon: Icon }: IconProps) {
    return <Icon className="w-6 h-6 text-violet-500 mt-3" />;
}