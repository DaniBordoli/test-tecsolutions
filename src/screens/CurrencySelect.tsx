import React, {useState, useEffect} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Container, Navbar, Title} from '../styles/HomeScreenStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import CurrencyItem from '../components/CurrencyItem';
import SearchInput from '../components/SearchInput';

const currencies = [
  {
    name: 'Dolar Estadounidense',
    symbol: '$',
    code: 'USD',
    imageSource: require('../assets/images/flagUsa.png'),
  },
  {
    name: 'Euro',
    symbol: '€',
    code: 'EUR',
    imageSource: require('../assets/images/flagRounded.png'),
  },
  {
    name: 'Libra Esterlina',
    symbol: '£',
    code: 'GBP',
    imageSource: require('../assets/images/flagUk.png'),
  },
];

export default function CurrencySelect({navigation, route}) {
  const {onSelect, selectedCurrency: initialSelectedCurrency} = route.params;
  const [search, setSearch] = useState('');
  const [filteredCurrencies, setFilteredCurrencies] = useState(currencies);
  const [selectedCurrency, setSelectedCurrency] = useState(initialSelectedCurrency?.code || null);

  useEffect(() => {
    console.log('Entered CurrencySelect screen');
    if (selectedCurrency) {
      console.log('Previously selected currency:', selectedCurrency);
    }
  }, [selectedCurrency]);

  const handlePress = currency => {
    console.log('Selected currency:', currency);
    setSelectedCurrency(currency.code);
    onSelect(currency);
    navigation.goBack();
  };

  const handleSearch = text => {
    setSearch(text);
    setFilteredCurrencies(
      currencies.filter(
        currency =>
          currency.name.toLowerCase().includes(text.toLowerCase()) ||
          currency.code.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  return (
    <Container>
      <Navbar>
        <TouchableOpacity
          style={{
            borderRadius: 50,
            padding: 10,
            marginRight: 10,
          }}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#002859" />
        </TouchableOpacity>
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
