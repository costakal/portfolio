import React from "react";
import styled, { keyframes } from "styled-components";
import headshot from "../assets/headshot.jpg";
import {
  ReactLogo,
  Redux,
  Javascript,
  Nodejs,
  Html5,
  Css3,
} from "@styled-icons/boxicons-logos";

const Personal = () => {
  return (
    <Wrapper>
      <div>
        <img src={headshot} alt="profileImg" />
      </div>
      <TextWrapper>
        <h2>Costa Kalafatidis</h2>
        <h3>Full-Stack Web Developer</h3>
        <h4>Creative problem solver with a keen eye for functional design.</h4>
        <p>
          As a developer, my aim is to build aesthetically pleasing products
          with functionality that enhances a users experience. I love being
          challenged in code, learning new frameworks and constantly learning
          about the latest technology trends.
        </p>
        <p>
          I have spent the last 5 years as a teacher and guiding trips for
          hundreds of teenagers around the world. I'm an avid gamer, a
          pretentious cinephile and a dedicated Dungeon Master, I've also
          dabbled in drumming and guitar for the last two decades.
        </p>
        <Skills>
          <h3>Technical Skill</h3>
          <Icons>
            <div>
              <ReactLogo size="50px" />
              <p>React.js</p>
            </div>
            <div>
              <Redux size="50px" />
              <p>Redux.js</p>
            </div>
            <div>
              <Javascript size="50px" />
              <p>JavaScript</p>
            </div>
            <div>
              <Nodejs size="50px" />

              <p>Node.js</p>
            </div>
            <div>
              <Html5 size="50px" />
              <p>HTML</p>
            </div>
            <div>
              <Css3 size="50px" />
              <p>CSS</p>
            </div>
          </Icons>
        </Skills>
      </TextWrapper>
    </Wrapper>
  );
};

export default Personal;

const fade = keyframes`
0% {
    opacity: 0;
    transform: translateX(150px);
}
 50% {
     opacity: 0;
    transform: translateX(75px);
} 100% {
    opacity: 1;
    transform: translateX(0px);
}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  color: white;
  img {
    margin: 100px 50px;
    height: 400px;
    width: 400px;
    border: solid 10px #8bcf21;
    border-radius: 300px;
    object-fit: cover;
    animation: ${fade} 2s linear;
  }
`;

const TextWrapper = styled.div`
  margin: 100px 50px;
  width: 500px;
  display: flex;
  flex-direction: column;
  h2 {
    font-family: "Lato", sans-serif;
    font-size: 60px;
    text-transform: uppercase;
    text-shadow: 2px 2px #8bcf21;
  }
  h3 {
    font-size: 36px;
  }
  h4 {
    font-size: 28px;
  }
  p {
    font-size: 18px;
  }
`;

const Skills = styled.div``;

const Icons = styled.div`
  display: flex;
  div {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
