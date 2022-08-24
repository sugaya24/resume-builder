// @ts-nocheck
import { Path, Svg } from "@react-pdf/renderer";
import React from "react";

function LocationMarkerIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ddd"
      viewBox="0 0 24 24"
      stroke-width="2"
      width={12}
      height={12}
    >
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </Svg>
  );
}

export default LocationMarkerIcon;
