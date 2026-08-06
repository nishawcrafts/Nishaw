import React from "react";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
  style?: React.CSSProperties;
}

export function Eyebrow({
  children,
  className = "",
  as: Tag = "p",
  style,
}: EyebrowProps) {
  return (
    <Tag className={`eyebrow ${className}`} style={style}>
      {children}
    </Tag>
  );
}
