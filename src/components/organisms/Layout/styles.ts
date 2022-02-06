import { StyleSheet, Dimensions } from 'react-native';

import { Spacing, Colors } from '@theme';

const windowDimensions = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  hasPadding: {
    marginHorizontal: Spacing.LATERAL,
    // justifyContent: 'center',
  },
  header: {
    paddingTop: 20,
    width: '100%',
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  center: {
    flex: 1,
  },
});
