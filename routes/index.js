var express = require('express');
var router = express.Router();

const list = []
const list2 = []

router.get('/list', (req, res) => {
  res.json(list)
})

router.get('/list2', (req, res) => {
  res.json(list2)
})

router.post('/list', (req, res) => {
  list.push({
  	identifiant:req.body.identifiant,
  	mdp:req.body.mdp,
  	list2:req.body.list2
  })
})

router.post('/list2', (req, res) => {
  list2.push({
    name: req.body.name,
    année:req.body.année,
  	mois:req.body.mois,
  	jour:req.body.jour,
  	heure:req.body.heure
  })
})


module.exports = router
