import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#246BFE"
      d="M8.82 17 13 19.28V22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v8.54l-1.5-.82L8.82 17ZM24 17l-5.5-3-5.5 3 5.5 3 5.5-3Zm-9 2.09v2L18.5 23l3.5-1.91v-2L18.5 21 15 19.09Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
