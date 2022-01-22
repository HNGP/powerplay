const express = require("express");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const path = require("path");
const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(router);

if (process.env.NODE_ENV === "production") {
  server.use(express.static("build"));
  server.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

server.listen(port);
