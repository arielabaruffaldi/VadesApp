import React from 'react';
import Svg, {SvgProps, G, Circle, Path} from 'react-native-svg';

function Search({style}) {
  return (
    <Svg width="16" height="17" fill="none" viewBox="0 0 16 17" style={style}>
      <Path
        fill="#3C3C43"
        fillOpacity="0.6"
        d="M6.564 13.747a6.382 6.382 0 003.71-1.196l3.935 3.935a.94.94 0 00.672.274c.54 0 .93-.415.93-.947a.914.914 0 00-.266-.664l-3.91-3.918a6.358 6.358 0 001.312-3.868c0-3.511-2.872-6.383-6.383-6.383C3.044.98.181 3.852.181 7.363s2.863 6.384 6.383 6.384zm0-1.378c-2.748 0-5.005-2.267-5.005-5.006 0-2.739 2.257-5.005 5.005-5.005 2.74 0 5.005 2.266 5.005 5.005 0 2.74-2.266 5.006-5.005 5.006z"
      />
    </Svg>
  );
}

export default Search;
