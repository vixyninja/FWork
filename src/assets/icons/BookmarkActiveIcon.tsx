import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#246BFE"
      d="M12 0H2C.9 0 .01.9.01 2L0 18l7-3 7 3V2c0-1.1-.9-2-2-2Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
