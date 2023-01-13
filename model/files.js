const mongoose = require("mongoose");

const fileSchema = mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Files", fileSchema);
