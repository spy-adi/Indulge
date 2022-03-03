module.exports = (sequelize,DataTypes)=>{
    const PhdProg = sequelize.define("phdProg",{
        courseId:{
            type:DataTypes.STRING,
            allowNull:false ,
            primaryKey:true
        },
        coursename:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    return PhdProg;
}