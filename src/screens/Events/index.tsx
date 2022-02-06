import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';

import {EVENTS} from '@utils/data/events';

import styles from './styles';
import EventsList from '@organisms/EventsList';
import {useDispatch, useSelector} from 'react-redux';
import {filterEvents} from '@store/actions/events';

const Events = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state: any) => state.categories.selected,
  );
  const events = useSelector((state: any) => state.events.events);

  useEffect(() => {
    dispatch(filterEvents(selectedCategory.id));
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <EventsList events={events} />
      </View>
    </SafeAreaView>
  );
};

export default Events;
