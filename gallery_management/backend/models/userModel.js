const { Sequelize } = require("sequelize");
const db = require("../db/db");

const userModel=db.define("RiyaGalleryUserModel",
{   
    Id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Name:{
         type:Sequelize.STRING,
         allowNull:false
          },
    Email:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            isEmail:true
        },
        unique:{
            args:true,
            msg:"Email Address Already In Use!!!"
        },
        
    },
    Password:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
module.exports=userModel;