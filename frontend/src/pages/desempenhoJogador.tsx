import React from 'react';
import { View } from 'react-native';
import ListaDesempenho from '../components/listaDesempenho';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

interface HomeProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;  // Tipando o 'route' corretamente
}

const DesempenhoJogador: React.FC<HomeProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor: '#333533' }}>
      <ListaDesempenho navigation={navigation} route={route} /> 
    </View>
  );
};

export default DesempenhoJogador;