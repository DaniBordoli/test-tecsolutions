import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Container, AmountBox, AmountText, PaymentRequestText, BottomText } from '../styles/RequestScreenStyles';
import CustomInput from '../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';


export default function RequestScreen({ route }) {
  const { amount, description, currency } = route.params;
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState('+34');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showSendButton, setShowSendButton] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleCountrySelect = (selectedCode) => {
    setCountryCode(selectedCode);
  };

  const handlePhoneNumberChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    if (numericText.length <= 8) {
      setPhoneNumber(numericText);
      setShowSendButton(numericText.length > 7);
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (route.params?.selectedCode) {
        handleCountrySelect(route.params.selectedCode);
      }
    });

    return unsubscribe;
  }, [navigation, route.params?.selectedCode]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <Container>
        <AmountBox style={{ alignItems: 'center', justifyContent: 'center' }}>
          <PaymentRequestText>Solicitud de pago</PaymentRequestText>
          <Image source={require('../assets/images/moneyTime.png')} />
          <AmountText>{amount}</AmountText>
          <BottomText>Comparte el enlace de pago con el cliente</BottomText>
        </AmountBox>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <CustomInput style={{ width: 267, alignSelf: 'flex-start' }} value='pay.bitnovo.com/59f9g9' onChangeText={() => {}} />
          <TouchableOpacity 
            style={{ width: 56, height: 56, borderRadius: 6, backgroundColor: '#035AC5', marginLeft: 'auto', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => navigation.navigate('ScanBarCodeScreen', { amount })}
          >
            <Image source={require('../assets/images/scanBarCode.png')} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <CustomInput value='Enviar por correo electronico' onChangeText={() => {}} iconName="envelope" />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <CustomInput 
            value={phoneNumber} 
            prefix={countryCode}
            onChangeText={handlePhoneNumberChange}
            iconName="whatsapp" 
            iconName2='chevron-down'
            onIcon2Press={() => navigation.navigate('CountrySelectScreen', { onSelect: handleCountrySelect })}
            editable={true}
            showSendButton={showSendButton}
            keyboardType="numeric"
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <CustomInput value='Enviar por correo electronico' onChangeText={() => {}} iconName="share-square-o" />
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', width: '100%', alignItems: 'center', marginBottom: 20 }}>
          <CustomButton 
            style={{ backgroundColor: '#F9FAFC' }} 
            title="Nueva solicitud" 
            titleStyle={{ color: '#035AC5' }} 
            isValid={isValid} 
            disabled={!isValid} 
            onPress={() => navigation.goBack()} 
          />
        </View>
      </Container>
    </ScrollView>
  );
}
