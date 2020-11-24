const express = require("express");
const router = express.Router();
const db = require('../../models');
const LocalisationStartup = db.LocalisationStartup;

router.post("/localisationStartups/startups/:id/coordonnes/:idCoord", (req, res) => {
  // async (req, res) => {
  //   await db.vehicule
  //     .findOne({
  //       where: {
  //         id: req.params.idVeh,
  //       },
  //     })
  //     .then((unVehicule) => {
  //       unVehicule.setEmployes(req.params.idUser);
  //     })
  //     .catch((err) => {
  //       return res.status(400).json({ err });
  //     });
LocalisationStartup.create({
    province :req.body.province,  
    StartupId: Number(req.params.id),
    CoordonneStartupId : Number(req.params.idCoord),
      
  })
  .then((localisationStartup) => {
    return res.status(201).json(localisationStartup);
  })
  .catch((err) => {
    return res.status(400).json(err);
  });
});

router.get("/localisationStartups", (req, res) =>{
  LocalisationStartup
  .findAll({include: [db.Startup, db.CoordonneStartup]
  })
  .then((localisationStartups) => {
    return res.send(localisationStartups);
  })
  .catch((err) => res.status(404).json(err));
});

module.exports = router;