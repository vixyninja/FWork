import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M38 8h-4v18H8v4c0 1.1.9 2 2 2h22l8 8V10c0-1.1-.9-2-2-2Zm-8 12V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v28l8-8h20c1.1 0 2-.9 2-2Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
