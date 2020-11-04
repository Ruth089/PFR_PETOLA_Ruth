module.exports = mongoose =>{

    const CoordonneStructure = mongoose.model(
        "coordonneStructure",

        mongoose.Schema( {
            
            num_telephone : { type : String, required : false},
            ville : { type : String, required : false},
            commune : { type : String, required : false},
            quartier : { type : String, required : false},
            avenu : { type : String,required:false},
            numero :{ type : String, required:false},
            
            // localisation:{
            //     longitude:{type:String,required:true},
            //     latitude:{type:String,required:true},
            // }
           
           
        })
    )
    return CoordonneStructure
}