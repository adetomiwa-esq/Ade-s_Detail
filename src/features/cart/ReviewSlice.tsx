import { createSlice } from "@reduxjs/toolkit";
import { AllReviews } from "../../components/AllReviews";


type reviewData = {
    reviews: {
        imgUrl: string
        initials: string
        clientName: string
        review1: string
        review2: string
        car: string
    }[],
    current: number
}

const initialState: reviewData = {
    reviews: AllReviews,
    current: 0
}

const ReviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        increase: (state) => {
            const limit = 4
            if(state.current < limit) {
                state.current += 1
            }
            else {
                state.current = 0
            } 
        },
        decrease: (state) => {
            const limit = 0
            if(state.current > limit) {
                state.current -= 1
            }
            else {
                state.current = 4
            } 
        },
    }
})

export const { increase, decrease } = ReviewsSlice.actions

export default ReviewsSlice.reducer