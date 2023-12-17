import React from 'react';

import { Avatar, Card } from '@rneui/themed';
import { View } from 'react-native';

import useStyles from './styles';
import { images } from '@/assets';
import { StyledText } from '@/components/customs';
import { PostJobType } from '@/redux/types';

type NewItemProps = {
  data: PostJobType;
};

const NewItem: React.FunctionComponent<NewItemProps> = (props) => {
  const styles = useStyles();
  if (!props.data.owner.avatar == null) {
    console.log(props.data.owner);
  }
  return (
    <Card containerStyle={styles.cardContainerStyle}>
      <View style={styles.containerAvatar}>
        {props.data.owner?.avatar == null ? (
          <Avatar source={images.banner_home} size={64} rounded={true} />
        ) : (
          <Avatar
            source={{ uri: props.data.owner.avatar.url }}
            size={64}
            rounded={true}
          />
        )}
        <StyledText fontWeight="bold" style={styles.nameStyle}>
          {props.data.owner.full_name}
        </StyledText>
      </View>
      <Card.FeaturedTitle style={styles.descriptionStyles} numberOfLines={3}>
        <StyledText fontWeight="medium" style={styles.titleStyle}>
          {props.data.title}
        </StyledText>
      </Card.FeaturedTitle>
      <Card.FeaturedTitle style={styles.descriptionStyles} numberOfLines={3}>
        <StyledText>{props.data.description}</StyledText>
      </Card.FeaturedTitle>
      <Card.Image
        source={[{ uri: props.data.image.url } || images.banner_home]}
        style={styles.imageStyle}
      />
      {/* <View style={styles.featureStyles}>
        <TouchableOpacity style={styles.likeButton}>
          <LikeEmptyIcon />
        </TouchableOpacity>
        <StyledText>CC</StyledText>
      </View> */}
    </Card>
  );
};

export default NewItem;
