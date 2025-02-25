import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Navbar, Title } from '../styles/HomeScreenStyles';
import qrCodeImage from '../assets/images/qrCode.png';
import {
  Container,
  Box,
  BoxText,
  Overlay,
  ImageBox,
  StyledImage,
  AmountText,
  AutoUpdateText,
} from '../styles/ScanBarCodeStyles';

export default function ScanBarCodeScreen({ route }) {
  const navigation = useNavigation();
  const { amount } = route.params;

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
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#002859" />
        </TouchableOpacity>
      </Navbar>
      <Box>
        <Icon name="error-outline" size={24} color="#002859" />
        <BoxText>Escanea el QR y serás redirigido a la pasarela de pago de Bitnovo Pay.</BoxText>
      </Box>
      <ImageBox>
        <StyledImage source={qrCodeImage} />
      </ImageBox>
      <AmountText>{amount}</AmountText>
      <AutoUpdateText>Esta pantalla se actualizará automáticamente.</AutoUpdateText>
      <Overlay />
    </Container>
  );
}
