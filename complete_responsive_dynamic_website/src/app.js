const express = require('express')
require("./db/conn")

const app = express()
const port = process.env.PORT || 3000

// routing 
// app.get( path, callback )
app.get("/", (req, res) => {
    res.send("Hii by")
})

// server create 
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})