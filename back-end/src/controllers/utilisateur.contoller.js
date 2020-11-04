const db = require('../models')
const Utilisateur = db.utilisateur

// exports.login = async(req,res,next)=>{
    
//     const {nom_utilisateur, pwd} = req.body;
//     if (!nom_utilisateur || !pwd ) return res.status(422).json({message : "Veillez renseigner le champ"})
    
//     await Utilisateur.findOne({nom_utilisateur})
//     .then((nomUtilisateurExist)=>{
//         if (!nomUtilisateurExist) return res.status(422).json({message : "usersname ou pwd incorrect"})
//         bcrypt 
//         .compare(pwd, nomUtilisateurExist.pwd)
//         .then((match)=>{
//             if (match){
//                 const token = jwt.sign({_id: nomUtilisateurExist._id},JWT_SECRET)
//                 const { _id,nom_utilisateur,prenom} = nomUtilisateurExist
//                 return res.json({message : "connexion réussi", token,user:{_id, nom_utilisateur,prenom}
//                 })
//             }else{
//                 res.status(422).json({message : "utilisateur ou pwd incorrect"})
//             }
//         }).catch((error)=>console.log(error))
//     }).catch((error)=>console.log(error))
// }

exports.createUtilisateur = async(req,res,next)=>{
    const {nom_utilisateur, prenom, pwd, photo, type_paiement, numero_carte, code_secret, id_coordonne} = req.body;
    if ( !nom_utilisateur || !prenom || !pwd || !photo || !type_paiement || !numero_carte || !code_secret || !id_coordonne ) return res.status(422).json({message:" il y a des champs qui ne sont pas remplis"})
   
    await Utilisateur.findOne({nom_utilisateur})
    .then((nomUtilisateurExist)=>{
        if (nomUtilisateurExist) return res.status(422).json({message : "l'utilisateur exist déjà"})
        bcrypt
        .hash(pwd, 12)
        .then ((passwordHash)=>{
            if (passwordHash){
                const utilisateur = new Utilisateur({
                   
                    nom_utilisateur,
                    prenom,
                    pwd : passwordHash,
                    photo ,           
                    type_paiement,
                    numero_carte ,
                    code_secret ,
                    id_coordonne   
                })
                utilisateur.save()
                .then((resultat)=>{
                    if (resultat) return res.status(200).json({message : "enregistrement réussi"})
                }).catch((error)=> console.log(error))
            }
        }).catch((error)=> console.log(error))
    }).catch((error)=> console.log(error))
}

exports.getUtilisateur = async(req,res,next)=>{
    await Utilisateur.find()
    .then((resultat)=>{
        res.status(201).json(resultat)
    })
    .catch((error)=>console.log(error))
}

exports.getByOneUtilisateur = async(req,res,next)=>{
    await Utilisateur.findOne({_id: req.params.id})
    .then((resultat)=>{
        res.status(201).json(resultat)
    })
    .catch((error)=>console.log(error))
}

exports.editeUtilisateur = async(req,res,next)=>{
    await Utilisateur.updateOne({_id: req.params.id},{...req.body,_id: req.params.id})
    .then(()=>res.status(201).json({message: "modiffication effectuée avec succé"}))
    .catch((error)=>console.log(error))

}

exports.deleteUtilisateur = async(req,res,next)=>{
    await Utilisateur.remove({_id: req.params.id})
    .then(()=>res.status(201).json({message: "la suppression est effectuée avec succé"}))
    .catch((error)=>console.log(error))
}
