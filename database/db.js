const Sequelize = require("sequelize");
const db = {};

var opts = {
  define: {
    host: "localhost",
    port: "3308",
    dialect: "mysql",
    operatorAliases: false,
    freezeTableName: true,
    timestamps: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};

const sequelize = new Sequelize('mysql://root:javalinux@localhost:3308/ng_server', opts);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
