import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={12}
    fill="none"
    {...props}
  >
    <Path fill="#246BFE" d="M0 12h12v-2H0v2ZM0 0v2h18V0H0Zm0 7h18V5H0v2Z" />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
