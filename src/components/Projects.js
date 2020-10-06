import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Wrapper>
      <Header>Projects</Header>
      <Project id="projects">
        <div>Dnd</div>
        <div>WatchCave</div>
      </Project>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  position: relative;
  top: 50vh;
  width: 100%;
`;

const Header = styled.div`
  background: rgba(0, 0, 0, 0.8);
  text-transform: uppercase;
  color: white;
  text-shadow: 2px 2px #8bcf21;
  font-size: 50px;
  padding: 50px;
`;

const Project = styled.div``;
