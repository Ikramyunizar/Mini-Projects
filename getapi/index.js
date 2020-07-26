const express = require('express');
const bodyparser = require('body-parser');
const https = require('https');

const app = express();

app.use(bodyparser.urlencoded({extended : true}));

app.get('/', (req, res) => {
    let url = 'https://api.covid19api.com/summary'
    https.get(url,(response) =>{
        let data = '';
    console.log(response.statusCode);
    response.on("data", (chunk) => {
        data += chunk;
    })
    response.on('end', () => {
        const summary = JSON.parse(data);
        const globalCount = summary.Global.NewConfirmed;
        res.send("<h1>The current global count of covid is " + globalCount + "</h1>");
    })

    })
})

app.post('/', (req,res) => {
    res.sendFile(__dirname + "/index.html")
})


app.listen(3000, () =>{
    console.log("successfully connected")
})