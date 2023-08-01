import React, { useEffect } from 'react'
import axios from 'axios'
const Product = () => {
    useEffect(() => {
        fetchPro()


    }, [])

    const value = JSON.parse(localStorage.getItem("user"));
    console.log("this is the token: ", value.token)
    const url = "http://localhost/firstproject/wp-json/wc/v3/"
    const api = axios.create({
        baseURL: url,
        headers: {
            Authorization: `Bearer${value.token}`
        }
    })

    const fetchPro = async () => {
        try {
            const result = await api.get("/products");
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }

    }



    return (
        <div>Product</div>
    )
}

export default Product