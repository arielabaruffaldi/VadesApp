import Text from '@atoms/Text';
import {Colors} from '@theme';
import React, {useState} from 'react';
import {TextInput, View, KeyboardTypeOptions, TextStyle} from 'react-native';

import styles from './styles';

interface InputProps {
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  placeholderTextColor?: 'black' | 'white' | 'gray';
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  value?: string;
  error?: string;
  style?: TextStyle | TextStyle[];
}

const Input = ({
  placeholder,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  placeholderTextColor = 'gray',
  secureTextEntry,
  onChangeText,
  value,
  error,
  style,
}: InputProps) => {

  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        style={styles.input}
        placeholderTextColor={Colors[placeholderTextColor]}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
      />
      {error !== '' && <Text>{error}</Text>}
    </View>
  );
};

export default Input;
