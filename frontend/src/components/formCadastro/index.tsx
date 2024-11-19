import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import styles from './formCadastro.style';
import axios from 'axios'; // Para enviar os dados para o back


const FormCadastro: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [nome_timePrincipal, setNome_timePrincipal] = useState('');
    const [endereco_timePrincipal, setEndereco_timePrincipal] = useState('');
    const [email, setEmail] = useState('');
    const [confirmaEmail, setConfirmaEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSave = async () => {
        // Validação dos campos
        if (!nome_timePrincipal || !endereco_timePrincipal || !email || !confirmaEmail || !senha) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        } else if (email !== confirmaEmail) {
            Alert.alert('Erro', 'Os emails não correspondem.');
        } else {
            try {
                // Enviar todos os dados para a API /timePrincipal para cadastro completo
                const responseTime = await axios.post('http://192.168.1.219:3000/login', {//work 192.168.1.219 home:192.168.0.10 roteador:192.168.255.212
                    nome_timePrincipal,
                    endereco_timePrincipal,
                    email,
                    senha
                });

                if (responseTime) {
                    Alert.alert('Sucesso', 'Time e usuário cadastrados com sucesso! Favor, realize o login');
                    navigation.navigate('Home'); // Navega para a próxima tela após o cadastro
                } else {
                    Alert.alert('Erro', 'Falha ao cadastrar o time e o usuário. Tente novamente.');
                }
            } catch (error) {
                Alert.alert('Erro', 'servidor.');
                console.error(error);
            }
        }
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={80} // Ajuste esse valor conforme necessário
        >
            <ScrollView 
                contentContainerStyle={styles.innerContainer} 
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                
                <Text style={styles.title}>Cadastre seu time aqui!</Text> 

                <TextInput 
                    style={styles.input} 
                    onChangeText={setNome_timePrincipal}
                    value={nome_timePrincipal}
                    placeholder="Digite o nome do seu time"
                />
                <TextInput 
                    style={styles.input} 
                    onChangeText={setEndereco_timePrincipal}
                    value={endereco_timePrincipal}
                    placeholder="Digite o endereço do seu time"
                />
                <TextInput 
                    style={styles.input} 
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Digite seu Email"
                />
                <TextInput 
                    style={styles.input} 
                    onChangeText={setConfirmaEmail}
                    value={confirmaEmail}
                    placeholder="Confirme o Email"
                />
                <TextInput 
                    style={styles.input} 
                    secureTextEntry
                    onChangeText={setSenha}
                    value={senha}
                    placeholder="Sua Senha"
                />

                {/* Botões */}
                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.buttonTextSalvar}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCancelar} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonTextCancelar}>Cancelar</Text>
                </TouchableOpacity>
                
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default FormCadastro;