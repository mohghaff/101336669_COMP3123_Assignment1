const express = require("express");
const mongoose = require("mongoose");
const route = express.Router();
const empModel = require("../models/EmployeeModel");

route.post("/employees", async (req, res) => {
  try {
    const newEmployee = new empModel(req.body);
    await newEmployee.save();
    res.status(201).send(newEmployee);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.get("/employees", async (req, res) => {
  try {
    const employees = await empModel.find();
    res.status(200).send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.get("/employees/:eid", async (req, res) => {
  try {
    const employee = await empModel.findById(req.params.eid);
    res.status(200).send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.put("/employees/:eid", async (req, res) => {
  try {
    console.log(req.body);
    const updatedEmployee = await empModel.findByIdAndUpdate(
      req.params.eid,
      req.body
    );
    await updatedEmployee.save();
    res.status(202).send(req.body);
  } catch (err) {
    res.status(500).send(err);
  }
});

route.delete("/employees/:eid", async (req, res) => {
  try {
    const employee = await empModel.findByIdAndDelete(req.params.eid);

    if (!employee) {
      res.status(404).send("No item found");
    }
    res.status(204).send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = route;
