import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {EVENTS} from '@utils/data/events';

import styles from './styles';
import EventsList from '@organisms/EventsList';

const Events = ({route}: any) => {
  const events = EVENTS.filter(
    event => event.categoryId === route.params.categoryId,
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <EventsList events={events} />
      </View>
    </SafeAreaView>
  );
};

export default Events;
