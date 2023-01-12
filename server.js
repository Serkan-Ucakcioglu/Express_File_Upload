const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload());

app.post("/upload-file", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let filename = req.files.img.name;

  let uploadPath = path.join(__dirname, "/upload/" + filename);

  req.files.img.mv(uploadPath, (err) => {
    if (err) return res.status(500).send(err);

    res.send("File uploaded!");
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
