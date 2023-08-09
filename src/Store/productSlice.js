import { createSlice } from '@reduxjs/toolkit'

import { api } from "../api/Api"
const STATUS = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
})


const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },

    reducers: {
        setProduct(state, action) {
            state.data = action.payload;
        },

        setStatus(state, action) {
            state.status = action.payload;
        }
    },
})


export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

//define the thunk here

export const fetchProduct = () => {
    return async function fetchThunkProduct(dispatch, getstate) {
        dispatch(setStatus(STATUS.LOADING))

        try {

            const result = await api.get("/products")
            // console.log(result.data);
            dispatch(setProduct(result.data))
            dispatch(setStatus(STATUS.IDLE))

        } catch (error) {
            dispatch(setStatus(STATUS.ERROR))
            console.log("Error while fetching products are : ", error)
            
        }
    }
}