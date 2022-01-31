import {Colors, Spacing} from '@theme';

import {StyleSheet, Dimensions} from 'react-native';

const windowDimensions = Dimensions.get('window');

export default StyleSheet.create({
  image: {
    borderRadius: 15,
    height: undefined,
    aspectRatio: 1,
  },
  title: {
    paddingTop: 10,
  },
  description: {
    color: Colors.gray,
    marginVertical: 0
  }
});
