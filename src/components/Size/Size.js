import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './size.styles';

const Size = ({ selected, setSelected }) => {
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
            selected === 'Chico' ? styles.selected : styles.unselected,
          ]}
          onPress={() => handleSizeSelect('Chico')}
        >
          <Text style={styles.text}>Chico</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.btn,
            selected === 'Mediano' ? styles.selected : styles.unselected,
          ]}
          onPress={() => handleSizeSelect('Mediano')}
        >
          <Text style={styles.text}>Mediano</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.btn,
            selected === 'Grande' ? styles.selected : styles.unselected,
          ]}
          onPress={() => handleSizeSelect('Grande')}
        >
          <Text style={styles.text}>Grande</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Size;
