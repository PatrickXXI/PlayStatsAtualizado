import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import styles from './editarDesempenhoJogador.style';

const EditarDesempenhoJogador: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const { id_jogador } = route.params;  // Acessando o id do jogador passado como parâmetro

    // Adicionando logs para depuração
    useEffect(() => {
        console.log('id_jogador recebido:', id_jogador);  // Verificar se id_jogador está correto

        if (!id_jogador) {
            Alert.alert('Erro', 'ID do jogador inválido.');
            return;  // Previne que a requisição seja feita com um ID inválido
        }

        const fetchJogador = async () => {
            try {
                const response = await axios.get(`http://192.168.1.219:3000/jogador/${id_jogador}`);
                const data = response.data;

                console.log('Dados do jogador:', data);  // Verificando os dados retornados pela API

                // Como a resposta é um array, acessar o primeiro item do array
                if (data.length > 0) {
                    const jogador = data[0];  // Acessando o primeiro item do array
                    setJogador(jogador);
                    setGols_jogador(jogador.gols_jogador || 0);  // Define 0 se não tiver o campo
                    setAssistencias_jogador(jogador.assistencias_jogador || 0);  // Define 0 se não tiver o campo
                } else {
                    Alert.alert('Erro', 'Jogador não encontrado.');
                }
            } catch (error) {
                Alert.alert('Erro', 'Erro ao carregar os dados do jogador.');
                console.error(error);
            }
        };

        fetchJogador();  // Carrega os dados do jogador ao montar o componente
    }, [id_jogador]);

    const [jogador, setJogador] = useState<any>(null);  // Para armazenar os dados do jogador
    const [gols_jogador, setGols_jogador] = useState<number>(0);  // Para armazenar gols editados
    const [assistencias_jogador, setAssistencias_jogador] = useState<number>(0);  // Para armazenar assistências editadas

    const salvarAlteracoes = async () => {
        try {
            // Envia os dados modificados (somente gols e assistências)
            const response = await axios.patch(`http://192.168.1.219:3000/jogador/${id_jogador}`, {
                gols_jogador: gols_jogador,
                assistencias_jogador: assistencias_jogador,
            });

            if (response.status === 200) {
                Alert.alert('Sucesso', 'Jogador editado com sucesso!');
                navigation.goBack();  // Volta para a tela anterior
            } else {
                Alert.alert('Erro', 'Erro ao salvar as alterações.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro ao salvar as alterações. Tente novamente.');
            console.error(error);
        }
    };

    if (!jogador) {
        return (
            <View style={styles.container}>
                <Text>Carregando dados do jogador...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar gols e assistências</Text>

            <TouchableOpacity style={styles.buttonDados}>
                <Text style={styles.text}>Nome: {jogador.nome_jogador || 'Não disponível'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDados}>
            <Text style={styles.text}>Gols atuais : {gols_jogador}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDados}>
            <Text style={styles.text}>Assistências atuais: {assistencias_jogador}</Text>
            </TouchableOpacity>

            <Text style={styles.titleEdicao}>Informe aqui</Text>
            <Text style={styles.titleEdicao1}>Gols e assistencias atualizados.</Text>
            <TextInput
                style={styles.input} 
                placeholder="Gols"
                keyboardType="numeric"
                value={gols_jogador != null ? gols_jogador.toString() : '0'}
                onChangeText={(text) => setGols_jogador(Number(text))}
            />

            <TextInput
                style={styles.input} 
                placeholder="Assistências"
                keyboardType="numeric"
                value={assistencias_jogador != null ? assistencias_jogador.toString() : '0'}
                onChangeText={(text) => setAssistencias_jogador(Number(text))}
            />
            <TouchableOpacity onPress={salvarAlteracoes} style={styles.buttonSalvar}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('editarDesempenhoJogador')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            
            
        </View>
    );
};

export default EditarDesempenhoJogador;