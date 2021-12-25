const express = require('express');
global.request = require('request');
var rp = require('request-promise');

const app = express();

const books = require('./db')


var port = process.env.PORT || 8082;
app.listen(port, function () { console.log('Starting node.js on port ' + port);});

app.get('/', (req, res) => {
    res.send('Hello World')
  })

  app.get('/books', (req, res) => {
    res.json(books)
  })

app.get('/check/truemoney',async function (req, res) {
    let query = req.query //ดูก้อนข้อมูลตอบกลับทั้งหมด
    });

function tmpay(password) {
    return new Promise((resolve) => {
      let url_callback = "https://yourwebsite.com/check/truemoney"
      request({
        url: 'https://www.tmpay.net/TPG/backend.php',
        qs: {
          merchant_id: 'COxxxxxxxx',
          password: password,
          resp_url: url_callback
        },
        timeout: 5000
      }, function (err, resp, body) {
        if (err) resolve('Error')
        if (resp) console.log('OK')
        if (body) resolve(body)
      })
    })
}

var options = {
    method: 'POST',
    uri: 'https://0a6d-2001-fb1-c5-8ead-99f7-8a2b-e037-29e5.ap.ngrok.io/Services/ServiceContract.svc/JackCloudPOS/Api/GetLiffOrder',
    //uri: 'https://0a6d-2001-fb1-c5-8ead-99f7-8a2b-e037-29e5.ap.ngrok.io/Test/GetAll',
    //qs: {
    //    access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    //},
    
    headers: {
        'Content-Type': 'application/json',
        'x-security-lock':'0241CCFF2D40AF7AF8A4FC02272C47A30D15DBDFB36E3266D1296212574F328E'
    },
    body: {
        'CompanyId': '2',
        'UserId': "U5bcb2afaf17c20551ab5afdcfec5c1d3"
      },
    json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then(function (repos) {
        console.log('User has %d repos', repos.length);
    })
    .catch(function (err) {
        console.log('Error');
        // API call failed...
    });