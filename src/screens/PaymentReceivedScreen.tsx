import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Navbar, Title} from '../styles/HomeScreenStyles';
import {Container, Overlay} from '../styles/PaymentReceivedStyles';
import CustomButton from '../components/atoms/CustomButton';

export default function PaymentReceivedScreen() {
  const navigation = useNavigation();
  const [isValid, setIsValid] = useState(true);

  return (
    <Container>
      <Navbar>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            source={require('../assets/images/BitNovoLogo2.png')}
            style={{width: 100, height: 60}}
          />
        </View>
        <View style={{width: 34}} />
      </Navbar>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50%',
        }}>
        <Icon name="check-circle" size={100} color="green" />
        <Text
          style={{
            color: '#002859',
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Pago recibido
        </Text>
        <Text style={{color: 'grey', fontSize: 16, marginTop: 16}}>
          El pago se ha confirmado con éxito
        </Text>
      </View>
      <Overlay />

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
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </Container>
  );
}
