module.exports = (sequelize,DataTypes)=>{
    const Inf = sequelize.define("inf",{
        duration:{
            type:DataTypes.TEXT,
            
        },
        intern_designation:{
            type:DataTypes.TEXT
        },
        intern_description:{
            type:DataTypes.TEXT
        },
        mode:{
            type:DataTypes.ENUM,
            values:["Physical","Virtual"]
        },
        place_of_posting:{
            type:DataTypes.TEXT
        },
        graduation_year:{
            type:DataTypes.TEXT
        },
        stipend:{
            type:DataTypes.TEXT,
            
        },
        ppo:{
            type:DataTypes.TEXT
        },
        ctc:{
            type:DataTypes.TEXT
        },
        resume_shortlisting:{
            type:DataTypes.BOOLEAN,
            
        },
        type_of_test:{
            type:DataTypes.ENUM,
            values:["Technical","Aptitude","Both","None"],
            // allowNull:false
        },
        other_qualify_rounds:{
            type:DataTypes.ENUM,
            values:["GD","Case Study","Interview"],
    
        },
        total_rounds:{
            type:DataTypes.INTEGER
        },
        no_of_offers:{
            type:DataTypes.TEXT,
            
        },
        eligibilty_criteria:{
            type:DataTypes.TEXT,
        
        }
    });
    return Inf;
}