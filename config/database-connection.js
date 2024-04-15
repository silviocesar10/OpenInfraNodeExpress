import Sequelize from 'sequelize';
import { databaseConfig } from "./database.js";

import { Usuario } from '../models/Usuario.js';
import { Maquina } from '../models/Maquina.js';
import { Manutencao } from '../models/Manutencao.js';
import * as fs from 'fs';

const sequelize = new Sequelize(databaseConfig);

Usuario.init(sequelize);
Maquina.init(sequelize);
Manutencao.init(sequelize);

Usuario.associate(sequelize.models);
Maquina.associate(sequelize.models);
Manutencao.associate(sequelize.models);

databaseInserts(); // comentar quando estiver em ambiente de produção (não criar tabelas e não inserir registros de teste)

function databaseInserts() {
    (async () => {

        await sequelize.sync({ force: true }); 

        const user1 = await Usuario.create({ nome: "teste", login: "teste", senha: "1234", setor:"setor1" });
        const user2 = await Usuario.create({ nome: "teste2", login: "teste2", senha: "1234", setor:"setor1" });
        const mq1 = await Maquina.create({ nome: "mq1", modelo: "dell", productkey: "1234", usuarioId: 1 });
        const mq2 = await Maquina.create({ nome: "mq2", modelo: "dell", productkey: "1234", usuarioId: 2 });
        const mnt1 = await Manutencao.create({ descricao: "manutencao 1", data: "2023-04-12", maquinaId: 1 });
        const mnt2 = await Manutencao.create({ descricao: "manutencao 2", data: "2023-04-12", maquinaId: 2 });

    })();
}

export default sequelize;