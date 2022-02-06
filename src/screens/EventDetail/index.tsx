import Banner from '@atoms/Banner';
import Button from '@atoms/Button';
import Text from '@atoms/Text';
import {EVENTS} from '@utils/data/events';
import React from 'react';
import {View} from 'react-native';
import Layout from '@organisms/Layout';

import {useSelector} from 'react-redux';
import styles from './styles';
import {RootState} from '@store/';

export interface Event {
  categoryId: number;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

const EventDetail = () => {
  const event: Event = useSelector((state: RootState) => state.events.selected);
  return (
    <Layout hasPadding title={event?.title}>
      <View>
        <Banner image={event.image} style={styles.bannerHeader} />
        <Text>{event.title}</Text>
      </View>
    </Layout>
  );
};

export default EventDetail;
