"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var fileConfig = require('../config/config'); // get our config file


/*

 var config = {
 "username": "root",
 "password": "12345",
 //"password": "root",
 "database": "clarin365",
 "host": "34.204.255.219",
 //"host": "127.0.0.1",
 "dialect": "mysql"
 };

 JSON.parse(process.env.npm_config_argv).cooked[1].replace('start:','');
 */
var env ="prod";
var config = fileConfig.db;
//var config    = require(path.join(__dirname, 'config.json'))[env];
console.log("Enviroment :"+env);
console.log(config[env]);

var sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, config[env]);
var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.sequelize = sequelize;

module.exports = db;
