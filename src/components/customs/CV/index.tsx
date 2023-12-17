import React, { useEffect } from 'react';

import { View, TouchableOpacity } from 'react-native';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';

import useStyles from './styles';
import { CloseIcon, UploadIcon, images } from '@/assets';
import { Avatars, StyledText } from '@/components/customs';
import { transformKB } from '@/utils';

type UploadProps = {
  setPdf: React.Dispatch<React.SetStateAction<DocumentPickerResponse[]>>;
};

const UpLoad: React.FunctionComponent<UploadProps> = (props) => {
  const styles = useStyles();
  const [pdf, setPdf] = React.useState<DocumentPickerResponse[]>([]);
  const pickPdf = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      if (result) {
        setPdf(result);
      }
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        // Nếu người dùng hủy chọn file
        console.log('User cancelled the picker');
      } else {
        console.log('Error :', error);
      }
    }
  };
  React.useEffect(() => {
    props.setPdf(pdf);
  }, [pdf]);
  return (
    <View style={styles.upload}>
      {pdf[0] && pdf[0].uri ? (
        <Avatars
          source={images.pdf_default}
          bigTitle={pdf[0].name || 'CV'}
          smallTitle={transformKB(pdf[0].size || 0) || '0'}
          bigTitleStyle={styles.bigTitlePdf}
          smallTitleStyle={styles.smallTitlePdf}
          rightIcon={<CloseIcon />}
          rightIconPress={() => setPdf([])}
        />
      ) : (
        <TouchableOpacity style={styles.iconUpload} onPress={pickPdf}>
          <UploadIcon />
          <StyledText fontWeight="medium">Browse File</StyledText>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UpLoad;
