import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M28 34.44H4V10h14V6H4c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V20h-4v14.44Z"
    />
    <Path
      fill="#fff"
      d="M32 0h-4v6h-6c.02.02 0 4 0 4h6v5.98c.02.02 4 0 4 0V10h6V6h-6V0ZM24 14H8v4h16v-4ZM8 20v4h16v-4H8ZM24 26H8v4h16v-4Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
