import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Container, Navbar, Title } from '../styles/HomeScreenStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchInput from '../components/SearchInput';
import CountryItem from '../components/CountryItem';

const countryCodes = [
    { code: '+34', country: 'España', imageSource: require('../assets/images/flagUsa.png') },
  { code: '+240', country: 'Equatorial Guinea', imageSource: require('../assets/images/flagUsa.png') },
  { code: '+30', country: 'Grecia', imageSource: require('../assets/images/flagUk.png') },
  { code: '+500', country: 'South Georgia and the S...', imageSource: require('../assets/images/flagUk.png') },
  { code: '+502', country: 'Guatemala', imageSource: require('../assets/images/flagUk.png') },
  { code: '+592', country: 'Guyana', imageSource: require('../assets/images/flagUk.png') },
  
  // Add more country codes as needed
];

export default function CountrySelectScreen({ navigation, route }) {
  const onSelect = route?.params?.onSelect || (() => {});
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countryCodes);

  const handlePress = (country) => {
    onSelect(country.code);
    navigation.goBack();
  };

  const handleSearch = (text) => {
    setSearch(text);
    setFilteredCountries(
      countryCodes.filter(country =>
        country.country.toLowerCase().includes(text.toLowerCase()) ||
        country.code.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <Container>
      <Navbar>
        <TouchableOpacity
          style={{
            backgroundColor: '#EFF2F7',
            borderRadius: 50,
            padding: 10,
            marginRight: 10,
          }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#002859" />
        </TouchableOpacity>
        <Title>Selecciona un país</Title>
      </Navbar>
      <View style={{ alignItems: 'center' }}>
        <SearchInput
          placeholder="Buscar país"
          placeholderTextColor="#ccc"
          value={search}
          onChangeText={handleSearch}
          style={{ padding: 10, borderColor: '#ccc', borderWidth: 1, margin: 10 }}
        />
  <FlatList
  data={filteredCountries}
  keyExtractor={(item) => item.code}
  renderItem={({ item }) => (
    <CountryItem
      countryName={item.country}  
      countryCode={item.code}  
      imageSource={item.imageSource} 
      onPress={() => handlePress(item)}
    />
    
  )}
  
/>
      </View>
    </Container>
  );
}
