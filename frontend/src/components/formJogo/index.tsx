import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, Platform, KeyboardAvoidingView, Image } from 'react-native';
import axios from 'axios';
import styles from './formJogo.style';

const FormJogo: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const { id_login } = route.params; // Recupera o id_login da navegação

    const [fk_timeAdversario_id_timeAdversario, setIdTimeAdversario] = useState<number | null>(null); // Agora armazenamos o id do time
    const [nome_timeAdversario, setNomeTimeAdversario] = useState(''); // Nome do time para exibição no campo de texto
    const [data_jogo, setDataJogo] = useState('');
    const [hora_jogo, setHoraJogo] = useState('');
    const [time_adversario, setTimeAdversario] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    // Função para consultar os times adversários
    const consultarTimeAdversario = async () => {
        if (nome_timeAdversario.trim() === '') {
            setTimeAdversario([]);
            return;
        }

        setLoading(true);
        try {
            const response = await axios.get(`http://192.168.1.219:3000/buscarTimeAdversario?nome_timeAdversario=${nome_timeAdversario}`);
            
            // Mapeia os dados para adicionar um 'toString' em cada time
            const timesComToString = response.data.map((time: any) => ({
                ...time,
                toString: `${time.nome_timeAdversario}`,
            }));

            setTimeAdversario(timesComToString);
        } catch (error) {
            Alert.alert('Erro', 'Erro ao consultar os times adversários');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Usar o useEffect para debouncing na consulta
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            consultarTimeAdversario();
        }, 500); // Espera 500ms antes de fazer a requisição

        return () => clearTimeout(timeoutId); // Limpa o timeout se o nome mudar
    }, [nome_timeAdversario]);

    // Função para selecionar o time adversário
    const selecionarTimeAdversario = (time: string, id: number) => {
        setIdTimeAdversario(id); // Armazena o ID do time
        setNomeTimeAdversario(time); // Atualiza o nome do time
        setTimeAdversario([]); // Limpa a lista após a seleção
    };

    // Função para salvar o jogo no banco de dados
    const salvarJogo = async () => {
        // Validação dos campos
        if (!fk_timeAdversario_id_timeAdversario || !data_jogo || !hora_jogo || !id_login) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            setLoading(true); // Ativa o estado de carregamento

            // Envia os dados do jogo para a API
            const response = await axios.post('http://192.168.1.219:3000/jogo', {//work 192.168.1.219 home:192.168.0.10 roteador:192.168.255.212
                fk_timeAdversario_id_timeAdversario,  // Agora envia o id do time adversário
                data_jogo,
                hora_jogo,
                fk_login_id_login: id_login // Envia o id_login para o backend
            });

            // Exibe a mensagem de sucesso recebida da API
            Alert.alert('Sucesso', 'Jogo salvo com sucesso!');
            navigation.navigate('menuCadastros'); // Navega para a tela de opções após salvar com sucesso
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao salvar o jogo. Tente novamente.');
            console.error(error);
        } finally {
            setLoading(false); // Desativa o estado de carregamento
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
            <Text style={styles.title}>Cadastrar Jogo</Text>

            <TextInput 
                style={styles.input} 
                onChangeText={setDataJogo}
                value={data_jogo}
                placeholder="Digite a data do jogo. Ex: 25/02/2024"
            />
            <TextInput 
                style={styles.input} 
                onChangeText={setHoraJogo}
                value={hora_jogo}
                placeholder="Digite o horário do jogo"
            />
            
            <TextInput
                style={styles.input}
                placeholder="Digite o nome do time adversário"
                onChangeText={setNomeTimeAdversario}
                value={nome_timeAdversario}
            />

            {time_adversario.length > 0 && (
                <FlatList
                    style={{ width: '75%', marginLeft: 75 }}
                    data={time_adversario}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={styles.buttonTime} 
                            onPress={() => selecionarTimeAdversario(item.nome_timeAdversario, item.id_timeAdversario)}
                        >
                            <Text style={styles.buttonTextTime}>{item.toString}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id_timeAdversario.toString()} // Usando ID único
                />
            )}

            {/* Botão de salvar */}
            <TouchableOpacity 
                style={styles.button} 
                onPress={salvarJogo}
                disabled={loading} // Desativa o botão enquanto está carregando
            >
                <Text style={styles.buttonText}>{loading ? 'Salvando...' : 'Salvar'}</Text>
            </TouchableOpacity>

            {/* Botão de voltar */}
            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('menuCadastros')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

export default FormJogo;