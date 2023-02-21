import React from "react";

import { useIconSize } from "../contexts/IconSizeContext";
import { Props } from "./props";

export default function StopCircle({ color = "currentcolor", size }: Props) {
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
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9 9h6v6H9z"></path>
    </svg>
  );
}
