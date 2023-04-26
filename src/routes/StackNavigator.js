import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import HomeTabs from './AppNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen
        name='Home'
        options={{ headerShown: false }}
        component={HomeTabs}
      />
      <Stack.Screen
        name='Product'
        options={{ headerShown: false }}
        component={ProductScreen}
      />
    </Stack.Navigator>
  );
}
