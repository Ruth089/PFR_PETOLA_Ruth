// const { abonnement } = require('../models')
// const db = require('../models')
// const Abonnement = db.abonnement

// exports.createAbonnement = async (req, res, next)=>{
//     const {id_planning, id_utilisateur} = req.body
    
//     if (!id_planning || !id_utilisateur) return res.status(422).json({message : "pas vide"})
    
//     const abonnement = new Employe({
//         id_planning,
//         id_utilisateur
        
//     })

//     await abonnement.save()
//     .then(()=>{
//         return res.status(200).json({message:"enregistrement effectuer avec succes"})
//     })
//     .catch((err)=>console.log(err))
// }

// exports.getAbonnement = async (req, res, next)=>{
//     await Abonnement.find()
//     .populate('id_planning','nom description')
//     .populate('id_utilisateur','nom_utilisateur prenom photo ')
//     .then((resultat)=>{
//         return res.status(200).json(resultat)
//     })
//     .catch((err)=>console.log(err))
// }

// exports.getByOneAbonnement = async (req, res, next)=>{
//     await Abonnement.findOne({_id:req.params.id})
//     .populate('id_planning','nom description')
//     .populate('id_utilisateur','nom_utilisateur prenom photo ')
//     .then((resultat)=>{
//         return res.status(200).json(resultat)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

// exports.editeAbonnement = async(req,res,next)=>{
//     await Abonnement.updateOne({_id: req.params.id},{...req.body,_id: req.params.id})
//     .then(()=>res.status(200).json({message: "modiffication effectuée avec succé"}))
//     .catch((error)=>console.log(error))

// }

// exports.deleteAbonnement = async(req,res,next)=>{
//     await Abonnement.remove({_id: req.params.id})
//     .then(()=>res.status(200).json({message: "la suppression est effectuée avec succé"}))
//     .catch((error)=>console.log(error))
// }


