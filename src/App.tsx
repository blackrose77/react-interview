import React from "react";
import styled from "styled-components";
import Movies from "./components/Movies";

const STitle = styled.h1`
  color: #e5e5e5;
  font-size: 50px;
  text-align: center;
`;

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #141414;
  width: 100%;
  padding-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
`;

function App() {
  return (
    <SWrapper>
      <STitle>Welcome to the movies visualizer !</STitle>
      <Movies />
    </SWrapper>
  );
}

export default App;
