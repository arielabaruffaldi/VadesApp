import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {EVENTS} from '@utils/data/events';

import Banner from '@atoms/Banner';

import styles from './styles';
import EventsList from '@organisms/EventsList';

const EventsFeed = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Banner
          image={
            'https://volemos.nyc3.digitaloceanspaces.com/blog/wp-content/uploads/2019/03/Holi_portada1.jpg'
          }
          title={'Lorem Ipsum'}
          description={
            'Sit culpa in qui ullamco laboris reprehenderit adipisicing fugiat ullamco reprehenderit Lorem fugiat.'
          }
          style={[styles.banner, styles.box]}
        />
        <EventsList events={EVENTS} />
      </View>
    </SafeAreaView>
  );
};

export default EventsFeed;
