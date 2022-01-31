import React from 'react';
import {View} from 'react-native';
import BackArrow from '@assets/svg/BackArrow';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import styles from './styles';
import Text from '@atoms/Text';

const hitConfig = {top: 20, left: 20, bottom: 20, right: 20};

interface Props {
  onPress: () => any;
  isDisabled?: boolean;
  arrowColor?: string;
  arrowOpacity?: number;
  accessibilityLabelValue?: string;
}
const GoBack = ({
  isDisabled,
  onPress,
  arrowColor,
  accessibilityLabelValue,
  arrowOpacity,
}: Props) => {
  return (
    <TouchableWithoutFeedback
      accessibilityLabel={accessibilityLabelValue}
      hitSlop={hitConfig}
      onPress={isDisabled ? () => {} : onPress}>
      <View style={styles.container}>
        <BackArrow fill={arrowColor} fillOpacity={arrowOpacity} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GoBack;
