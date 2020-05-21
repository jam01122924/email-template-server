var express = require('express');
var router = express.Router();

console.log('ai-calc')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('ai-calc');
  console.log('test123');
});

module.exports = router;
