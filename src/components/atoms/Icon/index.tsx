import React from 'react';
import { TextStyle } from 'react-native';
import { Icon as EvaIcon } from 'react-native-eva-icons';

//https://akveo.github.io/eva-icons/#/?searchKey=user&type=outline

interface IconProps {
  name: string;
  width?: number;
  height?: number;
  style?: TextStyle | TextStyle[];
  fill: string;
}

const Icon: React.FunctionComponent<IconProps> = ({
  name,
  width = 24,
  height = 24,
  style,
  fill,
}) => {
  return (
    <EvaIcon
      style={[style]}
      name={name}
      width={width}
      height={height}
      fill={fill}
    />
  );
};

export default Icon;
