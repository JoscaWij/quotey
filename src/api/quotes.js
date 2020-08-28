const fetch = require("node-fetch");

async function fetchOriginalQuotes() {
  const response = await fetch("https://type.fit/api/quotes");

  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();

  return data;
}

exports.fetchOriginalQuotes = fetchOriginalQuotes;
