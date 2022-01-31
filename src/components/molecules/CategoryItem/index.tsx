import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

interface CategoryItemProps {
  item: CategoryItem;
  onSelected: any;
}

interface CategoryItem {
  id: number;
  title: string;
  color: string;
}

const CategoryItem: React.FunctionComponent<CategoryItemProps> = ({
  item,
  onSelected,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.containerTouchable, {backgroundColor: item.color}]}
        onPress={() => onSelected(item)}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
