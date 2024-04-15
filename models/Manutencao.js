import { Model, DataTypes } from 'sequelize';

class Manutencao extends Model {

  static init(sequelize) {
    super.init({
      descricao: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "O Login do Manutencao deve ser preenchido!" },
          len: { args: [1, 128], msg: "Nome do Manutencao deve ter entre 1 e 128 letras!" }
        }
      },
      data: { 
        type: DataTypes.DATEONLY, 
        validate: {
          isDate: { msg: "Data da Manutencao deve ser preenchida!" },
          is: {args: ["[0-9]{4}\-[0-9]{2}\-[0-9]{2}"], msg: "Data da Reserva deve seguir o padrão yyyy-MM-dd!" }
        }
      },
    }, { sequelize, modelName: 'manutencao', tableName: 'manutencaos' })
  }

  static associate(models) {
    this.belongsTo(models.maquina, { as: 'maquina', foreignKey: {name: 'maquinaId', allowNull: false, validate: {notNull: {msg: 'Manutencao associado a manutencao deve ser preenchido!'}}}});
  }
  
}

export { Manutencao };