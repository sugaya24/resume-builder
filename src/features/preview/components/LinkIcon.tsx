// @ts-nocheck
import { Path, Svg } from "@react-pdf/renderer";
import React from "react";

function LinkIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="#ddd"
      stroke-width="2"
      width={12}
      height={12}
    >
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </Svg>
  );
}

export default LinkIcon;
