const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const CoordonneUtilisateur = require("./api/routes/coordonneUtilisateur.controller")
const Utilisateur = require("./api/routes/utilisateur.contoller")
// const article = require("./api/routes/article");
// const coordonne = require("./api/routes/coordonne");
// const employe=require("./api/routes/employe");
// const planning=require("./api/routes/planning");
// const startup=require("./api/routes/startup");
// const utilisateur=require("./api/routes/utilisateur");
// const checkAuth=require('./api/middleware/check-auth');
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use('/uploads',express.static('uploads'));
//app.use(express.static(__dirname));

app.use("",CoordonneUtilisateur)
// app.use("", article);
// app.use("",coordonne);
// app.use("",employe);
// app.use("",planning);
// app.use("",startup);
app.use("",Utilisateur);


app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
