import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface BackButtonProps {
  onPress: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 50,
        padding: 10,
        marginRight: 10,
      }}
      onPress={onPress}>
      <Icon name="arrow-back" size={24} color="#002859" />
    </TouchableOpacity>
  );
};

export default BackButton;
