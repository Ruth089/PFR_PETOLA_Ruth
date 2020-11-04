const db = require('../models')
const Planning = db.planning

exports.createPlanning = async(req,res,next)=>{
    const { heure_debut, heure_fin, type_de_collecte, prix, id_startup} = req.body

    if ( !heure_debut || !heure_fin || !type_de_collecte || !prix || !id_startup) return res.status(422).json({message:"Veillez remplir tous les champs"})
    
    const planning = new Planning({
        heure_debut,
        heure_fin,
        type_de_collecte,
        prix,
        id_startup
    })
    await planning.save()
    .then(()=>{ res.status(200).json({message: "l'enregistrement a réussi"}) })
    .catch((error)=>{("voici l'erreur : "+error)})
    
}

exports.getPlanning = async(req,res,next)=>{
    await Planning.find()
    .populate('id_startup','nom description')
    .then((resultat)=>{
        res.status(201).json(resultat)
    })
    .catch((error)=>{console.log(error)})
}

exports.getByOnePlanning = async(req,res,next)=>{
    await Planning.findOne({_id : req.params.id})
    .populate('id_startup','nom description')
    .then((resultat)=>{
        res.status(200).json(resultat)
    })
    .catch((error)=>console.log(error))
}

exports.editePlanning = async(req,res,next)=>{
    await Planning.updateOne({_id: req.params.id},{...req.body,_id: req.params.id})
    .then(()=>res.status(200).json({message: "modiffication effectuée avec succès"}))
    .catch((error)=>console.log(error))

}

exports.deletePlanning = async(req,res,next)=>{
    await Planning.remove({_id: req.params.id})
    .then(()=>res.status(200).json({message: "Suppression est effectuée avec succé"}))
    .catch((error)=>console.log(error))
}
