import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import axios from 'axios';
import styles from './listaAdversarios.style';

interface Adversario {
    id_login: number;
    id_timeAdversario: number;
    nome_timeAdversario: string;
    endereco_timeAdversario: string;
}

const ListaAdversarios: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const { id_login } = route.params; // Recupera o id_login da navegação
    console.log('fk_login_id_login:', id_login); // Verifique o valor

    const loginId = parseInt(id_login, 10);

    if (isNaN(loginId)) {
        Alert.alert('Erro', 'ID de login inválido');
        return null;  // Retorna null para evitar carregar a tela
    }

    // Estado para armazenar os dados dos adversários
    const [adversarios, setAdversarios] = useState<Adversario[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Função para buscar os dados da API
    const fetchAdversarios = async () => {
        try {
            // Usando o id_login na URL da requisição
            const response = await axios.get(`http://192.168.1.219:3000/timeAdversario/porLogin/${id_login}`); 
            setAdversarios(response.data); // Armazena os dados no estado
        } catch (err) {
            setError('Erro ao carregar os dados');
            console.error(err);
        } finally {
            setLoading(false); // Finaliza o carregamento
        }
    };

    // Usamos useEffect para buscar os dados assim que o componente for montado
    useEffect(() => {
        fetchAdversarios();
    }, [id_login]); // Recarregar os adversários sempre que o id_login mudar

    // Função para exibir as opções de editar e excluir
    const showOptions = (item: Adversario) => {
        Alert.alert(
            'Opções',
            `Escolha uma ação para ${item.nome_timeAdversario}:`,
            [
                {
                    text: 'Editar',
                    onPress: () => navigateToEditPage(item), // Navega para a tela de edição
                },
                {
                    text: 'Excluir',
                    onPress: () => handleDelete(item.id_timeAdversario), // Lógica de exclusão
                },
                { text: 'Cancelar', style: 'cancel' },
            ],
            { cancelable: true }
        );
    };

    // Função para navegação para a tela de edição
    const navigateToEditPage = (item: Adversario) => {
        const id_timeAdversario = parseInt(item.id_timeAdversario.toString(), 10);  // Garantir que o id seja número
        if (isNaN(id_timeAdversario)) {
            Alert.alert('Erro', 'ID de time adversário inválido');
            return;
        }
        navigation.navigate('editarAdversario', { id_timeAdversario });  // Passando o parâmetro correto
    };

    // Função para deletar adversário
    const handleDelete = async (id_timeAdversario: number) => {
        try {
            const response = await axios.delete(`http://192.168.1.219:3000/timeAdversario/${id_timeAdversario}`);
            if (response.status === 200) {
                Alert.alert('Sucesso', 'Time adversário excluído com sucesso!');
                fetchAdversarios(); // Recarrega a lista de adversários após a exclusão
            } else {
                Alert.alert('Erro', 'Não foi possível excluir o time adversário.');
            }
        } catch (err) {
            Alert.alert('Erro', 'Erro ao excluir o time adversário.');
            console.error(err);
        }
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Carregando adversários...</Text>
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

    // Renderiza a lista de adversários
    const renderItem = ({ item }: { item: Adversario }) => (
        <View style={styles.item}>
            <Text style={styles.text}>Nome: {item.nome_timeAdversario}</Text>
            <Text style={styles.text}>Endereço: {item.endereco_timeAdversario}</Text>
            <TouchableOpacity style={styles.optionsButton} onPress={() => showOptions(item)}>
                <Text style={styles.optionsText}>+</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Adversários</Text>
            <FlatList
                data={adversarios}
                renderItem={renderItem}
                keyExtractor={(item) => item.id_timeAdversario.toString()}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuDesempenhos')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ListaAdversarios;