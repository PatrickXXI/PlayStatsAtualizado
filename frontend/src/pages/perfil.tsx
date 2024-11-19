import React from 'react';
import { View } from 'react-native';
import MeuPerfil from '../components/meuPerfil';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface OpcoesProps {
  navigation: NativeStackNavigationProp<any>;
}

const Perfil: React.FC<OpcoesProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor: '#10451d' }}>
      <MeuPerfil navigation={navigation} />
    </View>
  );
};

export default Perfil;