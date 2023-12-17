import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="#246BFE"
      d="M20 0H4C1.8 0 .02 1.8.02 4L0 36c0 2.2 1.78 4 3.98 4H28c2.2 0 4-1.8 4-4V12L20 0Zm8 36H4V4h14v10h10v22ZM8 26.02l2.82 2.82L14 25.68V34h4v-8.32l3.18 3.18L24 26.02 16.02 18 8 26.02Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
