import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Platform, Image } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import styles from './formJogador.style';

const FormJogador: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    
    const { id_login } = route.params; // Recupera o id_login da navegação

    const [nome_jogador, setNome_jogador] = useState('');
    const [apelido_jogador, setApelido_jogador] = useState('');
    const [posicao_jogador, setPosicao_jogador] = useState('');

    const handleSave = async () => {
        // Validação dos campos
        if (!nome_jogador || !apelido_jogador || !posicao_jogador || !id_login) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            // Enviando os dados para a API
            const response = await axios.post('http://192.168.1.219:3000/jogador', {//work 192.168.1.219 home:192.168.0.10 roteador:192.168.255.212
                nome_jogador,
                apelido_jogador,
                posicao_jogador,
                fk_login_id_login: id_login // Envia o id_login para o back-end
            });

            Alert.alert('Sucesso', response.data.message);
            navigation.navigate('menuCadastros'); // Navega para a tela de menu

        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o jogador. Tente novamente.');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            />
            <Text style={styles.title}>Cadastrar Jogadores</Text>

            <TextInput 
                style={styles.input} 
                onChangeText={setNome_jogador}
                value={nome_jogador}
                placeholder="Digite o nome do jogador"
            />
            <TextInput 
                style={styles.input} 
                onChangeText={setApelido_jogador}
                value={apelido_jogador}
                placeholder="Digite o apelido do jogador"
            />

            <TouchableOpacity style={styles.picker}>
            <Picker
                selectedValue={posicao_jogador}
                onValueChange={(itemValue) => setPosicao_jogador(itemValue)}
            >
                <Picker.Item label="Selecione a posição" value="" />
                <Picker.Item label="Goleiro" value="goleiro" />
                <Picker.Item label="Zagueiro" value="zagueiro" />
                <Picker.Item label="Volante" value="volante" />
                <Picker.Item label="Meio Campo" value="meio_campo" />
                <Picker.Item label="Lateral" value="lateral" />
                <Picker.Item label="Atacante" value="atacante" />
            </Picker>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            {/* Botão para voltar */}
            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('menuCadastros')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            </View>
    );
};

export default FormJogador;