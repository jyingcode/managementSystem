// const express = require('express')
// const cookieParser = require('cookie-parser')
const fs = require('fs')
const path = require('path')
const filepath = path.join(__dirname, './charge.json')

// var app = express()

function readFile() {
	return new Promise((r, j) => {
		fs.readFile(filepath, (err, data) => {
			if (err) {
				console.log('err', err)
				j(err)
			}
			let result = data.toString()
			console.log(result)
			if (result) {
				r(JSON.parse(result).user)
			} else {
				r([])
			}
		})
	})
}

function writeFile(data) {
	return new Promise((r, j) => {
		fs.writeFile(filepath, JSON.stringify(data), (err, res) => {
			if (err) {
				j(err)
			}
			r()
		})
	})
}

async function LoginPassword(req, res) {
	let data = await readFile()
	console.log(data)
	const item = req.body
	let content = {}

	content.user = data
	let compareResult = content.user.some((el) => item.username === el.username)
	// res.cookie('userinfo', 'lee', {
	// 	// 设置该Cookie只可以由服务端访问，即前端JavaScript无法访问document.cookie获取该值，但控制台还是可以查看和修改
	// 	// httpOnly: true,
	// 	// 只有通过HTTPS请求的Cookie才被使用，否则都认为是错误的Cookie
	// 	// secure: true,
	// 	// 设置保存Cookie的域名，浏览器查找Cookie时，子域名（如translate.google.com）可以访问主域名（google.com）下的Cookie，而主域名（google.com）不可以访问子域名（如translate.google.com）下的Cookie
	// 	// 本地测试可直接设置为localhost
	// 	domain: 'localhost',
	// 	// 设置保存Cookie的路径，浏览器查找Cookie时，子路径（如/map）可以访问根路径（'/'）下设置的Cookie，而根路径（'/'）无法访问子路径（如/map）下设置的Cookie
	// 	path: '/',
	// 	// 通过expires设置Cookie过期时间为14天后
	// 	// expires: new Date(new Date().getTime() + 14 * 86400000),
	// 	// 通过maxAge设置Cookie过期时间为14天后
	// 	maxAge: 14 * 86400000,
	// })
	if (compareResult) {
		return {
			code: 0,
			token: item.username,
		}
	}

	content.user.push(item)
	await writeFile(content)

	return {
		code: 0,
		msg: '',
		token: item.username,
	}
}

// app.use(cookieParser())

// app.get('/', function(req, res) {
// 	res.send('首页')
// })
// app.get('/set', function(req, res) {
// 	res.cookie('userName', '张三', { maxAge: 20000, httpOnly: true })
// 	res.send('设置cookie成功')
// })
// app.get('/get', function(req, res) {
// 	console.log(req.cookies.userName)
// 	res.send('获取cookie成功，cookie为：' + req.cookies.userName)
// })
// app.listen(8080)

module.exports = {
	LoginPassword,
}
