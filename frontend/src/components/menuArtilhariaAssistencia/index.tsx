import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext'; // Importando o hook useAuth
import styles from './menuArtilhariaAssistencia.style';

const MenuArtilhariaAssistencia: React.FC<{ navigation: any }> = ({ navigation }) => {
  // Usando o hook useAuth para obter o id_login do contexto
  const { id_login } = useAuth(); 

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.buttonMenu} 
        onPress={() => navigation.navigate('listaArtilharia', { id_login })}  // Passa o id_login para a próxima tela
      >
        <Text style={styles.buttonMenuText}>Artilharia</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonMenu} 
        onPress={() => navigation.navigate('listaAssistencia', { id_login })}  // Passa o id_login para a próxima tela
      >
        <Text style={styles.buttonMenuText}>Assistências</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuArtilhariaAssistencia;