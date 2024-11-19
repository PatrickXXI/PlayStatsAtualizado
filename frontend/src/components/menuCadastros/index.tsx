import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';  // Importando o hook para acessar o contexto
import styles from './menuCadastros.style';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';

const MenuCadastros: React.FC<{ navigation: any }> = ({ navigation }) => {
  // Obtendo o id_login do contexto
  const { id_login } = useAuth();  

  return (
      <View style={styles.container}>
        
        <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        />

        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('cadastrarJogador', { id_login })}>
          <Text style={styles.itemText}>Cadastrar Jogador   <Ionicons name="add" size={20} color="" /></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cadastrarTimeA', { id_login })}>
          <Text style={styles.itemText}>Cadastrar time adversário   <Ionicons name="shield" size={20} color="" /></Text>  
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cadastrarJogo', { id_login })}>
          <Text style={styles.itemText}>Cadastrar jogo   <Ionicons name="football" size={20} color="" /></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('menuOpcoes')}>
          <Text style={styles.itemText}>Voltar</Text>
        </TouchableOpacity>
      </View>
  );
};

export default MenuCadastros;