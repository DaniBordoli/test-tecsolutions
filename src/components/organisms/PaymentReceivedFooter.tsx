import React from 'react';
import {View} from 'react-native';
import CustomButton from '../atoms/CustomButton';

interface PaymentReceivedFooterProps {
  isValid: boolean;
  onFinalize: () => void;
}

const PaymentReceivedFooter: React.FC<PaymentReceivedFooterProps> = ({
  isValid,
  onFinalize,
}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <CustomButton
        style={{backgroundColor: '#F9FAFC'}}
        title="Finalizar"
        titleStyle={{color: '#035AC5'}}
        isValid={isValid}
        disabled={!isValid}
        onPress={onFinalize}
      />
    </View>
  );
};

export default PaymentReceivedFooter;
