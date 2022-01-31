import React, {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';

import {styles} from './styles';

interface ButtonProps {
  disabled?: boolean;
  onPress: () => any;
  children: ReactNode;
}

const Button = ({disabled, onPress, children}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.button}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
