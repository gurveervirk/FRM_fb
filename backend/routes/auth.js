const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const fetch = require('../middleware/fetch');
const router = express.Router();
const JWT_SECRET = "kjefoqoqf1391!#@!#";
const { body, validationResult } = require('express-validator');
// ROUTE 1: for signup
router.post('/signup',[ //signup --> denotes signing up; use api/auth/signup for this
    body('email','Enter a valid email-id').isEmail(),
    body('password','Enter a valid password of length 5 or more').isLength({ min: 5 }),
],async  (req,res)=>{
    // obj ={
    //     a:'thios',
    //     no: 34
    // }
    // res.json(obj)
    // console.log(req.body);
    // const user = User(req.body);
    // user.save(); //stored in test.users in compass
    //error checking
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{let user = await User.findOne({email:req.body.email})
    if(user){
      return res.status(400).json({error:"Enter valid email!"})
    } 
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);
    user = await User.create({
        email: req.body.email,
        password: secPass,
      })
      // .then(user => res.json(user))
      // .catch(err => console.log(err)) // shows error specifically if entry is duplicate
    // res.send(req.body); //not req.d with .then(user => res.json(user)); (redundant)
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({authtoken})}
    // res.json(user)}
    catch(error){
      console.error(error.message);
      res.status(500).send("ERROR");
    }
})
// ROUTE 2: for login

router.post('/login',[
    body('email','Enter a valid email-id').isEmail(),
    body('password','Enter a valid non-empty password of length').exists(),
],async  (req,res)=>{
  let success = false;
  //error checking
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {email, password} = req.body;
  try {
    let user = await User.findOne({email});
    if(!user){
      success = false
      return res.status(400).json({success, error: "User doesn't exist!"});
    }
    const pwdCompare = await bcrypt.compare(password,user.password);
    if(!pwdCompare){
      success = false
      return res.status(400).json({success,error: "Incorrect Password!"});
    }
    const data = {
      user: {
        id: user.id
      }
    }
    success = true;
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({success, authtoken, au: user.au})
  } catch (error) {
    console.error(error.message);
      res.status(500).send("ERROR");
  }
})
// ROUTE 3: for details retrieval
router.post('/details', fetch ,async  (req,res)=>{
try {
  userId = req.user.id;
  const user = await User.findById(userId).select("-password");
  res.send(user);
} catch (error) {
  console.error(error.message);
      res.status(500).send("ERROR");
}})
module.exports = router