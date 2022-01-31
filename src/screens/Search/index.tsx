import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';

import {CATEGORIES} from '@utils/data/categories';
import CategoryItem from '@molecules/CategoryItem';
import styles from './styles';

const Search = ({navigation}: any) => {
  const handleSelectedCategory = (item: any) => {
    navigation.navigate('Events', {
      categoryId: item.id,
      name: item.title,
    });
  };

  const renderCategories = ({item}: any) => {
    return <CategoryItem item={item} onSelected={handleSelectedCategory} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={CATEGORIES}
          renderItem={renderCategories}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
