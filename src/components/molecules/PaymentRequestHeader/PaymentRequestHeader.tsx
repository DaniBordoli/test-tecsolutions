import React from 'react';
import {Image} from 'react-native';
import {
  AmountBox,
  PaymentRequestText,
  AmountText,
  BottomText,
} from './PaymentRequestHeady.styles';

interface PaymentRequestHeaderProps {
  amount: string;
}

const PaymentRequestHeader: React.FC<PaymentRequestHeaderProps> = ({
  amount,
}) => {
  return (
    <AmountBox>
      <PaymentRequestText>Solicitud de pago</PaymentRequestText>
      <Image source={require('../../../assets/images/moneyTime.png')} />
      <AmountText>{amount}</AmountText>
      <BottomText>Comparte el enlace de pago con el cliente</BottomText>
    </AmountBox>
  );
};

export default PaymentRequestHeader;
