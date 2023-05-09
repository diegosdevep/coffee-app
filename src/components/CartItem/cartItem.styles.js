import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
});
