import React from 'react';
import { View } from 'react-native';
import FormTimeAdversario from 'components/formTimeAdversario';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

interface HomeProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;  // Tipando o 'route' corretamente
}

const CadastrarTimeA: React.FC<HomeProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor: '#10451d' }}>
      <FormTimeAdversario navigation={navigation} route={route} /> 
    </View>
  );
};

export default CadastrarTimeA;