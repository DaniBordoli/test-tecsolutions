import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {
  Container,
  ContinuarContainer,
  FlexContainer,
} from '../styles/HomeScreenStyles';
import {useAppDispatch, useAppSelector} from '../redux/store/hook';
import {createPayment} from '../redux/slices/paymentSlice';
import {selectPaymentLoading, selectPaymentData} from '../redux/selectors';
import LoadingOverlay from '../components/atoms/LoadingOverlay';
import PaymentNavbar from '../components/molecules/PaymentNavbar/PaymentNavbar';
import PaymentDetails from '../components/molecules/PaymentDetails/PaymentDetails';
import CustomButton from '../components/atoms/CustomButton';
import {parseAmount} from '../utils/parseAmount';
import {Currency} from '../types/currency';

interface HomeScreenProps {
  navigation: any;
}

export default function HomeScreen({navigation}: HomeScreenProps) {
  const [amount, setAmount] = useState<string>('0,00 $');
  const [description, setDescription] = useState<string>('');
  const [currency, setCurrency] = useState<Currency>({
    symbol: '$',
    code: 'USD',
  });
  const isDefault = amount.startsWith('0,00');
  const [isValid, setIsValid] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectPaymentLoading);
  const paymentData = useAppSelector(selectPaymentData);

  useEffect(() => {
    const numericValue = parseFloat(
      amount.replace(/[^0-9,]/g, '').replace(',', '.'),
    );
    setIsValid(numericValue > 0 && amount !== '');
  }, [amount]);

  useEffect(() => {
    if (paymentData) {
      navigation.navigate('RequestScreen', {
        paymentData,
        amount,
        description,
        currency,
      });
    }
  }, [paymentData]);

  const handleChange = (text: string): void => {
    setAmount(parseAmount(text, currency));
  };

  const handleCurrencySelectButton = (selectedCurrency: Currency): void => {
    setCurrency({symbol: selectedCurrency.symbol, code: selectedCurrency.code});
    setAmount(`0,00 ${selectedCurrency.symbol}`);
  };
  const handleContinuar = (): void => {
    if (!isValid) {
      return;
    }
    dispatch(createPayment({amount, description, currency}));
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <Container>
          <PaymentNavbar
            currencySymbol={currency.code}
            onSelect={() =>
              navigation.navigate('CurrencySelect', {
                onSelect: handleCurrencySelectButton,
                selectedCurrency: currency,
              })
            }
          />
          <FlexContainer>
            <PaymentDetails
              amount={amount}
              description={description}
              isDefault={isDefault}
              onAmountChange={handleChange}
              onDescriptionChange={setDescription}
            />
            <ContinuarContainer>
              <CustomButton
                title="Continuar"
                onPress={handleContinuar}
                isValid={isValid}
                disabled={!isValid}
              />
            </ContinuarContainer>
          </FlexContainer>
        </Container>
      </ScrollView>
      {loading && <LoadingOverlay />}
    </>
  );
}
