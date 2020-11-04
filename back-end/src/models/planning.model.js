module.exports = mongoose =>{
    const PlanningStructure = mongoose.model(
        "planningStructure",
        mongoose.Schema( {
            heure_debut :  { type : Date, default : Date.now},
            heure_fin : { type : Date, default : Date.now},
            type_de_collecte : { type : String, required : true},
            prix : { type : String, required : true },

            id_startup : { type : mongoose.Schema.Types.ObjectId, ref : 'startupStructure'},
            
        })
    )
    return PlanningStructure
}