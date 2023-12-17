import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#246BFE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 4.5a2 2 0 0 1 2 2m-7-2.797L11.685 3a5.361 5.361 0 0 1 7.717 0c2.073 2.127 2.137 5.554.144 7.76l-5.726 6.338a3.78 3.78 0 0 1-5.64 0L2.454 10.76C.46 8.554.524 5.127 2.598 3a5.361 5.361 0 0 1 7.717 0l.685.703Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
