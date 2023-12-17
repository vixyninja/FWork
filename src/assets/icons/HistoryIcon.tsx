import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={36}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M24 0C14.06 0 6 8.06 6 18H0l7.78 7.78.14.28L16 18h-6c0-7.74 6.26-14 14-14s14 6.26 14 14-6.26 14-14 14c-3.86 0-7.36-1.58-9.88-4.12l-2.84 2.84C14.54 33.98 19.02 36 24 36c9.94 0 18-8.06 18-18S33.94 0 24 0Zm-2 10v10l8.56 5.08L32 22.66l-7-4.16V10h-3Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
