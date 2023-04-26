import { styles } from './coffee.styles';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import { StarIcon } from 'react-native-heroicons/solid';
import { PlusIcon } from 'react-native-heroicons/outline';
import { themeColors } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';

const CoffeeCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <View style={styles.innerContainer}>
        <View style={styles.content}>
          <Image source={item.image} style={styles.img} />
        </View>
      </View>
      <View style={{ marginLeft: 15, top: -20, flex: 1 }}>
        <View
          style={{
            padding: 5,
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          <Text style={styles.title}>{item.name}</Text>

          <View style={styles.starsBox}>
            <StarIcon size='15' color='white' />
            <Text style={styles.stars}>{item.stars}</Text>
          </View>

          <View style={styles.volumeBox}>
            <Text style={styles.volume}>Volume</Text>
            <Text style={styles.volumeItem}> {item.volume}</Text>
          </View>

          <View style={styles.priceBox}>
            <Text style={styles.price}>$ {item.price}</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Product', { ...item })}
              style={styles.btnBox}
            >
              <PlusIcon size='25' strokeWidth={2} color={themeColors.bgDark} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CoffeeCard;
