//logic for register
//username,email,password=>(email ? in db)? "user already registerd"  : " post method execution - data saved to database"

const users = require('../Models/userSchema')


exports.register = async (req, res) => {
    console.log("Inside register controller");
    const { username, email, password } = req.body
    console.log(username, email, password);

    try {
        //1 chech email in mongodb (model) 
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(401).json("User already registered...")
        }
        else {
            //add new user to database
            const newUser = new users({
                username, email, password, github: "", linkedin: "", profilePic: ""
            })
            //save new user to data
            await newUser.save()
            //send response to client
            res.status(200).json(newUser)
        }
    }
    catch (err) {
        res.status(401).json({ message: err })
    }


}


exports.login = async (req, res) => {
    console.log("Inside login controller");
    const {  email, password } = req.body
    console.log(email, password);

    try {
        //1 chech email and password in mongodb (model) 
        const existingUser = await users.findOne({ email,password })
        if (existingUser) {
            res.status(200).json({user:existingUser})
        }
        else {
            res.status(404).json("invalid email or password")
        }
    }
    catch (err) {
        res.status(401).json({ message: err })
    }


}