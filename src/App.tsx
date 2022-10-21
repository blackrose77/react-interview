import React from "react";
import styled from "styled-components";
import Movies from "./components/Movies";

const SWrapper = styled.div`
  background-color: #141414;
  padding-top: 50px;
  height: 100vh;
`;

function App() {
  return (
    <SWrapper>
      <Movies />
    </SWrapper>
  );
}

export default App;
