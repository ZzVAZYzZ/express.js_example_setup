const app = require('./src/app/app')
const port = 8000;
const https = require("https");
const fs = require("fs");

const options = {

    key: fs.readFileSync('./key.pem'),
  
    cert: fs.readFileSync('./cert.pem'),
  
  };
const server = https.createServer(options, app);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })