import { cva, cx, VariantProps } from "class-variance-authority";
import React from "react";

const textVariants = cva("antialiased", {
  variants: {
    variant: {
      normal: "normal-case",
      uppercase: "uppercase",
    },
    color: {
      primary: "text-white",
      secondary: "text-secondary",
      cream: "text-cream",
      sand: "text-sand",
    },
  },
  defaultVariants: {
    variant: "normal",
    color: "primary",
  },
});

export interface UiTxtProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
  style?: any;
}
const Text = ({
  variant,
  children,
  color,
  className,
  style,
  ...props
}: UiTxtProps) => {
  return (
    <span
      style={style}
      className={cx(textVariants({ variant, color }), className)}
      {...props}
    >
      {children}
    </span>
  );
};

export { Text, textVariants };
