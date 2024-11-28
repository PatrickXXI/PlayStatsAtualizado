//Conexão com servidor
// npm i express consign body-parser mysql express-form-data
// npm install swagger-ui-express swagger-jsdoc

const customExpress = require('./config/customExpress');
const conexao = require('./infra/connection');
const Tabelas = require('./infra/tabelas');
const app = customExpress(); // esta recebendo aquele objeto que esta dentro do customExpres APP

//adicionando as const swaggerUi e swaggerJsdoc
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const jogadorRoutes = require('./controller/jogadorRouter'); // Caminho para o arquivo de rotas

// Configurações do Swagger
const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "PlayStats API",
        version: "1.0.0",
        description: "Documentação da API",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ['./controller/jogadorRouter.js'], // Caminho para seus arquivos de rotas que estao no controller
  };

  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); 

  app.use(express.json());
  // Usando as rotas do Jogador
app.use(jogadorRoutes);

conexao.connect(erro =>{
    if(erro){
        console.log(erro);
    }else{
        Tabelas.init(conexao);
        console.log('Conectado com sucesso');
        app.listen(3000,() => console.log('Servidor rodando na porta 3000'));
    }
});
