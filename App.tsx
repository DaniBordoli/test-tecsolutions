import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import CurrencySelect from './src/screens/CurrencySelect';
import RequestScreen from './src/screens/RequestScreen';
import CountrySelectScreen from './src/screens/CountrySelectScreen';
import Popup from './src/components/Popup';
import ScanBarCodeScreen from './src/screens/ScanBarCodeScreen';
import PaymentReceivedScreen from './src/screens/PaymentReceivedScreen';
const Stack = createStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CurrencySelect" component={CurrencySelect} />
          <Stack.Screen name="RequestScreen" component={RequestScreen} />
          <Stack.Screen name="CountrySelectScreen" component={CountrySelectScreen} />
          <Stack.Screen name="Popup" component={Popup} />
          <Stack.Screen name="ScanBarCodeScreen" component={ScanBarCodeScreen} />
          <Stack.Screen name="PaymentReceivedScreen" component={PaymentReceivedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
