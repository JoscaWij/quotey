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
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
  });

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
