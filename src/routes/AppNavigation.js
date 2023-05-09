import { LogBox, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeIcon as HomeOutline,
  ShoppingBagIcon as BagOutline,
  TicketIcon as TicketOutline,
} from 'react-native-heroicons/outline';
import {
  HomeIcon as HomeSolid,
  ShoppingBagIcon as BagSolid,
  TicketIcon as TicketSolid,
} from 'react-native-heroicons/solid';

import HomeScreen from '../screens/Home/HomeScreen';
import { themeColors } from '../theme/theme';

const Tab = createBottomTabNavigator();

LogBox.ignoreLogs([
  'ADVICE) View # of type ABI48_0_0RCTView has a shadow set but cannot calculate shadow efficiently. Consider setting a background color to fix this, or apply the shadow to a more specific component.',
]);

import { useMemo } from 'react';
import TicketScreen from '../screens/Ticket/TicketScreen';
import CheckoutScreen from '../screens/Checkout/CheckoutScreen';

const HomeTabs = () => {
  const menuIcons = useMemo(() => {
    return (route, focused) => {
      let icon;

      if (route.name === 'home') {
        icon = focused ? (
          <HomeSolid size='30' color={'white'} />
        ) : (
          <HomeOutline size='30' strokeWidth={2} color={'#E6E6E691'} />
        );
      } else if (route.name === 'ticket') {
        icon = focused ? (
          <TicketSolid size='30' color={'white'} />
        ) : (
          <TicketOutline size='30' strokeWidth={2} color={'#E6E6E691'} />
        );
      } else if (route.name === 'checkout') {
        icon = focused ? (
          <BagSolid size='30' color={'white'} />
        ) : (
          <BagOutline size='30' strokeWidth={2} color={'#E6E6E691'} />
        );
      }

      return <View>{icon}</View>;
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 20,
          borderRadius: 50,
          marginHorizontal: 20,
          backgroundColor: themeColors.bgDark,
        },
        tabBarItemStyle: {
          marginTop: 30,
        },
      })}
    >
      <Tab.Screen name='home' component={HomeScreen} />
      <Tab.Screen name='ticket' component={TicketScreen} />
      <Tab.Screen
        name='checkout'
        component={CheckoutScreen}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
