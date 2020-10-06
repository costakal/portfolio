import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import NavBar from "./components/NavBar";
import Personal from "./components/Personal";

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <NavBar />
      <NavSpacer />
      <Personal />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  height: 50vh;
  background: black;

  /* background: linear-gradient(
    209deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(9, 9, 9, 1) 50%,
    rgba(65, 65, 65, 1) 100%
  ); */

  &:after {
    background: linear-gradient(
      209deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(9, 9, 9, 1) 50%,
      rgba(65, 65, 65, 1) 100%
    );
    position: absolute;
    content: "";
    right: 0px;
    top: 50vh;
    max-width: 100vw;
    border-width: 50vh 50vw;
    border-style: solid;
    border-color: black black rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
    z-index: -1;
  }
`;

const NavSpacer = styled.div`
  position: relative;
  background: black;
  height: 80px;
  z-index: -1;
`;
