require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket')
const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(process.env.MONGO_CONNECT,
{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);
//Tipos de parâmetros
//Query Params: req.query (Filtros, paginação, ordenação...)
//Route Paramns: req.paramns (Identificar um recurso na alteração ou remoção)
//Body: req.body (Dados para criação ou alteração de um registro)

//Mongo DB (Não-relacional)


server.listen(3333);