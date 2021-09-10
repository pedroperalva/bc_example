import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import KuppiService from '../services/api';
import { useParams } from 'react-router';

const Details = () => {

    const [product, setProduct] = useState('')

    let { id } = useParams();

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
            <h1>{product.name}</h1>
            <img src={product.photo_url} />
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </DivDetails>
    )
}

const DivDetails = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 30px;
  border-radius: 20px;
  width: 500px;
  height: 500px;
  margin:10px;
  justify-self: center;
  padding: 1rem;
  background-color: rgb(255, 255, 255);
`

export default Details