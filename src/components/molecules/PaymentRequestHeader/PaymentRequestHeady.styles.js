import styled from 'styled-components/native';

export const AmountBox = styled.View`
  width: 339px;
  height: 150px;
  border-radius: 12px;
  padding: 16px;
  background-color: #f9fafc;
  border: 1px solid #d3dce6;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AmountText = styled.Text`
  color: #002859;
  font-size: 40px;
  font-weight: bold;
  margin-left: 20px;
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
