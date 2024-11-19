import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';  // Importando useRoute
import { RootStackParamList } from '../types/navigation';  // Importando o tipo de parâmetros de navegação
import { RouteProp } from '@react-navigation/native';  // Importando RouteProp
import styles from './menuArtilhariaAssistenciaUser.style';

// Tipando o 'route' com o tipo correto
type RouteProps = RouteProp<RootStackParamList, 'menuArtilhariaAssistenciaUser'>;

const MenuArtilhariaAssistenciaUser: React.FC<{ navigation: any }> = ({ navigation }) => {
  const route = useRoute<RouteProps>();  // Usando o hook useRoute com tipagem

  // Acessando id_login com segurança, já que temos a tipagem garantida
  const { id_login } = route.params || {};  

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
      {/* Botão para a tela de Artilharia, passando o id_login */}
      <TouchableOpacity 
        style={styles.buttonMenu} 
        onPress={() => navigation.navigate('listaArtilhariaUser', { id_login })}  // Passa o id_login para a próxima tela
      >
        <Text style={styles.buttonMenuText}>Artilharia</Text>
      </TouchableOpacity>

      {/* Botão para a tela de Assistências, passando o id_login */}
      <TouchableOpacity 
        style={styles.buttonMenu}
        onPress={() => navigation.navigate('listaAssistenciaUser', { id_login })}  // Passa o id_login para a próxima tela
      >
        <Text style={styles.buttonMenuText}>Assistências</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuArtilhariaAssistenciaUser;