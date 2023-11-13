const functions = require("firebase-functions");
const express = require("express");

const app = express();


app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/policy", (req, res) => {
  res.render("policy");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

exports.app = functions.https.onRequest(app);
