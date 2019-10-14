var express = require("express");
var app = express();
var https = require('https');
var resp
var cors = require('cors');
app.use(cors());



app.get("/years/revenue/:years/:merchant", (req, res, next) => {

    let url = 'https://fox-test-api.herokuapp.com/api/revenue'
    let yearParameter = req.params.years;
    let merchantParameter = req.params.merchant;
    let compose = url +"/"+yearParameter +"/"+ merchantParameter
    console.log(compose)
    
    https.get(compose, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            resp = JSON.parse(data)
            console.log(resp);
            res.json(resp);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });


});




app.get("/years", (req, res, next) => {

    let url = 'https://fox-test-api.herokuapp.com/api/years'
    
    https.get(url, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            resp = JSON.parse(data)
            console.log(resp);
            res.json(resp);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });


});

app.get("/years/2018", (req, res, next) => {

    https.get('https://fox-test-api.herokuapp.com/api/revenue/2018', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            resp = JSON.parse(data)
            console.log(resp);
            res.json(resp);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });


});



app.get("/years/revenue/:year", (req, res, next) => {

    let url = 'https://fox-test-api.herokuapp.com/api/revenue'
    let yearParameter = req.params.year;
    let compose = url +"/"+yearParameter
    console.log(compose)
    
    https.get(compose, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            resp = JSON.parse(data)
            console.log(resp);
            res.json(resp);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });


});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err);
  });
  
  setTimeout(function () {
    console.log('This will still run.');
  }, 500);
  
  // Intentionally cause an exception, but don't catch it.
  nonexistentFunc();
  console.log('This will not run.');