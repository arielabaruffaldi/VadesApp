import {Colors, Spacing} from '@theme';
import {StyleSheet} from 'react-native';
import { Constants } from '@theme';

export const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: Constants.borderRadius,
    padding: Spacing.MEDIUM,
  },
  primary: {
    backgroundColor: Colors.black,
  },
  secondary: {
    backgroundColor: Colors.white,
  },
  tertiary: {
    backgroundColor: Colors.mutedGray,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.black,
  },
});
