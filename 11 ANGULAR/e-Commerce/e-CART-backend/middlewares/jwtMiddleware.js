const jwt= require('jsonwebtoken')

//ee middleware-in 3 parameters ayirikum
//req,res,next

const jwtMiddleware = (req,res,next)=>{
   
//try catch impliment for error
    
try{
    //get token throught header
const token =req.headers['authorization'].slice(7)
console.log(token,);

 //token  verification
 const jwtverification = jwt.verify(token,process.env.jwtKey)
//so verification kitum.ath successfully done anennkil sthinte koode id pass chythit undakum,bcos namal token generate cheytha tymil id ne PYLOAD ayt kodthirunu
//ao,ivdenn athine acccept akanam
console.log(jwtverification);

//then issue@ enn paranj userid varum athine req.payloadd ayt kodka
req.payload=jwtverification.userId
console.log(req.payload);

//next kodkan parayam
next();

 }
    catch(err){
res.status(401).json("Authorization Error" + err)
    }
}
 module.exports = jwtMiddleware;