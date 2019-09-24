var express = require('express');
var router = express.Router();
var models = require("./../mysql");
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.comentario.findAll().then(result => {
    res.status(200).jsonp(result);

  })
  console.log('Arrive');
});
//Obtener
router.get('/:id', function(req, res, next){

  let id = req.params.id;
  models.comentario.findOne({
    where: {
      id_comentario: id
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
  models.comentario.destroy({
    where: {
      id_comentario: id
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
  let comentario = req.body;
  models.comentario.create(comentario).then(result => {
    res.status(200).jsonp({status:true , response:"Was created correctly"});
  })

});
module.exports = router;
