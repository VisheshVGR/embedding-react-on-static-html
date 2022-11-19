const express = require("express")
const cors = require("cors")
const path = require("path")
const fs = require("fs")

const PORT = 1234

const app = express()

app.use(express.json())

app.use(cors({ origin: true }))

app.use(express.static(path.resolve(path.join(__dirname, './build'))));

app.get('/initialize', (req, res, next) => {
    const jsFolder = "./build/static/js"
    const cssFolder = "./build/static/css"

    jsFiles = []
    cssFiles = []

    fs.readdirSync(jsFolder).forEach((eachFile) => {
        jsFiles.push(eachFile)
    })

    fs.readdirSync(cssFolder).forEach((eachFile) => {
        cssFiles.push(eachFile)
    })

    res.send({ jsFiles, cssFiles })
})

app.listen(PORT, () => {
    console.log('server is running on ', PORT);
})