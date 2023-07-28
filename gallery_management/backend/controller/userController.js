const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const galleryModel = require("../models/galleryModel")
const { Sequelize } = require("sequelize")
const path = require('path')
exports.loginUser = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    try {
        const user = await userModel.findOne({ where: { Email: email } })
        console.log("user found", user)
        if (!user) {
            return res.status(200).send({ success: false, message: "USER NOT FOUND" })
        }
        console.log("reached match ")
        const match = bcrypt.compareSync(password, user.Password)
        console.log("match=", match)
        if (!match) {
            return res.status(200).send({ success: false, message: "PASSWORD INCORRECT" })
        }
        else {
            const token = jwt.sign(email, "KEEPSMILING")
            console.log("token=", token)
            return res.status(200).send({ success: true, message: "LOGIN SUCCESSFULLY", token: token, email: email })
        }
    }
    catch (e) {
        return res.status(404).send({ message: "Error agya" })
    }
}

exports.createUser = async (req, res) => {
    console.log("creating user")
    const { uname, email, password } = req.body
    console.log("uname,email,password:", uname, email, password)
    const salt = bcrypt.genSaltSync(10)
    const hashPass = bcrypt.hashSync(password, salt)
    console.log("password hashed")
    try {
        await userModel.create({
            Name: uname,
            Email: email,
            Password: hashPass
        })
        return await res.status(200).json({ success: true, message: "USER CREATED SUCCESSFULLY" })
    }

    catch (e) {
        return res.status(404).send({ success: false, message: "USER NOT CREATED" })
    }
}


exports.uploadPicture = async (req, res) => {
    const { email } = req.body
    console.log("Req.file:", req.file)
    const url = req.file.path
    const user = await userModel.findOne({ where: { Email: email } })
    const id = user.Id
    try {

        const gallery = await galleryModel.create({

            ImgUrl: "http://localhost:7078/"+url,
            userId: id
        })
        return res.status(200).json({success:true,msg:"UPLOADED SUCCESSFULLY"})
    } catch (e) {
        console.log("error=", e)
    }

}

exports.getPicture=async(req,res)=>
{
    const {email}=req.query
    try{
    const pictures=await galleryModel.findAll({
        include:[{
            model:userModel,
            where:{
                Email:email
            }
        }]
    })
    return res.status(200).json({success:true,pictures:pictures})
    }
    catch(e)
    {
        return res.status(404).json({success:false,msg:"error"})
    }
}