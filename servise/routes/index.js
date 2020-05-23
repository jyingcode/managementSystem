var express = require('express');
var router = express.Router();

/* GET home page. */
global.orderList = []
router.get('/getList', function(req, res, next) {
  res.json({ 
    code: 0,
    list: global.orderList
  });
});
router.post('/addOrder', function(req, res, next) {
  console.log(req.body)
  global.orderList.push(req.body)
  res.json({ 
    code: 0
   });
});
module.exports = router;
