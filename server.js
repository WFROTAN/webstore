// Connecting to MongoDB
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://waleyf:{PASSWORD}@cluster0-b1nzg.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

// Express
var express = require("express");
var app = express();

var port = process.env.port || 3001;

app.get("/mongodb/products", function(req, res) {
  client.connect(err => {
    console.log("------- Error: " + err);
    const collection = client
      .db("webstore")
      .collection("products")
      .find({})
      .sort({brand: 1});
    // perform actions on the collection object

    collection.toArray(function(err, docs) {
      return res.json(docs);
    });

    //client.close();
  });
  
});

app.get("/mongodb/products/:brand", function(req, res) {
  client.connect(err => {
    console.log("------- Error: " + err);
    const collection = client
      .db("webstore")
      .collection("products")
      .find({brand: req.params.brand})
      .sort({brand: 1});
    // perform actions on the collection object

    collection.toArray(function(err, docs) {
      return res.json(docs);
    });

    //client.close();
  });
  
});

app.get("/mongodb/category", function(req, res) {
  client.connect(err => {
    console.log("------- Error: " + err);
    const collection = client
      .db("webstore")
      .collection("products")
      .find({});
    // perform actions on the collection object

    collection.toArray(function(err, docs) {
      return res.json(docs);
    });

    //client.close();
  });
  
});

app.get("/mongodb/category/:category", function(req, res) {
  client.connect(err => {
    console.log("------- Error: " + err);
    const collection = client
      .db("webstore")
      .collection("products")
      .find({category: req.params.category})
      .sort({brand: 1});
    // perform actions on the collection object

    collection.toArray(function(err, docs) {
      return res.json(docs);
    });

    //client.close();
  });
  
});

app.get("/mongodb/gender/:gender", function(req, res) {
  client.connect(err => {
    console.log("------- Error: " + err);
    const collection = client
      .db("webstore")
      .collection("products")
      .find({gender: req.params.gender});
    // perform actions on the collection object

    collection.toArray(function(err, docs) {
      return res.json(docs);
    });

    //client.close();
  });
  
});

app.get("/mongodb/designers/", function(req, res) {
  client.connect(err => {
    console.log("------- Error: " + err);
    const collection = client
      .db("webstore")
      .collection("products")
      .distinct("brand", (err, brand) => {
        return res.json(brand);
      });
    // perform actions on the collection object

    //client.close();
  });
  
});



app.listen(port);
