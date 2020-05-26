const fs = require('fs')
const path = require('path')
const filepath = path.join(__dirname, './order.json')
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
				r(JSON.parse(result).list)
			} else {
				r([])
			}
		})
	})
}

function writeFile(item) {
	return new Promise((r, j) => {
		readFile()
			.then((data = []) => {
				let content = {}
				item.date = getCureentDate()
				content.list = data
				let compareResult = content.list.some(
					(el) => item.menu === el.menu
				)
				if (compareResult) {
					j('当前菜单已经存在')
					return
				}
				console.log(content.list)
				content.list.push(item)
				fs.writeFile(filepath, JSON.stringify(content), (err, res) => {
					if (err) {
						j(err)
					}
					r(item.date)
				})
			})
			.catch((e) => {
				console.log(e)
			})
	})
}
function deleteElement(item) {
	return new Promise((r, j) => {
		readFile()
			.then((data) => {
				for (let i = 0; i < data.length; i++) {
					const el = data[i]
					if (el.menu === item.menu) {
						data.splice(i, 1)
						break
					}
				}
				data = {
					list: data,
				}
				fs.writeFile(filepath, JSON.stringify(data), (err, res) => {
					if (err) {
						j(err)
					}
					r(item)
				})
			})
			.catch((e) => {
				console.log(e)
			})
	})
}
function getCureentDate() {
	let str = ''
	let time = new Date()
	let year = time.getFullYear()
	let month = time.getMonth() + 1
	let getdate = time.getDate()
	let hours = time.getHours()
	let minutes = time.getMinutes()
	let second = time.getSeconds()
	if (hours < 10) {
		hours = '0' + hours
	}
	if (second < 10) {
		second = '0' + second
	}
	if (month < 10) {
		month = '0' + month
	}
	str =
		year +
		'-' +
		month +
		'-' +
		getdate +
		' ' +
		hours +
		':' +
		minutes +
		':' +
		second
	console.log(str)

	return str
}
// getCureentDate()
module.exports = {
	readFile,
	writeFile,
	deleteElement,
}
