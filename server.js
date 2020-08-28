const express = require("express");
const { fetchQuotes } = require("./src/api/quotes");
require("dotenv").config();
const app = express();
const port = 3004;

async function main() {
  app.get("/quotes", async (request, response) => {
    const quotes = await fetchQuotes();
    response.send(quotes);
  });

  app.get("/", (request, response) => {
    response.send("Happy quotes incoming");
  });

  app.listen(port, () => {
    console.log(`listen on ${port}`);
  });
}

main();
