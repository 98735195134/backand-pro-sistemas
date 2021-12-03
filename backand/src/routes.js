const express = require("express");
const routes = express.Router();
const clienteController = require("./controllers/ClienteController");
const produtoController = require("./controllers/produtoController");
const vendaController = require("./controllers/vendaController");

//rotas de clientes
routes.post("/cliente/cadastro", clienteController.cadastrar)
routes.get("/cliente/busca/:id", clienteController.buscar)
routes.get('/cliente/listar', clienteController.listar)
routes.put("/cliente/atualizar/:id", clienteController.atualizar)
routes.delete("/cliente/apagar/:id", clienteController.apagar)

//rotas de produtos
routes.post("/produto/cadastro", produtoController.cadastrar)
routes.get("/produto/listar", produtoController.listar)
routes.get("/produto/busca/:id", produtoController.buscar)
routes.put("/produto/atualizar/:id", produtoController.atualizar)
routes.delete("/produto/apagar/:id", produtoController.apagar)

//rotas de vendas
routes.post("/venda/cadastro", vendaController.cadastrar)
routes.get("/venda/busca/:id", vendaController.buscar)
routes.get("/venda/listar", vendaController.listar)
routes.delete("/venda/apagar/:id", vendaController.apagar)

module.exports= routes;


//PUT: atualizar informacoes
//DELETE: apagar informacoes
//GET: buscar informacoes
//POST: enviar informacoes

//Query params: parametros de busca-> utilizados para fazer buscas, filtros, paginacao
//Route params: parametros de rota-> utilizados para identificacao, busca especifica, apagar registro e etc.
//Body params: parametros do corpo-> utilizado para passar dados de cadastro, atualizacao e etc.
