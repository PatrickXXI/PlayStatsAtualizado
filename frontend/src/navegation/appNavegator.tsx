import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../components/types/navigation';  // Importando o tipo de parâmetros

import Home from '../pages/home';
import Login from '../pages/login';
import CadastrarTimeP from '../pages/cadastrarTimeP';
import Opcoes from '../pages/Opcoes';
import CadastrarJogador from '../pages/cadastrarJogador';
import CadastrarTimeA from '../pages/cadastrarTimeA';
import CadastroJogo from '../pages/cadastroJogo';
import DadosTime from '../pages/dadosTime';
import DadosTimeUser from '../pages/dadosTimeUser';
import ArtilhariaUser from '../pages/artilhariaUser';
import JogosUser from '../pages/jogosUser';
import EstatisticaJogosUser from '../pages/estatisticaJogosUser';
import EstatisticaJogadoresUser from '../pages/estatisticaJogadoresUser';
import Artilharia from '../pages/artilharia';
import Jogos from '../pages/jogos';
import EstatisticaJogos from '../pages/estatisticaJogos';
import EstatisticaJogadores from '../pages/estatisticaJogadores';
import DesempenhoJogador from '../pages/desempenhoJogador';
import Assistencias from '../pages/assistencia';
import AssistenciasUser from '../pages/assistenciaUser';
import DesempenhoJogos from '../pages/desempenhoJogos';
import Cadastros from '../pages/cadastros';
import Desempenhos from '../pages/desempenhos';
import Perfil from '../pages/perfil';
import Adversarios from '../pages/adversarios';
import EditarJogo from '../pages/editarJogo';
import EditarJogador from 'pages/editarJogador';
import EditarTimeAdversario from 'pages/editarAdversario';

const Stack = createNativeStackNavigator<RootStackParamList>(); // Tipando o Stack Navigator

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="fazerLogin" component={Login} />
      <Stack.Screen name="cadastrarTime" component={CadastrarTimeP} options={{headerShown: false}} />
      <Stack.Screen name="menuOpcoes" component={Opcoes} options={{headerShown: false}} />
      <Stack.Screen name="cadastrarJogador" component={CadastrarJogador} options={{headerShown: false}} />
      <Stack.Screen name="cadastrarTimeA" component={CadastrarTimeA} options={{headerShown: false}} />
      <Stack.Screen name="cadastrarJogo" component={CadastroJogo} options={{headerShown: false}} />
      <Stack.Screen name="dadosTime" component={DadosTime} options={{headerShown: false}} />
      <Stack.Screen name="dadosTimeUser" component={DadosTimeUser} options={{headerShown: false}} />
      <Stack.Screen name="listaArtilhariaUser" component={ArtilhariaUser} options={{headerShown: false}} />
      <Stack.Screen name="listaAssistenciaUser" component={AssistenciasUser} options={{headerShown: false}} />
      <Stack.Screen name="listaJogosUser" component={JogosUser} options={{headerShown: false}} />
      <Stack.Screen name="estatisticasJogosUser" component={EstatisticaJogosUser} options={{headerShown: false}} />
      <Stack.Screen name="estatisticasJogadoresUser" component={EstatisticaJogadoresUser} options={{headerShown: false}} />
      <Stack.Screen name="listaArtilharia" component={Artilharia} options={{headerShown: false}} />
      <Stack.Screen name="listaAssistencia" component={Assistencias} options={{headerShown: false}} />
      <Stack.Screen name="listaJogos" component={Jogos} options={{headerShown: false}} />
      <Stack.Screen name="estatisticasJogos" component={EstatisticaJogos} options={{headerShown: false}} />
      <Stack.Screen name="estatisticasJogadores" component={EstatisticaJogadores} options={{headerShown: false}} />
      <Stack.Screen name="listaDesempenhoJogadores" component={DesempenhoJogador} options={{headerShown: false}} />
      <Stack.Screen name="listaDesempenhoJogos" component={DesempenhoJogos} options={{headerShown: false}} />
      <Stack.Screen name="menuCadastros" component={Cadastros} options={{headerShown: false}} />
      <Stack.Screen name="menuDesempenhos" component={Desempenhos} options={{headerShown: false}} />
      <Stack.Screen name="meuPerfil" component={Perfil} options={{headerShown: false}} />
      <Stack.Screen name="listaAdversarios" component={Adversarios} options={{headerShown: false}} />
      <Stack.Screen name="editarJogo" component={EditarJogo} options={{headerShown: false}} />
      <Stack.Screen name="editarDesempenhoJogador" component={EditarJogador} options={{headerShown: false}} />
      <Stack.Screen name="editarAdversario" component={EditarTimeAdversario} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default AppNavigator;