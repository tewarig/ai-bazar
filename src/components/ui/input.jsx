import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, error, type, ...props }, ref) => {
  return (
    <>
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <span className="block text-xs text-red-700	 text-destructive-foreground">
          {error}
        </span>
      )}
    </>
  );
});
Input.displayName = "Input";

const TextArea = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <textarea
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
TextArea.displayName = "TextArea";
export { Input, TextArea };
