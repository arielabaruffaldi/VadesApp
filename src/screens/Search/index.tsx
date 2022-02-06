import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';

import CategoryItem, {Category} from '@molecules/CategoryItem';
import styles from './styles';

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@store/';
import {selectCategory} from '@store/actions/category';

const Search = ({navigation}: any) => {
  const categories = useSelector((state: any) => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item: any) => {
    navigation.navigate('Events', {
      name: item.title,
    });
    dispatch(selectCategory(item.id));
  };

  const renderCategories = ({item}: any) => {
    return <CategoryItem item={item} onSelected={handleSelectedCategory} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={renderCategories}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
