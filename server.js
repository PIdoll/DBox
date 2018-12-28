const express = require('express')
const path = require('path')
const app = express()

app.use('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'styleguide', req.url))
});

app.listen(9999, () => {
  console.log('服务器启动成功')
})
