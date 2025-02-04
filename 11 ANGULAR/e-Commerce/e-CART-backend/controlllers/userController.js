const users =require('../models/userSchema')

const jwt = require('jsonwebtoken')

///register LOGIC
exports.registerAPI = async (req, res) => {


    const { username, email, password } = req.body
    try {
        const existingUser = await users.findOne({email})

        if (existingUser) {
            res.status(401).json("User already registered...")
        }
        else {
            const newUser = new users({ username,email,password})
            await newUser.save()
            res.status(200).json(newUser)
        }    }

    catch (error) {
        res.status(404).json(error)
    }
}

//Login LOGIC

exports.loginAPI = async (req, res) => {
    const { email, password } =req.body

    try {
        const existingUser = await users.findOne({ email,password})

        if (existingUser) {
            //token genetation
             const token=jwt.sign({userid:existingUser._id},process.env.jwtKey)

            res.status(200).json({existingUser,token })
        }
        else {
             res.status(401).json("Incorrect Email or password")
        }
    }

    catch (error) {
        res.status(404).json(error)
    }
}