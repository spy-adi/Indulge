module.exports = (sequelize,DataTypes)=>{
    const InfHrDetails = sequelize.define("infHrDetails",{
        name:{
            type:DataTypes.TEXT
        },
        designation:{
            type:DataTypes.TEXT
        },
        email:{
            type:DataTypes.TEXT
        },
        number:{
            type:DataTypes.TEXT
        }
    });
    return InfHrDetails;
}