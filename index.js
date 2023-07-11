require("dotenv").config();
const JUGNU = require("./handlers/Client");
const { TOKEN } = require("./settings/config");
const keepAlive = require(`./server`);


const client = new JUGNU();

module.exports = client;

client.start(TOKEN);
keepAlive();

process.on("unhandledRejection", (reason, p) => {
  console.log(" [Error_Handling] :: Unhandled Rejection/Catch");
  console.log(reason, p);
});

process.on("uncaughtException", (err, origin) => {
  console.log(" [Error_Handling] :: Uncaught Exception/Catch");
  console.log(err, origin);
});

process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(" [Error_Handling] :: Uncaught Exception/Catch (MONITOR)");
  console.log(err, origin);
});
