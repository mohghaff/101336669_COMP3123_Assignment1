const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/UserModel");

const route = express.Router();

route.post("/user/signup", async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201, { message: "Successfully added user" }).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

route.post("/user/login", async (req, res) => {
  let password = req.body.password;
  let userName = req.body.username;
  const user = await userModel.findOne({ username: userName });

  if (!user) {
    res.status(404).send({ message: "Error of authentication" });
  }

  if (userName == user.username && password == user.password) {
    res.status(200).send({
      status: true,
      username: user.username,
      message: "Successfully signed in",
    });
  } else {
    res
      .status(500)
      .send({ status: false, message: "Incorrect username or password" });
  }
});

module.exports = route;
