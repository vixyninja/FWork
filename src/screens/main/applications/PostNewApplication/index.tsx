import React from 'react';

import { Button, Image } from '@rneui/themed';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  Asset,
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';

import useStyles from './styles';
import {
  BackIcon,
  CameraIcon,
  CloseIcon,
  LibraryIcon,
  UploadIcon,
} from '@/assets';
import { Headers, InputCustom, StyledText } from '@/components/customs';
import { ModalWrapContent } from '@/components/shared';
import { PERMISSION_TYPE, useAppDispatch, usePermission } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { AlertActions, JobActions } from '@/redux/reducers';
import { CustomToast } from '@/utils';

const PostNewApplication: React.FunctionComponent = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const [visible, setVisible] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const permission = usePermission();
  const [captureImage, setCaptureImage] = React.useState<Asset[]>([]);
  const optionsCamera: CameraOptions = {
    quality: 1,
    mediaType: 'photo',
    cameraType: 'front',
    saveToPhotos: true,
  };
  const optionLibrary: ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 1,
    selectionLimit: 0,
    maxWidth: 500,
    maxHeight: 500,
  };
  //Permission camera
  const showCamera = async () => {
    setVisible(false);

    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA
    ).then(async (result) => {
      if (result !== RESULTS.GRANTED && result !== RESULTS.UNAVAILABLE) {
        await permission.showPermissionDialog(PERMISSION_TYPE.camera);
      } else {
        const result = await launchCamera(optionsCamera);
        if (result.errorCode) {
          CustomToast('Có lỗi xảy ra khi mở camera');
        } else if (result.didCancel) {
          CustomToast('Bạn chưa chụp ảnh');
        } else if (result.errorMessage) {
          CustomToast('Có lỗi xảy ra khi mở camera');
        } else if (result.assets) {
          setCaptureImage(result.assets);
        }
      }
    });
    setVisible(false);
  };

  //Permission gallery
  const showGallery = async () => {
    setVisible(false);

    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
    ).then(async (result) => {
      if (result !== RESULTS.GRANTED && result !== RESULTS.UNAVAILABLE) {
        await permission.showPermissionDialog(PERMISSION_TYPE.library);
      } else {
        const result = await launchImageLibrary(optionLibrary);
        if (result.errorCode) {
          CustomToast('Có lỗi xảy ra khi mở thư viện');
        } else if (result.didCancel) {
          CustomToast('Bạn chưa chọn ảnh');
        } else if (result.errorMessage) {
          CustomToast('Có lỗi xảy ra khi mở thư viện');
        } else if (result.assets) {
          setCaptureImage(result.assets);
        }
      }
    });
    setVisible(false);
  };
  const formData = new FormData();
  React.useEffect(() => {
    formData.append('image', {
      uri: captureImage[0]?.uri,
      name: captureImage[0]?.fileName,
      type: captureImage[0]?.type,
    });
  }, [captureImage]);

  const handlePost = () => {
    if (title === '' || description === '' || captureImage[0].uri === '') {
      dispatch(
        AlertActions.setDataAlert({
          description: 'Please enter full information',
          title: 'Warning',
          isShow: true,
        })
      );
      return;
    }

    formData.append('title', title);
    formData.append('description', description);

    dispatch(JobActions.createUserPost(formData));
  };

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
        <Headers
          title="Post New Application"
          leftIcon={<BackIcon />}
          titleStyle={styles.title}
          onPressLeftIcon={() => NavigationService.goBack()}
        />
        <View style={styles.container}>
          <View style={styles.body}>
            {/* title */}
            <InputCustom
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />
            {/* description */}
            <InputCustom
              placeholder="Descriptions"
              value={description}
              onChangeText={setDescription}
              numberOfLines={5}
              containerStyle={styles.inputDescriptionContainer}
              multiline
              inputStyle={styles.inputDescription}
            />

            {/* upload image */}
            {captureImage[0]?.uri ? (
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: captureImage[0].uri }}
                  style={styles.image}
                  resizeMode="contain"
                />
                <TouchableOpacity
                  style={styles.iconClose}
                  onPress={() => setCaptureImage([])}
                >
                  <CloseIcon />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.upload}>
                <TouchableOpacity
                  style={styles.iconUpload}
                  onPress={() => {
                    setVisible(true);
                  }}
                >
                  <UploadIcon />
                  <StyledText fontWeight="medium">Browse File</StyledText>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={styles.containerButton}>
          <Button
            style={styles.button}
            containerStyle={styles.buttonContainer}
            title={'Post'}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitle}
            activeOpacity={0.5}
            onPress={handlePost}
          />
        </View>

        {/* Modal */}
        <ModalWrapContent
          isVisible={visible}
          onBackdropPress={() => setVisible(false)}
          contentStyle={styles.modalContent}
        >
          <View style={styles.modalContainer}>
            <StyledText style={styles.titleModal} fontWeight="bold">
              Choose a photo from:
            </StyledText>
            <View style={styles.iconModalWrapper}>
              <TouchableOpacity style={styles.icon} onPress={showCamera}>
                <CameraIcon />
                <StyledText>Camera</StyledText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon} onPress={showGallery}>
                <LibraryIcon />
                <StyledText>Library</StyledText>
              </TouchableOpacity>
            </View>
          </View>
        </ModalWrapContent>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PostNewApplication;
