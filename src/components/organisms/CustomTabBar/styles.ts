import { Colors } from '@theme';
import {StyleSheet} from 'react-native';

export const TAB_HEIGHT = 91;

export default StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    bottom: 0,
    backgroundColor: Colors.white,
  },
  content: {
    width: '100%',
    height: TAB_HEIGHT,
    paddingHorizontal: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
