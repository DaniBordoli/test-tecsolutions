// src/components/molecules/PaymentLinkBox.tsx
import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import CustomInput from '../../CustomInput';
import {ContainerMail} from '../../../styles/RequestScreenStyles';

interface PaymentLinkBoxProps {
  amount: string;
  onScanPress: () => void;
  paymentLink: string;
}

const PaymentLinkBox: React.FC<PaymentLinkBoxProps> = ({
  onScanPress,
  paymentLink,
}) => {
  return (
    <ContainerMail style={{justifyContent: 'space-between', marginTop: 20}}>
      <CustomInput
        style={{width: 267, alignSelf: 'flex-start'}}
        value={paymentLink}
        onChangeText={() => {}}
      />
      <TouchableOpacity
        style={{
          width: 56,
          height: 56,
          borderRadius: 6,
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
