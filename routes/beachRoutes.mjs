import express from "express";
import Beach from "../models/beachSchema.mjs";

const router = express.Router();

//create
router.post("/", async (req, res) => {
  //specify action
  const newBeach = await Beach.create(req.body);
  //return result
  res.json(newBeach);
});

//read
router.get("/", async (req, res) => {
    //specify action
    const allBeaches = await Beach.find(req.body);
    //return result
    res.json(allBeaches);
});
  
//update
router.put("/:id", async (req, res) => {
    //specify action
    const editBeach = await Beach.findByIdAndUpdate(req.params.id, req.body, {new: true});
    
    if (!editBeach) {
        res.status(400).json({ msg: "Beach not found" })
    };
    //return result
    res.json(editBeach);
});
  
//delete
router.delete("/:id", async (req, res) => {
    //specify action
    const deleteBeach = await Beach.findByIdAndDelete(req.params.id);
    
    if (!deleteBeach) {
        res.status(400).json({ msg: "Beach not found" })
    };
    
    //return result
    res.json(deleteBeach);
  });

export default router;
