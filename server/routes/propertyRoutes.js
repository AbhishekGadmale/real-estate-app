const express = require("express");
const Property = require("../models/Property");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", async(req,res)=>{
  const data = await Property.find().sort({_id:-1});
  res.json(data);
});

router.get("/:id", async(req,res)=>{
  const item = await Property.findById(req.params.id);
  res.json(item);
});

router.post("/", auth, async(req,res)=>{
  const item = await Property.create(req.body);
  res.json(item);
});

router.put("/:id", auth, async(req,res)=>{
  const item = await Property.findByIdAndUpdate(req.params.id,req.body,{new:true});
  res.json(item);
});

router.delete("/:id", auth, async(req,res)=>{
  await Property.findByIdAndDelete(req.params.id);
  res.json({msg:"Deleted"});
});

module.exports = router;