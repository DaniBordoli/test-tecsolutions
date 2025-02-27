import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f8f9fa;
`;

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

export const Content = styled.View`
  flex: 1;
`;

export const StyledText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Placeholder = styled.TouchableOpacity`
  padding: 20px;
  border-radius: 10px;
  margin-top: 64px;
`;

export const textInput = styled.Text`
  font-size: 60px;
  color: ${({isDefault}) => (isDefault ? '#C0CCDA' : '#002859')};
  font-weight: bold;
`;

export const StyledTextInput = styled.TextInput`
  font-size: 60px;
  font-weight: bold;
  color: ${({isDefault}) => (isDefault ? '#C0CCDA' : '#035AC5')};
  text-align: center;
  width: 100%;
  font-family: 'Mulish-Medium';
`;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 50px;
  color: #002859;
  align-self: flex-start;
  margin-left: 20px;
`;

export const ContinuarContainer = styled.View`
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  position: absolute;
  bottom: 0;
`;

export const FlexContainer = styled.View`
  flex: 1;
  align-items: center;
`;
