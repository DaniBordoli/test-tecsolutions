// src/screens/ScanBarCodeScreen.tsx
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Navbar} from '../styles/HomeScreenStyles';
import {
  Container,
  Box,
  BoxText,
  Overlay,
  ImageBox,
  AmountText,
  AutoUpdateText,
} from '../styles/ScanBarCodeStyles';
import QRCode from 'react-native-qrcode-svg';
import qrCodeImage from '../assets/images/qrCode.png';

export default function ScanBarCodeScreen({route}) {
  const navigation = useNavigation();
  const {amount, paymentLink} = route.params as {
    amount: string;
    paymentLink: string;
  };

  console.log('paymentLinkQR', paymentLink);

  return (
    <Container>
      <Navbar>
        <TouchableOpacity
          style={{
            backgroundColor: '#EFF2F7',
            borderRadius: 50,
            padding: 10,
            marginRight: 10,
          }}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#002859" />
        </TouchableOpacity>
      </Navbar>
      <Box>
        <Icon name="error-outline" size={24} color="#002859" />
        <BoxText>
          Escanea el QR y serás redirigido a la pasarela de pago de Bitnovo Pay.
        </BoxText>
      </Box>
      <ImageBox>
        <QRCode
          value={paymentLink}
          size={300}
          color="#035AC5"
          backgroundColor="white"
          logo={qrCodeImage}
        />
      </ImageBox>
      <AmountText>{amount}</AmountText>
      <AutoUpdateText>
        Esta pantalla se actualizará automáticamente.
      </AutoUpdateText>
      <Overlay />
    </Container>
  );
}
