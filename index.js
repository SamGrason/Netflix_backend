const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const useremail = "samgrason@gmail.com"
const password = "sam123"

app.post("/login", function (req, res) {
    if (req.body.useremail == useremail && req.body.password == password) {
        res.send(true)
    } else {
        res.send(false)
    }
})

app.listen(5000, function () {
    console.log("Server is running at port 5000....")
})