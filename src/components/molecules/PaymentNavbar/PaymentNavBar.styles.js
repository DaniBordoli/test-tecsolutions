import styled from 'styled-components/native';

export const Navbar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: 20px;
  padding-vertical: 10px;
  background-color: #ffffff;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  flex: 1;
  color: #002859;
  margin-top: 17px;
  margin-bottom: 17px;
  font-family: 'Mulish-Medium';
`;

export const SelectContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #d3dce64d;
  border-radius: 24px;
  padding-horizontal: 10px;
  padding-vertical: 5px;
`;

export const SelectText = styled.Text`
  font-size: 16px;
  margin-right: 5px;
  color: #002859;
  font-weight: bold;
`;
