const express = require("express");

const router = express.Router();

const db = require("../data/knexConfig.js");

router.get("/", (req, res) => {
  db("projects")
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  db("projects")
    .where({ id: req.params.id })
    .first()
    .then(projects => {
      db("actions")
        .where({ project_id: req.params.id })
        .then(actions => {
          projects.actions = actions;
          res.status(200).json(projects);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  db("projects")
    .insert(req.body)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/actions", (req, res) => {
  db("actions")
    .insert()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
