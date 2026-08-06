import React from "react";
import { accentValues, type AccentColor } from "@/lib/tokens";

interface BadgeProps {
  accent?: AccentColor;
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  accent = "gold",
  dot = false,
  children,
  className = "",
}: BadgeProps) {
  const color = accentValues[accent];
  return (
    <span
      className={`badge ${className}`}
      style={{ color, borderColor: color }}
    >
      {dot && (
        <span
          aria-hidden="true"
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: color,
            flexShrink: 0,
            display: "inline-block",
          }}
        />
      )}
      {children}
    </span>
  );
}
