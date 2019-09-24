var express = require('express');
var router = express.Router();
var models = require("./../mysql");
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.usuario.findAll().then(result => {
      res.status(200).jsonp(result);
  })
  console.log('llego')
});
//GETTING
router.get('/:id', function(req, res, next){

  let id = req.params.id;
  models.usuario.findOne({
    where: {
      id_usuario: id
    }
  }).then(result => {
    if(result== null){
      res.status(200).jsonp("Does not exist");
    }
    res.status(200).jsonp(result);
  })
});
//DELETE ME
router.delete('/:id', function(req, res, next){

  let id = req.params.id;
  models.usuario.destroy({
    where: {
      id_usuario: id
    }
  }).then(result => {
    console.log(result);
    if(!result){
      res.status(200).jsonp("Does not exist");
    }
    if(result == 1){
      res.status(200).jsonp("The data was delete");
    }
    res.status(200).jsonp(result);
  })
});
//POST ME
router.post('/', function(req, res, next){
  let usuario = req.body;
  models.usuario.create(usuario).then(result => {
    res.status(200).jsonp({status:true , response:"Was created correctly"});
  })

});
module.exports = router;
