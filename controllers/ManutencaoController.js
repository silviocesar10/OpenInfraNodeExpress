import { ManutencaoService } from "../services/ManutencaoService.js";

class ManutencaoController {
  
  static async findAll(req, res, next) {
    ManutencaoService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    ManutencaoService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    ManutencaoService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    ManutencaoService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    ManutencaoService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { ManutencaoController };