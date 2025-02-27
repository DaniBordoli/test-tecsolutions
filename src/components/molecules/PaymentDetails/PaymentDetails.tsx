import React from 'react';
import {KeyboardTypeOptions} from 'react-native';
import DescriptionInput from '../../atoms/DescriptionInput';
import {
  Placeholder,
  StyledTextInput,
  Label,
} from '../../../styles/HomeScreenStyles';

type PaymentDetailsProps = {
  amount: string;
  description: string;
  isDefault: boolean;
  onAmountChange: (text: string) => void;
  onDescriptionChange: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
};

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  amount,
  description,
  isDefault,
  onAmountChange,
  onDescriptionChange,
  keyboardType = 'numeric',
}) => {
  return (
    <>
      <Placeholder>
        <StyledTextInput
          value={amount}
          onChangeText={onAmountChange}
          keyboardType={keyboardType}
          isDefault={isDefault}
        />
      </Placeholder>
      <Label>Concepto</Label>
      <DescriptionInput
        description={description}
        setDescription={onDescriptionChange}
      />
    </>
  );
};

export default PaymentDetails;
