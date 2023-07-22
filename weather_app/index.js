const http = require('http');
const fs = require('fs')
let requests = require("requests")

const homeFile = fs.readFileSync("home.html", "utf-8")

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", (orgVal.main.temp-273).toFixed(2))
    temperature = temperature.replace("{%tempmin%}", (orgVal.main.temp_min-273).toFixed(2))
    temperature = temperature.replace("{%tempmax%}", (orgVal.main.temp_max-273).toFixed(2))
    temperature = temperature.replace("{%location%}", orgVal.name)
    temperature = temperature.replace("{%country%}", orgVal.sys.country)
    temperature = temperature.replace("{%tempstatus%}", (orgVal.weather[0].main-273).toFixed(2))
    
    // console.log(orgVal.weather[0].main);
    return temperature;
}

const server = http.createServer((req, res) => {    
       if (req.url == "/") {
        requests(
            "http://api.openweathermap.org/data/2.5/weather?q=pune&appid=dbda7364818f0361ba48779050d5569b"
        )
        .on("data", (chunk) => {
            const onjdata = JSON.parse(chunk);
            const arrData = [onjdata]
            // console.log(arrData[0].main.temp);
            const realTimeDate = arrData.map((val) => replaceVal(homeFile,val)).join("");
            res.write(realTimeDate)
        })
        .on("end", (err) => {
            if (err) return console.log("connection closed due to errors", err);
            res.end()
        })
    }

})

server.listen(8000, "127.0.0.1", () => {
    console.log(`Server is running on the Localhost:8000`);
})