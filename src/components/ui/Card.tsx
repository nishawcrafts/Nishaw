import React from "react";

type CardVariant = "solid" | "dashed" | "accent";
type CardPadding = "none" | "sm" | "md" | "lg";

interface CardProps {
  variant?: CardVariant;
  padding?: CardPadding;
  hoverable?: boolean;
  accentColor?: string;  // CSS colour value for accent-band top border
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

const paddingMap: Record<CardPadding, string> = {
  none: "0",
  sm:   "16px",
  md:   "24px",
  lg:   "32px",
};

export function Card({
  variant = "solid",
  padding = "md",
  hoverable = false,
  accentColor,
  children,
  className = "",
  id,
  style,
}: CardProps) {
  const baseClass =
    variant === "dashed"
      ? "card-dashed"
      : variant === "accent"
      ? `card-accent ${hoverable ? "card-hover" : ""}`
      : `card ${hoverable ? "card-hover" : ""}`;

  return (
    <div
      id={id}
      className={`${baseClass} ${className}`}
      style={{
        padding: paddingMap[padding],
        ...(variant === "accent" && accentColor
          ? { borderTopColor: accentColor }
          : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
