import React from "react";
import styled from "styled-components";

import dnd from "../assets/dnd.png";
import monster from "../assets/monster.png";
import watchcave from "../assets/watchcave.png";

const Projects = () => {
  return (
    <Wrapper>
      <Header>Projects</Header>
      <Project id="projects">
        <ProjectTile>
          <div>
            <img src={dnd} alt="dnd" />
          </div>
          <h2>D&amp;D 5e Campaign Manager</h2>
        </ProjectTile>
        <ProjectTile>
          <div>
            <img src={watchcave} alt="watchcave" />
          </div>
          <h2>WatchCave E-Commerce Shop</h2>
        </ProjectTile>
        <ProjectTile>
          <div>
            <img src={monster} alt="monster-plague" />
          </div>
          <h2>Monster Plague</h2>
        </ProjectTile>
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
  background: rgba(0, 0, 0, 0.9);
  text-transform: uppercase;
  color: white;
  text-shadow: 2px 2px #8bcf21;
  font-size: 50px;
  padding: 50px;
`;

const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.9);
  color: white;
`;

const ProjectTile = styled.div`
  margin: 20px 50px 100px;
  position: relative;
  cursor: pointer;

  h2 {
    display: none;
    position: absolute;
    bottom: 25px;
    left: 10px;
    color: white;
    font-size: 40px;
    font-weight: 600;
    text-shadow: 2px 2px 2px black;
    pointer-events: none;
  }
  &:hover {
    h2 {
      display: block;
    }
  }

  div {
    img {
      border-radius: 25px;
      object-fit: cover;
      width: 350px;
      height: 350px;
    }
    &:hover:after {
      position: absolute;
      content: "";
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(9, 9, 9, 0.5105392498796393) 50%,
        rgba(93, 93, 93, 0) 100%
      );
    }
  }
`;
