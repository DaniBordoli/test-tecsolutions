import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: blue;
`;

export const AmountBox = styled.View`
  width: 339px;
  height: 150px;
  border-radius: 12px;
  padding: 16px;
  background-color: #F9FAFC;
  border: 1px solid #D3DCE6;
  flex-direction: row;
  align-items: center;
`;

export const AmountText = styled.Text`
  color: #002859;
  font-size: 40px;
  font-weight: bold;
  margin-left: 20px;
`;

export const Image = styled.Image`
  width: 58px;
  height: 58px;
`;

export const PaymentRequestText = styled.Text`
font-size: 15px;
  color: gray;
  position: absolute;
  top: 25px;
  left: 150px;
`;

export const BottomText = styled.Text`
  position: absolute;
  bottom: 10px;
  color: gray;
`;
