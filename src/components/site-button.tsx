import { type ButtonHTMLAttributes, type ReactNode } from "react";

type SiteButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export function SiteButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: SiteButtonProps) {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-soft",
    secondary:
      "border border-primary/20 bg-background text-primary hover:border-primary/50 hover:bg-leaf-pale",
    light: "bg-background text-primary hover:bg-leaf-pale",
  };

  return (
    <button
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}