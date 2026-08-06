import React from "react";
import Link from "next/link";

type ButtonVariant = "gold" | "ghost" | "ghost-gold";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  id?: string;
  "aria-label"?: string;
}

const variantClass: Record<ButtonVariant, string> = {
  "gold":       "btn btn-gold",
  "ghost":      "btn btn-ghost",
  "ghost-gold": "btn btn-ghost-gold",
};
const sizeClass: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

export function Button({
  variant = "gold",
  size = "md",
  href,
  children,
  className = "",
  leftIcon,
  rightIcon,
  type = "button",
  disabled,
  onClick,
  id,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const cls = [variantClass[variant], sizeClass[size], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={cls} id={id} aria-label={ariaLabel}>
        {leftIcon}
        {children}
        {rightIcon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      disabled={disabled}
      onClick={onClick}
      id={id}
      aria-label={ariaLabel}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
