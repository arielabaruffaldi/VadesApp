import Card from '@molecules/Card';
import React from 'react';
import {TextStyle, View} from 'react-native';

import styles from './styles';

import {useNavigation} from '@react-navigation/native';

interface EventsListProps {
  style?: TextStyle | TextStyle[];
  events: Event[];
}

interface Event {
  id: number;
  categoryId: number;
  title: string;
  description: string;
  image: string;
}

const EventsList = ({style, events}: EventsListProps) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.cards]}>
      {events.map(event => (
        <Card
          onPress={() =>
            navigation.navigate('EventDetail', {
              eventId: event.id,
              title: event.title,
            })
          }
          style={[styles.card, style]}
          key={event.id}
          item={event}
        />
      ))}
    </View>
  );
};

export default EventsList;
