const express = require('express');
let app = express();

app.get('/FilmsAll', (req, res) => {
    mongoClient.connect('mongodb://localhost/cinemadb', function(err, db){
      const FilmsAll = db.collection('films').find({}, {'__v':0, '_id':0}).toArray(function(err, docs){
        filmsArray = docs;
      })
    });
    if (typeof filmsArray !== 'undefined'){
      res.json(filmsArray);
    } else {
      res.json([]);
    }
  });
  //Locations
  app.get('/Locations', (req, res) => {
    mongoClient.connect('mongodb://localhost/cinemadb', function(err, db){
      const Locations = db.collection('locations').find({},{'_id':0, '__v':0}).toArray(function(err, docs){
        locationsArray = docs;
      })
    });
    if (typeof locationsArray !== 'undefined'){
      res.json(locationsArray);
    } else {
      res.json([]);
    }
  });
  //Prices
  app.get('/Prices', (req, res) => {
    mongoClient.connect('mongodb://localhost/cinemadb', function(err, db){
      const Prices = db.collection('prices').find({},{'_id':0, '__v':0}).toArray(function(err, docs){
        pricesArray = docs;
      })
    });
    if (typeof pricesArray !== 'undefined'){
      res.json(pricesArray);
    } else {
      res.json([]);
    }
  });