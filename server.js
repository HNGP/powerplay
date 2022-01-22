const express = require("express");
const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const server = express();
const port = process.env.PORT || 3200;

server.use(express.json());
server.use(cors());
server.use("/api", jsonServer.router("db.json"));

if (process.env.NODE_ENV === "production") {
  server.use(express.static("build"));
  server.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

server.listen(port);
