import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {resetPayment} from '../redux/slices/paymentSlice';
import {Container, Overlay} from '../styles/PaymentReceivedStyles';
import PaymentReceivedNavbar from '../components/organisms/PaymentReceivedNavbar';
import PaymentStatus from '../components/molecules/PaymentStatus/PaymentStatus';
import PaymentReceivedFooter from '../components/organisms/PaymentReceivedFooter';

export default function PaymentReceivedScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(true);

  const handleFinalize = () => {
    dispatch(resetPayment());
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  return (
    <Container>
      <PaymentReceivedNavbar />
      <PaymentStatus />
      <Overlay />
      <PaymentReceivedFooter isValid={isValid} onFinalize={handleFinalize} />
    </Container>
  );
}
