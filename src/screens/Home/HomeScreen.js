import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { BellIcon } from 'react-native-heroicons/outline';
import Search from '../../components/Search/Search';
import Categories from '../../components/Categories/Categories';
import { styles } from './home.styles';
import CoffeeCard from '../../components/CoffeeCard.js/CoffeeCard';
import { coffeeItems } from '../../constants/categories';
import Carousel from 'react-native-snap-carousel';
import { themeColors } from '../../theme/theme';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <Image
        source={require('../../../assets/images/beansBackground1.png')}
        style={styles.imgBG}
      />

      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Image
            style={styles.imgLeft}
            source={require('../../../assets/images/coffee4.png')}
          />
          <Text style={styles.title}>Coffee Hub</Text>
          <Image
            style={styles.imgRight}
            source={require('../../../assets/images/coffee2.png')}
          />
        </View>

        {/* <View style={styles.content}>
          <Image
            style={styles.img}
            source={require('../../../assets/images/avatar.png')}
          />
          <View style={styles.address}>
            <MapPinIcon size={30} color={themeColors.bgDark} />
            <Text style={styles.text}>Santa Rosa, LP</Text>
          </View>
          <BellIcon size={32} color={themeColors.bgDark} />
        </View> */}

        {/* <Search /> */}
        {/* <Categories /> */}

        {/* Cards */}
        <View style={{ marginTop: 70 }}>
          <Carousel
            containerCustomStyle={{ overflow: 'visible' }}
            data={coffeeItems}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.77} //opacity of inactive slides
            inactiveSlideOpacity={0.75} // size of inavtive slides
            sliderWidth={width} // actual slide with
            itemWidth={260} // card with
            slideStyle={{ display: 'flex', alignItems: 'center' }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
