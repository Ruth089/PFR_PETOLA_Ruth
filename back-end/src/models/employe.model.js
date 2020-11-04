module.exports = mongoose =>{
    const EmployeStructure = mongoose.model(
        "employeStructure",
        mongoose.Schema( {
            nom_employe : { type : String, required : true},
            prenom : { type : String, required : true},
            pwd : { type : String, required : true},

            id_startup : { type : mongoose.Schema.Types.ObjectId, ref : 'startupStructure'},
        })
    )
    return EmployeStructure
}