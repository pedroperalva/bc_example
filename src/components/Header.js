import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logokuppi.png';

const Header = ()=> {
        return (
            <Cabecalho>
                <NavLogo to="/"><img src={Logo} alt="Logo Kuppi"/></NavLogo>
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
const NavLogo = styled(NavLink)`
    margin-left: 50px;
    img {
        height: 50px;
    }
`

export default Header;