"use strict";

module.exports = function(sequelize, DataTypes) {
  var usuario = sequelize.define("usuario", {
    id_usuario: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    email:{
        type : DataTypes.STRING
    },
    contrasena:{
       type : DataTypes.STRING
    },
    nombre:{
        type : DataTypes.STRING
    },
    apellido:{
      type : DataTypes.STRING
    },
  foto:{
    type : DataTypes.STRING
  },
rol:{
  type : DataTypes.STRING
},
clave_admin:{
  type : DataTypes.STRING
},
  createdAt:{
    type: DataTypes.DATE,
    field: "created_at"
  },
  updatedAt:{
    type: DataTypes.DATE,
    field: "updated_at"
  }
  }, { freezeTableName: true,
  tableName: 'usuario'});

//Tarjeta.removeAttribute('id');
  return usuario;
};
