require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const adminAuthRouter = require("./routes/admin/adminAuthRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookieParser());
const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful!"))
  .catch((e) => {
    console.log(`SomeThing went wrong with DataBase. and the error is =  ${e}`);
  });

app.get("/", (req, res) => res.send("<h1>Server is running</h1>"));

// admin routers
app.use("/api/v1/admin", adminAuthRouter);

app.get("*", (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Url not found",
  });
});
app.post("*", (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Url not found",
  });
});

app.delete("*", (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Url not found",
  });
});

app.patch("*", (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Url not found",
  });
});
app.put("*", (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Url not found",
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is running on port ${port}!`));
