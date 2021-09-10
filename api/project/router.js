// build your `/api/projects` router here
const express = require("express");
const Project = require("./model");
const router = express.Router();

router.post("/", (req, res, next) => {
  Project.add(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});
router.get("/", (req, res, next) => {
  Project.get()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

module.exports = router;