const db = require('../models')
const Article = db.article

exports.createArticle = async(req,res,next)=>{
    const {nom , image, prix_UHT, quantite, type, label, id_startup, id_utilisateur} = req.body

    if ( !nom || !image || !prix_UHT || !quantite || !type || !label || !id_startup || !id_utilisateur) return res.status(422).json({message:"Veillez remplir tous les champs"})
    
    const article = new Article({
        nom,
        image,
        prix_UHT,
        quantite,
        type,
        label,
        id_startup,
        id_utilisateur
    })
    await article.save()
    .then(()=>{ res.status(201).json({message: "l'enregistrement a réussi"}) })
    .catch((error)=>{("voici l'erreur"+error)})
    
}

exports.getArticle = async(req,res,next)=>{
    await Article.find()
    .populate('id_startup','nom description')
    .populate('id_utilisateur','nom_utilisateur prenom photo ')
    .then((resultat)=>{
        res.status(201).json(resultat)
    })
    .catch((error)=>{console.log(error)})
}

exports.getByOneArticle = async(req,res,next)=>{
    await Article.findOne({_id : req.params.id})
    .populate('id_startup','nom description')
    .populate('id_utilisateur','nom_utilisateur prenom photo ')
    .then((resultat)=>{
        res.status(200).json(resultat)
    })
    .catch((error)=>console.log(error))
}

exports.editeArticle = async(req,res,next)=>{
    await Article.updateOne({_id: req.params.id},{...req.body,_id: req.params.id})
    .then(()=>res.status(200).json({message: "modiffication effectuée avec succès"}))
    .catch((error)=>console.log(error))

}

exports.deleteArticle = async(req,res,next)=>{
    await Article.remove({_id: req.params.id})
    .then(()=>res.status(200).json({message: "Suppression est effectuée avec succé"}))
    .catch((error)=>console.log(error))
}
