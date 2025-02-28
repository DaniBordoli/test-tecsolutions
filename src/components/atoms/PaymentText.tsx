import React from 'react';
import {Text, TextStyle} from 'react-native';

interface PaymentTextProps {
  text: string;
  style?: TextStyle;
}

const PaymentText: React.FC<PaymentTextProps> = ({text, style}) => {
  return <Text style={[{color: '#002859'}, style]}>{text}</Text>;
};

export default PaymentText;
