import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { useAuth } from '../context/AuthContext';  // Importando o hook para acessar o contexto
import styles from './menuOpcoes.style';
import { Ionicons } from '@expo/vector-icons';


const MenuOpcoes: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { id_login, setIdLogin } = useAuth();  // Usando o hook para obter o id_login e setIdLogin
   // Função para realizar o logout
   const handleLogout = () => {
    setIdLogin(null);  // Limpa o id_login no contexto (realiza o logout)
    navigation.navigate('Home');  // Navega para a tela Home sem passar o id_login
    };
  return (
      <View style={styles.container}>

        <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        />

        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('menuCadastros', { id_login })}>
          <Text style={styles.itemText}>Cadastros   <Ionicons name="add" size={20} color="white" /></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuDesempenhos', { id_login })}>
          <Text style={styles.itemText}>Atualizar desempenho   <Ionicons name="refresh" size={20} color="" /></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('dadosTime', { id_login })}>
          <Text style={styles.itemText}>Visualizar dados do time   <Ionicons name="eye" size={20} color="" /></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('meuPerfil', { id_login })}>
          <Text style={styles.itemText}>Meu perfil   <Ionicons name="person" size={20} color="" /></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonDesconectar} onPress={handleLogout}>
        <Text style={styles.itemText}>Desconectar</Text>
      </TouchableOpacity>
      </View>
  );
};

export default MenuOpcoes;