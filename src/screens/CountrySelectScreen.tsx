import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {Container, Navbar, Title} from '../styles/HomeScreenStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchInput from '../components/molecules/SearchInput/SearchInput';
import CountryItem from '../components/molecules/CountryItem/CountryItem';
import {countryCodes} from '../utils/currenciesData';
import {Country} from '../types/country';
import {CountrySelectScreenProps} from '../types';

export default function CountrySelectScreen({
  navigation,
  route,
}: CountrySelectScreenProps) {
  const onSelect = route?.params?.onSelect || (() => {});
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countryCodes);
  const initialSelectedCountry = route?.params?.selectedCountry || null;
  const [selectedCountry, setSelectedCountry] = useState(
    initialSelectedCountry,
  );

  const handlePress = (country: Country) => {
    setSelectedCountry(country.code);
    onSelect(country.code);
    navigation.goBack();
  };

  const handleSearch = (text: string) => {
    setSearch(text);
    setFilteredCountries(
      countryCodes.filter(
        country =>
          country.country.toLowerCase().includes(text.toLowerCase()) ||
          country.code.toLowerCase().includes(text.toLowerCase()),
      ),
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
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#002859" />
        </TouchableOpacity>
        <Title>Selecciona un país</Title>
      </Navbar>
      <View style={{alignItems: 'center', flex: 1}}>
        <SearchInput
          placeholder="Buscar país"
          placeholderTextColor="#ccc"
          value={search}
          onChangeText={handleSearch}
          style={{padding: 10, borderColor: '#ccc', borderWidth: 1, margin: 10}}
        />
        <ScrollView style={{flex: 1}}>
          <View style={{height: '100%'}}>
            <FlatList
              data={filteredCountries}
              keyExtractor={item => item.code}
              renderItem={({item}) => (
                <CountryItem
                  countryName={item.country}
                  countryCode={item.code}
                  imageSource={item.imageSource}
                  onPress={() => handlePress(item)}
                  selected={item.code === selectedCountry}
                />
              )}
            />
          </View>
        </ScrollView>
      </View>
    </Container>
  );
}
