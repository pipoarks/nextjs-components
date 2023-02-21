import React from "react";

import { useIconSize } from "../contexts/IconSizeContext";
import { Props } from "./props";

export default function CloudDrizzle({ color = "currentcolor", size }: Props) {
  const iconSize = useIconSize();
  return (
    <svg
      fill="none"
      height={size || iconSize.size}
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width={size || iconSize.size}
      style={{ color }}
    >
      <path d="M8 19v2"></path>
      <path d="M8 13v2"></path>
      <path d="M16 19v2"></path>
      <path d="M16 13v2"></path>
      <path d="M12 21v2"></path>
      <path d="M12 15v2"></path>
      <path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25"></path>
    </svg>
  );
}
