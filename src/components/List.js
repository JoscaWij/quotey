import React from "react";

function List({ quotes }) {
  return (
    <div>
      {quotes?.map((quotes) => (
        <span>{quotes}</span>
      ))}
    </div>
  );
}

export default List;
