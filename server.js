const express = require("express");
const { fetchQuotes } = require("./src/api/quotes");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const app = express();
const port = 3004;

const client = new MongoClient(process.env.MONGO_URI);

async function main() {
  await client.connect();

  const database = client.db(process.env.MONGO_DB_NAME);
  const collection = database.collection("quotes");

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
