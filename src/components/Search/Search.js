import { View, TouchableOpacity } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid';
import { styles } from './search.styles';
import { TextInput } from 'react-native';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Buscar....' />
        <TouchableOpacity style={styles.btn}>
          <MagnifyingGlassIcon size={25} strokeWidth={2} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
