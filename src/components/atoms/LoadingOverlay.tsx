import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const MessageText = styled.Text`
  margin-top: 10px;
  color: #ffffff;
  font-size: 18px;
`;

interface LoadingOverlayProps {
  message?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({message}) => (
  <Overlay>
    <ActivityIndicator size="large" color="#ffffff" />
    {message && <MessageText>{message}</MessageText>}
  </Overlay>
);

export default LoadingOverlay;
