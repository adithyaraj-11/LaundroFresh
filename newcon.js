var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://user:123@clusterzero.ycpi2.mongodb.net/?retryWrites=true&w=majority&appName=ClusterZero";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
