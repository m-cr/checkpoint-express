'use strict';

var express = require('express');
var router = express.Router();
module.exports = router;

var todos = require('../models/todos.js');

router.get('/users', function(req, res, next){
	var usersAr = todos.listPeople();
	res.send(usersAr);
});
// write your routes here. Feel free to split into multiple files if you like.
