import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Card = ({ name, price, id, image }) => {

  let history = useHistory();

  function handleClick() {
    history.push(`/details/${id}`);
  }

  return (
    <Div onClick={handleClick}>
      <Img src={image}/>
      <Title>{name}</Title>
      <Value>R$ {price}</Value>
    </Div>
  )
}

const Div = styled.div`
  box-shadow: rgba(45, 255, 133, 1) 5px 5px 0px 0px;
  border-radius: 20px;
  width: 200px;
  height: 400px;
  margin:10px;
  justify-self: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(255, 255, 255);
`;
const Img = styled.img`
  max-width: 200px;
  max-height: 200px;
  border-radius: 20px;
`
const Title = styled.h1`
  font-size: 22px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  &:hover {
        color:#2CFE84;
    }
`;
const Value = styled.p`
  font-size: 20px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  border-top: 0.6rem solid #2CFE84;
  padding-top: 10px;
  font-weight: bold;
`;

export default Card;