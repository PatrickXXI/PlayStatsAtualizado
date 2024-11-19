import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';  // Importe o hook useAuth
import styles from './formLogin.style';

const FormLogin: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { setIdLogin } = useAuth();  // Acessa a função setIdLogin do contexto

    const handleLogin = async () => {
        if (!email || !senha) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch('http://192.168.1.219:3000/autentica', {//work 192.168.1.219 home:192.168.0.10 roteador:192.168.255.212
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    senha,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                const { id_login } = data;
                if (id_login) {
                    setIdLogin(id_login);  // Atualiza o id_login no contexto
                    navigation.navigate('menuOpcoes');  // Navega para o menuOpcoes
                } else {
                    Alert.alert('Erro', 'ID de login não encontrado.');
                }
            } else {
                Alert.alert('Erro', data.message || 'Erro ao fazer login');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Seja bem vindo(a)!</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Sua Senha"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FormLogin;