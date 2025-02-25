import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

const CurrencyContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  width: 100%;
`;

const CurrencyImage = styled.Image`
  border-radius: 25px;
  width: 40px;
  height: 40px;
`;

const CurrencyText = styled.View`
  margin-left: 10px;
  font-size: 16px;
  flex: 1;
`;

const CurrencyName = styled.Text`
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

export default function CurrencyItem({ imageSource, currencyName, currencyCode, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <CurrencyContainer>
        <CurrencyImage source={imageSource} />
        <CurrencyText>
          <CurrencyName bold>{currencyName}</CurrencyName>
          <CurrencyName gray>{currencyCode}</CurrencyName>
        </CurrencyText>
        <ChevronIcon name="chevron-forward" size={24} color="#002859" />
      </CurrencyContainer>
    </TouchableOpacity>
  );
}
