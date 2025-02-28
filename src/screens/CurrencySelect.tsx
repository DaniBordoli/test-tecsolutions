import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {Container, Navbar, Title} from '../styles/HomeScreenStyles';
import CurrencyItem from '../components/molecules/CurrencyItem/CurrencyItem';
import SearchInput from '../components/molecules/SearchInput/SearchInput';
import {Currency} from '../types/currency';
import {currencies} from '../utils/currenciesData';
import BackButton from '../components/atoms/BackButton';
import {CurrencySelectProps} from '../types';

export default function CurrencySelect({
  navigation,
  route,
}: CurrencySelectProps) {
  const {onSelect, selectedCurrency: initialSelectedCurrency} = route.params;
  const [search, setSearch] = useState<string>('');
  const [filteredCurrencies, setFilteredCurrencies] =
    useState<Currency[]>(currencies);
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(
    initialSelectedCurrency?.code || null,
  );

  const handlePress = (currency: Currency) => {
    setSelectedCurrency(currency.code);
    onSelect(currency);
    navigation.goBack();
  };

  const handleSearch = (text: string) => {
    setSearch(text);
    setFilteredCurrencies(
      currencies.filter(
        currency =>
          (currency.name?.toLowerCase() || '').includes(text.toLowerCase()) ||
          currency.code.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  return (
    <Container>
      <Navbar>
        <BackButton onPress={() => navigation.goBack()} />
        <Title>Selecciona una divisa</Title>
      </Navbar>
      <View style={{alignItems: 'center'}}>
        <SearchInput
          placeholder="Buscar moneda"
          placeholderTextColor="#ccc"
          value={search}
          onChangeText={handleSearch}
          style={{padding: 10, borderColor: '#ccc', borderWidth: 1, margin: 10}}
        />
        <FlatList
          data={filteredCurrencies}
          keyExtractor={item => item.code}
          renderItem={({item}) => (
            <CurrencyItem
              imageSource={item.imageSource}
              currencyCode={item.code}
              currencyName={item.name}
              onPress={() => handlePress(item)}
              selected={item.code === selectedCurrency}
            />
          )}
        />
      </View>
    </Container>
  );
}
