import Banner from '@atoms/Banner';
import Button from '@atoms/Button';
import Text from '@atoms/Text';
import { EVENTS } from '@utils/data/events';
import React from 'react';
import { View } from 'react-native';
import EventDetailHeader from '@organisms/EventDetailHeader';
import Layout from '@organisms/Layout';

import styles from './styles';


const EventDetail = ({ route }: any) => {
  const event = EVENTS.find(event => event.id === route.params.eventId);
  console.log('event', event);
  return (
    <Layout title={event?.title}>
      <View style={styles.container}>
        <Banner image={event.image} style={styles.bannerHeader} />
        <Text>{event.title}</Text>
      </View>
    </Layout>
  );
};

export default EventDetail;
