import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './meuPerfil.style';

const MeuPerfil: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
        source={require('../assets/seuTime.png')}
        style={{width:115, height:115, alignSelf:'center'}}
        />
        <Text style={styles.text}>Nome:</Text>
        <Text style={styles.text}>Endereço:</Text>
        <Text style={styles.text}>E-mail:</Text>
        <Text style={styles.text}>Senha:</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButtonEditar}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('menuOpcoes')}>
          <Text style={styles.textButtonVoltar}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MeuPerfil;