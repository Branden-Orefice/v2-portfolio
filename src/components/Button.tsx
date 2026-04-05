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
    "relative overflow-hidden rounded-full font-medium focus:outline-none cursor-pointer border-primary border-2 text-primary hover:border-muted-foreground hover:text-muted-foreground transition-colors";
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
