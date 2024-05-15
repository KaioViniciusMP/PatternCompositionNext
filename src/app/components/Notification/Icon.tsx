import { ElementType } from "react";

type IconProps = {
  icon: ElementType;
};

export function Icon({ icon: Icon }: IconProps) {
  return <Icon className="w-6 h-6 text-violet-500 mt-3"/>;
}