import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Navbar,
  Title,
  SelectContainer,
  SelectText,
} from './PaymentNavBar.styles';

type PaymentNavbarProps = {
  title?: string;
  currencySymbol: string;
  onSelect: () => void;
};

const PaymentNavbar: React.FC<PaymentNavbarProps> = ({
  title = 'Importe a pagar',
  currencySymbol,
  onSelect,
}) => {
  return (
    <Navbar>
      <Title>{title}</Title>
      <SelectContainer onPress={onSelect}>
        <SelectText>{currencySymbol}</SelectText>
        <Icon name="chevron-down" size={15} color="#002859" />
      </SelectContainer>
    </Navbar>
  );
};

export default PaymentNavbar;
