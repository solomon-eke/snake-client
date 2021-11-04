const handleUserInput = function (key) {
  // ctrl-c ( end of text )
  if (key === "\u0003") {
    process.exit();
  }
};
const snakeMove = function (key) {
  if (key === "w") {
    stdin.on("data", (input) => {
      client.write("Move: up");
    });
  } else if (key === "a") {
    stdin.on("data", (input) => {
      client.write("Move: left");
    });
  } else if (key === "s") {
    stdin.on("data", (input) => {
      client.write("Move: down");
    });
  } else if (key === "d") {
    stdin.on("data", (input) => {
      client.write("Move: right");
    });
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = setupInput;
