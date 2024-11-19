import React from 'react';
import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MenuDadosTimeUser from '../components/menuDadosTimeUser';

interface OpcoesProps {
  navigation: NativeStackNavigationProp<any>;
}

const DadosTimeUser: React.FC<OpcoesProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor: '#415d43' }}>
      <MenuDadosTimeUser navigation={navigation} />
    </View>
  );
};

export default DadosTimeUser;