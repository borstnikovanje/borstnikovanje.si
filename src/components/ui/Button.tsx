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
    "px-6",
    "py-2",
    "text-sm",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-primary-500",
          "text-white",
          "hover:bg-primary-600",
          "focus:ring-primary-500",
          "border-transparent",
        ],
        white: [
          "bg-white",
          "text-neutral-950",
          "hover:bg-primary-100",
          "focus:ring-primary-200",
          "border-transparent",
        ],
        "outline-black": ["bg-white", "text-neutral-950", "border-neutral-950"],
        "outline-white": ["bg-transparent", "text-white", "border-white"],
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
    },
  }
);

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export default function Button({
  intent,
  fullWidth,
  withIcon,
  children,
  ...props
}: Props) {
  return (
    <button className={button({ intent, fullWidth, withIcon })} {...props}>
      {children}
    </button>
  );
}
