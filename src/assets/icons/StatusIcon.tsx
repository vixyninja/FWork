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
      d="M31.32 14.96 17.18 29.1 8.7 20.62l2.82-2.82 5.66 5.66L28.5 12.14l2.82 2.82ZM4 19.9c0-4.66 2.04-8.84 5.24-11.76L14 12.9V.9H2l4.4 4.4C2.48 8.94 0 14.12 0 19.9c0 10.38 7.9 18.9 18 19.9v-4.04c-7.88-.98-14-7.72-14-15.86Zm36 0C40 9.52 32.1 1 22 0v4.04c7.88.98 14 7.72 14 15.86 0 4.66-2.04 8.84-5.24 11.76L26 26.9v12h12l-4.4-4.4c3.92-3.64 6.4-8.82 6.4-14.6Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
