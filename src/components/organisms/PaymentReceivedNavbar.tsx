import React from 'react';
import {View, Image} from 'react-native';
import {Navbar} from '../../styles/HomeScreenStyles';

const PaymentReceivedNavbar: React.FC = () => {
  return (
    <Navbar>
      <View style={{flex: 1, alignItems: 'center', paddingLeft: 20}}>
        <Image
          source={require('../../assets/images/BitNovoLogo2.png')}
          style={{width: 100, height: 60}}
        />
      </View>
      <View style={{width: 34}} />
    </Navbar>
  );
};

export default PaymentReceivedNavbar;
