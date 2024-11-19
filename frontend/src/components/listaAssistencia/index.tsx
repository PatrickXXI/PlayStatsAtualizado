import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios'; // Biblioteca para fazer requisições HTTP
import styles from './listaAssistencia.style';

interface Jogador {
    id_jogador: string;
    nome_jogador: string;
    apelido_jogador: string;
    posicao_jogador: string;
    gols_jogador: number;
    assistencias_jogador: number;
}

const ListaAssistencia: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const { id_login } = route.params; // Recupera o id_login da navegação

    const [jogadores, setJogadores] = useState<Jogador[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchJogadores = async () => {
        try {
            // Usando o id_login na URL da requisição
            const response = await axios.get(`http://192.168.1.219:3000/jogador/porLogin/${id_login}`);//work 192.168.1.219 home:192.168.0.10 roteador:192.168.255.212
            setJogadores(response.data); // Armazena os dados no estado
        } catch (err) {
            setError('Erro ao carregar os dados');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Usamos useEffect para buscar os dados assim que o componente for montado
    useEffect(() => {
        fetchJogadores();
    }, [id_login]);  // Recarregar os jogadores sempre que o id_login mudar

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Carregando jogadores...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{error}</Text>
            </View>
        );
    }

    // Ordena os jogadores por assistências
    const jogadoresOrdenados = jogadores.sort((a, b) => b.assistencias_jogador - a.assistencias_jogador);

    // Renderiza a lista de jogadores
    const renderItem = ({ item }: { item: Jogador }) => (
        <View style={styles.item}>
            <Text style={styles.text}>{item.nome_jogador} ({item.apelido_jogador})</Text>
            <Text style={styles.text}>Posição: {item.posicao_jogador}</Text>
            <Text style={styles.text}>Gols: {item.gols_jogador}</Text>
            <Text style={styles.text}>Assistências: {item.assistencias_jogador}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Assistências</Text>
            <FlatList
                data={jogadoresOrdenados} // Lista ordenada por assistências
                renderItem={renderItem}
                keyExtractor={(item) => item.id_jogador}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('dadosTime')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ListaAssistencia;