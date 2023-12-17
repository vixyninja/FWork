import React from 'react';

import useStyles from './styles';
import { TagStatusProps } from './type';
import { Tag } from '@/components/customs';

const TagStatus: React.FunctionComponent<TagStatusProps> = (props) => {
  const styles = useStyles();
  switch (props.data) {
    case 'Application Sent':
      return (
        <Tag
          title="Application Sent"
          style={[styles.tagStylesS, props.style]}
          titleStyle={[styles.tagTitleS, props.titleStyle]}
        />
      );
    case 'Application Accepted':
      return (
        <Tag
          title="Application Accepted"
          style={[styles.tagStylesA, props.style]}
          titleStyle={[styles.tagTitleA, props.titleStyle]}
        />
      );
    case 'Application Rejected':
      return (
        <Tag
          title="Application Rejected"
          style={[styles.tagStylesR, props.style]}
          titleStyle={[styles.tagTitleR, props.titleStyle]}
        />
      );
    case 'Application Pending':
      return (
        <Tag
          title="Application Pending"
          style={[styles.tagStylesP, props.style]}
          titleStyle={[styles.tagTitleP, props.titleStyle]}
        />
      );
    default:
      return (
        <Tag
          title="Application Sent"
          style={[styles.tagStylesS, props.style]}
          titleStyle={[styles.tagTitleS, props.titleStyle]}
        />
      );
  }
};

export default TagStatus;
