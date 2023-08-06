const express = require('express')
// require("./db/conn")

const app = express()

const path = require("path")
const staticPath = path.join(__dirname, "../public") // D:\projects\Backend_Projects\add_static_webpage_in_express_Thapa\public
app.use(express.static(staticPath))

const port = process.env.PORT || 3000

// // routing 
// app.get( path, callback )
app.get("/", (req, res) => {
    res.send("Hii by")
})

// // server create
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})