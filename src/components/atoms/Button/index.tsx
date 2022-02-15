import React, {ReactNode} from 'react';
import {TextStyle, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

interface ButtonProps {
  disabled?: boolean;
  onPress: () => any;
  variation?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  children: ReactNode;
  style?: TextStyle | TextStyle[];
}

const Button = ({
  disabled,
  onPress,
  variation = 'primary',
  children,
  style,
}: ButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.button, styles[variation], style, disabled && styles.disabled]}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
