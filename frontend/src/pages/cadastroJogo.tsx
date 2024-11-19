import React from 'react';
import { View } from 'react-native';
import FormJogo from '../components/formJogo/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

interface HomeProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;  // Tipando o 'route' corretamente
}

const CadastroJogo: React.FC<HomeProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor: '#10451d' }}>
      <FormJogo navigation={navigation} route={route} /> 
    </View>
  );
};

export default CadastroJogo;