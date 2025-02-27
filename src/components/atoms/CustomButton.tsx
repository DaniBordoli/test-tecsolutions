// src/components/atoms/CustomButton.tsx
import React from 'react';
import styled from 'styled-components/native';

interface ButtonProps {
  isValid: boolean;
  disabled?: boolean;
  style?: any;
}

const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({isValid}) => (isValid ? '#035AC5' : '#EAF3FF')};
  padding: 10px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 56px;
`;

interface ButtonTextProps {
  isValid: boolean;
  titleStyle?: any;
}

const ButtonText = styled.Text<ButtonTextProps>`
  color: ${({titleStyle, isValid}) =>
    titleStyle?.color || (isValid ? '#FFFFFF' : '#71B0FD')};
  text-align: center;
  font-size: 18px;
  font-family: 'Mulish-Medium';
`;

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  isValid: boolean;
  style?: any;
  titleStyle?: any;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  isValid,
  style,
  titleStyle,
  disabled,
}) => {
  return (
    <Button
      onPress={onPress}
      isValid={isValid}
      style={style}
      disabled={disabled}>
      <ButtonText titleStyle={titleStyle} isValid={isValid}>
        {title}
      </ButtonText>
    </Button>
  );
};

export default CustomButton;
