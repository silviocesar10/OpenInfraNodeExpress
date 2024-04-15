import { Manutencao } from "../models/Manutencao.js";

class ManutencaoService {

  static async findAll() {
    const objs = await Manutencao.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Manutencao.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { descricao, data, maquina} = req.body;
    if (data == null && maquina == null) throw 'O nome do Manutencao deve ser preenchido!';
    const obj = await Manutencao.create({ descricao, data , maquinaId: maquina.id});
    return await Manutencao.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { descricao, data, maquina } = req.body;
    if (data == null) throw 'O setor do Manutencao deve ser preenchido!';
    const obj = await Manutencao.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Manutencao não encontrado!';
    Object.assign(obj, { descricao, data , maquinaId: maquina.id});
    await obj.save();
    return await Manutencao.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Manutencao.findByPk(id);
    if (obj == null)
      throw 'Manutencao não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um manutencao associado a clientes!";
    }
  }

}

export { ManutencaoService };