const express = require("express");
const uploadFiles = require("../controllers/uploadControllers");
const router = express.Router();

router.post("/upload", uploadFiles);

module.exports = router;
