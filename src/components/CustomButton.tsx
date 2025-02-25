import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: ${props => props.isValid ? '#035AC5' : '#EAF3FF'};
  padding: 10px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 56px;
  ${props => props.style}
  opacity: ${props => props.disabled ? 0.5 : 1};
`;

const ButtonText = styled.Text`
  color: ${props => props.titleStyle?.color || (props.isValid ? '#71B0FD' : 'white')};
  text-align: center;
  font-size: 18px;
  font-family: 'Mulish-Medium';
`;

const CustomButton = ({ title, onPress, isValid, style, titleStyle, disabled }) => {
  return (
    <Button onPress={onPress} isValid={isValid} style={style} disabled={disabled}>
      <ButtonText titleStyle={titleStyle}>{title}</ButtonText>
    </Button>
  );
};

export default CustomButton;
