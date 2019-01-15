let mongodb = require('mongodb').MongoClient;
let express  = require('express');
let app = express();

let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

const connection = (closure) => {
  return MongoClient.connect('mongodb://jiba:jiba123@ds261072.mlab.com:61072/properties_jiba',  { useNewUrlParser: true },(err, db) => {
  var db =  db.db("properties_jiba")   
  if (err) return console.log(err);

      closure(db);
  });
};
// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};


let addData = function(myobj){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testData1");
    dbo.collection("first").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });
  }); 
}


addData.prototype.addData2 = (colName, myobj)=>{
  connection((db) => {
    db.collection(colName)
    .save(myobj, (err, result) => {
      if (err) throw err;
      console.log("1 document inserted");
  });
});
}


addData.prototype.update = function(colName, query, myobj){
  connection((db) => {
    db.collection(colName)
      .findOneAndUpdate(query, myobj, {
        sort: {_id: -1},
        upsert: true
      }, (err, result) => {
        if (err) return res.send(err)
        console.log("1 document updated");
        db.close();
      })
    })
}


addData.prototype.delete = (colName,myquery) => {
  connection((db) => {
    db.collection(colName)
    .findOneAndDelete(myquery,
    (err, result) => {
        if (err) return res.send(500, err)
        res.send({message: 'success'})
    })
    db.close()
  })
}


var outRes;
addData.prototype.getData = (colName, req,res) => {
    connection((db) => {
      db.collection(colName)
        .find()
        .toArray()
        .then((data) => {
          response.data = data;
          outRes= data
        })
        .catch((err) => {
          sendError(err, res);
        });
    })
      return outRes
}

module.exports = addData;