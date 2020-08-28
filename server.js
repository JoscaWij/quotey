const express = require("express");
const { fetchOriginalQuotes } = require("./src/api/quotes");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const port = 3004;

const client = new MongoClient(process.env.MONGO_URI);

async function main() {
  await client.connect();

  const database = client.db(process.env.MONGO_DB_NAME);
  const collection = database.collection("quotes");

  app.use(bodyParser.json());

  app.get("/quotes", async (request, response) => {
    const quotes = await fetchOriginalQuotes();
    response.send(quotes);
  });

  app.post("/quotes/add", async (request, response) => {
    const { text, author } = request.body;
    await collection.insertOne({
      text,
      author,
    });
  });

  app.get("/quotes/own", async (request, response) => {
    const ownQuotes = await collection.find().toArray();
    response.send(ownQuotes);
  });

  app.listen(port, () => {
    console.log(`listen on ${port}`);
  });
}

main();
