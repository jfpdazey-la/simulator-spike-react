var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(['Simulator A', 'Simulator B', 'Simulator C']);
});

module.exports = router;
