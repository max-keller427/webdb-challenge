const express = require("express");

const server = express();

server.use(express.json());

const Router = require("./routers/Router.js");

server.use("/projects", Router);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server running!" });
});

module.exports = server;
