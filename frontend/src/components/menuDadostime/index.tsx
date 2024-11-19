import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { useAuth } from '../context/AuthContext';  // Importando o hook para acessar o contexto
import styles from './dadosTime.style';

const MenuDadosTime: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { id_login } = useAuth();  // Usando o hook para obter o id_login do contexto

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        />
      <TouchableOpacity 
        style={styles.button1} 
        onPress={() => navigation.navigate('listaArtilharia', { id_login })}  // Passa o id_login para a próxima tela
      >
        <Text style={styles.itemText}>Lista de Artilharia e assistencias</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('listaJogos', { id_login })}  // Passa o id_login para a próxima tela
      >
        <Text style={styles.itemText}>Lista de jogos</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('estatisticasJogadores', { id_login })}  // Passa o id_login para a próxima tela
      >
        <Text style={styles.itemText}>Estatisticas dos jogadores</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('estatisticasJogos', { id_login })}  // Passa o id_login para a próxima tela
      >
        <Text style={styles.itemText}>Estatisticas dos jogos</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonVoltar} 
        onPress={() => navigation.navigate('menuOpcoes', { id_login })}  // Passa o id_login para a tela de opções
      >
        <Text style={styles.itemText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuDadosTime;