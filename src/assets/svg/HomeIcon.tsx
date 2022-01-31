import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { TabBarProps } from "./constants";

const HomeIcon = ({ isActive, ...props }: TabBarProps) => (
  <Svg width={28} height={28} fill="none" {...props}>
    {isActive ? (
      <Path
        d="M13.929 2.564c-1.187-.014-2.349.378-3.173 1.203l-8.094 8.275a1.132 1.132 0 00-.218 1.313L3.5 15.47l-.036 6.673a2.36 2.36 0 002.37 2.37h3.719a2.12 2.12 0 002.114-2.115V18.54c0-1.212.982-2.195 2.194-2.195h.278c1.212 0 2.194.983 2.194 2.195v3.858a2.12 2.12 0 002.114 2.114h3.72a2.365 2.365 0 002.369-2.37l-.036-6.671 1.057-2.115c.225-.449.136-.994-.218-1.35L17.173 3.84c-.846-.846-2.06-1.262-3.244-1.275z"
        fill="#D3375C"
      />
    ) : (
      <Path
        d="M14.41 2.564c-1.186-.014-2.348.378-3.172 1.203l-8.094 8.275a1.131 1.131 0 00-.218 1.313l1.057 2.114-.037 6.673a2.36 2.36 0 002.37 2.37h4.886a2.12 2.12 0 002.114-2.115v-5.032c0-.564.456-1.02 1.02-1.02h.293c.564 0 1.02.456 1.02 1.02v5.032a2.12 2.12 0 002.116 2.114h4.884a2.365 2.365 0 002.37-2.37l-.036-6.671 1.057-2.115c.225-.449.136-.994-.218-1.35L17.654 3.84c-.846-.846-2.06-1.262-3.245-1.275zm0 2.333c.587.012 1.173.225 1.567.62.678.676 6.459 6.457 7.584 7.583l-.802 1.567c-.082.164-.11.328-.11.51l.037 6.965a.035.035 0 01-.037.036h-4.666v-4.813c0-1.853-1.5-3.354-3.354-3.354h-.292a3.352 3.352 0 00-3.354 3.354v4.813H6.316c-.024 0-.036-.013-.036-.036l.036-6.964a1.083 1.083 0 00-.11-.511l-.801-1.603 7.474-7.657c.36-.36.943-.523 1.531-.51z"
        fill="#000"
      />
    )}
  </Svg>
);

export default React.memo(HomeIcon);