var express = require('express');
var router = express.Router();
var models = require("./../mysql");
var tablausuario = require("./../mysql/usuario");
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.posteo.findAll({
    include: [{
      model: tablausuario,
      required: true
     }]}
  ).then(result => {
    res.status(200).jsonp(result);
  })
  console.log('Arrive');
});
//Obtener
router.get('/:id', function(req, res, next){

  let id = req.params.id;
  models.posteo.findOne({
    where: {
      id_posteo: id
    }
  }).then(result => {
    if(result== null){
      res.status(200).jsonp("Does not exist");
    }
    res.status(200).jsonp(result);
  })
});
//Eliminar
router.delete('/:id', function(req, res, next){

  let id = req.params.id;
  models.posteo.destroy({
    where: {
      id_posteo: id
    }
  }).then(result => {
    if(result== null){
      res.status(200).jsonp("Does not exist");
    }
    res.status(200).jsonp(result);
  })
});
//Post
router.post('/', function(req, res, next){
  let posteo = req.body;
  models.posteo.create(posteo).then(result => {
    res.status(200).jsonp({status:true , response:"Was created correctly"});
  })

});
module.exports = router;
