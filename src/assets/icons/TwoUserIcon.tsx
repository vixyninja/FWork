import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

import { theme } from '../../theme';
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
      d="M16.5 12a2.5 2.5 0 1 0 0-5.001 2.5 2.5 0 0 0 0 5.001ZM9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75ZM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
