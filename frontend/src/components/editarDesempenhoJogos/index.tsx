import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';  // Importando a biblioteca
import styles from './editarJogo.style';  // Manter o estilo da tela conforme o original

const EditarDesempenhoJogos: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const { id_jogo } = route.params;  // Acessando o id do jogo passado como parâmetro

    const [jogo, setJogo] = useState<any>(null);  // Para armazenar os dados do jogo
    const [placar_jogo, setPlacar_jogo] = useState<string>('');  // Para armazenar o placar editado
    const [nome_timeAdversario, setNome_timeAdversario] = useState<string>('');  // Para armazenar o nome do time adversário editado
    const [nome_timePrincipal, setNome_timePrincipal] = useState<string>('');  // Para armazenar o nome do time principal editado
    const [vencedor_jogo, setVencedor_jogo] = useState<string>('');  // Para armazenar o vencedor editado

    // Constante para a opção de empate
    const empate = 'Empate';

    useEffect(() => {
        const fetchJogo = async () => {
            try {
                const response = await axios.get(`http://192.168.1.219:3000/jogo/tpEta/${id_jogo}`);
                const data = response.data;

                if (data) {
                    setJogo(data);
                    setPlacar_jogo(data.placar || '');
                    setNome_timeAdversario(data.nome_time_adversario || '');
                    setNome_timePrincipal(data.nome_time_principal || '');
                    setVencedor_jogo(data.vencedor_jogo || '');
                } else {
                    Alert.alert('Erro', 'Jogo não encontrado.');
                }
            } catch (error) {
                Alert.alert('Erro', 'Erro ao carregar os dados do jogo.');
                console.error(error);
            }
        };

        fetchJogo();
    }, [id_jogo]);

    const salvarAlteracoes = async () => {
        try {
            const response = await axios.patch(`http://192.168.1.219:3000/jogo/${id_jogo}`, {
                placar_jogo,
                vencedor_jogo,  // Usando o vencedor selecionado no dropdown
            });

            if (response.status === 200) {
                Alert.alert('Sucesso', 'Jogo editado com sucesso!');
                navigation.goBack();  // Volta para a tela anterior
            } else {
                Alert.alert('Erro', 'Erro ao salvar as alterações.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro ao salvar as alterações. Tente novamente.');
            console.error(error);
        }
    };

    // Verifica se os dados do jogo foram carregados corretamente
    if (!jogo) {
        return (
            <View style={styles.container}>
                <Text>Carregando dados do jogo...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar Jogo: {nome_timePrincipal}</Text>

            {/* Informações do jogo */}
            <TouchableOpacity style={styles.buttonDados}>
                <Text style={styles.text}>Time Principal: {nome_timePrincipal || 'Não disponível'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonDados}>
                <Text style={styles.text}>Time Adversário: {nome_timeAdversario || 'Não disponível'}</Text>
            </TouchableOpacity>

            <Text style={styles.titleEdicao}>Informe aqui o placar:</Text>

            {/* Campos para editar o placar */}
            <TextInput
                style={styles.input}
                placeholder="Placar"
                value={placar_jogo}
                onChangeText={setPlacar_jogo}  // Atualiza o placar
            />

            <Text style={styles.titleEdicao1}>Selecione o time vencedor:</Text>
            <TouchableOpacity style={styles.picker}>
                <RNPickerSelect
                    placeholder={{
                        label: 'Selecione o time vencedor...',
                        value: null,
                    }}
                    value={vencedor_jogo}
                    onValueChange={(value) => setVencedor_jogo(value)}  // Atualiza o vencedor
                    items={[
                        { label: nome_timePrincipal, value: nome_timePrincipal },
                        { label: nome_timeAdversario, value: nome_timeAdversario },
                        { label: empate, value: empate },  // Adiciona a opção de empate
                    ]}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={salvarAlteracoes} style={styles.buttonSalvar}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditarDesempenhoJogos;