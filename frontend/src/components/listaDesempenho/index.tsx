import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import axios from 'axios';
import styles from './listaDesempenho.style';

interface Jogador {
    id_login: number;
    id_jogador: number;  // Alterado para number
    nome_jogador: string;
    apelido_jogador: string;
    posicao_jogador: string;
    gols_jogador: number;
    assistencias_jogador: number;
}

const ListaDesempenho: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const { id_login } = route.params; // Recupera o id_login da navegação
    console.log('fk_login_id_login:', id_login);  // Verifique o valor

const loginId = parseInt(id_login, 10);

if (isNaN(loginId)) {
    Alert.alert('Erro', 'ID de login inválido');
    return null;  // Retorna null para evitar carregar a tela
}

    const [jogadores, setJogadores] = useState<Jogador[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchJogadores = async () => {
        try {
            // Usando o id_login na URL da requisição
            const response = await axios.get(`http://192.168.1.219:3000/jogador/porLogin/${id_login}`); //work 192.168.1.219 home:192.168.0.10 roteador:192.168.255.212
            setJogadores(response.data);
        } catch (err) {
            setError('Erro ao carregar os dados');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJogadores();
    }, [id_login]);  // Recarregar os jogadores sempre que o id_login mudar

    const showOptions = (item: Jogador) => {
        Alert.alert(
            'Opções',
            `Escolha uma ação para ${item.id_jogador}:`,
            [
                {
                    text: 'Editar',
                    onPress: () => navigateToEditPage(item),
                },
                {
                    text: 'Excluir',
                    onPress: () => handleDelete(item.id_jogador),
                },
                { text: 'Cancelar', style: 'cancel' },
            ],
            { cancelable: true }
        );
    };

    const navigateToEditPage = (item: Jogador) => {
        const id_jogador = parseInt(item.id_jogador.toString(), 10);  // Garantir que o id seja número
        if (isNaN(id_jogador)) {
            Alert.alert('Erro', 'ID de jogador inválido');
            return;
        }
        navigation.navigate('editarDesempenhoJogador', { id_jogador });  // Passando o parâmetro correto
    };

    const handleDelete = async (id_jogador: number) => {
        try {
            const response = await axios.delete(`http://192.168.1.219:3000/jogador/${id_jogador}`);//work 192.168.1.219 home:192.168.0.10 roteador:192.168.255.212
            if (response.status === 200) {
                Alert.alert('Sucesso', 'Jogador excluído com sucesso!');
                fetchJogadores();
            } else {
                Alert.alert('Erro', 'Não foi possível excluir o jogador.');
            }
        } catch (err) {
            Alert.alert('Erro', 'Erro ao excluir o jogador.');
            console.error(err);
        }
    };

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

    const jogadoresOrdenados = jogadores.sort((a, b) => b.gols_jogador - a.gols_jogador);

    const renderItem = ({ item }: { item: Jogador }) => (
        <View style={styles.item}>
            <Text style={styles.text}>{item.nome_jogador} ({item.apelido_jogador})</Text>
            <Text style={styles.text}>Posição: {item.posicao_jogador}</Text>
            <Text style={styles.text}>Gols: {item.gols_jogador}</Text>
            <Text style={styles.text}>Assistências: {item.assistencias_jogador}</Text>
            <TouchableOpacity 
                style={styles.optionsButton} 
                onPress={() => showOptions(item)}
            >
                <Text style={styles.optionsText}>+</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Atualizar gols e assistências</Text>
            <FlatList
                data={jogadoresOrdenados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id_jogador.toString()}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuDesempenhos')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ListaDesempenho;