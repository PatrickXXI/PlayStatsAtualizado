
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import styles from './editarAdversario.style';

const EditarAdversario: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const { id_timeAdversario } = route.params;  // Acessando o id do time adversário passado como parâmetro

    // Estados para armazenar os dados do time adversário
    const [timeAdversario, setTimeAdversario] = useState<any>(null);
    const [nome_timeAdversario, setNome_timeAdversario] = useState<string>('');
    const [endereco_timeAdversario, setEndereco_timeAdversario] = useState<string>('');

    // Adicionando logs para depuração
    useEffect(() => {
        console.log('id_timeAdversario recebido:', id_timeAdversario);  // Verificar se id_timeAdversario está correto
    
        if (!id_timeAdversario) {
            Alert.alert('Erro', 'ID do time inválido.');
            return;  // Previne que a requisição seja feita com um ID inválido
        }
    
        const fetchAdversario = async () => {
            try {
                const response = await axios.get(`http://192.168.1.219:3000/timeAdversario/${id_timeAdversario}`);
                const data = response.data;
    
                console.log('Dados do time adversário:', data);  // Verificando os dados retornados pela API
    
                if (data.length > 0) {
                    // A resposta é um array, então precisamos acessar o primeiro item
                    const time = data[0];  // Acessando o primeiro item do array
                    setTimeAdversario(time);  // Armazena o time adversário
                    setNome_timeAdversario(time.nome_timeAdversario || '');  // Define o nome
                    setEndereco_timeAdversario(time.endereco_timeAdversario || '');  // Define o endereço
                } else {
                    Alert.alert('Erro', 'Time adversário não encontrado.');
                }
            } catch (error) {
                Alert.alert('Erro', 'Erro ao carregar os dados do time adversário.');
                console.error(error);
            }
        };
    
        fetchAdversario();  // Carrega os dados do time adversário ao montar o componente
    }, [id_timeAdversario]);

    // Função para salvar as alterações
    const salvarAlteracoes = async () => {
        try {
            const response = await axios.patch(`http://192.168.1.219:3000/timeAdversario/${id_timeAdversario}`, {
                nome_timeAdversario: nome_timeAdversario,
                endereco_timeAdversario: endereco_timeAdversario,
            });

            if (response.status === 200) {
                Alert.alert('Sucesso', 'Time adversário editado com sucesso!');
                navigation.goBack();  // Volta para a tela anterior
            } else {
                Alert.alert('Erro', 'Erro ao salvar as alterações.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro ao salvar as alterações. Tente novamente.');
            console.error(error);
        }
    };

    // Verifica se o time adversário foi carregado corretamente
    if (!id_timeAdversario || !timeAdversario) {
        return (
            <View style={styles.container}>
                <Text>Carregando dados do time adversário...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar time adversário</Text>
        
                    <Text style={styles.text}>Nome atual: {nome_timeAdversario}</Text>
                    <Text style={styles.text}>Endereço atual: {endereco_timeAdversario}</Text>
                

            <Text style={styles.titleEdicao}>Atualize os dados abaixo:</Text>

            <TextInput
                style={styles.input}
                placeholder="Novo Nome"
                
                onChangeText={(text) => setNome_timeAdversario(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Novo Endereço"
                
                onChangeText={(text) => setEndereco_timeAdversario(text)}
            />

            <TouchableOpacity onPress={salvarAlteracoes} style={styles.buttonSalvar}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditarAdversario;