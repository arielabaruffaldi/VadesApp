import { Colors } from '@theme';
import {StyleSheet} from 'react-native';

export const TAB_HEIGHT = 91;

export default StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  content: {
    width: '100%',
    height: TAB_HEIGHT,
    paddingHorizontal: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
