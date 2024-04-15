import { MaquinaService } from "../services/MaquinaService.js";

class MaquinaController {
  
  static async findAll(req, res, next) {
    MaquinaService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    MaquinaService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    MaquinaService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    MaquinaService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    MaquinaService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { MaquinaController };