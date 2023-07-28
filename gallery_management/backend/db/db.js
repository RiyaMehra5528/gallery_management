const Sequelize = require("sequelize");

const userModel = require("../models/userModel");
// const galleryModel = require("../models/galleryModel");

const db = new Sequelize(
    'db_sdirect',
    'sdirect',
    'Sm@rtPu92023',
     {
       host: '192.168.0.2',
       dialect: 'mysql'
     }
   );



module.exports=db