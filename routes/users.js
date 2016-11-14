var express = require('express');
var router = express.Router();
var userDao = require('../dao/userdao');
var selldao = require('../dao/selldao');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/reg', function (req,res,next) {
  userDao.reg(req.body.username, req.body.password, function (result) {
    res.contentType('json');//返回的数据类型
    res.send(JSON.stringify({result:result }));//给客户端返回一个json格式的数据
    res.end();
  })
});
router.post('/log', function (req,res,next) {
  userDao.log(req.body.username, req.body.password, function (result) {
    res.contentType('json');//返回的数据类型
    res.send(JSON.stringify({result:result }));//给客户端返回一个json格式的数据
    res.end();

  })
})
router.get('/sell.html',function (req,res,next) {
  res.sendFile( '/home/miracle/shop/public/sell.html');
})
router.post('/insert',function (req,res,next) {
  selldao.insert(req.body.name, req.body.price,req.body.color,req.body.siez, req.body.num, req.body.src)
})
module.exports = router;
