const db = require('../../models')
const Coordonne = db.coordonne

exports.createCoordonne = async (req, res, next)=>{
     
    await Coordonne.create({  
        num_telephone = req.body.num_telephone ,
        ville = req.body.ville ,
        commune = req.body.commune ,
        quartier = req.body.quartier ,
        avenu = req.body.avenu ,
        numero  = req.body.numero 
        // localisation:{
        //     longitude:{type:String,required:true},
        //     latitude:{type:String,required:true},
        // }
        
    })
    .then(()=> res.status(200).json({message:"enregistrement effectuer avec succes"}))
    .catch((err)=>console.log(err))
}

exports.getCoordonne = async (req, res, next)=>{
    await Coordonne.findAll()
    .then((resultat)=> res.status(200).json(resultat))
    .catch((err)=> res.status(404).json(err))
}

exports.getByOneCoordonne = async (req, res, next)=>{
    await Coordonne.findByPk({id: Number(req.params.id)})
    .then((resultat)=>{
        return res.status(200).json(resultat)
    })
    .catch((err)=>res.status(404).json(err))
}

exports.deleteCoordonne = async (req, res, next)=>{
    await Coordonne.destroy({
        where: {
          id: Number(req.params.id)
        }
    })
    .then((resultat) => {
        return res.status(200).json({resultat, message: "La suppression à réussit"});
    })
}
exports.editCoordonne = async (req, res, next)=>{
    const { num_telephone, ville, commune, quartier, avenu , numero } = request.body;
    const values =  {num_telephone, ville, commune, quartier, avenu , numero};
    let condition = { where: { id : res.params.id } };
    let options = { multi: true };

    Coordonne.update(values, condition, options)
    .then((resultat) => {
      return res.status(200).json({
        message: "coordonnée est modifié avec succès",
        resultat
      });
    })
    .catch((error) => {
      console.log(error);
    });
}