import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function BackArrow(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M6.71 9.88L2.83 6l3.88-3.88A.996.996 0 105.3.71L.71 5.3a.996.996 0 000 1.41L5.3 11.3c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"
        fill={props.fill || "#000"}
        fillOpacity={props.fillOpacity || 0.6}
      />
    </Svg>
  );
}

export default BackArrow;
