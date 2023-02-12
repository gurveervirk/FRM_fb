const jwt = require('jsonwebtoken');
const JWT_SECRET = "kjefoqoqf1391!#@!#";
fetch = (req,res,next) => {
    //get user details from jwt token and add id to req obj
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Invalid token!"});
    }
    try{const data = jwt.verify(token,JWT_SECRET);
    req.user=data.user;
    next();}
    catch(error){
        res.status(401).send({error: "Invalid token!"});
    }
}
module.exports = fetch;