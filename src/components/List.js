import React from "react";
import ListItem from "./ListItem";

function List({ quotes }) {
  return (
    <div>
      {quotes?.map((quotes) => (
        <ListItem key={quotes.text} quotes={quotes} />
      ))}
    </div>
  );
}

export default List;
