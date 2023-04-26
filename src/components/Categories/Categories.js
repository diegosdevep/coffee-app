import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, FlatList } from 'react-native';
import { categories } from '../../constants/categories';
import { styles } from './categories.styles';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <View style={{ marginHorizontal: 20, marginTop: 25 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id}
        style={{ overflow: 'visible' }}
        renderItem={({ item }) => {
          isActive = item.id == activeCategory;
          let activeTextClass = isActive
            ? { color: 'white' }
            : { color: 'gray' };
          let bgColor = isActive ? '#864E19' : 'rgba(0,0,0,0.07)';
          return (
            <TouchableOpacity
              onPress={() => setActiveCategory(item.id)}
              style={[styles.btn, { backgroundColor: bgColor }]}
            >
              <Text style={{ fontWeight: '600', ...activeTextClass }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Categories;
