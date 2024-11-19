import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/components/context/AuthContext';  // Importe o AuthProvider
import AppNavigator from './src/navegation/appNavegator';  // Seu AppNavigator

const App: React.FC = () => {
  return (
    // Envolva o AppNavigator com o AuthProvider
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;