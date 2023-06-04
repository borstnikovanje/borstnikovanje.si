import { cva, type VariantProps } from "class-variance-authority";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { forwardRef } from "react";

export const buttonVariants = cva(
  [
    "transition-colors",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-1",
    "border",
    "inline-flex",
    "items-center",
    "px-6",
    "py-2",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-primary-foreground",
          "text-primary",
          "focus:ring-primary-foreground",
          "border-transparent",
        ],
        white: [
          "bg-primary",
          "text-primary-foreground",
          "focus:ring-primary-foreground",
          "border-transparent",
        ],
        "outline-black": [
          "bg-transparent",
          "text-primary-foreground",
          "border-primary-foreground",
          "focus:ring-primary-foreground",
        ],
        "outline-white": [
          "bg-transparent",
          "text-primary",
          "border-primary",
          "focus:ring-primary-foreground",
        ],
        gradient: ["bg-programme-gradient", "text-primary", "font-medium"],
      },
      size: {
        small: "text-sm",
        base: "text-base",
      },
      fullWidth: {
        true: ["w-full", "justify-center"],
      },
      withIcon: {
        leading: ["flex-row-reverse", "gap-1"],
        trailing: ["flex-row", "gap-1"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "base",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={buttonVariants({ intent, size })} ref={ref} {...props} />
    );
  }
);

Button.displayName = "Button";

export default Button;
