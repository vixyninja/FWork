import React, { FunctionComponent } from 'react';

import { Image } from '@rneui/themed';
import { View } from 'react-native';

import useStyles from './styles';
import { JobTitleProps } from './types';
import { images } from '@/assets';
import { StyledText, Tag } from '@/components/customs';
import { HistoryJobType } from '@/redux/types';

const JobCard: FunctionComponent<JobTitleProps> = (props) => {
  const styles = useStyles();
  const data: HistoryJobType = props.data;
  const date = new Date(Number(data.createdAt));
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.containerHeader}>
        <View style={styles.containerImage}>
          <Image
            source={{ uri: data.job.company.avatar.url || images.lobby_logo }}
            style={styles.logoStyle}
          />
        </View>
        <StyledText style={styles.nameJobStyle} fontWeight="bold">
          {data.job.job_name}
        </StyledText>
        <StyledText style={styles.nameCompanyStyle} fontWeight="medium">
          {data.job.company.company_name}
        </StyledText>
      </View>
      {/* Line */}
      <View style={styles.line} />

      <View style={styles.containerFooter}>
        <StyledText style={styles.addressStyle}>
          {data.job.company.company_name}
        </StyledText>
        <StyledText style={styles.salaryStyle} fontWeight="medium">
          ${data.job.salary}
        </StyledText>

        <View style={styles.tagContainer}>
          <Tag title={data.job.category.name} style={styles.tagStyle} />
        </View>
        <StyledText style={styles.timeStyle}>
          Posted on {date.toDateString()}
        </StyledText>
      </View>
    </View>
  );
};

export default JobCard;
