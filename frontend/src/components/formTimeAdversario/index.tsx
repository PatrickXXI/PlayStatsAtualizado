import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Platform, Image,KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import styles from './formTimeA.style';

const FormTimeAdversario: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    // Acessando o id_login passado por parâmetros via navegação
    const { id_login } = route.params; 

    const [nome_timeAdversario, setNome_timeAdversario] = useState('');
    const [endereco_timeAdversario, setEndereco_timeAdversario] = useState('');

    const handleSave = async () => {
        // Validação dos campos
        if (!nome_timeAdversario || !endereco_timeAdversario || !id_login) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            // Enviando os dados para a API (supondo que a API seja 'http://192.168.1.219:3000/timeadversario')
            const response = await axios.post('http://192.168.1.219:3000/timeadversario', {
                nome_timeAdversario,
                endereco_timeAdversario,
                fk_login_id_login: id_login // Envia o id_login para o back-end
            });

            // Mensagem de sucesso, caso os dados sejam enviados corretamente
            Alert.alert('Sucesso', response.data.message); 
            navigation.navigate('menuCadastros'); // Navega para a tela de menu após sucesso

        } catch (error) {
            // Tratamento de erro caso algo dê errado na requisição
            Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o time adversário. Tente novamente.');
            console.error(error);
        }
    }; 

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            keyboardVerticalOffset={100} 
        >   
            <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            />
            <Text style={styles.title}>Cadastrar Time Adversário</Text>

            <TextInput 
                style={styles.input} 
                onChangeText={setNome_timeAdversario}
                value={nome_timeAdversario}
                placeholder="Digite o nome do time adversário"
            />
            <TextInput 
                style={styles.input} 
                onChangeText={setEndereco_timeAdversario}
                value={endereco_timeAdversario}
                placeholder="Digite o endereço"
            />

            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('menuCadastros')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

export default FormTimeAdversario;