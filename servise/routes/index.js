const express = require('express')
const router = express.Router()

const handlerFile = require('../data/handerFile')
const user = require('../cookie/user')
/* GET home page. */
router.get('/getList', function(req, res, next) {
	console.log(req.query)
	handlerFile
		.getList(req.query)
		.then((data) => {
			res.json({
				code: 0,
				data,
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
router.post('/deleteData', function(req, res, next) {
	handlerFile
		.deleteElement(req.body)
		.then((result) => {
			res.json({
				code: 0,
			})
		})
		.catch((e) => {
			res.json({
				code: -1,
				msg: JSON.stringify(e),
			})
		})
})

router.post('/onModifyData', function(req, res, next) {
	handlerFile
		.chageData(req.body)
		.then((result) => {
			res.json({
				code: 0,
			})
		})
		.catch((e) => {
			res.json({
				code: -1,
				msg: JSON.stringify(e),
			})
		})
})

router.post('/upload', function(req, res) {
	handlerFile
		.upload(req)
		.then((data) => {
			res.json({
				code: 0,
				...data,
			})
		})
		.catch((e) => {
			res.json({
				code: -1,
				msg: '上传图片失败',
			})
		})
})

router.post('/login', function(req, res) {
	user.LoginPassword(req, res).then((data) => {
		res.json(data)
	})
})
module.exports = router
