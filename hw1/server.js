const url = require('url');
const string_decoder = require('string_decoder').StringDecoder;


module.exports = (req, res) => {
    // Get the URL and parse it
    let parsedURL = url.parse(req.url, true);

    // get the path from the url
    let path = parsedURL.pathname;
    let trimmedPath = path.replace(/^\/+|\/+$/g, '')

    // Get HTTP Method
    let method = req.method.toUpperCase();

    // Get the Query String as object
    let queryObject = parsedURL.query;

    // Get the headers as an object
    let headers = req.headers;

    // Get the payload of the request
    let decoder = new string_decoder('utf-8');
    let buffer = '';
    req.on('data', (data) => {
        buffer += decoder.write(data);
    });
    req.on('end', () => {
        buffer += decoder.end();
        let chosenHandler = router[trimmedPath] ? handlers[trimmedPath] : handlers.notFound;

        let data = {
            trimmedPath,
            queryObject,
            method,
            headers,
            payload: buffer
        }
        // ROUTE THE REQUEST
        chosenHandler(data, (statusCode = 200, payload = {}) => {
            // convert payload to a string
            let payloadstring = JSON.stringify(payload);
            // send a response
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCode);
            res.end(payloadstring);

            // log the request information
            console.log(`Returning this response:`, statusCode, payloadstring);
        })

    })
}
// REQUEST HANDLER
let handlers = {}
handlers.sample = (data, cb) => {
    // Callback a status code and a payload object
    cb(406, {
        name: 'sample handler'
    })
}
handlers.notFound = (data, cb) => {
    cb(404)
}

// Router
let router = {
    'sample': handlers.sample
}