import React, { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './estatisticasJogosUser.style';

const EstatisticasJogosUser: React.FC<{ navigation: any }> = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Estatisticas dos Jogos</Text> 
            <Text style={{fontSize:20, color:'white', width:160, marginTop:30}}>Aqui ficara uma lista com a média de vitórias e derrotas, média de gols sofridos e gols feitos. </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('dadosTimeUser')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}
export default EstatisticasJogosUser;