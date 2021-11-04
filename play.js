const net = require("net");
const connect = require("./client");
const stdin = process.stdin;
// establishes a connection with the game server

console.log("Connecting ...");
connect();
