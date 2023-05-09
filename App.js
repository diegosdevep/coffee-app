import { NavigationContainer } from '@react-navigation/native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userSlice from './src/redux/userSlice';
import StackNavigator from './src/routes/StackNavigator';
import orderSlice from './src/redux/orderSlice';
import { initFirebase } from './src/firebase/firebase';

const store = configureStore({
  reducer: {
    user: userSlice,
    order: orderSlice,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
