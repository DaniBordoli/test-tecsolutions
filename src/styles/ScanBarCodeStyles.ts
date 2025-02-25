import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #035ac5;
`;

export const Box = styled.View`
  width: 339px;
  height: 80px;
  border-radius: 6px;
  padding: 14px 16px;
  flex-direction: row;
  align-items: center;
  background-color: #eaf3ff;
  margin-top: 29px;
`;

export const BoxText = styled.Text`
  color: #002859;
  font-size: 16px;
  margin-left: 10px;
`;

export const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageBox = styled.View`
  width: 339px;
  height: 324px;
  border-radius: 6px;
  padding: 12px;
  background-color: #ffffff;
  margin-top: 28px;
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;

export const AmountText = styled.Text`
  color: white;
  font-size: 24px;
  margin-top: 30px;
  text-align: center;
  font-weight: bold;
`;

export const AutoUpdateText = styled.Text`
  color: white;
  font-size: 16px;
  margin-top: 30px;
  text-align: center;
`;
