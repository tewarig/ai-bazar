import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { FileVideo , description, Images} from "lucide-react";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


