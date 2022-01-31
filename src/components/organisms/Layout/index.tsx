import React, {ReactNode} from 'react';
import {useNavigation} from '@react-navigation/native';

import GoBack from '@atoms/GoBack';

import styles from './styles';
import Text from '@atoms/Text';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface LayoutProps {
  children: ReactNode;

  backAction?: any;
  backColor?: string;
  title?: string;
  extraHeight?: number;
  shouldScroll?: boolean;
  infoAction?: () => void;
}

const Layout = ({title, backAction, children}: LayoutProps) => {
  const withoutHeader = !backAction && !title;
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={[styles.contentContainer, withoutHeader && styles.noHeader]}>
        <View style={styles.left}>
          <GoBack
            onPress={backAction ? backAction : () => navigation.goBack()}
          />
        </View>
        <View style={styles.center}>
          {title && (
            <Text size="small" color="black" weight="bold" align="center">
              {title}
            </Text>
          )}
        </View>
      </View>
      {children}
    </SafeAreaView>
  );
};

export default Layout;
