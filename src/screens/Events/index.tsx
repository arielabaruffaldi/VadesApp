import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import EventsList from '@organisms/EventsList';
import {filterEvents} from '@store/actions/events';
import Layout from '@organisms/Layout';

import styles from './styles';

const Events = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state: any) => state.categories.selected,
  );
  const events = useSelector((state: any) => state.events.filteredEvents);

  useEffect(() => {
    console.log("selectedCategory.---", selectedCategory)
    dispatch(filterEvents(selectedCategory.id));
  }, []);

  return (
    <Layout hasPadding>
      <View style={styles.box}>
        <EventsList events={events} />
      </View>
    </Layout>
  );
};

export default Events;
