import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KuppiService from "../services/api";
import { NavLink, useHistory } from "react-router-dom";

const CardDetails = ({ id }) => {

    const [product, setProduct] = useState('')

    useEffect(() => {
        showProduct(id)
    }, [])

    const showProduct = async (id) => {
        try {
            let res = await KuppiService.getProductsInfo(id)
            setProduct(res.data)
        }
        catch (error) {
            console.log(error)
            alert("Não foi possível carregar.")
        }
    }



    return (
        <DivDetails>
            <h1 className='name'>{product.name}</h1>
            <img src={product.photo_url} />
            <p className='price'>R$ {product.price}</p>
            <p className='category'><span>Categoria:</span> {product.category}</p>
            <p className='description'><span>Descrição:</span> {product.description}</p>
            <NavBack to='/'>Sair</NavBack>
        </DivDetails>
    )
}

const DivDetails = styled.div`
  box-shadow: rgba(45, 255, 133, 1) 10px 10px 0px 0px;
  border-radius: 20px;
  width: 800px;
  height: 800px;
  margin:10px;
  justify-self: center;
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  padding: 30px;
  display: grid;
  grid-template-areas: 
  'title title title'
  'imagem imagem price'
  'imagem imagem category'
  'imagem imagem description'
  'sair sair sair';

    .name{
      grid-area: title;
      justify-self: center;
      align-self: center;
      font-size: 50px;
      border-bottom: 0.8rem solid rgb(0, 255, 147);
      padding-bottom: 10px;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
    }
    img{
      grid-area: imagem;
      justify-self: center;
      align-self: center;
      border-radius: 20px;
      max-width: 100%;
    }
    .price{
      grid-area: price;
      justify-self: flex-start;
      align-self: center;
      font-size: 50px;
      margin-left: 80px;
      border-bottom: 0.4rem solid rgb(0, 255, 147);
      display: inline-block;
      line-height: 0.9;
      font-family: 'Roboto', sans-serif;
    }
    .category{
      grid-area: category;
      justify-self: flex-start;
      align-self: center;
      font-size: 20px;
      margin-left: 80px;
      font-family: 'Roboto', sans-serif;
    }
    .category span{
      font-weight: bold;
    }
    .description{
      grid-area: description;
      justify-self: flex-start;
      align-self: center;
      font-size: 20px;
      margin-left: 80px;
      font-family: 'Roboto', sans-serif;
    }
    .description span{
      font-weight: bold;
    }
`
const NavBack = styled(NavLink)`
    grid-area: sair;
    justify-self: center;
    align-self: center;
    text-decoration: none;
    border-radius: 5px;
    padding: 10px;
    color:#000;
    font-size: 20px;
    font-family: 'Secular One', sans-serif;
    background-color: #2CFE84;
    &:hover {
        background-color:#000;
        color:#2CFE84;
    }
`

export default CardDetails;