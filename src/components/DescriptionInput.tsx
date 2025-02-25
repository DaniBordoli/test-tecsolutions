import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styled from 'styled-components/native';

const StyledDescriptionInput = styled.TextInput.attrs({
  placeholderTextColor: '#647184',
})`
  font-size: 16px;
  padding: 10px;
  margin-top: 10px;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 7px;
  width: 90%;
  min-height: 56px; 
  text-align-vertical: top; 
  color: #002859; /* Added text color */
  height: auto; /* Adjust height automatically */
`;

const StyledText = styled.Text`
  align-self: flex-end;
  margin-right: 20px;
  color: #647184;
`;

export default function DescriptionInput({ description, setDescription }) {
  const [inputHeight, setInputHeight] = React.useState(56);

  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <StyledDescriptionInput
        placeholder="Añade descripción del pago"
        value={description}
        onChangeText={setDescription}
        maxLength={140}
        multiline={true} 
        numberOfLines={4}
        onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height)}
        style={{ height: Math.max(56, inputHeight) }}
      />
      <StyledText>
        {description.length}/140 caracteres
      </StyledText>
    </View>
  );
}
