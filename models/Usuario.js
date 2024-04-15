import { Model, DataTypes } from 'sequelize';

class Usuario extends Model {

  static init(sequelize) {
    super.init({
      nome: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Nome do Usuario deve ser preenchido!" },
          len: { args: [1, 128], msg: "Nome do Usuario deve ter entre 1 e 128 letras!" }
        }
      },
      login: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "O Login do Usuario deve ser preenchido!" },
          len: { args: [1, 128], msg: "Nome do Usuario deve ter entre 1 e 128 letras!" }
        }
      },
      senha: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "A senha do Usuario deve ser preenchido!" },
          len: { args: [1, 128], msg: "Nome do Usuario deve ter entre 1 e 128 letras!" }
        }
      },
      setor: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "O setor do Usuario deve ser preenchido!" },
          len: { args: [1, 128], msg: "Nome do Usuario deve ter entre 1 e 128 letras!" }
        }
      }
    }, { sequelize, modelName: 'usuario', tableName: 'usuarios' })
  }

  static associate(models) {
  }
  
}

export { Usuario };