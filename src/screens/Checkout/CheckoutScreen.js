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
          size={28}
          color={themeColors.bgDark}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      {order.products.length === 0 ? (
        <View style={styles.boxNoProducts}>
          <Image
            style={{ width: 200, height: 200, borderRadius: 100 }}
            source={require('../../../assets/nathan-dumlao-ikU3J1nr52w-unsplash.jpg')}
          />
          <Text style={styles.noProducts}>No hay productos en el carrito</Text>
        </View>
      ) : (
        <View
          style={{
            height: height - 240,
            justifyContent: 'space-around',
          }}
        >
          <FlatList
            data={order.products}
            renderItem={renderProduct}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            style={{ marginTop: 20 }}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
          />
          <View style={styles.total}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalAmount}>${getTotal()}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  boxNoProducts: {
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  noProducts: {
    fontSize: 25,
    color: themeColors.bgDark,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 20,
    textAlign: 'center',
    color: themeColors.bgDark,
  },
  product: {
    height: 100,
    marginHorizontal: '2%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginVertical: 10,
  },
  productImage: {
    width: 90,
    height: 90,
    marginRight: 10,
  },
  productDetails: {
    width: '35%',
    gap: 10,
    alignItems: 'flex-start',
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
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20,
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
