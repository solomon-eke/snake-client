const net = require("net");
const stdin = process.stdin;
const name = "Solomon";
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  stdin.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Message from server recieved!!!");
    console.log(data);
  });

  return conn;
};
module.exports = connect;
