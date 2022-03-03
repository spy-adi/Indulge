module.exports = (sequelize,DataTypes)=>{
    const JnfHrDetails = sequelize.define("jnfHrDetails",{
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
    return JnfHrDetails;
}