import React from 'react';

import { Avatar } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';

import useStyles from './styles';
import { StyledText } from '@/components/customs';
import { routes } from '@/constants';
import { NavigationService } from '@/navigation/NavigationService';

const Chat: React.FunctionComponent = () => {
  const styles = useStyles();
  const handleDetail = () => {
    NavigationService.navigate(routes.ROOM);
  };
  return (
    <View style={styles.container}>
      <Avatar
        source={{
          uri: 'https://www.datocms-assets.com/45470/1631026680-logo-react-native.png',
        }}
        size={64}
        rounded
      />
      <TouchableOpacity style={styles.titleContainer} onPress={handleDetail}>
        <StyledText style={styles.topTitle} fontWeight="bold" numberOfLines={1}>
          Google LLC
        </StyledText>
        <StyledText style={styles.bottomTitle} numberOfLines={1}>
          Our reviewer. William Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ipsum officia sunt unde inventore explicabo adipisci
          voluptatem delectus officiis tempora ullam, repudiandae necessitatibus
          quo vitae dignissimos iusto aperiam aspernatur doloremque voluptates.
        </StyledText>
      </TouchableOpacity>

      <View style={styles.rightContainer}>
        <StyledText
          style={styles.rightIconTop}
          fontWeight="bold"
          numberOfLines={1}
        >
          2
        </StyledText>
        <StyledText
          style={styles.rightIconBottom}
          fontWeight="regular"
          numberOfLines={1}
        >
          16:00
        </StyledText>
      </View>
    </View>
  );
};

export default Chat;
