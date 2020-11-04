module.exports = mongoose =>{
    const StartupStructure = mongoose.model(
        "startupStructure",
        mongoose.Schema( {
            nom : { type : String, required : true},
            description : { type : String, required : false},
            
            id_coordonne : { type : mongoose.Schema.Types.ObjectId, ref : 'coordonneStructure'},
            
        })
    )
    return StartupStructure
}