// Dependencies
const http = require('http');
const https = require('https');
const fs = require('fs');

// Grab Configuration
const config = require('./config');
// console.log('CONFIG', config);

// Grab Server Logic
const ServerFunctionality = require('./server');

// Get Https Certificate stuff
let certificate = fs.readFileSync('./https/cert.pem', "utf8");
let key = fs.readFileSync('./https/key.pem', "utf8");

// HTTPS SERVER OPTIONS
httpsServerOptions = {
    key,
    certificate
}

// Create the HTTP Server
let httpServer = http.createServer(ServerFunctionality)
// Create the HTTPS Server
let httpsServer = https.createServer(httpsServerOptions, ServerFunctionality)

// Tell the servers to listen
httpServer.listen(config.port, () => {
    console.log(`HTTP Server(${config.envName}) Listening on port: ${config.port}`);
});
httpsServer.listen(config.https, () => {
    console.log(`HTTPS Server(${config.envName}) Listening on port: ${config.https}`);
});