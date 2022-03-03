module.exports = (sequelize,DataTypes)=>{
    const InternSelectionProcedure = sequelize.define("isp",{
        resume_shortlisting:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        type_of_test:{
            type:DataTypes.ENUM,
            values:["Technical","Aptitude","Both","None"],
            allowNull:false
        },
        other_qualify_rounds:{
            type:DataTypes.ENUM,
            values:["GD","Case Study","Interview"],
            allowNull:false
        },
        total_rounds:{
            type:DataTypes.INTEGER
        },
        no_of_offers:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        eligibilty_criteria:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    return InternSelectionProcedure;
}