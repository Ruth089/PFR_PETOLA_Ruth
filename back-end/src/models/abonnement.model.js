module.exports = mongoose =>{
    const AbonnementStructure = mongoose.model(
        "abonnementStructure",
        mongoose.Schema( {
            id_utilisateur : { type : mongoose.Schema.Types.ObjectId, ref : 'planningStructure'},
            id_planning : { type : mongoose.Schema.Types.ObjectId, ref : 'utilisateurStructure'}
        })
    )
    return AbonnementStructure
}