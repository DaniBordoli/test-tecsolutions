// src/screens/RequestScreen.tsx
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {Container, ContainerButton} from '../styles/RequestScreenStyles';
import PaymentRequestHeader from '../components/molecules/PaymentRequestHeader/PaymentRequestHeader';
import PaymentLinkBox from '../components/molecules/PaymentLinkBox/PaymentLinkBox';
import ContactOptions from '../components/molecules/ContactOptions/ContactOptions';
import CustomButton from '../components/atoms/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {usePaymentWebSocket} from '../hooks/usePaymentWebSocket';
import walletIcon from '../assets/images/walletIcon.png' // Import wallet icon

export default function RequestScreen({route}) {
  const {amount, description, currency, paymentData} = route.params;
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState('+34');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showSendButton, setShowSendButton] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('+34'); // Add state for selected country

  const paymentStatus = usePaymentWebSocket(paymentData.identifier);
  console.log('paymentStatus', paymentStatus);

  useEffect(() => {
    if (paymentStatus) {
      if (paymentStatus.status === 'CA') {
        navigation.navigate('PaymentReceivedScreen', {paymentData});
      }
    }
  }, [paymentStatus]);

  const handleCountrySelect = (selectedCode: string) => {
    setCountryCode(selectedCode);
    setSelectedCountry(selectedCode); // Add this line to update the selected country
  };

  const handlePhoneNumberChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '');
    if (numericText.length <= 10) {
      setPhoneNumber(numericText);
      setShowSendButton(numericText.length > 7);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <Container>
        <PaymentRequestHeader amount={amount} />
        <PaymentLinkBox
          onScanPress={() =>
            navigation.navigate('ScanBarCodeScreen', {
              paymentLink: paymentData.web_url,
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
            disabled={!isValid}
            onPress={() => navigation.goBack()}
            icon={walletIcon} 
          />
        </ContainerButton>
      </Container>
    </ScrollView>
  );
}
