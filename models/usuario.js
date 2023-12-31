const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
class Usuario extends Model{}
Usuario.init({
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull:false
      },
      senha: {
        type: DataTypes.STRING,
        allowNull:false
      }
},{
    sequelize,
    modelName:'usuarios'
  }
)
sequelize.sync()
 module.exports = Usuario   