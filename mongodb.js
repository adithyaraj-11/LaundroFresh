const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Adithyaraj:1234567iI$@clusterzero.ycpi2.mongodb.net/laundrofresh?retryWrites=true&w=majority&appName=ClusterZero"
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed to connect");
  });

const LogInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  regno: {
    type: Number,
    required: true,
  },
  mobileno: {
    type: Number,
    required: true,
  },
  roomno: {
    type: Number,
    required: true,
  },
  block: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const orderSchema = new mongoose.Schema({
  orderplacedon: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  regno: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  noofclothes: {
    type: Number,
    required: true,
  },
});

const collection = new mongoose.model("login", LogInSchema);
const collectio = new mongoose.model("orderhistory", orderSchema);
module.exports = collection;
module.exports = collectio;
