const db = require('../models')
const Coordonne = db.coordonne

exports.createCoordonne = async (req, res, next)=>{
    const {num_telephone, ville, commune, quartier, avenu , numero} = req.body
    
    if (!num_telephone || !ville || !commune || !quartier || !avenu || !numero) return res.status(422).json({message : "pas vide"})
    
    const coordonne = new Coordonne({
        
        num_telephone ,
        ville ,
        commune ,
        quartier ,
        avenu ,
        numero
        
        // localisation:{
        //     longitude:{type:String,required:true},
        //     latitude:{type:String,required:true},
        // }
        
    })

    await coordonne.save()
    .then(()=>{
        return res.status(200).json({message:"enregistrement effectuer avec succes"})
    })
    .catch((err)=>console.log(err))
}

exports.getCoordonne = async (req, res, next)=>{
    await Coordonne.find()
    .then((resultat)=>{
        return res.status(200).json(resultat)
    })
    .catch((err)=>{
        console.log(err)
    })
}

exports.getByOneCoordonne = async (req, res, next)=>{
    await Coordonne.findOne({_id:req.params.id})
    .then((resultat)=>{
        return res.status(200).json(resultat)
    })
    .catch((err)=>{
        console.log(err)
    })
}

exports.deleteCoordonne = async (req, res, next)=>{
    await Coordonne.remove({_id:req.params.id})
    .then(()=>{
        return res.status(200).json({message : "suppression effectue avec succes"})
    })
    .catch((err)=>{
        console.log(err)
    })
}
exports.editCoordonne = async (req, res, next)=>{
    await Coordonne.updateOne({_id: req.params.id}, {...req.body,_id: req.params.id})
    .then(()=>{
        return res.status(200).json({message : "modification effectue avec succes"})
    })
    .catch((err)=>{
        console.log(err)
    })
}