import { ReactNode, ButtonHTMLAttributes, ElementType } from "react";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function ActionButton({ children, ...rest }: ActionButtonProps) {
  return (
    <button {...rest}>
      {children}
    </button>
  );
}