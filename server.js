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

  // Add headers
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.get("/quotes", async (request, response) => {
    const quotesApi = await fetchOriginalQuotes();
    const ownQuotes = await collection.find().toArray();
    const allQuotes = [...ownQuotes, ...quotesApi];
    response.send(allQuotes);
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
