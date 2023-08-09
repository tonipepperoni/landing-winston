import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva("focus:outline-none outline-none border-none", {
  variants: {
    variant: {
      primary:
        "block w-full min-w-[400px] py-6 bg-secondary text-2xl text-white",
      secondary: "bg-transparent",
    },
    size: {
      default: "w-full min-w-[400px] py-6 text-2xl",
      small: "w-full h-auto",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, asChild = false, ...props }) => {
    const Comp = asChild ? Slot : "input";
    return (
      <Comp
        className={cn(inputVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

export { Input, inputVariants };
