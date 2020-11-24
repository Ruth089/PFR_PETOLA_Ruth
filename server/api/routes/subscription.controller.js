const express = require("express");
const router = express.Router();
const db = require('../../models')
const Subscription = db.Subscription

router.post("/subscriptions/startups/:id", (req, res) => {

  Subscription.create({
    description: req.body.description,
    type_de_collecte: req.body.type_de_collecte,
    prix: req.body.prix,
    StartupId : Number(req.params.id)
  })
  .then((subscription) => {
    return res.status(201).json(subscription);
  })
  .catch((err) => {
    return res.status(400).json(err);
  });
});

router.get("/subscriptions", (req, res) => {
  Subscription
    .findAll()
    .then((subscriptions) => {
      return res.send(subscriptions);
  })
  .catch((err) => res.status(404).json(err));
});

router.get("/subscriptions/:id", (req, res) => {
  Subscription
    .findAll({where: { id: Number(req.params.id)}})
    .then((subscriptions) => {
      return res.send(subscriptions);
  })
  .catch((err) => res.status(404).json(err));
});

router.get("/subscriptions/:id/startups/:idStartup", (req, res) => {
  Subscription
  .findAll({where: { id: Number(req.params.id)}, 
  include: { all: true, nested: true }
  })
  .then((subscriptions) => {
    return res.send(subscriptions);
})
.catch((err) => res.status(404).json(err));
});

module.exports = router;