const express=require('express');
const { loginUser,createUser,uploadPicture,getPicture } = require('../controller/userController');
const upload = require('../middleware/multer.config');
const router=express.Router();


router.post('/create',createUser);
router.post('/login',loginUser)
router.post('/upload-pictures',upload.single('file'),uploadPicture)
router.get('/getPicture',getPicture)
module.exports=router;