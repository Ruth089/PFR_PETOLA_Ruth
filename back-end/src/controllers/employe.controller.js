const db = require('../models')
const Employe = db.employe

exports.createEmploye = async (req, res, next)=>{
    const {nom_employe, prenom, pwd, id_startup} = req.body
    
    if (!nom_employe || !prenom || !pwd || !id_startup) return res.status(422).json({message : "pas vide"})
    
    const employe = new Employe({
        
        nom_employe,
        prenom,
        pwd,
        id_startup
        
    })

    await employe.save()
    .then(()=>{
        return res.status(200).json({message:"enregistrement effectuer avec succes"})
    })
    .catch((err)=>console.log(err))
}

exports.getEmploye = async (req, res, next)=>{
    await Employe.find()
    .populate('id_startup','nom description')
    .then((resultat)=>{
        return res.status(200).json(resultat)
    })
    .catch((err)=>{
        console.log(err)
    })
}

exports.getByOneEmploye = async (req, res, next)=>{
    await Employe.findOne({_id:req.params.id})
    .populate('id_startup','nom description')
    .then((resultat)=>{
        return res.status(200).json(resultat)
    })
    .catch((err)=>{
        console.log(err)
    })
}

exports.deleteEmploye = async (req, res, next)=>{
    await Employe.remove({_id:req.params.id})
    .then(()=>{
        return res.status(200).json({message : "suppression effectue avec succes"})
    })
    .catch((err)=>{
        console.log(err)
    })
}
exports.editEmploye = async (req, res, next)=>{
    await Employe.updateOne({_id: req.params.id}, {...req.body,_id: req.params.id})
    .then(()=>{
        return res.status(200).json({message : "modification effectue avec succes"})
    })
    .catch((err)=>{
        console.log(err)
    })
}