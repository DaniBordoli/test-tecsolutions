import React from 'react';
import styled from 'styled-components/native';
import {Modal, Image} from 'react-native';
import {BlurView} from '@react-native-community/blur';

const PopupContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
`;

const PopupContent = styled.View`
  width: 354px;
  height: 383px;
  padding: 20px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-items: center;
`;

const CloseButton = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 10px;
  height: 56x;
  border-radius: 6px;
  padding-top: 18px;
  padding-right: 24px;
  padding-bottom: 18px;
  padding-left: 24px;

  background-color: #035ac5;
  border-radius: 5px;
  position: absolute;
  bottom: 20px;
  width: 90%;
  align-items: center;
`;

const CloseButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const IconContainer = styled.View`
  margin-top: 76px;
  margin-bottom: 10px;
`;

const MessageText = styled.Text`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #002859;
`;

const SubMessageText = styled.Text`
  font-size: 16px;
  color: gray;
  text-align: center;
  margin-bottom: 20px;
`;

const BlurredBackground = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 40, 89, 1);
`;

const BlurOverlay = styled(BlurView).attrs({
  blurType: 'light',
  blurAmount: 5,
  overlayColor: 'rgba(0, 40, 89, 0.3)',
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({onClose}) => {
  return (
    <Modal transparent={true} animationType="slide">
      <BlurredBackground />
      <BlurOverlay />
      <PopupContainer>
        <PopupContent>
          <IconContainer>
            <Image
              source={require('../assets/images/aquaCheck.png')}
              style={{width: 64, height: 64}}
            />
          </IconContainer>
          <MessageText>Solicitud Enviada</MessageText>
          <SubMessageText>
            Tu solicitud de pago enviada ha sido enviado con éxito por WhatsApp.
          </SubMessageText>
          <CloseButton onPress={onClose}>
            <CloseButtonText>Entendido</CloseButtonText>
          </CloseButton>
        </PopupContent>
      </PopupContainer>
    </Modal>
  );
};

export default Popup;
