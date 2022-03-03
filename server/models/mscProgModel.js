module.exports = (sequelize,DataTypes)=>{
    const MscProg = sequelize.define("mscProg",{
        courseId:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true
        },
        courseName:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        duration:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    return MscProg;
}