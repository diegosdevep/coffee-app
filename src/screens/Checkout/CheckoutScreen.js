import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TrashIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../../theme/theme';
import { removeProduct } from '../../redux/orderSlice';

const { width, height } = Dimensions.get('window');

const CheckoutScreen = () => {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  console.log(order.products.map((e) => e.quantity));

  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct(productId));
  };

  const getTotal = () => {
    let total = 0;
    order.products.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total.toFixed(2);
  };

  const renderProduct = ({ item }) => (
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
          size={24}
          color={themeColors.bgDark}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <View
        style={{
          height: height,
          justifyContent: 'space-around',
        }}
      >
        <FlatList
          data={order.products}
          renderItem={renderProduct}
          keyExtractor={(item, index) => index.toString()}
          style={{ marginTop: 20 }}
        />

        <View style={styles.total}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalAmount}>${getTotal()}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 20,
    textAlign: 'center',
  },
  product: {
    height: 100,
    marginHorizontal: '1%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: '#ccc',
  },
  productImage: {
    width: 90,
    height: 90,
    marginRight: 10,
  },
  productDetails: {
    gap: 10,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productSize: {
    fontSize: 16,
    fontWeight: 600,
    color: 'gray',
  },
  productQuantity: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    letterSpacing: 2,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
