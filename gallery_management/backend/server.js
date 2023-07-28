const db = require("./db/db")

const userModel = require("./models/userModel")
const galleryModel = require("./models/galleryModel")

const init=()=>
{
    db.authenticate()
    db.sync()
}
init()

module.exports=init