const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const router = express.Router();

router.post("/login", async(req,res)=>{
  const {email,password}=req.body;

  const user = await Admin.findOne({email});
  if(!user) return res.status(400).json({msg:"Invalid email"});

  const match = await bcrypt.compare(password,user.password);
  if(!match) return res.status(400).json({msg:"Wrong password"});

  const token = jwt.sign(
    {id:user._id,email:user.email},
    process.env.JWT_SECRET,
    {expiresIn:"7d"}
  );

  res.json({
    token,
    user:{name:user.name,email:user.email}
  });
});

module.exports = router;