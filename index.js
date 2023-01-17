const express = require("express");
const mongoose = require("mongoose");
const locationRoutes = require("./routes/location");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3030;

app.use(bodyParser.json());
mongoose.connect(
  "mongodb+srv://reeganbenny:GoSLk7GzbCphbtsF@cluster0.fl7qh.mongodb.net/location",
  () => console.log("Connected to db")
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/location", locationRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
