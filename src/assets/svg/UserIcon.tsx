import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function UserIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        opacity={0.4}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.019 18.11a4.364 4.364 0 014.363-4.364h5.237a4.364 4.364 0 014.363 4.363 2.618 2.618 0 01-2.618 2.618H7.637a2.618 2.618 0 01-2.618-2.618z"
        fill="#fff"
      />
      <Path
        d="M12 3.273A4.364 4.364 0 1012 12a4.364 4.364 0 000-8.727z"
        fill="#fff"
      />
    </Svg>
  );
}

export default UserIcon;
