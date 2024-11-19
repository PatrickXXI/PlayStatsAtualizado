import React from 'react';
import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import ListaAssistenciaUser from '../components/listaAssistenciaUser';
import MenuArtilhariaAssistenciaUser from '../components/menuArtilhariaAssistenciaUser';

interface HomeProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;  // Tipando o 'route' corretamente
}

const AssistenciasUser: React.FC<HomeProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor: '#415d43' }}>
      <MenuArtilhariaAssistenciaUser navigation={navigation} />
      <ListaAssistenciaUser navigation={navigation} route={route} /> 
    </View>
  );
};

export default AssistenciasUser;