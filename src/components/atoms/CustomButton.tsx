import React from 'react';
import styled from 'styled-components/native';
import {Image, ImageSourcePropType} from 'react-native';

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

const ButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
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
  icon?: ImageSourcePropType;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  isValid,
  style,
  titleStyle,
  disabled,
  icon,
}) => {
  return (
    <Button
      onPress={onPress}
      isValid={isValid}
      style={style}
      disabled={disabled}>
      <ButtonContent>
        <ButtonText titleStyle={titleStyle} isValid={isValid}>
          {title}
        </ButtonText>
        {icon && (
          <Image source={icon} style={{marginLeft: 8, width: 30, height: 30}} />
        )}
      </ButtonContent>
    </Button>
  );
};

export default CustomButton;
