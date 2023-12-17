import React from 'react';

import { View } from 'react-native';

import useStyles from './styles';
import { InfoDetailProps } from '../types';
import { StyledText } from '@/components/customs';
import { DetailEnum } from '@/types';

const InfoDetail: React.FunctionComponent<InfoDetailProps> = (props) => {
  const styles = useStyles();
  const selectab = props.selectab;
  const data = props.data;
  React.useEffect(() => {
    return () => {};
  }, [selectab]);

  if (selectab.title === DetailEnum.JOB_DESCRIPTION) {
    return (
      <View style={styles.container}>
        <StyledText fontWeight="bold" style={styles.title}>
          {DetailEnum.JOB_DESCRIPTION}
        </StyledText>
        <StyledText style={styles.contentStyle}>
          {data.jod_description}
        </StyledText>
      </View>
    );
  }
  if (selectab.title === DetailEnum.MINIMUM_QUALIFICATIONS) {
    return (
      <View style={styles.container}>
        <StyledText fontWeight="bold" style={styles.title}>
          {DetailEnum.MINIMUM_QUALIFICATIONS}
        </StyledText>
        {data.minimum_quantification.map((item, index) => (
          <StyledText key={index} style={styles.contentStyle}>
            · {item}
          </StyledText>
        ))}
      </View>
    );
  }
  if (selectab.title === DetailEnum.PERKS_AND_BENEFITS) {
    return (
      <View style={styles.container}>
        <StyledText fontWeight="bold" style={styles.title}>
          {DetailEnum.PERKS_AND_BENEFITS}
        </StyledText>

        {data.perk.map((item, index) => (
          <StyledText key={index} style={styles.contentStyle}>
            · {item}
          </StyledText>
        ))}
      </View>
    );
  }
  if (selectab.title === DetailEnum.REQUIRED_SKILLS) {
    return (
      <View style={styles.container}>
        <StyledText fontWeight="bold" style={styles.title}>
          {DetailEnum.REQUIRED_SKILLS}
        </StyledText>

        {data.require_skill.map((item, index) => (
          <StyledText key={index} style={styles.contentStyle}>
            · {item}
          </StyledText>
        ))}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StyledText fontWeight="bold" style={styles.title}>
        {DetailEnum.ABOUT}
      </StyledText>
      <StyledText style={styles.contentStyle}>
        {data.company.description}
      </StyledText>
    </View>
  );
};

export default InfoDetail;
