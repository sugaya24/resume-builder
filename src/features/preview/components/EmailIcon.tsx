// @ts-nocheck
import { Path, Svg } from "@react-pdf/renderer";
import React from "react";

function EmailIcon() {
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
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </Svg>
  );
}

export default EmailIcon;
