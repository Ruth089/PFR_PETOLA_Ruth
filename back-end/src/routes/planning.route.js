const express = require("express")
const router = express.Router()
const PlanningController = require('../controllers/planning.controller.js')

router.post('/planning',PlanningController.createPlanning)
router.get('/plannings', PlanningController.getPlanning)
router.get('/planning/:id', PlanningController.getByOnePlanning)
router.put('/planning/:id', PlanningController.editePlanning)
router.delete('/planning/:id', PlanningController.deletePlanning)

module.exports=router