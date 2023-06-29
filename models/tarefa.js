const {Sequelize, DataTypes, Model} = require('sequelize')
const sequelize = require('../bd')
const usuario = new require('./usuario')
const tipo = new require('./tipo')
class Tarefa extends Model{}
Tarefa.init({
    descricao: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
    data_cad: {
        type:Sequelize.DATEONLY,
        defaultValue: DataTypes.NOW
      },
      data_conc:{
        type:Sequelize.DATEONLY,
        allowNull: false
      },
      prioridade: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    },{
      sequelize,
      modelName:'tarefas'
    }
  )
  
  tipo.hasOne(Tarefa) //Muitos Pets tem muitas Doações - M-p-M
  Tarefa.belongsTo(tipo)

  usuario.hasMany(Tarefa)
  Tarefa.belongsTo(usuario)

  sequelize.sync()
   module.exports = Tarefa


    //https://sequelize.org/docs/v6/core-concepts/model-basics/
   //https://sequelize.org/docs/v6/advanced-association-concepts/creating-with-associations/

//hasOne (tem um) 1 para 1
//belongsTo (pertence a) 1 para 1
//hasMany (tem muitos) 1 para N
//belongsToMany (pertence a muitos) N para N


/*
    {
      "data_interesse":"2022-10-19",
      "data_Tarefa":"2022-10-19",
      "usuarioId":2,
      "petId":1
    }

*/