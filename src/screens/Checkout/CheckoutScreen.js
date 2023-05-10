import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { themeColors } from '../../theme/theme';
import { clearOrder, removeProduct } from '../../redux/orderSlice';
import { ArrowLeftCircleIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { styles } from './checkout.styles';
import BtnBuy from '../../components/Button/BtnBuy';
import { useEffect, useState } from 'react';
import Loading from '../../components/shared/loading/Loading';
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import CartItem from '../../components/CartItem/CartItem';

const { height } = Dimensions.get('window');

const CheckoutScreen = () => {
  const order = useSelector((state) => state.order);
  const [orders, setOrders] = useState(order);
  const [qrUniqueId, setQrUniqueId] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const EXPIRE_HOURS = 24;

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

  const handlePay = async () => {
    setIsLoading(true);
    dispatch(clearOrder());

    const total = getTotal();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Calcular la fecha de expiración del código QR
    const expireDate = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };

    expireDate.setHours(expireDate.getHours() + EXPIRE_HOURS);
    const formattedDate = expireDate.toLocaleString('es-ES', options);

    // Generar un ID único para el código QR
    const uniqueId = uuidv4();

    // Crear el contenido del código QR
    const qrContent = `Valido hasta el ${formattedDate}`;

    try {
      // Confirmar la orden y guardarla en la base de datos
      await handleConfirmOrder(qrContent, total, expireDate, uniqueId);

      // Guardar el ID único del código QR para mostrarlo en la pantalla de ticket
      setQrUniqueId(uniqueId);

      // Navegar a la pantalla de ticket con los datos necesarios
      navigation.navigate('ticket', {
        qrContent,
        total,
        order,
        expireDate: expireDate.toISOString(),
        qrUniqueId: uniqueId,
      });

      setIsLoading(false);
    } catch (error) {
      // Manejar errores adecuadamente
      console.log('Error en handleConfirmOrder:', error);
    }
  };

  const handleConfirmOrder = async (qrContent, total, expireDate, uniqueId) => {
    const ordersCollectionRef = collection(db, 'orders');

    // Guardar la orden en la base de datos
    await addDoc(ordersCollectionRef, {
      id: uuidv4(),
      orders,
      total,
      qrContent,
      qrUniqueId: uniqueId,
      date: Timestamp.fromDate(new Date()),
      expireDate: expireDate,
    });
  };

  useEffect(() => {
    setOrders(order);
  }, [order]);

  if (isLoading) return <Loading />;

  const renderProduct = ({ item }) => (
    <CartItem item={item} handleRemoveProduct={handleRemoveProduct} />
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftCircleIcon
              size={50}
              strokeWidth={1.2}
              color={themeColors.bgDark}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Checkout</Text>
          <View />
        </View>
        {order.products.length === 0 ? (
          <View style={styles.boxNoProducts}>
            <Image
              style={{ width: 200, height: 200, borderRadius: 100 }}
              source={require('../../../assets/nathan-dumlao-ikU3J1nr52w-unsplash.jpg')}
            />
            <Text style={styles.noProducts}>
              No hay productos en el carrito
            </Text>
          </View>
        ) : (
          <View
            style={{
              height: height - 160,
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
            <View style={{ marginHorizontal: 20, marginTop: 25 }}>
              <BtnBuy title='Pagar' showIcon={false} onPress={handlePay} />
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default CheckoutScreen;
