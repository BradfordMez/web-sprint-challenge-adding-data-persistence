// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");
const router = express.Router();

router.post("/", (req, res) => {
    const reso = req.body

    Resource.add(reso)
    .then(reso=>{
        res.status(201).json(reso)
    })
    .catch(err=>{
        console.log(err)
    })
});
router.get("/", (req, res) => {
  Resource.get().then((resources) => {
    res.status(200).json(resources);
  });
});

module.exports = router;
