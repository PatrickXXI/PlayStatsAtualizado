import React, { useState } from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import styles from './estatisticasJogadoresUser.style';

const EstatisticasJogadoresUser: React.FC<{ navigation: any }> = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Estatisticas dos Jogadores</Text>
            <Text style={{fontSize:20, color:'white', width:160, marginTop:30}}>Aqui ficara uma lista com a média de gols por jogo de cada jogador, media de presença nos jogos, entre outros.</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('dadosTimeUser')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}
export default EstatisticasJogadoresUser;