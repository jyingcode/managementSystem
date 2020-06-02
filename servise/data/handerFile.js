const fs = require('fs')
const path = require('path')
const formidable = require('formidable')
const filepath = path.join(__dirname, './order.json')

function write(data) {
	return new Promise((r, j) => {
		fs.writeFile(filepath, JSON.stringify(data), (err, res) => {
			if (err) {
				j(err)
			}
			r()
		})
	})
}

function writeData(content) {
	return new Promise((r, j) => {
		fs.writeFile(filepath, JSON.stringify(content), (err, res) => {
			if (err) {
				j(err)
			}
			r()
		})
	})
}

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
				r((data = []))
			}
		})
	})
}

async function getList(param) {
	const list = await readFile()
	const total = list.length
	const { pageNum, pageSize } = param
	const index = (pageNum - 1) * pageSize
	return {
		list: list.splice(index, pageSize),
		total,
	}
}

async function writeFile(item) {
	let data = await readFile()
	let content = {}
	content.list = data
	item.date = getCureentDate()
	item.id = Date.now()
	let compareResult = content.list.some((el) => item.id === el.id)
	if (compareResult) {
		j('当前菜单已经存在')
		return
	}
	content.list.push(item)
	await writeData(content)
	return item
}

async function deleteElement(item) {
	let data = await readFile()

	for (let i = 0; i < data.length; i++) {
		const el = data[i]
		if (el.id === item.id) {
			data.splice(i, 1)
			break
		}
	}
	data = {
		list: data,
	}
	await write(data)
	return item
}

async function chageData(item) {
	let data = await readFile()
	for (var i = 0; i < data.length; i++) {
		const el = data[i]
		if (el.id === item.id) {
			data.splice(i, 1, item)
			break
		}
	}
	data = {
		list: data,
	}
	await write(data)
	return item
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

async function upload(req) {
	var form = new formidable.IncomingForm()
	return new Promise((r, j) => {
		form.parse(req, async function(error, fields, files) {
			// console.log('parse done')
			console.log(files.file)
			const { file } = files
			const filename = file.name
			const filePath = await createFile(filename).catch((e) => {
				console.log(e)
			})
			// 读取文件流并写入到public/test.png
			const data = fs.readFileSync(file.path)
			fs.writeFile(filePath, data, (err) => {
				if (err) {
					j(err)
				}
				r({
					url: 'http://localhost:3000/images/' + filename,
				})
			})
		})
	})
}
// getCureentDate()

function createFile(filename) {
	if (!filename) return
	let filePath = path.join(__dirname, '../public/images/' + filename)
	return new Promise((r, j) => {
		fs.writeFile(
			filePath,
			'',
			{
				flag: 'a+',
			},
			function(err, data) {
				if (err) {
					j(err)
				} else {
					r(filePath)
				}
			}
		)
	})
}

// async function LoginPassword(item) {
// 	let data = await readFile()
// 	console.log(data)
// 	let content = {}
// 	content = data
// 	item.date = getCureentDate()
// 	item.id = Date.now()
// 	let compareResult = content.list.some((el) => item.id === el.id)
// 	if (compareResult) {
// 		j('当前菜单已经存在')
// 		return
// 	}
// 	content.push(item)
// 	await writeData(content)
// 	return item
// }

module.exports = {
	readFile,
	writeFile,
	deleteElement,
	chageData,
	getList,
	upload,
	// LoginPassword,
}
