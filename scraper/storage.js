var MongoClient = require('mongodb').MongoClient
var assert = require('assert');

//mongodb reference: http://mongodb.github.io/node-mongodb-native/2.0/

//connect to db
var url = 'mongodb://localhost:27017/project-records';

//connect to db
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db.close();
});