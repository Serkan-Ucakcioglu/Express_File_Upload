const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const uploadRoute = require("./router/uploadRoute");
const path = require("path");
const connectDb = require("./config/dbConnect");
const fileUpload = require("express-fileupload");

connectDb();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/upload", express.static(path.join(__dirname, "/upload")));
app.use(fileUpload());

app.use("/", uploadRoute);

const port = process.env.PORT || 3001;

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
