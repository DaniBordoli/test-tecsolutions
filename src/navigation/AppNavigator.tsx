import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen';
import CurrencySelect from '@screens/CurrencySelect';
import RequestScreen from '@screens/RequestScreen';
import CountrySelectScreen from '@screens/CountrySelectScreen';
import Popup from '@components/Popup';
import ScanBarCodeScreen from '@screens/ScanBarCodeScreen';
import PaymentReceivedScreen from '@screens/PaymentReceivedScreen';
import type {RootStackParamList} from '../types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CurrencySelect" component={CurrencySelect} />
      <Stack.Screen name="RequestScreen" component={RequestScreen} />
      <Stack.Screen
        name="CountrySelectScreen"
        component={CountrySelectScreen}
      />
      <Stack.Screen name="Popup" component={Popup} />
      <Stack.Screen name="ScanBarCodeScreen" component={ScanBarCodeScreen} />
      <Stack.Screen
        name="PaymentReceivedScreen"
        component={PaymentReceivedScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
