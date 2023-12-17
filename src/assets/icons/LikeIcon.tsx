import * as React from 'react';
import { memo } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#246BFE"
      fillRule="evenodd"
      d="m10 2.524.765-.822c2.113-2.27 5.538-2.27 7.65 0 2.113 2.27 2.113 5.95 0 8.22l-6.885 7.397a2.06 2.06 0 0 1-3.06 0L1.584 9.922c-2.112-2.27-2.112-5.95 0-8.22 2.113-2.27 5.538-2.27 7.65 0l.766.822Zm5-.274a.75.75 0 0 0 0 1.5c.69 0 1.25.56 1.25 1.25a.75.75 0 0 0 1.5 0A2.75 2.75 0 0 0 15 2.25Z"
      clipRule="evenodd"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
