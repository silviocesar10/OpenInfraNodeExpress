import express from "express";

import { UsuarioController } from './controllers/UsuarioController.js';
import { MaquinaController } from './controllers/MaquinaController.js';
import { ManutencaoController } from './controllers/ManutencaoController.js';

const routes = express.Router();

routes.get('/usuario', UsuarioController.findAll);
routes.get('/usuario/:id', UsuarioController.findByPk);
routes.post('/usuario', UsuarioController.create);
routes.put('/usuario/:id', UsuarioController.update);
routes.delete('/usuario/:id', UsuarioController.delete);

routes.get('/maquina', MaquinaController.findAll);
routes.get('/maquina/:id', MaquinaController.findByPk);
routes.post('/maquina', MaquinaController.create);
routes.put('/maquina/:id', MaquinaController.update);
routes.delete('/maquina/:id', MaquinaController.delete);
routes.get('/maquina/findByUf/:id', MaquinaController.findByPk);

routes.get('/manutencao', ManutencaoController.findAll);
routes.get('/manutencao/:id', ManutencaoController.findByPk);
routes.post('/manutencao', ManutencaoController.create);
routes.put('/manutencao/:id', ManutencaoController.update);
routes.delete('/manutencao/:id', ManutencaoController.delete);

export default routes;