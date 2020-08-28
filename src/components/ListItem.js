import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  background-color: lightgrey;
  margin: 0.5em 0;
  border-radius: 20px;
  text-align: center;
  padding: 0.3em;
`;

const Title = styled.div`
  font-weight: bolder;
`;

function ListItem({ quotes }) {
  return (
    <Card>
      <Title>"{quotes.text}"</Title>
      <div>{quotes.author}</div>
    </Card>
  );
}

export default ListItem;
