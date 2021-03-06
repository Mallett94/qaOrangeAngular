var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/cinemadb');
const mongoClient = require('mongodb');


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

//Mongo
//Films
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


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
