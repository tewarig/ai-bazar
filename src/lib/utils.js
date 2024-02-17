import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { FileVideo , description, Images} from "lucide-react";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function humanize(str) {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
}
