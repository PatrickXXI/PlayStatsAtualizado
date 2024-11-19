
import React from 'react';
import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FormDadosTime from '../components/menuDadostime';

interface OpcoesProps {
  navigation: NativeStackNavigationProp<any>;
}

const DadosTime: React.FC<OpcoesProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor: '#10451d' }}>
      <FormDadosTime navigation={navigation} />
    </View>
  );
};

export default DadosTime;