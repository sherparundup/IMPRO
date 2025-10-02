import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ClassValue type comes from clsx
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
