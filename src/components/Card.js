import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Card = ({ name, price, id }) => {

  let history = useHistory();

  function handleClick() {
    history.push(`/details/${id}`);
  }

  return (
    <Div onClick={handleClick}>
      <Title>{name}</Title>
      <Value>R$ {price}</Value>
    </Div>
  )
}

const Div = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 30px;
  border-radius: 20px;
  width: 200px;
  height: 200px;
  margin:10px;
  justify-self: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
`;
const Title = styled.h1`
  font-size: 22px;
  text-align: center;
  font-family: 'Secular One', sans-serif;
  &:hover {
        color:#2CFE84;
    }
`;
const Value = styled.p`
  font-size: 20px;
  text-align: center;
  font-family: 'Secular One', sans-serif;
  border-top: 0.6rem solid #2CFE84;
  padding-top: 10px;
`;

export default Card;