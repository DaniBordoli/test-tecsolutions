import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

const CountryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  width: 100%;
`;

const CountryImage = styled.Image`
  border-radius: 25px;
  width: 40px;
  height: 40px;
`;

const CountryText = styled.View`
  margin-left: 10px;
  font-size: 16px;
  flex: 1;
`;

const CountryName = styled.Text`
  color: #002859;
  font-size: 17px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props => (props.gray ? 'gray' : '#002859')};
`;

const ChevronIcon = styled(Icon)`
  margin-left: auto;
  margin-right: 70px;
  color: gray;
`;

export default function CountryItem({ imageSource, countryName, countryCode, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <CountryContainer>
        <CountryImage source={imageSource} />
        <CountryText>
          <CountryName bold>{countryCode}</CountryName>
          <CountryName gray>{countryName}</CountryName>
        </CountryText>
        <ChevronIcon name="chevron-forward" size={24} color="#002859" />
      </CountryContainer>
    </TouchableOpacity>
  );
}
