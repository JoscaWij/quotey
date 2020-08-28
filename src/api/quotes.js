async function fetchQuotes() {
  const response = await fetch("https://type.fit/api/quotes");

  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();

  return data;
}

exports.fetchQuotes = fetchQuotes;
