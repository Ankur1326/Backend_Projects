const express = require('express')
require("./db/conn")

const app = express()

const port = process.env.PORT || 3000

const path = require("path")

// setting the path
const staticPath = path.join(__dirname, "../public");
console.log(staticPath);

// middleware
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstarp/dist/css")))
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstarp/dist/js")))
app.use("/css", express.static(path.join(__dirname, "../node_modules/jquery/dist")))

app.set("view engine", "hbs")


// // routing 
// app.get( path, callback )
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/contact", (req, res) => {
    res.send("contact")
})

// // server create
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})