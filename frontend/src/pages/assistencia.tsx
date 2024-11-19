import React from 'react';
import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import ListaAssistencia from '../components/listaAssistencia';
import MenuArtilhariaAssistencia from '../components/menuArtilhariaAssistencia';

interface HomeProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;  // Tipando o 'route' corretamente
}

const Assistencias: React.FC<HomeProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor: '#10451d' }}>
      <MenuArtilhariaAssistencia navigation={navigation} />
      <ListaAssistencia navigation={navigation} route={route} /> 
    </View>
  );
};

export default Assistencias;