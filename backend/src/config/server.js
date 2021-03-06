const port = 3003;

const bodyParser = require('body-parser');
const express = require('express'); // Default Server
const server = express();
const allowCors = require('./cors');

// Middlewares - Chain of Responsability
server.use(bodyParser.urlencoded({ extended: true })); // For suport more data types (Use for all requisitions)
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function(){
    console.log(`BACKEND is Running on port ${port}.`);
});

module.exports = server