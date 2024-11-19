import React from 'react';
import { View } from 'react-native';
import Menu from '../components/menu/index';
import PesquisarTime from '../components/pesquisarTime/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface HomeProps {
  navigation: NativeStackNavigationProp<any>;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor: '#10451d' }}>
      <Menu navigation={navigation} />
      <PesquisarTime navigation={navigation}/>
    </View>
  );
};

export default Home;