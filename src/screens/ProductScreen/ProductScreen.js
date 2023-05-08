import {
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  ArrowLeftCircleIcon,
  ShoppingBagIcon,
} from 'react-native-heroicons/outline';
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid';
import { styles } from './product.styles';
import { useNavigation } from '@react-navigation/native';
import BtnBuy from '../../components/Button/BtnBuy';
import Counter from '../../components/shared/counter/Counter';
import Description from '../../components/Description/Description';
import Size from '../../components/Size/Size';
import HeaderProduct from '../../components/HeaderProduct/HeaderProduct';
import { useState } from 'react';
import { themeColors } from '../../theme/theme';
import { addProduct } from '../../redux/orderSlice';
import { useDispatch } from 'react-redux';

const ProductScreen = (props) => {
  const [selected, setSelected] = useState('Mediano');
  const [volumen, setVolumen] = useState('100ml');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const item = props.route.params;
  item.price = parseFloat(item.price);

  let price = 0;
  if (selected === 'Chico') {
    price = (item.price * 85) / 100;
  }
  if (selected === 'Mediano') {
    price = item.price;
  }
  if (selected === 'Grande') {
    price = item.price * 1.3;
  }
  price = price.toFixed(2);

  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <Image
        style={styles.img}
        source={require('../../../assets/images/beansBackground2.png')}
      />
      <SafeAreaView>
        <View style={styles.boxIcon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon size={50} strokeWidth={1.2} color='white' />
          </TouchableOpacity>
        </View>

        <View style={styles.imgItem}>
          <Image source={item.image} style={{ width: 300, height: 300 }} />
        </View>

        <View style={styles.starsBox}>
          <StarIcon size='15' color='white' />
          <Text style={styles.stars}>{item.stars}</Text>
        </View>

        <HeaderProduct name={item.name} price={price.toString()} />
        <Size
          selected={selected}
          setSelected={setSelected}
          setVolumen={setVolumen}
          item={item}
        />
        <Description description={item.desc} />

        <View style={styles.volumeContainer}>
          <View style={styles.volumeBox}>
            <Text style={styles.volume}>Volumen</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: themeColors.bgDark,
              }}
            >
              {volumen}
            </Text>
          </View>
          <Counter quantity={quantity} setQuantity={setQuantity} />
        </View>

        <View style={styles.contentButtons}>
          <BtnBuy
            title='Agregar al carrito'
            onPress={() => {
              dispatch(
                addProduct({
                  id: item.id,
                  name: item.name,
                  price: price.toString(),
                  quantity: quantity,
                  size: selected,
                  image: item.image,
                })
              );
              navigation.navigate('checkout');
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProductScreen;
