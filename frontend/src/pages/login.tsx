import React from 'react';
import { View } from 'react-native';
import FormLogin from '../components/formLogin/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface LoginProps {
  navigation: NativeStackNavigationProp<any>;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor: '#10451d' }}>
      <FormLogin navigation={navigation} />
    </View>
  );
};

export default Login;