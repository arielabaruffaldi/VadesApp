import {Colors, Constants, Spacing} from '@theme';
import {StyleSheet} from 'react-native';
import {isIos} from 'src/theme/constants';

export default StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    borderRadius: Constants.borderRadius,
    padding: Spacing.MEDIUM,
    paddingVertical: isIos ? Spacing.MEDIUM : Spacing.SMALL,
    // borderWidth: 1,
    // borderColor: Colors.black,
    backgroundColor: Colors.lightGray,
    width: '100%',
  },
  error: {
    color: Colors.error,
  },
});
