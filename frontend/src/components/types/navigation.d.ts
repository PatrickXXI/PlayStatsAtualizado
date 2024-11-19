// Definindo os tipos de parâmetros para o Stack Navigator
export type RootStackParamList = {
  Home: undefined;  // Página inicial sem parâmetros
  fazerLogin: undefined;  // Tela de login sem parâmetros
  cadastrarTime: undefined;  // Tela para cadastro de time sem parâmetros
  menuOpcoes: undefined;  // Tela de opções sem parâmetros
  cadastrarJogador: undefined;
  cadastrarTimeA: undefined;
  cadastrarJogo: undefined;
  dadosTime: undefined;
  menuArtilhariaAssistenciaUser:{ id_login: number };
  dadosTimeUser: { id_login: number };  // A tela 'dadosTimeUser' espera um parâmetro 'id_login' do tipo número
  listaArtilhariaUser: { id_login: number };
  listaAssistenciaUser: { id_login: number };
  listaJogosUser: { id_login: number };
  estatisticasJogosUser: { id_login: number };
  estatisticasJogadoresUser: { id_login: number };
  listaArtilharia: undefined;
  listaAssistencia: undefined;
  listaJogos: undefined;
  estatisticasJogos: undefined;
  estatisticasJogadores: undefined;
  listaDesempenhoJogadores: undefined;
  listaDesempenhoJogos: undefined;
  menuCadastros: undefined;
  menuDesempenhos: undefined;
  meuPerfil: undefined;
  listaAdversarios: undefined;
  editarJogo: { id_jogo: number };
  editarDesempenhoJogador: { id_jogador: number };
  editarAdversario: {id_timeAdversario: number};
};