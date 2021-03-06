const env = process.env.NODE_ENV || 'development';
const Block = require('./modules/Block');
const Node = require('./modules/Node');

let block = new Block;

let node = new Node("SoftuinChain", "Alex", [], [block.generageGenesisBlock()],new Map(), [], 6, new Map());

module.exports = node;

const config = require('./config/config')[env];
const app = require('express')();
require('./config/express')(app);
require('./config/routes')(app);
app.listen(config.port);
console.log("Listening on port: " + config.port)