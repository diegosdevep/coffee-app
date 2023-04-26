import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './size.styles';

const Size = () => {
  const [selected, setSelected] = useState('Medium');

  const handleSizeSelect = (size) => {
    setSelected(size);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medida Café</Text>

      <View style={styles.content}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.btn,
            selected === 'Small' ? styles.selected : styles.unselected,
          ]}
          onPress={() => handleSizeSelect('Small')}
        >
          <Text style={styles.text}>Pequeño</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.btn,
            selected === 'Medium' ? styles.selected : styles.unselected,
          ]}
          onPress={() => handleSizeSelect('Medium')}
        >
          <Text style={styles.text}>Mediano</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.btn,
            selected === 'Large' ? styles.selected : styles.unselected,
          ]}
          onPress={() => handleSizeSelect('Large')}
        >
          <Text style={styles.text}>Grande</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Size;
