import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import CustomInput from '../../molecules/CustomInput/CustomInput';
import {ContainerMail} from '../../../styles/RequestScreenStyles';
import linkIcon from '../../../assets/images/linkIcon.png';
import Clipboard from '@react-native-clipboard/clipboard';

interface PaymentLinkBoxProps {
  amount?: string;
  onScanPress: () => void;
  paymentLink: string;
}

const PaymentLinkBox: React.FC<PaymentLinkBoxProps> = ({
  onScanPress,
  paymentLink,
}) => {
  const handleInputPress = () => {
    Clipboard.setString(paymentLink);
  };
  return (
    <ContainerMail style={{justifyContent: 'space-between', marginTop: 20}}>
      <TouchableOpacity onPress={handleInputPress}>
        <CustomInput
          style={{width: 267, alignSelf: 'flex-start'}}
          value={paymentLink}
          image={linkIcon}
          onChangeText={() => {}}
          editable={false}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 56,
          height: 56,
          borderRadius: 6,
          marginTop: 20,
          backgroundColor: '#035AC5',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onScanPress}>
        <Image
          source={require('../../../assets/images/scanBarCode.png')}
          style={{width: 25, height: 25}}
        />
      </TouchableOpacity>
    </ContainerMail>
  );
};

export default PaymentLinkBox;
