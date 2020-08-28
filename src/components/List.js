import React from "react";

function List({ quotes }) {
  return (
    <div>
      {quotes?.map((quotes) => (
        <span key={quotes.text}>
          {quotes.text}
          {quotes.author}
        </span>
      ))}
    </div>
  );
}

export default List;
