const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
class Tipo extends Model{}
Tipo.init({
    descricao: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
},{
    sequelize,
    modelName:'tipos'
  }
)
sequelize.sync()
 module.exports = Tipo

/*

{
    "nome":"José",
    "cpf": "781.222.44-30",
    "telefone":"17997826667",
    "whatsapp":"551799996666",
    "email":"josé@teste.com",
    "senha":"1247"
}

*/