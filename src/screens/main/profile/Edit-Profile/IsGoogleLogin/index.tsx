import React, { FunctionComponent } from 'react';

import { Platform, TouchableOpacity, View } from 'react-native';
import {
  Asset,
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';

import useStyles from './styles';
import { CameraIcon, EditProfileIcon, LibraryIcon } from '@/assets';
import { StyledText } from '@/components/customs';
import { ModalWrapContent } from '@/components/shared';
import { PERMISSION_TYPE, useAppSelector, usePermission } from '@/hooks';
import { getAuthIsGoogle } from '@/redux/selectors';
import { CustomToast } from '@/utils';

type Props = {
  captureImage(asset: Asset): void;
};

const IsGoogleLogin: FunctionComponent<Props> = (props) => {
  const styles = useStyles();
  const [visible, setVisible] = React.useState<boolean>(false);
  const isGoogleLogin = useAppSelector(getAuthIsGoogle);
  const permission = usePermission();
  const [captureImage, setCaptureImage] = React.useState<Asset[]>([]);
  React.useEffect(() => {
    props.captureImage(captureImage[0]);
  }, [captureImage]);
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
  if (isGoogleLogin) {
    return <View />;
  }
  return (
    <>
      <TouchableOpacity
        style={styles.buttonEdit}
        onPress={() => setVisible(true)}
      >
        <EditProfileIcon />
      </TouchableOpacity>

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
    </>
  );
};

export default IsGoogleLogin;
