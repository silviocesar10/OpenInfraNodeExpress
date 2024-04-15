import { Model, DataTypes } from 'sequelize';

class Maquina extends Model {

  static init(sequelize) {
    super.init({
      nome: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Nome do Maquina deve ser preenchido!" },
          len: { args: [1, 128], msg: "Nome do Maquina deve ter entre 1 e 128 letras!" }
        }
      },
      modelo: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "O Login do Maquina deve ser preenchido!" },
          len: { args: [1, 128], msg: "Nome do Maquina deve ter entre 1 e 128 letras!" }
        }
      },
      productkey: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "A senha do Maquina deve ser preenchida!" },
          len: { args: [1, 128], msg: "Nome do Maquina deve ter entre 1 e 128 letras!" }
        }
      },
    }, { sequelize, modelName: 'maquina', tableName: 'maquinas' })
  }

  static associate(models) {
    this.belongsTo(models.usuario, { as: 'usuario', foreignKey: {name: 'usuarioId', allowNull: false, validate: {notNull: {msg: 'Usuario associado a maquina deve ser preenchido!'}}}});
  }
  
}

export { Maquina };