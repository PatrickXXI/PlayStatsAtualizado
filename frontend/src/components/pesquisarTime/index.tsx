import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import styles from './pesquisarTime.style';

const PesquisarTime: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [nome_timePrincipal, setNome_timePrincipal] = useState('');
    const [timesEncontrados, setTimesEncontrados] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Função para buscar os times na API
    const buscarTimes = async (nome: string) => {
        if (nome.trim() === '') {
            setTimesEncontrados([]);  // Limpa os resultados se o campo de busca estiver vazio
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.get(`http://192.168.1.219:3000/buscarTime?nome=${nome}`);
            
            if (response.data.success) {
                setTimesEncontrados(response.data.times);  // Agora setamos `times` diretamente
            } else {
                setTimesEncontrados([]);  // Caso nenhum time seja encontrado, limpa a lista
            }
        } catch (error) {
            console.error('Erro ao buscar os times:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Usar o useEffect para debouncing
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            buscarTimes(nome_timePrincipal);
        }, 500);  // Delay de 500ms antes de realizar a busca

        return () => clearTimeout(timeoutId);  // Limpar o timeout caso o valor de `nome_timePrincipal` mude
    }, [nome_timePrincipal]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Procure seu time aqui"
                onChangeText={setNome_timePrincipal}
                value={nome_timePrincipal}
            />
            {isLoading ? (
                <Text style={{ color: 'white', marginTop: 10 }}>Carregando...</Text>
            ) : (
                <>
                    {timesEncontrados.length === 0 && nome_timePrincipal.trim() !== '' ? (
                        <Text style={{ color: 'white', marginTop: 10 }}>Nenhum time encontrado.</Text>
                    ) : (
                        <FlatList
                            style={{ width: '75%', marginLeft: 75 }}
                            data={timesEncontrados}
                            renderItem={({ item }) => {
                                const { id_login, nome_timePrincipal } = item;

                                // Verifique se id_login está presente e é válido
                                if (!id_login || isNaN(id_login)) {
                                    console.error('id_login inválido:', id_login);
                                    return null;  // Não renderiza nada se id_login não for válido
                                }

                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            // Passando o id_login correto para a próxima tela
                                            navigation.navigate('dadosTimeUser', { id_login: id_login });
                                        }}
                                        style={styles.buttonTime}
                                    >
                                        <Text style={styles.buttonTextTime}>{nome_timePrincipal}</Text>
                                    </TouchableOpacity>
                                );
                            }}
                            keyExtractor={(item) => item.id_login.toString()}
                        />
                    )}
                </>
            )}
        </View>
    );
};

export default PesquisarTime;