import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import CardDetails from '../components/CardDetails';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Details = () => {

    let { id } = useParams();

    return (
        <DivPrincipal>
            <DivHeader>
                <Header />
            </DivHeader>
            <DivMain>
                <CardDetails id={id} />
            </DivMain>
            <DivFooter>
                <Footer />
            </DivFooter>
        </DivPrincipal>
    )
}

const DivPrincipal = styled.div`
    display: grid;
    grid-gap: 20px;
    gap: 20px;
    width: 100%;
    min-height: 100vh;
    grid-template-areas:
        "header"
        "content"
        "footer ";
    grid-template-columns: 1fr;
    grid-template-rows: 100px 100vh 5rem;
    background-color:rgb(246, 247, 251);
    @media (max-width: 700px) {
        grid-template-rows: 100px 130vh 5rem;
    ;}
    @media (max-width: 500px) {
        grid-template-rows: 100px 150vh 5rem;
    ;}
`
const DivHeader = styled.header`
    grid-area:header;
`
const DivMain = styled.main`
    grid-area:content;
    display: flex;
    justify-content: center;
    align-items: center;
`
const DivFooter = styled.footer`
    grid-area:footer;
`

export default Details