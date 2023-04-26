import React from 'react';
import { View, Text } from 'react-native';

const Description = ({ description }) => {
  return (
    <View style={{ marginTop: 30, marginHorizontal: '5%' }}>
      <Text style={{ fontSize: 20, fontWeight: '700', color: '#864E19' }}>
        Descripción
      </Text>
      <Text style={{ marginTop: 10, color: '#864E19', fontWeight: '500' }}>
        {description}
      </Text>
    </View>
  );
};

export default Description;
