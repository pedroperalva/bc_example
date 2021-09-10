import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KuppiService from "../services/api";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const Home = () => {

    const [products, setProducts] = useState([])
    const [value, setValue] = useState(false)

    const showProducts = async () => {
        try {
            let res = await KuppiService.getProducts()
            setProducts(res.data)
            setValue(true)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        showProducts()
    }, [])

    return (
        <DivPrincipal>
            <DivHeader>
                <Header />
            </DivHeader>
            {value ?
                <>
                    <DivMain>
                        <Title>Products</Title>
                        {products.map(products => {
                            return <Card name={products.name} price={products.price} id={products.id} image={products.photo_url} />
                        })}
                    </DivMain>
                    <DivFooter>
                        <Footer />
                    </DivFooter>
                </>
                :
                <DivLoading>
                    <Loading />
                </DivLoading>
            }
        </DivPrincipal>
    )
}
const DivPrincipal = styled.div`
    display: grid;
    grid-gap: 20px;
    gap: 40px;
    width: 100%;
    min-height: 100vh;
    grid-template-areas:
        "header"
        "content"
        "footer ";
    grid-template-columns: 1fr;
    background-color:rgb(246, 247, 251);
`
const DivHeader = styled.header`
    grid-area:header;
`
const DivMain = styled.main`
    grid-area:content;
    display: grid;
    grid-template-areas:
    'title title title title title'
    'product product product product product'
    ;
    grid-gap:20px;
    @media (max-width: 1400px) {
        grid-template-areas:
        'title title title title'
        'product product product product'
    ;}
    @media (max-width: 1100px) {
        grid-template-areas:
        'title title title'
        'product product product'
    ;}
    @media (max-width: 800px) {
        grid-template-areas:
        'title title'
        'product product'
    ;}
    @media (max-width: 550px) {
        grid-template-areas:
        'title'
        'product'
    ;}
`
const DivLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const DivFooter = styled.footer`
    grid-area:footer;
`
const Title = styled.h1`
    grid-area:title;
    font-size: 70px;
    justify-self: center;
    margin-top: 100px;
    margin-bottom: 80px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    border-bottom: 0.8rem solid rgb(0, 255, 147);
    display: inline-block;
    line-height: 0.6;
`

export default Home;