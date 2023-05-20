import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  [
    "transition-colors",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-1",
    "border",
    "inline-flex",
    "items-center",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-primary-600",
          "text-white",
          "hover:bg-primary-700",
          "focus:ring-primary-500",
          "border-transparent",
        ],
        white: [
          "bg-white",
          "text-primary-500",
          "hover:bg-primary-100",
          "focus:ring-primary-200",
          "border-transparent",
        ],
        success: [
          "bg-success-600",
          "text-white",
          "hover:bg-success-700",
          "focus:ring-success-500",
          "border-transparent",
        ],
        warning: [
          "bg-warning-400",
          "text-warning-900",
          "hover:bg-warning-500",
          "focus:ring-warning-400",
          "border-transparent",
        ],
        error: [
          "bg-error-600",
          "text-error-50",
          "hover:bg-error-700",
          "focus:ring-error-500",
          "border-transparent",
        ],
        ghost: [
          "bg-transparent",
          "text-white",
          "border-white",
          "focus:ring-primary-100",
        ],
        loading: ["bg-primary-900", "text-white", "border-transparent"],
        disabled: [
          "bg-gray-100",
          "text-gray-400",
          "cursor-auto",
          "border-transparent",
        ],
      },
      size: {
        xs: ["text-sm", "px-2.5", "py-1.5"],
        sm: ["text-sm", "px-4", "py-1.5"],
        base: ["text-sm", "px-4", "py-2"],
        l: ["text-base", "px-4", "py-2"],
        xl: ["text-base", "px-6", "py-3"],
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

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export default function Button({
  intent,
  size,
  fullWidth,
  withIcon,
  children,
  ...props
}: Props) {
  return (
    <button
      className={button({ intent, size, fullWidth, withIcon })}
      {...props}
    >
      {children}
    </button>
  );
}
