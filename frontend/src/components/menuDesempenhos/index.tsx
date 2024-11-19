import React from 'react';
import { View, Text, TouchableOpacity,Image} from 'react-native';
import { useAuth } from '../context/AuthContext';  // Importando o hook para acessar o contexto
import styles from './menuDesempenhos.style';


const MenuDesempenhos: React.FC<{ navigation: any }> = ({ navigation }) => {
  // Obtendo o id_login do contexto
  const { id_login } = useAuth();

  return (
      <View style={styles.container}>
        <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        />
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('listaDesempenhoJogadores', { id_login })}>
          <Text style={styles.itemText}>Atualizar desempenho jogadores</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('listaDesempenhoJogos', { id_login })}
        >
          <Text style={styles.itemText}>Atualizar resultado jogos</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('listaAdversarios', { id_login })}
        >
          <Text style={styles.itemText}>Atualizar Adversarios</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonVoltar} 
          onPress={() => navigation.navigate('menuOpcoes')}
        >
          <Text style={styles.itemText}>Voltar</Text>
        </TouchableOpacity>
      </View>
  );
};

export default MenuDesempenhos;