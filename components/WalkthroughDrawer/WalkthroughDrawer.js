import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
import { View } from "react-native";

export const WalkthroughDrawer = ({ width, height}) => {
  return (
    <Svg
    className="absolute bottom-0"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <G filter="url(#a)">
      <Path
        fill="#181A20"
        fillRule="evenodd"
        d="M0 24v460h430V24c-65.128 31.75-138.033 49.523-215 49.523C138.033 73.523 65.128 55.75 0 24Z"
        clipRule="evenodd"
      />
    </G>
    <Defs></Defs>
  </Svg>
  );
};