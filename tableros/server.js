const express = require("express");
const serverStatic = require("serve-static");
const path = require("path");

const app = express();

app.use("/:bd/:accion", serverStatic(path.join(__dirname, "/dist")));

const port = process.env.PORT || 8000;
app.listen(port);

console.log("escuchando por el puerto ", port);
