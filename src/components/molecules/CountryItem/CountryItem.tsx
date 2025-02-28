import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

const CountryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  width: 100%;
  background-color: ${props => (props.pressed ? '#EFF2F7' : 'transparent')};
  padding: 10px 0;
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
  margin-right: 50px;
  color: gray;
`;

const SelectedIcon = styled(Icon)`
  margin-left: auto;
  margin-right: 50px;
  color: #002859;
`;

export default function CountryItem({
  imageSource,
  countryName,
  countryCode,
  onPress,
  selected,
}) {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}>
      <CountryContainer pressed={pressed}>
        <CountryImage source={imageSource} />
        <CountryText>
          <CountryName bold>{countryCode}</CountryName>
          <CountryName gray>{countryName}</CountryName>
        </CountryText>
        {selected ? (
          <SelectedIcon name="checkmark-circle" size={24} />
        ) : (
          <ChevronIcon name="chevron-forward" size={24} />
        )}
      </CountryContainer>
    </TouchableOpacity>
  );
}
