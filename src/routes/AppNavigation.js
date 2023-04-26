import { LogBox, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeIcon as HomeOutline,
  HeartIcon as HeartOutline,
  ShoppingBagIcon as BagOutline,
} from 'react-native-heroicons/outline';
import {
  HomeIcon as HomeSolid,
  HeartIcon as HeartSolid,
  ShoppingBagIcon as BagSolid,
} from 'react-native-heroicons/solid';

import HomeScreen from '../screens/Home/HomeScreen';
import { themeColors } from '../theme/theme';

const Tab = createBottomTabNavigator();

LogBox.ignoreLogs([
  'ADVICE) View # of type ABI48_0_0RCTView has a shadow set but cannot calculate shadow efficiently. Consider setting a background color to fix this, or apply the shadow to a more specific component.',
]);

import { useMemo } from 'react';

const HomeTabs = () => {
  const menuIcons = useMemo(() => {
    return (route, focused) => {
      let icon;

      if (route.name === 'home') {
        icon = focused ? (
          <HomeSolid size='30' color={'white'} />
        ) : (
          <HomeOutline size='30' strokeWidth={2} color={themeColors.bgLight} />
        );
      } else if (route.name === 'favorite') {
        icon = focused ? (
          <HeartSolid size='30' color={'white'} />
        ) : (
          <HeartOutline size='30' strokeWidth={2} color={themeColors.bgLight} />
        );
      } else if (route.name === 'cart') {
        icon = focused ? (
          <BagSolid size='30' color={'white'} />
        ) : (
          <BagOutline size='30' strokeWidth={2} color={themeColors.bgLight} />
        );
      }

      let buttonClass = focused ? 'bg-white' : '';
      return <View>{icon}</View>;
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 20,
          borderRadius: 50,
          marginHorizontal: 20,
          backgroundColor: '#864E19',
        },
        tabBarItemStyle: {
          marginTop: 30,
        },
      })}
    >
      <Tab.Screen name='home' component={HomeScreen} />
      <Tab.Screen name='favorite' component={HomeScreen} />
      <Tab.Screen name='cart' component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
