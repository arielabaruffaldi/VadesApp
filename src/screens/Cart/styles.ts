import {Colors, Spacing} from '@theme';
import { StyleSheet, Dimensions } from 'react-native';

const windowDimensions = Dimensions.get('window');


export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    width: windowDimensions.width - Spacing.LATERAL,
  },
  priceContainer: {
    flexDirection: 'row',
  }
})
