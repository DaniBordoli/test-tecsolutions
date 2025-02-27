import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Popup from './Popup'; // Import the Popup component

const Container = styled.View<{isFocused: boolean}>`
  flex-direction: row;
  align-items: center;
  width: 339px;
  height: 66px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({isFocused}) => (isFocused ? '#035AC5' : '#D3DCE6')};
  padding: 0 16px;
  margin-top: 20px;
`;

const StyledIcon = styled.View`
  margin-right: 8px;
`;

const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  border: none;
  padding-top: 18px;
  padding-right: 16px;
  padding-bottom: 18px;
  padding-left: 0;
  color: #002859;
`;

const SendButton = styled.TouchableOpacity`
  background-color: #035ac5;
  padding: 10px;
  border-radius: 4px;
  height: 30px;
  padding-top: 4px;
  padding-right: 8px;
  padding-bottom: 4px;
  padding-left: 8px;
`;

const SendButtonText = styled.Text`
  color: white;
  font-size: 14px;
`;

const PrefixText = styled.Text`
  color: #002859;
  margin-right: 4px;
  font-weight: 500;
`;

interface CustomInputProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  iconName?: string;
  iconName2?: string;
  onIcon2Press?: () => void;
  showSendButton?: boolean;
  prefix?: string;
  onSendPress?: () => void;
  image?: any;
}

const CustomInput: React.FC<CustomInputProps> = ({
  style,
  value,
  onChangeText,
  iconName2 = '',
  onIcon2Press,
  editable = false,
  showSendButton = false,
  prefix = '',
  onSendPress,
  image,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleSendPress = () => {
    if (onSendPress) {
      onSendPress();
    }
    setIsPopupVisible(true);
  };

  return (
    <>
      <Container style={style} isFocused={isFocused}>
        {image && (
          <StyledIcon>
            <Image source={image} style={{width: 24, height: 24}} />
          </StyledIcon>
        )}
        {prefix && (
          <>
            <PrefixText>{prefix}</PrefixText>
            {iconName2 && (
              <TouchableOpacity onPress={onIcon2Press}>
                <Icon name={iconName2} size={23} color="#002859" />
              </TouchableOpacity>
            )}
          </>
        )}
        <Input
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={prefix ? '' : 'Enter text'}
          placeholderTextColor="#002859"
        />
        {showSendButton && value && (
          <SendButton onPress={handleSendPress}>
            <SendButtonText>Enviar</SendButtonText>
          </SendButton>
        )}
        {!prefix && iconName2 && (
          <TouchableOpacity onPress={onIcon2Press}>
            <FontAwesome name={iconName2} size={24} color="#035AC5" />
          </TouchableOpacity>
        )}
      </Container>
      {isPopupVisible && <Popup onClose={() => setIsPopupVisible(false)} />}
    </>
  );
};

export default CustomInput;
