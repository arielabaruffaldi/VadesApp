import Banner from '@atoms/Banner';
import Button from '@atoms/Button';
import Text from '@atoms/Text';
import React from 'react';
import { TextBase, View } from 'react-native';
import Layout from '@organisms/Layout';

import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import { RootState } from '@store/';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Text as TextNative, TextStyle} from 'react-native';

export interface Event {
  categoryId: number;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

const EventDetail = () => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    console.log("ENTRO")
    dispatch(event)
  }

  const event: Event = useSelector((state: RootState) => state.events.selected);

  return (
    <Layout hasPadding title={event?.title}>
      <View>
        <Banner image={event.image} style={styles.bannerHeader} />
        <Text>{event.title}</Text>
        <TouchableOpacity>
          <TextNative>TEST</TextNative>
        </TouchableOpacity>
        <Button onPress={() => handleAddItem}>
          <Text color='white'>Agregar al carrito </Text>
        </Button>
      </View>
    </Layout>
  );
};

export default EventDetail;
