module.exports = (sequelize,DataTypes)=>{
    const InternDetails = sequelize.define("internDetails",{
        stipend:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        ppo:{
            type:DataTypes.TEXT
        },
        ctc:{
            type:DataTypes.TEXT
        }
    });
    return InternDetails;
}