import React from 'react';
import {View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import styles from './styles';
import Icon from '@atoms/Icon';
import {Colors} from '@theme';

const hitConfig = {top: 20, left: 20, bottom: 20, right: 20};

interface Props {
  onPress: () => any;
  isDisabled?: boolean;
  arrowColor?: string;
  accessibilityLabelValue?: string;
}
const GoBack = ({
  isDisabled,
  onPress,
  arrowColor = Colors.black,
  accessibilityLabelValue,
}: Props) => {
  return (
    <TouchableWithoutFeedback
      accessibilityLabel={accessibilityLabelValue}
      hitSlop={hitConfig}
      onPress={isDisabled ? () => {} : onPress}>
      <View style={styles.container}>
        <Icon name="arrow-back-outline" width={20} fill={arrowColor} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GoBack;
