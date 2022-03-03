module.exports = (sequelize,DataTypes)=>{
    const MbaProg = sequelize.define("mbaProg",{
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
    return MbaProg;
}