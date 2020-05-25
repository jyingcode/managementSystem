var express = require('express')
var router = express.Router()
const handlerFile = require('../data/handerFile')
/* GET home page. */
router.get('/getList', function(req, res, next) {
	handlerFile
		.readFile()
		.then((data) => {
			res.json({
				code: 0,
				list: data,
			})
		})
		.catch((e) => {
			res.json({
				code: -1,
				msg: e,
			})
		})
})
router.post('/addOrder', function(req, res, next) {
	console.log(req.body)
	handlerFile
		.writeFile(req.body)
		.then((_) => {
			res.json({
				code: 0,
				data: _,
			})
		})
		.catch((e) => {
			res.json({
				code: -1,
				msg: e,
			})
		})
})
module.exports = router
