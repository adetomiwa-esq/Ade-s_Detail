import { createSlice } from "@reduxjs/toolkit";
import { Services } from "../../components/ServicesImg";

interface initialValue { 
    Services :{
        imgSrc: string
        title: string
        para: string
        url: string
        selected: boolean
    }[]
}

const initialState: initialValue = {
    Services: Services
}


export const ServiceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {}
})


export default ServiceSlice.reducer