import type { ReactNode } from "react";

interface ButtonSizes {
  sm: string;
  default: string;
  lg: string;
}

interface ButtonProps {
  className?: string;
  size?: keyof ButtonSizes;
  children?: ReactNode;
}

const Button = ({
  className = "",
  size = "default",
  children,
}: ButtonProps) => {
  const primaryClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 cursor-pointer";
  const sizeClasses: ButtonSizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${primaryClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;
