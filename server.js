const express = require("express");
const app = express();
const port = 3004;

app.get("/", (request, response) => {
  response.send("Happy quotes incoming");
});

app.listen(port, () => {
  console.log(`listen on ${port}`);
});
