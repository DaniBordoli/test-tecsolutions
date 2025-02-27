// src/components/atoms/LoadingOverlay.tsx
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

const LoadingOverlay: React.FC = () => (
  <Overlay>
    <ActivityIndicator size="large" color="#ffffff" />
  </Overlay>
);

export default LoadingOverlay;
