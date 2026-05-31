const express = require("express");
const Lead = require("../models/Lead");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async(req,res)=>{
  const leads = await Lead.find().sort({_id:-1});
  res.json(leads);
});

router.post("/", async(req,res)=>{
  const lead = await Lead.create(req.body);
  res.json(lead);
});

router.delete("/:id", auth, async(req,res)=>{
  await Lead.findByIdAndDelete(req.params.id);
  res.json({msg:"Deleted"});
});

module.exports = router;