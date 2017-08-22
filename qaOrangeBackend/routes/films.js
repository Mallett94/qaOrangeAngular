var express = require('express');
var router = express.Router();

//allows connection to mongoose and database
var mongoose = require('mongoose');
//connect to the data base
var promise = mongoose.connect("mongodb://localhost/Films" , {useMongoClient : true});
var db = mongoose.connection;
mongoose.Promise = global.Promise;

router.get('/' , function(req, res){
	db.collection("Films").find({}).sort({}).toArray(function(err, docs){
        res.json(docs);
    res.send(docs);
	});
});
module.exports = router;