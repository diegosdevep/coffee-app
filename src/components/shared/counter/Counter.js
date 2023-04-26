import { View, Text, TouchableOpacity } from 'react-native';
import { MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import { styles } from './counter.styles';

const Counter = ({ quantity, setQuantity }) => {
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrement}>
        <MinusIcon size='20' strokeWidth={3} color={'white'} />
      </TouchableOpacity>
      <Text style={styles.text}>{quantity}</Text>
      <TouchableOpacity onPress={handleIncrement}>
        <PlusIcon size='20' strokeWidth={3} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
