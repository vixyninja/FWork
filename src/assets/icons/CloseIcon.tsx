import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#EB3223"
      d="M1.707.293.293 1.707 7.586 9 .293 16.293l1.414 1.414L9 10.414l7.293 7.293 1.414-1.414L10.414 9l7.293-7.293L16.293.293 9 7.586 1.707.293Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
