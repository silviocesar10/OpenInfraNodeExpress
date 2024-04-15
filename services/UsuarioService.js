import { Usuario } from "../models/Usuario.js";

class UsuarioService {

  static async findAll() {
    const objs = await Usuario.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Usuario.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { nome, cidade } = req.body;
    if (nome == null) throw 'O nome do Usuario deve ser preenchido!';
    const obj = await Usuario.create({ nome, login , senha, setor});
    return await Usuario.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, login, senha, setor } = req.body;
    if (setor == null) throw 'O setor do Usuario deve ser preenchido!';
    const obj = await Usuario.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Usuario não encontrado!';
    Object.assign(obj, { nome, login, senha, setor});
    await obj.save();
    return await Usuario.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Usuario.findByPk(id);
    if (obj == null)
      throw 'Usuario não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um usuario associado a clientes!";
    }
  }

}

export { UsuarioService };