import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PresentationChartLineIcon } from "@heroicons/react/24/solid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const links = [
  { name: "Panel", href: "/", icon: PresentationChartLineIcon },
];
