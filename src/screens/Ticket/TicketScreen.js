import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './ticket.styles';
import { clearOrder, setProducts } from '../../redux/orderSlice';
import { useEffect } from 'react';

const TicketScreen = ({ route }) => {
  const { qrContent, total, order, expireDate, qrUniqueId } =
    route.params || {};
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(order?.products));
    dispatch(clearOrder());
  }, [order?.products]);

  const date = new Date(expireDate);
  const formattedDate = date.toLocaleString();

  console.log('fecha de vencimiento', formattedDate);
  return (
    <View style={styles.container}>
      <View style={styles.qrContainer}>
        <QRCode value={qrContent} size={200} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.totalText}>{formattedDate}</Text>

        <Text style={styles.totalAmount}>${total}</Text>
      </View>
    </View>
  );
};

export default TicketScreen;
