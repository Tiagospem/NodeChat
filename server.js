const express = require("express");

const io = require("socket.io");

const app = express();

const port = 3333;

app.use("/", require("./src/routes"));

app.use(express.json());

app.listen(port, function() {
  console.log("Servidor rodando porta: ", port);
});
