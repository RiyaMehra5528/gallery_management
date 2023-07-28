const db = require("../db/db");
const userModel = require("./userModel");
const Sequelize=require("sequelize")

const galleryModel=db.define("RiyaGalleryModel",
{
    ID:
    {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    ImgUrl:{
         type:Sequelize.STRING,
         allowNull:false
          },
    userId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:
        {
            model:userModel,
            key:"Id"
        }
    }
})
userModel.hasMany(galleryModel,{foreignKey:"userId"})
galleryModel.belongsTo(userModel,{foreignKey:"userId"})
module.exports=galleryModel;