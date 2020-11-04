const express = require("express")
const router = express.Router()
const EmployeController = require('../controllers/employe.controller.js')

router.post('/employe',EmployeController.createEmploye)
router.get('/employes', EmployeController.getEmploye)
router.get('/employe/:id', EmployeController.getByOneEmploye)
router.put('/employe/:id', EmployeController.editEmploye)
router.delete('/employe/:id', EmployeController.deleteEmploye)

module.exports=router