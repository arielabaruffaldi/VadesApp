import React from 'react';
import { View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '@organisms/Layout';
import { RootState } from '@store/';
import { removeItem, confirmCart } from '@store/actions/cart';

import CartFooter from './CartFooter';
import CartItem from './CartItem';
import styles from './styles';

// import { CART } from '@utils/data/cart';


const Cart = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const items = useSelector((state: RootState) => state.cart.items)

  const total = useSelector((state: RootState) => state.cart.total)

  const handleConfirmCart = () => {
    dispatch(confirmCart(items, total))
    navigation.navigate('Orders')
  };

  const handleOnDelete = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <Layout hasPadding>
      <View style={styles.container}>
        <View>
          {items.map((item: any) => {
            return (
              <CartItem
                style={styles.box}
                key={item.id}
                item={item}
                onDelete={handleOnDelete}
              />
            );
          })}
        </View>
        <View style={styles.box}>
          <CartFooter total={total} confirmAction={handleConfirmCart} />
        </View>
      </View>
    </Layout>
  );
};

export default Cart;
