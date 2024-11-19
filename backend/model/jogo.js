const conexao = require('../infra/connection');

class Jogo{
    adiciona(jogo, res){
        let sql = 'INSERT INTO jogo SET ?'
        conexao.query(sql, jogo,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro);
            }else{
                res.status(200).json(resultado); // resolvendo o status em formato json
            }
        })
    }
    buscaPorIdtpEta(id, res) {
        // Consulta SQL corrigida
        let sql2 = `
            SELECT 
                j.id_jogo AS jogo_id,
                j.placar_jogo AS placar,
                l.id_login AS login_id,
                ta.id_timeAdversario AS time_adversario_id,
                ta.nome_timeAdversario AS nome_time_adversario,
                ta.endereco_timeAdversario as endereco_time_adversario,
                l.nome_timePrincipal AS nome_time_principal
            FROM 
                jogo j
            JOIN 
                login l ON j.fk_login_id_login = l.id_login
            JOIN 
                timeadversario ta ON j.fk_timeAdversario_id_timeAdversario = ta.id_timeAdversario
            WHERE
                j.id_jogo = ?`;
    
        conexao.query(sql2, [id], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
                console.log("Erro na consulta SQL:", erro);
            } else {
                if (resultado.length > 0) {
                    // Imprime o resultado da consulta SQL no console
                    console.log("Resultado da consulta:", resultado[0]);
    
                    res.status(200).json(resultado[0]);  // Retorna o primeiro jogo, já que id_jogo é único
                } else {
                    res.status(404).json({ message: 'Jogo não encontrado' });
                    console.log("Nenhum jogo encontrado para o ID:", id);
                }
            }
        });
    }
    buscaPorId(id, res){
        let sql2 = 'SELECT * FROM jogo where id_jogo = ?'
        conexao.query(sql2,id, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
                console.log(erro);
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    lista(fk_login_id_login, res) {
        
        let sql3 = 'SELECT * FROM jogo where fk_login_id_login = ?';
        conexao.query(sql3, [fk_login_id_login], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
                console.log(erro);
            } else {
                res.status(200).json(resultado);
            }
        });
    }

    altera(id, valores, res){
        let sqlEdit = 'UPDATE jogo SET ? WHERE id_jogo = ?';
        conexao.query(sqlEdit, [valores,id], (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro)
            }else{
                res.status(200).json(resultado) // resolvendo o status em formato json
            }
        })
    }
     // Método de deletar jogador
     deleta(id, res) {
        let sqlDelete = 'DELETE FROM jogo WHERE id_jogo = ?';
        conexao.query(sqlDelete, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro);
            } else {
                res.status(200).json(resultado)
            }
        });
    }
     // Método toString para representar o objeto jogo como string
     toString() {
        // Aqui você pode personalizar os campos que quer mostrar
        return `Jogo { 
            id_jogo: ${this.id_jogo },
            fk_login_id_login: ${this.fk_login_id_login},
            id_timeAdversario: ${this.id_timeAdversario },
            data_jogo: ${this.data_jogo },
            hora_jogo: ${this.hora_jogo},
            vencedor_jogo: ${this.vencedor}
        }`;
    }

}
module.exports = new Jogo; 
