module.exports = (sequelize,DataTypes)=>{
    const CompanyDetails = sequelize.define("companyDetails",{
        // cid:{
        //     type:DataTypes.STRING,
        //     primaryKey:true
        // },
        cname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        cpassword:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        cemail:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        category:{
            type:DataTypes.TEXT,
            defaultValue:"Other"
        },
        curl:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    return CompanyDetails;
}