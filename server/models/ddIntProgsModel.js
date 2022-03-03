module.exports = (sequelize,DataTypes)=>{
    const DdIntProg = sequelize.define("ddIntProgs",{
        courseId:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true
        },
        courseName:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    return DdIntProg;
}