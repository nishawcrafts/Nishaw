import React from "react";

interface DividerProps {
  variant?: "solid" | "dashed" | "diamond";
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Divider({
  variant = "diamond",
  label = "♦",
  className = "",
  style,
}: DividerProps) {
  if (variant === "solid")
    return <hr className={`hairline ${className}`} aria-hidden="true" style={style} />;
  if (variant === "dashed")
    return <hr className={`hairline-dashed ${className}`} aria-hidden="true" style={style} />;

  return (
    <div
      className={`diamond-divider ${className}`}
      aria-hidden="true"
      style={style}
    >
      {label}
    </div>
  );
}
