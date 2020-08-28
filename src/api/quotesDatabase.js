async function fetchQuotes() {
  const response = await fetch("http://localhost:3004/quotes");

  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();

  return data;
}

exports.fetchQuotes = fetchQuotes;
