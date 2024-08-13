 
 const bcrypt = require('bcrypt');
 const jwt = require('jsonwebtoken');

 const User = require('../model/userModel.js');
// const Blog = require('../model/blogModel.js');

 exports.signupUser = async function(req, res){
    try{
        const {fullname,password,email,phoneNumber} = req.body;

        const isEmailExisting = await User.findOne({email});
        if(isEmailExisting){
            return res.json({message: 'Email already taken!'});
        }
        
        // const isphoneNumberExisting = await User.findOne({phoneNumber: phoneNumber});
        // if(isphoneNumberExisting){
        //     return res.json({message: 'Phone number already taken!'});
        // }

        const saltRound = 10;
        const hashedPassword = bcrypt.hashSync(password,saltRound);

    const createdUser= await User.create({
        fullname,
        email,
        password:hashedPassword,
        phoneNumber
    });

    res.status(200).json({
        status:'success',
        message:'Signup Successfully!',
        data:{
            user:createdUser
        }
    })

    } catch(err){
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
 }


 exports.loginUser =async function(req, res){
    try{
        const {password,email} = req.body;
        const userAccount = await User.findOne({email});

        const comparedPassword = await bcrypt.compare(password,userAccount.password);
        console.log(comparedPassword);

        if(!userAccount.email || !comparedPassword){
            return res.json({
                message:'email or password incorrect!'
            })
        }

        const token = jwt.sign({ id: userAccount._id }, process.evn.JWT_SECRET_STRING, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });

        res.status(200).json({
            status:'success',
            message: ' Login successfully!',
            data:{
                user:userAccount
            },
            token:token
        }) 

    Blog


    } catch(err){
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
 }