import React from 'react';
import { View, Text, Image } from 'react-native';
import { TrashIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../../theme/theme';

import { styles } from './cartItem.styles';

const CartItem = (props) => {
  const { item, handleRemoveProduct } = props;

  return (
    <View style={styles.product}>
      <Image source={item.image} style={styles.productImage} />

      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productSize}>{item.size}</Text>
        <Text style={styles.productQuantity}>x{item.quantity}</Text>
      </View>

      <View
        style={{
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <Text style={styles.productPrice}>${item.price}</Text>
        <TrashIcon
          onPress={() => handleRemoveProduct(item.id)}
          size={28}
          color={themeColors.bgDark}
        />
      </View>
    </View>
  );
};

export default CartItem;
