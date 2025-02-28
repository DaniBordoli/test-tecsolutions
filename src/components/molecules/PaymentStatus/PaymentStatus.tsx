import React from 'react';
import {View, Image} from 'react-native';
import PaymentText from '../../atoms/PaymentText';

const PaymentStatus: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50%',
      }}>
      <Image
        source={require('../../../assets/images/greenCheck.png')}
        style={{width: 124, height: 124}}
      />
      <PaymentText
        text="Pago recibido"
        style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}
      />
      <PaymentText
        text="El pago se ha confirmado con éxito"
        style={{fontSize: 16, color: 'grey', marginTop: 16}}
      />
    </View>
  );
};

export default PaymentStatus;
