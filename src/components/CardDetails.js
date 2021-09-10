import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KuppiService from "../services/api";
import { NavLink, useHistory } from "react-router-dom";
import Loading from "./Loading";

const CardDetails = ({ id }) => {

  const [product, setProduct] = useState('')
  const [value, setValue] = useState(false)

  useEffect(() => {
    showProduct(id)
  }, [])

  const showProduct = async (id) => {
    try {
      let res = await KuppiService.getProductsInfo(id)
      setProduct(res.data)
      setValue(true)
    }
    catch (error) {
      console.log(error)
      alert("Não foi possível carregar.")
    }
  }



  return (
    <>
      {value ?
        <DivDetails>
          <h1 className='name'>{product.name}</h1>
          <img src={product.photo_url} />
          <p className='price'>R$ {product.price}</p>
          <p className='category'><span>Categoria:</span> {product.category}</p>
          <p className='description'><span>Descrição:</span> {product.description}</p>
          <NavBack to='/'>Sair</NavBack>
        </DivDetails>
        :
        <DivLoading>
          <Loading />
        </DivLoading>
      }
    </>
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
      @media (max-width: 700px) {
        margin-bottom: 20px;
      }
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
      @media (max-width: 700px) {
        margin-left: 0px;
        justify-self: center;
        margin-bottom: 20px;
      }
    }
    .category{
      grid-area: category;
      justify-self: flex-start;
      align-self: center;
      font-size: 20px;
      margin-left: 80px;
      font-family: 'Roboto', sans-serif;
      @media (max-width: 700px) {
        margin-left: 0px;
        justify-self: center;
        margin-bottom: 20px;
      }
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
      @media (max-width: 700px) {
        margin-left: 0px;
        justify-self: center;
        margin-bottom: 20px;
      }
    }
    .description span{
      font-weight: bold;
    }
    @media (max-width: 1000px) {
        width: 600px;
    }
    @media (max-width: 700px) {
        width: 400px;
        height: 1200px;
        grid-template-areas: 
    'title'
    'imagem'
    'price'
    'category'
    'description'
    'sair';
    }
    @media (max-width: 500px) {
        width: 250px;
        height: 1400px;
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
const DivLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export default CardDetails;