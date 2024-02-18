import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FileVideo, description, Images } from "lucide-react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getValidChildren(children) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  );
}

export function humanize(str) {
  // Capitalize the first letter and remove dashes or underScore also remove %20 from string
  return str.replace(/[_-]|%20/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}
