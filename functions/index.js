const functions = require("firebase-functions");
const express = require("express");

const app = express();


app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
exports.app = functions.https.onRequest(app);
