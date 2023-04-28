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
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const item = props.route.params;

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
          <TouchableOpacity
            style={styles.iconHear}
            onPress={() => navigation.goBack()}
          >
            <HeartIcon size={28} strokeWidth={1.2} color='white' />
          </TouchableOpacity>
        </View>

        <View style={styles.imgItem}>
          <Image source={item.image} style={{ width: 300, height: 300 }} />
        </View>

        <View style={styles.starsBox}>
          <StarIcon size='15' color='white' />
          <Text style={styles.stars}>{item.stars}</Text>
        </View>

        <HeaderProduct name={item.name} price={item.price} />
        <Size selected={selected} setSelected={setSelected} />
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
              {item.volume}
            </Text>
          </View>
          <Counter quantity={quantity} setQuantity={setQuantity} />
        </View>

        <View style={styles.contentButtons}>
          <TouchableOpacity style={styles.iconBag}>
            <ShoppingBagIcon size='30' color={themeColors.bgDark} />
          </TouchableOpacity>

          <BtnBuy
            onPress={() => {
              dispatch(
                addProduct({
                  id: item.id,
                  name: item.name,
                  price: item.price,
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
