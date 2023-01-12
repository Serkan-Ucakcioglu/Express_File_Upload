const mongoose = require("mongoose");

const fileSchema = mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Files", fileSchema);
