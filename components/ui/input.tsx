import * as React from "react"

import { cn } from "@/libs/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-white/10 bg-bg-secondary px-3 py-2 text-base text-white placeholder:text-text-muted file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:border-brand-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-200",
          error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-0",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
