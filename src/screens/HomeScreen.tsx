import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Navbar, Title, SelectContainer, SelectText, StyledTextInput, Placeholder, Label } from '../styles/HomeScreenStyles';
import CustomButton from '../components/CustomButton';
import DescriptionInput from '../components/DescriptionInput'; 

export default function HomeScreen({ navigation }) {
  const [amount, setAmount] = useState('0,00 $');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState({ symbol: '$', code: 'USD' });
  const isDefault = amount.startsWith('0,00');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(amount !== '0,00 $' && amount !== '');
  }, [amount]);

  const handleChange = (text) => {
    let numericValue = text.replace(/[^0-9,]/g, '');
    if (numericValue.length > 1 && numericValue.startsWith('0')) {
      numericValue = numericValue.substring(1);
    }
    setAmount(`${numericValue} ${currency.code}`);
  };

  const handleCurrencySelectButton = (selectedCurrency) => {
    setCurrency({ symbol: selectedCurrency.symbol, code: selectedCurrency.code });
    setAmount(`0,00 ${selectedCurrency.code}`);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <Container>
        <Navbar>
          <Title>Crear pago</Title>
          <SelectContainer onPress={() => navigation.navigate('CurrencySelect', { onSelect: handleCurrencySelectButton })}>
            <SelectText>{currency.symbol}</SelectText>
            <Icon name="chevron-down" size={15} color='#002859' />
          </SelectContainer>
        </Navbar>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Placeholder>
            <StyledTextInput
              value={amount}
              onChangeText={handleChange}
              keyboardType="numeric"
              isDefault={isDefault}
            />
          </Placeholder>
          <Label>Concepto</Label>
          <DescriptionInput description={description} setDescription={setDescription} />
          <View style={{ width: '100%', alignItems: 'center', marginBottom: 20, position: 'absolute', bottom: 0 }}>
            <CustomButton title="Continuar" onPress={() => navigation.navigate('RequestScreen', { amount, description, currency })} isValid={isValid} disabled={!isValid} />
          </View>
        </View>
      </Container>
    </ScrollView>
  );
}
