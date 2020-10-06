import React, { useState } from "react";
import styled from "styled-components";
import Vortex from "./Vortex";

const NavBar = () => {
  const [vortexColor, setVortexColor] = useState("#8BCF21");
  return (
    <Wrapper>
      <EnterVortex
        onMouseEnter={() => {
          setVortexColor("#79b51b");
        }}
        onMouseLeave={() => {
          setVortexColor("#8BCF21");
        }}
      >
        <Vortex color="#fff" transform="translate(0, 1280) scale(0.1, -0.1)" />
        <Vortex
          color={vortexColor}
          transform="translate(50, 1280) scale(0.1, -0.1)"
        />
      </EnterVortex>
      <NavLinks>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
        <a href="#blog">Blog</a>
      </NavLinks>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100vw;
  background: rgba(0, 0, 0, 0.9);
`;

const EnterVortex = styled.div`
  margin-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 1s ease;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  a {
    font-size: 24px;
    font-weight: 500;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    padding: 15px 40px;
    position: relative;
    transition: 0.2s;
    &:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 25px;
      content: "";
      display: block;
      height: 2px;
      left: 0%;
      position: absolute;
      background: #fff;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
      opacity: 0.4;
    }
    &:hover:after {
      width: 100%;
      left: 0;
    }
    &:hover {
      text-shadow: 1.5px 1.5px #8bcf21;
      &:after {
        content: "";
      }
    }
  }
`;
