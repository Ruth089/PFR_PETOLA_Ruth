const express = require("express");
const router = express.Router();
const db = require('../../models');
const Abonnement = db.Abonnement;

router.post("/abonnements/utilisateurs/:id/subscriptions/:idSub", (req, res) => {
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
  Abonnement.create({
    duree:req.body.duree,  
    UtilisateurId: Number(req.params.id),
    SubscriptionId: Number(req.params.idSub)
      
  })
  .then((abonnement) => {
    return res.status(201).json(abonnement);
  })
  .catch((err) => {
    return res.status(400).json(err);
  });
});

router.get("/abonnements", (req, res) =>{
  Abonnement
  .findAll({include: [db.Subscription, db.Utilisateur ]})
  .then((abonnements) => {
    return res.send(abonnements);
})
.catch((err) => res.status(404).json(err));
})

module.exports = router;