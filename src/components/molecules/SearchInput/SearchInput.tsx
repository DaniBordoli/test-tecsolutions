import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInputProps, ViewStyle} from 'react-native';

interface SearchInputProps extends TextInputProps {
  style?: ViewStyle;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  placeholderTextColor,
  style,
  onChangeText,
}) => {
  return (
    <Container>
      <StyledTextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={style}
        onChangeText={onChangeText}
      />
      <IconContainer>
        <Icon name="search" size={24} color="#647184" />
      </IconContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

const StyledTextInput = styled.TextInput`
  font-size: 16px;
  padding: 10px 10px 10px 40px;
  margin-top: 10px;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 7px;
  width: 90%;
  color: #647184;
`;

const IconContainer = styled.View`
  position: absolute;
  left: 10px;
  top: 20px;
  margin-left: 10px;
`;

export default SearchInput;
