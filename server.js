const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const employeeRouter = require("./routes/employee");

const app = express();
app.use(express.json());

app.use("/api", userRouter);
app.use("/api/emp", employeeRouter);

mongoose.Promise = global.Promise;

const DB =
  "mongodb+srv://mohghaff:1234M@cluster0.hqopxdf.mongodb.net/assignment_one?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database mongoDB Server");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
app.get("/", (req, res) => {
  res.send("<h1>Assignment One application- COMP 3123</h1>");
});

app.listen(3000, () => {
  console.log(`Server is listening on port http://localhost:${3000}`);
});
