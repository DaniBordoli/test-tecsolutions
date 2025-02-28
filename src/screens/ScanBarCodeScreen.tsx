import React, {useEffect} from 'react';
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
import {ScanBarCodeScreenProps} from '../types';
import {usePaymentWebSocket} from '../hooks/usePaymentWebSocket';
import LoadingOverlay from '../components/atoms/LoadingOverlay';

export default function ScanBarCodeScreen({route}: ScanBarCodeScreenProps) {
  const navigation = useNavigation();
  const {amount, paymentLink, paymentIdentifier} = route.params as {
    amount: string;
    paymentLink: string;
    paymentIdentifier: string;
  };
  const paymentStatus = usePaymentWebSocket(paymentIdentifier);

  useEffect(() => {
    if (paymentStatus) {
      if (paymentStatus.status === 'CO') {
        navigation.navigate('PaymentReceivedScreen');
      }
    }
  }, [paymentStatus, navigation]);

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
      {paymentStatus?.status === 'AC' && (
        <LoadingOverlay message="Estamos procesando el pago..." />
      )}
    </Container>
  );
}
