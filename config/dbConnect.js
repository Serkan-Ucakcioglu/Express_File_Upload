const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
    });
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
