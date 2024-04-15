import { Maquina } from "../models/Maquina.js";

class MaquinaService {

  static async findAll() {
    const objs = await Maquina.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Maquina.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { nome, modelo, productKey, usuario } = req.body;
    if (nome == null && usuario == null) throw 'O nome do Maquina deve ser preenchido!';
    const obj = await Maquina.create({ nome, modelo , productKey, usuarioId: usuario.id});
    return await Maquina.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, modelo, productKey, usuario } = req.body;
    if (setor == null) throw 'O setor do Maquina deve ser preenchido!';
    const obj = await Maquina.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Maquina não encontrado!';
    Object.assign(obj, { nome, modelo , productKey, usuarioId: usuario.id});
    await obj.save();
    return await Maquina.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Maquina.findByPk(id);
    if (obj == null)
      throw 'Maquina não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um maquina associado a clientes!";
    }
  }

}

export { MaquinaService };