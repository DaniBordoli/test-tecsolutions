import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {Container, ContainerButton} from '../styles/RequestScreenStyles';
import PaymentRequestHeader from '../components/molecules/PaymentRequestHeader/PaymentRequestHeader';
import PaymentLinkBox from '../components/molecules/PaymentLinkBox/PaymentLinkBox';
import ContactOptions from '../components/molecules/ContactOptions/ContactOptions';
import CustomButton from '../components/atoms/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {usePaymentWebSocket} from '../hooks/usePaymentWebSocket';
import LoadingOverlay from '../components/atoms/LoadingOverlay';
import {RequestScreenProps} from '../types';

export default function RequestScreen({route}: RequestScreenProps) {
  const {amount, paymentData} = route.params;
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState<string>('+34');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [showSendButton, setShowSendButton] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [selectedCountry, setSelectedCountry] = useState('+34');

  const paymentStatus = usePaymentWebSocket(paymentData.identifier);

  useEffect(() => {
    if (paymentStatus) {
      if (paymentStatus.status === 'CO') {
        navigation.navigate('PaymentReceivedScreen');
      }
    }
  }, [paymentStatus]);

  const handleCountrySelect = (selectedCode: string) => {
    setCountryCode(selectedCode);
    setSelectedCountry(selectedCode);
  };

  const handlePhoneNumberChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '');
    if (numericText.length <= 10) {
      setPhoneNumber(numericText);
      setShowSendButton(numericText.length > 7);
    }
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <Container>
          <PaymentRequestHeader amount={amount} />
          <PaymentLinkBox
            onScanPress={() =>
              navigation.navigate('ScanBarCodeScreen', {
                amount,
                paymentLink: paymentData.web_url,
                paymentIdentifier: paymentData.identifier,
              })
            }
            paymentLink={paymentData.web_url}
          />
          <ContactOptions
            paymentLink={paymentData.web_url}
            phoneNumber={phoneNumber}
            onPhoneNumberChange={handlePhoneNumberChange}
            countryCode={countryCode}
            onCountrySelect={() =>
              navigation.navigate('CountrySelectScreen', {
                onSelect: handleCountrySelect,
                selectedCountry: selectedCountry,
              })
            }
          />
          <ContainerButton>
            <CustomButton
              style={{backgroundColor: '#D3DCE6'}}
              title="Nueva solicitud"
              titleStyle={{color: '#035AC5'}}
              isValid={isValid}
              onPress={() => navigation.goBack()}
            />
          </ContainerButton>
        </Container>
      </ScrollView>
      {paymentStatus && paymentStatus.status === 'AC' && (
        <LoadingOverlay message="Estamos procesando el pago..." />
      )}
    </>
  );
}
