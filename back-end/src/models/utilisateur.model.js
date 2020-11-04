module.exports = mongoose =>{

    const UtilisateurStructure = mongoose.model(
        "utilisateurStructure",

        mongoose.Schema( {
            nom_utilisateur: { type : String, required : false},
            prenom : { type : String, required : false},
            pwd : { type : String, required : false},
            photo : { type : String},           
            type_paiement : { type : String, required : false },
            numero_carte : { type : String, required : false },
            code_secret : { type : String, required : false },

            id_coordonne : { type : mongoose.Schema.Types.ObjectId, ref : 'coordonneStructure'},          
           
        })
    )
    return UtilisateurStructure
}