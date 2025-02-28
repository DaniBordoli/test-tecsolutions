import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  CurrencySelect: undefined;
  RequestScreen: {amount: number; paymentData: PaymentData};
  CountrySelectScreen: {
    onSelect: (code: string) => void;
    selectedCountry: string;
  };
  Popup: undefined;
  ScanBarCodeScreen: {amount: string; paymentLink: string};
  PaymentReceivedScreen: {paymentData: PaymentData};
};

export type CurrencySelectProps = NativeStackScreenProps<
  RootStackParamList,
  'CurrencySelect'
>;

export type CountrySelectScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CountrySelectScreen'
>;

export type RequestScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'RequestScreen'
>;

export type ScanBarCodeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ScanBarCodeScreen'
>;

export interface PaymentData {
  identifier: string;
  web_url: string;
}
