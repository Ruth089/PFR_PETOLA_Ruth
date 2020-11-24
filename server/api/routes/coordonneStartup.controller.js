const express = require("express");
const router = express.Router();
const db = require("../../models");
const CoordonneStartup = db.CoordonneStartup


router.post("/coordonneStartups", (req, res) => {
    CoordonneStartup.create({
        num_tel: req.body.num_tel,
        ville: req.body.ville,
        commune:req.body.commune,
        quartier:req.body.quartier,
        avenu: req.body.avenu,
        numero: req.body.numero
    })
  .then((coordonneStartups) => res.status(201).json(coordonneStartups))
  .catch((err) => res.status(400).json(err));
});

router.get("/coordonneStartups", (req, res) => {
    CoordonneStartup
      .findAll()
      .then((coordonnes) => {
        return res.send(coordonnes);
      })
      .catch((err) => res.status(404).json(err));
    });

module.exports = router;