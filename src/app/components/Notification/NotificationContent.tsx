interface ContentProps {
    children: string;
}

export function NotificationContent({ children }: ContentProps) {
    return <div>{children}</div>;
}