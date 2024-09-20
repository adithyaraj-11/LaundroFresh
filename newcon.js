var MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://Adithyaraj:1234567iI$@clusterzero.ycpi2.mongodb.net/laundrofresh?retryWrites=true&w=majority&appName=ClusterZero";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
