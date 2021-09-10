import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logokuppi.png';

const Header = ()=> {
        return (
            <Cabecalho>
                <StyledNavLogo to="/"><img src={Logo} alt="Logo Kuppi"/></StyledNavLogo>
            </Cabecalho>
        )
}

const Cabecalho = styled.header`
    height: 100px;
    background-color: #2CFE84;
    width: 100%;
    display: flex;
    align-items: center;
`
const StyledNavLogo = styled(NavLink)`
    margin-left: 50px;
    img {
        height: 50px;
    }
`

export default Header;