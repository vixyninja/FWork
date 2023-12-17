import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import Share, { ShareOptions } from 'react-native-share';

import useStyles from './styles';
import { BackIcon, BookmarkBlackIcon, SendIcon } from '@/assets';
import { JobTitleProps } from '@/components/customs/JobTitle/types';
import { NavigationService } from '@/navigation/NavigationService';

const HeaderDetail: React.FunctionComponent<JobTitleProps> = (props) => {
  // Share
  const share = React.useCallback(() => {
    const options: ShareOptions = {
      title: props.data.job_name,
      message: props.data.jod_description,
      url: props.data.company.avatar?.url,
    };
    Share.open(options)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.data]);

  const styles = useStyles();
  return (
    <View style={styles.container}>
      {/* Back Screen */}
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => NavigationService.goBack()}
      >
        <BackIcon />
      </TouchableOpacity>

      {/* Save to Bookmark */}
      <View style={styles.flex} />
      <TouchableOpacity style={styles.bookMark}>
        <BookmarkBlackIcon />
      </TouchableOpacity>

      {/* Share  */}
      <TouchableOpacity style={styles.sendIcon} onPress={share}>
        <SendIcon />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderDetail;
