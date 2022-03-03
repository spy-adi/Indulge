module.exports = (sequelize,DataTypes)=>{
    const MtechProg = sequelize.define("mtechProg",{
        courseId:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true
        },
        coursename:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    return MtechProg;
}