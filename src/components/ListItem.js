import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  background-color: lightgrey;
`;

const Title = styled.div`
  font-weight: bolder;
`;

function ListItem({ quotes }) {
  return (
    <Card>
      <Title>{quotes.text}</Title>
      <div>{quotes.author}</div>
    </Card>
  );
}

export default ListItem;
