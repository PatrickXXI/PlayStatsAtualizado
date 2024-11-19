import React from 'react';
import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import ListaArtilhariaUser from '../components/listaArtilhariaUser';
import MenuArtilhariaAssistenciaUser from '../components/menuArtilhariaAssistenciaUser';

interface HomeProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;  // Tipando o 'route' corretamente
}

const ArtilhariaUser: React.FC<HomeProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor: '#415d43' }}>
      <MenuArtilhariaAssistenciaUser navigation={navigation} />
      <ListaArtilhariaUser navigation={navigation} route={route} /> 
    </View>
  );
};

export default ArtilhariaUser;