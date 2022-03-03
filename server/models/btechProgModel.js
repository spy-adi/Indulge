module.exports = (sequelize,DataTypes)=>{
    const BtechProg = sequelize.define("btechProg",{
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
    return BtechProg;
}