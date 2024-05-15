import { ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return <div className="flex bg-slate-800">{children}</div>;
}