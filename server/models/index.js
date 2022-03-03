'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//company
db.companyDetails.hasMany(db.jnf,{foreignKey:"cid"});
db.jnf.belongsTo(db.companyDetails,{foreignKey:"cid"});
db.companyDetails.hasMany(db.inf,{foreignKey:"cid"});
db.inf.belongsTo(db.companyDetails,{foreignKey:"cid"});
//jnf
db.jnf.hasOne(db.jsp);
db.jsp.belongsTo(db.jnf);
db.jnf.hasOne(db.salaryDetails);
db.salaryDetails.belongsTo(db.jnf);
db.jnf.hasMany(db.jnfHrDetails);
db.jnfHrDetails.belongsTo(db.jnf);
//inf
db.inf.hasOne(db.isp);
db.isp.belongsTo(db.inf);
db.inf.hasOne(db.internDetails);
db.internDetails.belongsTo(db.inf);
db.inf.hasMany(db.infHrDetails);
db.infHrDetails.belongsTo(db.inf);
//jnf-programmes
db.jnf.belongsToMany(db.btechProg,{through:"jnf-btech"});
db.btechProg.belongsToMany(db.jnf,{through:"jnf-btech"});
db.jnf.belongsToMany(db.mbaProg,{through:"jnf-mba"});
db.mbaProg.belongsToMany(db.jnf,{through:"jnf-mba"});
db.jnf.belongsToMany(db.phdProg,{through:"jnf-phd"});
db.phdProg.belongsToMany(db.jnf,{through:"jnf-phd"});
db.jnf.belongsToMany(db.mscProg,{through:"jnf-msc"});
db.mscProg.belongsToMany(db.jnf,{through:"jnf-msc"});
db.jnf.belongsToMany(db.mtechProg,{through:"jnf-mtech"});
db.mtechProg.belongsToMany(db.jnf,{through:"jnf-mtech"});
db.jnf.belongsToMany(db.skillBasedProg,{through:"jnf-skill"});
db.skillBasedProg.belongsToMany(db.jnf,{through:"jnf-skill"});
//inf-programmes
db.inf.belongsToMany(db.btechProg,{through:db.infbtech, foreignKey: 'infId'});
db.btechProg.belongsToMany(db.inf,{through:db.infbtech, foreignKey: 'btechProgCourseId'});
db.inf.belongsToMany(db.mbaProg,{through:"inf-mba"});
db.mbaProg.belongsToMany(db.inf,{through:"inf-mba"});
db.inf.belongsToMany(db.mscProg,{through:"inf-msc"});
db.mscProg.belongsToMany(db.inf,{through:"inf-msc"});
db.inf.belongsToMany(db.mtechProg,{through:"inf-mtech"});
db.mtechProg.belongsToMany(db.inf,{through:"inf-mtech"});
db.inf.belongsToMany(db.skillBasedProg,{through:"inf-skill"});
db.skillBasedProg.belongsToMany(db.inf,{through:"inf-skill"});

module.exports = db;
