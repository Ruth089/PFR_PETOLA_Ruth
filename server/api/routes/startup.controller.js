const db = require('../../models')
const Startup = db.startup

exports.createStartup = async (req, res, next)=>{

    const startup = new Startup({

        nom ,
        description,
        id_coordonne 
        
    })

    await startup.save()
    .then(()=>{
        return res.status(200).json({message:"enregistrement effectuer avec succes"})
    })
    .catch((err)=>console.log(err))
}

exports.getStartup = async (req, res, next)=>{
    await Startup.find()
    .populate('id_coordonne','num_telephone ville commune quartier avenu numero')
    .then((resultat)=>{
        return res.status(200).json(resultat)
    })
    .catch((err)=>{
        console.log(err)
    })
}

exports.getByOneStartup = async (req, res, next)=>{
    await Startup.findOne({_id:req.params.id})
    .populate('id_coordonne','num_telephone ville commune quartier avenu numero')
    .then((resultat)=>{
        return res.status(200).json(resultat)
    })
    .catch((err)=>{
        console.log(err)
    })
}

exports.deleteStartup = async (req, res, next)=>{
    await Startup.remove({_id:req.params.id})
    .then(()=>{
        return res.status(200).json({message : "suppression effectue avec succes"})
    })
    .catch((err)=>{
        console.log(err)
    })
}
exports.editStartup = async (req, res, next)=>{
    await Startup.updateOne({_id: req.params.id}, {...req.body,_id: req.params.id})
    .then(()=>{
        return res.status(200).json({message : "modification effectue avec succes"})
    })
    .catch((err)=>{
        console.log(err)
    })
}