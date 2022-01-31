import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Search from '@assets/svg/Search';

import styles from './styles';
import Text from '@atoms/Text';
import {Colors} from '@theme';
import Button from '@atoms/Button';

interface HomeHeaderProps {}

const HomeHeader: React.FunctionComponent<HomeHeaderProps> = props => {
  console.log('props', props.children);
  return (
    <View style={styles.container}>
      <Search width="12" fill={Colors.error} />
      <Text>{props.children}</Text>
    </View>
  );
};

export default HomeHeader;
