import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProduct } from "../Store/productSlice"




const Product = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product)

    useEffect(() => {

        dispatch(fetchProduct());



    }, [])

    console.log(products)
    console.log(status)




    return (
        <div>
            <h1>Product List</h1>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>

        </div>
    )
}

export default Product