var express = require('express');
var router = express.Router();
var models = require("./../mysql");
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.categoria.findAll().then(result => {
    res.status(200).jsonp(result);

  })
  console.log('llego');
});
//Obetener
router.get('/:id', function(req, res, next){

  let id = req.params.id;
  models.categoria.findOne({
    where: {
      id_categoria: id
    }
  }).then(result => {
    if(result== null){
      res.status(200).jsonp("Does not exists");
    }
    res.status(200).jsonp(result);
  })
});
//Eliminar
router.delete('/:id', function(req, res, next){

  let id = req.params.id;
  models.categoria.destroy({
    where: {
      id_categoria: id
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
  let categoria = req.body;

  models.categoria.create(categoria).then(result => {
    res.status(200).jsonp({status:true , response:"Was created correctly"});
  })

});
module.exports = router;
