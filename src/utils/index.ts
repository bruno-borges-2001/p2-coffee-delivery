import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export function formatPrice(price: number) {
  return (price / 100).toFixed(2).replace('.', ',')
}