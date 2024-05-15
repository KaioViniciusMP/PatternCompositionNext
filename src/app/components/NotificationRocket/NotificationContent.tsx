interface ContentProps {
    text: string;
}

export function NotificationContent({ text }: ContentProps) {
    return <div>{text}</div>;
}