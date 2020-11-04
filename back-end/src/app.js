const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
// const bodyparser=require('body-parser');
const db = require("./models");
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
db.mongoose
  .connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use('/api/', require('../src/routes/abonnement.route.js'));
app.use('/api/', require('../src/routes/article.route.js'));
app.use('/api/', require('../src/routes/coordonne.route.js'));
app.use('/api/', require('../src/routes/employe.route.js'));
 app.use('/api/', require('../src/routes/planning.route.js'));
 app.use('/api/', require('../src/routes/startup.route.js'));
//app.use('/api/', require('../src/routes/utilisateur.route.js'));


app.listen(PORT, () => {
    console.log(`le serveur ecoute sur le port : ${PORT}`);
});