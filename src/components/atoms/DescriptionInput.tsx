import React, {useState} from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  align-items: center;
`;

const StyledDescriptionInput = styled.TextInput.attrs({
  placeholderTextColor: '#647184',
})`
  font-size: 16px;
  padding: 16px;
  margin-top: 10px;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 7px;
  width: 90%;
  min-height: 56px;
  text-align-vertical: top;
  color: #002859;
`;

const CharacterCount = styled.Text`
  align-self: flex-end;
  margin-right: 20px;
  color: #647184;
`;

interface DescriptionInputProps {
  description: string;
  setDescription: (text: string) => void;
}

const DescriptionInput: React.FC<DescriptionInputProps> = ({
  description,
  setDescription,
}) => {
  const [inputHeight, setInputHeight] = useState(56);

  return (
    <Container>
      <StyledDescriptionInput
        placeholder="Añade descripción del pago"
        value={description}
        onChangeText={setDescription}
        maxLength={140}
        multiline
        numberOfLines={4}
        onContentSizeChange={e =>
          setInputHeight(e.nativeEvent.contentSize.height)
        }
        style={{height: Math.max(56, inputHeight)}}
      />
      <CharacterCount>{description.length}/140 caracteres</CharacterCount>
    </Container>
  );
};

export default DescriptionInput;
