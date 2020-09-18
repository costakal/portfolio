import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Vortex from "./Vortex";

function App() {
  const [vortexColor, setVortexColor] = useState("#8BCF21");

  return (
    <Wrapper>
      <GlobalStyles />
      <EnterVortex
        onMouseEnter={() => {
          setVortexColor("#79b51b");
        }}
        onMouseLeave={() => {
          setVortexColor("#8BCF21");
        }}
        onClick={() => {}}
      >
        <Vortex color="#fff" transform="translate(0, 1280) scale(0.1, -0.1)" />
        <Vortex
          color={vortexColor}
          transform="translate(50, 1280) scale(0.1, -0.1)"
        />
      </EnterVortex>

      {/* Onload only vortex is visible and then everything is transitioned and time and the rest of the components are rendered. */}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  height: 100vh;
`;

const EnterVortex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 1s ease;
`;
