import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './menu.style';

const Menu: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cadastrarTime')}>
        <Text style={styles.itemText}>Cadastrar time</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('fazerLogin')}>
        <Text style={styles.itemText}>Fazer login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;