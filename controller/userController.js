const Customer = require('../model/userModel');
const bcrypt = require('bcrypt');

const securePassword = async(password) => {
    try{
        const hashPassword = await bcrypt.hash(password,10);
        return hashPassword;
    }catch(error){
        console.log(error.message)
    }
}
const loadRegister = async (req,res) => {
    try{
         res.render('registration')
    }catch(error){
        console.log(error.message)
    }
}
const loadInsertUser = async(req,res) => {
    try{
          const {name,username,email,phone,password} = req.body;
          const sPassword = await securePassword(password);
          if(name===''){
            res.json({status:'nameErr'})
          }else if(username === ''){
            res.json({status:'usernameErr'})
          }else if(email === ''){
            res.json({status:'emailErr'})
          }else if(phone === ''){
            res.json({status:'phoneErr'})
          }else if(password === ''){
            res.json({status:'passErr'})
          }else {
            res.json({status:true});
            const user = await Customer({
              name,
              username,
              email,
              phone,
              password:sPassword
            });
            const CustomerData = await user.save();
            if(CustomerData){
              res.render('registration');
              console.log('successfull')
            }else{
              res.redirect('/')
            }
          }        
    }catch(error){
        console.log(error.message)
    }
}
module.exports = {
    loadRegister,
    loadInsertUser
}