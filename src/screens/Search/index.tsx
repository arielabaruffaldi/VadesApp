import React from 'react';
import { View, FlatList} from 'react-native';

import CategoryItem from '@molecules/CategoryItem';
import styles from './styles';

import {useDispatch, useSelector} from 'react-redux';
import {selectCategory} from '@store/actions/category';
import Layout from '@organisms/Layout';

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
    <Layout hasPadding>
      <View>
        <FlatList
          data={categories}
          renderItem={renderCategories}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </Layout>
  );
};

export default Search;
