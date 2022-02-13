import { StyleSheet } from 'react-native';

import { Spacing, Colors } from '@theme';


export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  hasPadding: {
    marginHorizontal: Spacing.LATERAL,
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
