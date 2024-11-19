import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import axios from 'axios';
import styles from './listaDesempenhoJogos.style';

interface Jogo {
    id_jogo: number;
    id_login: number;
    id_timeAdversario: number;
    data_jogo: string;
    hora_jogo: string;
    vencedor_jogo: string;
    placar_jogo: string;
    nome_timeAdversario: string;
    nome_timePrincipal: string;  // Agora inclui o nome do time principal
    endereco_timeAdversario: string;  // Agora inclui o endereço do time adversário
}

const ListaDesempenhoJogos: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const { id_login } = route.params; // Recupera o id_login da navegação
    const [jogos, setJogos] = useState<Jogo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Função para buscar todos os jogos associados ao id_login
    const fetchJogos = async () => {
        try {
            const response = await axios.get(`http://192.168.1.219:3000/jogo/porLogin/${id_login}`);
            const jogosData = response.data;

            // Buscar detalhes completos de cada jogo (nome_timePrincipal, nome_timeAdversario, endereco_timeAdversario)
            const jogosComDetalhes = await Promise.all(
                jogosData.map(async (jogo: Jogo) => {
                    try {
                        const jogoDetalhado = await axios.get(`http://192.168.1.219:3000/jogo/tpEta/${jogo.id_jogo}`);
                        return {
                            ...jogo,
                            nome_timePrincipal: jogoDetalhado.data.nome_time_principal,
                            nome_timeAdversario: jogoDetalhado.data.nome_time_adversario,
                            endereco_timeAdversario: jogoDetalhado.data.endereco_time_adversario,
                        };
                    } catch (err) {
                        console.error(`Erro ao buscar detalhes do jogo ${jogo.id_jogo}:`, err);
                        return jogo;
                    }
                })
            );

            setJogos(jogosComDetalhes);
        } catch (err) {
            setError('Erro ao carregar os dados');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // UseEffect para carregar os jogos ao iniciar o componente
    useEffect(() => {
        fetchJogos();
    }, [id_login]);

    const showOptions = (item: Jogo) => {
        Alert.alert(
            'Opções',
            `Escolha uma ação para o jogo contra o time ${item.nome_timeAdversario}:`,
            [
                {
                    text: 'Editar',
                    onPress: () => navigateToEditPage(item),
                },
                {
                    text: 'Excluir',
                    onPress: () => handleDelete(item.id_jogo),
                },
                { text: 'Cancelar', style: 'cancel' },
            ],
            { cancelable: true }
        );
    };

    const navigateToEditPage = (item: Jogo) => {
        // Passando apenas o id_jogo para a tela de edição
        navigation.navigate('editarJogo', { id_jogo: item.id_jogo });
    };

    const handleDelete = async (id_jogo: number) => {
        try {
            const response = await axios.delete(`http://192.168.1.219:3000/jogo/${id_jogo}`);
            if (response.status === 200) {
                Alert.alert('Sucesso', 'Jogo excluído com sucesso!');
                fetchJogos();  // Recarregar a lista após a exclusão
            } else {
                Alert.alert('Erro', 'Não foi possível excluir o jogo.');
            }
        } catch (err) {
            Alert.alert('Erro', 'Erro ao excluir o jogo.');
            console.error(err);
        }
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Carregando jogos...</Text>
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

    const orderedJogos = jogos.sort((a, b) => new Date(a.data_jogo).getTime() - new Date(b.data_jogo).getTime());

    const renderItem = ({ item }: { item: Jogo }) => (
        <View style={styles.item}>
            <Text style={styles.text}>Data: {item.data_jogo}</Text>
            <Text style={styles.text}>Hora: {item.hora_jogo}</Text>
            <Text style={styles.text}>Vencedor: {item.vencedor_jogo}</Text>
            <Text style={styles.text}>Placar: {item.placar_jogo}</Text>
            <Text style={styles.text}>Time Principal: {item.nome_timePrincipal || 'Não disponível'}</Text>
            <Text style={styles.text}>Time Adversário: {item.nome_timeAdversario || 'Não disponível'}</Text>
            <Text style={styles.text}>Endereço Time Adversário: {item.endereco_timeAdversario || 'Não disponível'}</Text>
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
            <Text style={styles.title}>Atualizar resultados dos jogos</Text>
            <FlatList
                data={orderedJogos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id_jogo.toString()}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuDesempenhos')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ListaDesempenhoJogos;