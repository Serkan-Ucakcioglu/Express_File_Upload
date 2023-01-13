const path = require("path");
const Files = require("../model/files");

const uploadFiles = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    let filename = req.files.img.name;

    let uploadPath = path.join(__dirname, "..", "/upload/" + filename);

    await req.files.img.mv(uploadPath, async (err) => {
      if (err) return res.status(500).send(err);

      const create = await Files.create({
        img: `http://localhost:3001/upload/${filename}`.trim(), //websiteurl::filename
      });
      console.log(create);

      return res.status(201).json(create);
    });
  } catch (error) {
    res.status(404).json("erro");
  }
};
module.exports = uploadFiles;
