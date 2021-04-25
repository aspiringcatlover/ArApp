const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const https = require('https');


const key = fs.readFileSync(path.resolve((__dirname,'../cert/private.key')));
const cert = fs.readFileSync(path.resolve((__dirname,'../cert/certificate.crt')));

const server = https.createServer({key: key, cert: cert},app);

server.listen(3000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'res')));
app.get('/', (req, res) => {
  res.send('https secured server');
});