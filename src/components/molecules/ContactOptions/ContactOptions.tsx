// src/components/molecules/ContactOptions.tsx
import React from 'react';
import {TouchableOpacity, Linking, Share} from 'react-native';
import CustomInput from '../../CustomInput';
import {ContainerMail} from '../../../styles/RequestScreenStyles';

interface ContactOptionsProps {
  phoneNumber: string;
  onPhoneNumberChange: (text: string) => void;
  countryCode: string;
  onCountrySelect: () => void;
  paymentLink: string;
}

const ContactOptions: React.FC<ContactOptionsProps> = ({
  phoneNumber,
  onPhoneNumberChange,
  countryCode,
  onCountrySelect,
  paymentLink,
}) => {
  const handleEmailShare = () => {
    const subject = 'Enlace de pago';
    const body = `Por favor, realiza el pago usando el siguiente enlace: ${paymentLink}`;
    const emailUrl = `mailto:?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    Linking.openURL(emailUrl).catch(err =>
      console.error('Error al compartir por correo', err),
    );
  };

  const handleOtherShare = async () => {
    try {
      await Share.share({
        title: 'Enlace de pago',
        message: `Paga tu compra en: ${paymentLink}`,
      });
    } catch (error) {
      console.error('Error al compartir con otras aplicaciones', error);
    }
  };

  const handleWhatsAppShare = () => {
    const numericPhone = phoneNumber.replace(/[^0-9]/g, '');
    const message = `Paga tu compra en: ${paymentLink}`;
    const url = `whatsapp://send?phone=${numericPhone}&text=${encodeURIComponent(
      message,
    )}`;
    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.error('WhatsApp no está instalado en el dispositivo.');
        }
      })
      .catch(err => console.error('Error al compartir en WhatsApp', err));
  };
  const showSendButton = phoneNumber.replace(/[^0-9]/g, '').length >= 8;

  return (
    <>
      <ContainerMail>
        <TouchableOpacity onPress={handleEmailShare}>
          <CustomInput
            value="Enviar por correo electronico"
            onChangeText={() => {}}
            iconName="envelope"
            editable={false}
          />
        </TouchableOpacity>
      </ContainerMail>
      <ContainerMail onPress={handleWhatsAppShare}>
        <CustomInput
          value={phoneNumber}
          prefix={countryCode}
          onChangeText={onPhoneNumberChange}
          iconName="whatsapp"
          iconName2="chevron-down"
          onIcon2Press={onCountrySelect}
          editable={true}
          keyboardType="numeric"
          showSendButton={showSendButton}
          onSendPress={handleWhatsAppShare}
        />
      </ContainerMail>
      <ContainerMail>
        <TouchableOpacity onPress={handleOtherShare}>
          <CustomInput
            value="Compartir con otras aplicaciones"
            onChangeText={() => {}}
            iconName="share-square-o"
            editable={false}
          />
        </TouchableOpacity>
      </ContainerMail>
    </>
  );
};

export default ContactOptions;
