const express = require("express")
const router = express.Router()
const StartupController = require('../controllers/startup.controller.js')

router.post('/startup',StartupController.createStartup)
router.get('/startups', StartupController.getStartup)
router.get('/startup/:id', StartupController.getByOneStartup)
router.put('/startup/:id', StartupController.editStartup)
router.delete('/startup/:id', StartupController.deleteStartup)

module.exports=router