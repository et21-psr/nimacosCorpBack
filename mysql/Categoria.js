"use strict";

module.exports = function(sequelize, DataTypes) {
  var categoria = sequelize.define("categoria", {
    id_categoria: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    categoria_padre:{
        type : DataTypes.INTEGER
    },
    nombre:{
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
  tableName: 'categoria'});

//Tarjeta.removeAttribute('id');
  return categoria;
};
