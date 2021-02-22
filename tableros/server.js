const express = require("express");
const serveStatic = require("serve-static");
const cors = require("cors");
const history = require("connect-history-api-fallback");

//require("dotenv").config();

//console.log("URl backend :::>", process.env.VUE_APP_URL_BACKSERVICES);

const app = express();

app.use(history());
app.use(cors());
app.use("/:bd/:accion", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");

  next();
});
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 4500;
app.listen(port);
