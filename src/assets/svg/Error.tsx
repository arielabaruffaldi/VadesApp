import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Error({ fill, width, ...props }: SvgProps) {
  return (
    <Svg width={width} height={width} viewBox="0 0 20 20" {...props}>
      <Path
        d="M10 5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1zm-.01-5C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0zM10 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-3H9v-2h2v2z"
        fill={fill}
      />
    </Svg>
  );
}

export default Error;
