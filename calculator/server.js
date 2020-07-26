const express = require("express");
const parse = require("body-parser")
const app = express();

app.use(parse.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {

    let nomorsatu = Number(req.body.firstinput);
    let nomordua = Number(req.body.secondinput);
    let hasil = nomorsatu + nomordua;
    res.send("The calculation result is " + hasil)
})

app.get('/bmi',(req,res) => {
    res.sendFile(__dirname + "/bmicalculator.html");
})

app.post('/bmi', (req, res) => {
    let height = Math.pow(Number(req.body.height) / 100, 2);
    let weight = Number(req.body.weight);
    let hasilbmi = ""
    
     
    
    let hasil = weight / height;
    console.log(hasil)

    if (hasil <= 18.5){
        hasilbmi = "Underweight"
    }
    else if (hasil >= 18.5 && hasil <= 24.9 ){
        hasilbmi = "Normal"
    }
    else if (hasil >= 25.0 && hasil <= 29.9 ){
        hasilbmi = "Overweight"
    }
    else if (hasil >= 30 && hasil <= 35 ){
        hasilbmi = "Obese"
    }
    else if (hasil > 35){
        hasilbmi = "Wow"
    }

    res.send("Your BMI result is " + hasilbmi + " (" + hasil +")")
})

app.listen(3000, () => {
    console.log("it works");
})
