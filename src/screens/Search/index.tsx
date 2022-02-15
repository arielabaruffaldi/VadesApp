import React from 'react';
import CategoryItem, { Category } from '@molecules/CategoryItem';
import styles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '@store/actions/category';
import Layout from '@organisms/Layout';

const Search = ({ navigation }: any) => {
  const categories = useSelector((state: any) => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item: any) => {
    navigation.navigate('Events', {
      name: item.title,
    });
    dispatch(selectCategory(item.id));
  };

  return (
    <Layout style={styles.container}>
      {categories.map((category: Category) => (<CategoryItem key={category.id} item={category} onSelected={handleSelectedCategory} />))}
    </Layout>
  );
};

export default Search;
