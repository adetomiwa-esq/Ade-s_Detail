import { configureStore } from "@reduxjs/toolkit";
import ServiceReducer from  './features/cart/ServiceSlice';
import ReviewReducer from  './features/cart/ReviewSlice';
import ContactReducer from  './features/cart/ContactSlice';

export const store = configureStore({
    reducer: {
        service: ServiceReducer,
        reviews: ReviewReducer,
        contact: ContactReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export  type RootType = typeof store.dispatch