// Parte de back end
const timeAdversario = require('../model/timeAdversario');
const TimeAdversario = require('../model/timeAdversario');
const rota = '/timeAdversario'; // defininfdo a rota de TimeAdversario

module.exports = app => { //aqui dentro fica minha rota
    app.get(rota+'/porLogin/:fk_login_id_login', (req, res) => {
        let fk_login_id_login = parseInt(req.params.fk_login_id_login);
        TimeAdversario.lista(fk_login_id_login, res);
    });
    app.get((rota+'/:id'), (req, res)=>{
        let id = parseInt(req.params.id);
        TimeAdversario.buscaPorId(id, res);
    })
    app.post(rota, (req, res) => {
        console.log(req.body);  // imprimindo oque o usuário enviou por post
        TimeAdversario.adiciona(req.body, res)
    })
    app.patch((rota+'/:id'),(req, res)=>{
        let id = parseInt(req.params.id);  // parseInt, serve para ter certeza que o elemento que vier vai ser INT
        let valores = req.body; //Pegando todos os valores
        TimeAdversario.altera(id, valores, res);
    })
    app.get('/buscarTimeAdversario', (req, res) => {
        const { nome_timeAdversario } = req.query;  // Parâmetro de consulta para o nome do time
        if (!nome_timeAdversario) {
            return res.status(400).json({ success: false, message: 'O nome do time é obrigatório.' });
        }
        TimeAdversario.buscarTimeAdversario(nome_timeAdversario, res);  // Chama o método de busca de times
    });
    app.delete(rota + '/:id', (req, res) => {
        let id = parseInt(req.params.id);  // Obtendo o ID do jogador que será deletado
        timeAdversario.deleta(id, res);  // Chama o método deleta no modelo
    });
}
