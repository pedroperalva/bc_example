import React from 'react';
import styled from 'styled-components';

const Footer = ()=> {
        return (
            <Rodape>
               <Copy>Kuppi - Pedro Peralva 2021</Copy>
            </Rodape>
        );
}

const Rodape = styled.footer`
    height: 5rem;
    background-color: #2CFE84;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
`
const Copy = styled.p`
    color: black;
    font-size: 1.2rem;
    font-family: 'Secular One', sans-serif;
    font-weight: bold;
`
export default Footer;