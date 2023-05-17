import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useDispatch } from 'react-redux';
import { styles } from './ticket.styles';
import { clearOrder, setProducts } from '../../redux/orderSlice';
import { useEffect } from 'react';

const { height } = Dimensions.get('window');

const TicketScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { qrContent, total, order, expireDate, qrUniqueId, orderNumber } =
    route.params || {};
  const isEmpty = Object.keys(route.params || {}).length === 0;

  useEffect(() => {
    dispatch(setProducts(order?.products));
    dispatch(clearOrder());
  }, [order?.products]);

  const date = new Date(expireDate);

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };
  const formattedDate = date.toLocaleString('es-ES', options);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: '#F2F2F2',
              height: height - 180,
              justifyContent: 'center',
            },
          ]}
        >
          {isEmpty ? (
            <View
              style={{
                height: height - 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                style={{ width: 300, height: 300, borderRadius: 100 }}
                source={require('../../../assets/3d.png')}
              />
              <Text style={styles.nothingHere}>
                Aun no haz realizado ninguna compra
              </Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <View style={styles.detailsContainer}>
                <Text style={styles.totalText}> *** Valido hasta ***</Text>
                <Text style={styles.formattedDate}>{formattedDate}</Text>
              </View>

              <View style={styles.qrContainer}>
                <QRCode value={qrContent} size={200} />
              </View>

              {order?.products.map((item) => (
                <View key={item.id} style={styles.boxItems}>
                  <Text style={styles.items}>{item.name}</Text>
                  <Text style={styles.items}>x{item.quantity}</Text>
                </View>
              ))}
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 20,
                }}
              >
                <Text style={styles.totalAmount}>${total}</Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                  }}
                >
                  <Text style={styles.order}>Serás llamado con el número:</Text>
                  <Text
                    style={[styles.order, { fontWeight: '600', fontSize: 28 }]}
                  >
                    {orderNumber}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TicketScreen;
