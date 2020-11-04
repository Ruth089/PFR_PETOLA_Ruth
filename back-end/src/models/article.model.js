module.exports = mongoose =>{
    const ArticleStructure = mongoose.model(
        "articleStructure",
        mongoose.Schema( {
            nom : { type : String, required : true},
            image : { type : String, required : true},
            prix_UHT : { type : Number, required : true},
            quantite : { type : Number, required : true},
            type : { type : String, required : false},
            label : { type : String, required : false},

            id_startup : { type : mongoose.Schema.Types.ObjectId, ref : 'startupStructure'},
            id_utilisateur : { type : mongoose.Schema.Types.ObjectId, ref : 'utilisateurStructure'}
        })
    )
    return ArticleStructure
}