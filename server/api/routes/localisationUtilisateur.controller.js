const express = require("express");
const router = express.Router();
const db = require('../../models');
const LocalisationUtilisateur = db.LocalisationUtilisateur;

router.post("/localisationUtilisateurs/utilisateurs/:id/coordonnes/:idCoord", (req, res) => {
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
LocalisationUtilisateur.create({
    province :req.body.province,  
    UtilisateurId: Number(req.params.id),
    CoordonneUtilisateurId : Number(req.params.idCoord),
      
  })
  .then((localisationUtilisateur) => {
    return res.status(201).json(localisationUtilisateur);
  })
  .catch((err) => {
    return res.status(400).json(err);
  });
});

router.get("/localisationUtilisateurs",(req, res) =>{
  LocalisationUtilisateur
  .findAll({include: [db.Utilisateur, db.CoordonneUtilisateur]})
  .then((localisationUtilisateurs) => {
    return res.send(localisationUtilisateurs);
})
.catch((err) => res.status(404).json(err));
});

module.exports = router;