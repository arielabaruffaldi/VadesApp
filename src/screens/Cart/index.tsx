import Text from '@atoms/Text';
import Layout from '@organisms/Layout';
import { CART } from '@utils/data/cart';
import React from 'react';
import { View } from 'react-native';
import CartFooter from './CartFooter';
import CartItem from './CartItem';
import styles from './styles';

const Cart = () => {
  const handleConfirmCart = () => {
    console.log('confirmado');
  };

  const handleOnDelete = (id: number) => {
    console.log('eliminado el id : ' + id);
  };

  const total = CART.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return (
    <Layout hasPadding>
      <View style={styles.container}>
        <View>
          {CART.map(item => {
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
