const express = require("express")
const router = express.Router()
const CoordonneController = require('../controllers/coordonne.controller.js')

router.post('/coordonne',CoordonneController.createCoordonne)
router.get('/coordonnes', CoordonneController.getCoordonne)
router.get('/coordonne/:id', CoordonneController.getByOneCoordonne)
router.put('/coordonne/:id', CoordonneController.editCoordonne)
router.delete('/coordonne/:id', CoordonneController.deleteCoordonne)

module.exports=router