const dbconfig = require('../config/db.config.js')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const db = { }
db.mongoose = mongoose
db.url = dbconfig.url
db.abonnement = require('./abonnement.model.js')(mongoose);
db.article = require('./article.model.js')(mongoose);
db.coordonne = require('./coordonne.model.js')(mongoose)
db.employe = require('./employe.model.js')(mongoose)
db.planning = require('./planning.model.js')(mongoose)
db.startup = require('./startup.model.js')(mongoose);
db.utilisateur = require('./utilisateur.model.js')(mongoose)

module.exports = db