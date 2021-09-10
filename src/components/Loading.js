import React from "react";
import styled, { keyframes } from "styled-components";


const Loading = () => {

    return (
        <CircleDiv>
            <Circle delay="0s" />
            <Circle delay=".1s" />
            <Circle delay=".2s" />
        </CircleDiv>
    )
}

const Animation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const CircleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Circle = styled.div`
  background-color: #2CFE84;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  animation: ${Animation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;

export default Loading;