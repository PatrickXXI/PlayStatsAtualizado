import React from 'react';
import { View } from 'react-native';
import MenuOpcoes from '../components/menuOpcoes/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface OpcoesProps {
  navigation: NativeStackNavigationProp<any>;
}

const Opcoes: React.FC<OpcoesProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor: '#10451d' }}>
      <MenuOpcoes navigation={navigation} />
    </View>
  );
};

export default Opcoes;