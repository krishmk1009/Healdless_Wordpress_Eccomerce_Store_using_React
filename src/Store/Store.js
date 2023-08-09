import { configureStore } from '@reduxjs/toolkit'
import prouctReducer from './productSlice'

const store = configureStore({
    reducer: {
        product: prouctReducer,
    }
})

export default store