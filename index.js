const PORT = 8000
// const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()

app.use('/', (req, res) => {
  try {
    let today = new Date().getTime()

    fs.writeFileSync(`date Stamp/${today}.txt`, `${today}`, 'utf8')
    let data = fs.readFileSync(`date Stamp/${today}.txt`, 'utf8')
    res.send(data)
    console.log(data)
  }
  catch (error) {
  }
})
app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`))