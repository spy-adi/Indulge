module.exports = (sequelize,DataTypes)=>{
    const Jnf = sequelize.define("jnf",{
       job_designation:{
           type:DataTypes.TEXT,
           allowNull:false
       },
       job_description:{
           type:DataTypes.TEXT
       },
       place_of_posting:{
           type:DataTypes.TEXT
       },
       graduation_year:{
           type:DataTypes.TEXT
       }        
    });
    return Jnf;
}