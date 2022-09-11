const {UserModel}= require('../models/model')
const jwt= require('jsonwebtoken')

const auth = async(req, res, next) =>{ 

    try{ 
        const { token } = req.body;
        const userVer= jwt.verify(token, process.env.JWT_SECRET)
        req.user= await UserModel.findById(userVer.id)
        
        next();
    } catch(err){
        console.log(err)
        if(err.name=="JsonWebTokenError"){
           return res.json({status:'error', message:'Login to Upload Credentials'});
        }

        throw err
    } 
    
}

module.exports= auth  