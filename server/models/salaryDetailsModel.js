module.exports = (sequelize,DataTypes)=>{
    const SalaryDetails = sequelize.define("salaryDetails",{
        ctc:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        ctc_breakup:{
            type:DataTypes.TEXT
        },
        bond_details:{
            type:DataTypes.TEXT
        }

    });
    return SalaryDetails;
}