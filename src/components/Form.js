import React from "react";
import styled from "@emotion/styled";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

function Form() {
  return (
    <StyledForm>
      <input placeholder="Enter Quote"></input>
      <input placeholder="Enter author"></input>
      <button type="submit">Submit</button>
    </StyledForm>
  );
}

export default Form;
