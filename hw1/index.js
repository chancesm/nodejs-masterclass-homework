/*  
*-------------------------------------------------------------------------------*
*   This file does the following:                                               *
*   - Creates our servers                                                       *
*   - Configures them to use the functionality from server.js                   *
*   - Sets the servers to listen on the ports defined in config.js              *
*                                                                               *
*   NOTE: We are passing the type of each server to the ServerFunctionality     *
*   function which is why we are calling the function inside of the callback    *
*   instead of directly using it as our callback (lines 33 & 35).               *
*-------------------------------------------------------------------------------*
*/



// Dependencies
const http = require('http');
const https = require('https');
const fs = require('fs');

// Grab App Configuration
const config = require('./config');

// Grab Server Logic
const ServerFunctionality = require('./server');

// Get Https Certificate stuff
let cert = fs.readFileSync('./https/cert.pem');
let key = fs.readFileSync('./https/key.pem');

// HTTPS SERVER OPTIONS
httpsServerOptions = {key,cert}

// Create the HTTP Server
let httpServer = http.createServer((req,res) => ServerFunctionality(req,res,'HTTP'))
// Create the HTTPS Server
let httpsServer = https.createServer(httpsServerOptions, (req,res) => ServerFunctionality(req,res,'HTTPS'))

// Tell the servers to listen
httpServer.listen(config.http_port, () => {
    console.log(`HTTP Server(${config.envName}) Listening on port: ${config.port}`);
});
httpsServer.listen(config.https_port, () => {
    console.log(`HTTPS Server(${config.envName}) Listening on port: ${config.https}`);
});