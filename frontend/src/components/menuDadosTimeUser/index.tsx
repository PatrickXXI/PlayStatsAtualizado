import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';  // Importando useRoute
import { RootStackParamList } from '../types/navigation';  // Importando o tipo de parâmetros de navegação
import { RouteProp } from '@react-navigation/native';  // Importando RouteProp
import styles from './formDadosTimeUser.style';

// Tipando o 'route' com o tipo correto
type RouteProps = RouteProp<RootStackParamList, 'dadosTimeUser'>;

const MenuDadosTimeUser: React.FC<{ navigation: any }> = ({ navigation }) => {
  const route = useRoute<RouteProps>();  // Usando o hook useRoute com tipagem

  // Acessando id_login com segurança, já que temos a tipagem garantida
  const { id_login } = route.params;  

  // Verificando se id_login está disponível antes de permitir navegação
  if (!id_login) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'red', fontSize: 20 }}>Erro: id_login não encontrado!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate('listaArtilhariaUser', { id_login })}
      >
        <Text style={styles.itemText}>Lista de Artilharia e assistências</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('listaJogosUser', { id_login })}
      >
        <Text style={styles.itemText}>Lista de jogos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('estatisticasJogadoresUser', { id_login })}
      >
        <Text style={styles.itemText}>Estatísticas dos jogadores</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('estatisticasJogosUser', { id_login })}
      >
        <Text style={styles.itemText}>Estatísticas dos jogos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.itemText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuDadosTimeUser;