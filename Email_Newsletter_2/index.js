const express = require('express');
const parser = require('body-parser');
const https = require('https');
const app = express();


app.use(parser.urlencoded({extended : true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
    let firstname = req.body.firstname;
    let lastname = req.boddy.lastname;
    let email = req.body.email;

    console.log(firstname + lastname + email);
})


app.listen(3000, () => {
    console.log("Successfully established")
})