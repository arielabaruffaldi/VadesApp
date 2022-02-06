import { StyleSheet, Dimensions } from 'react-native';

import { Spacing, Colors } from '@theme';

const windowDimensions = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  hasPadding: {
    marginHorizontal: Spacing.LATERAL,
    // justifyContent: 'center',
  },
  contentContainer: {
    paddingTop: 20,
    width: '100%',
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  center: {
    flex: 1
  }
});
