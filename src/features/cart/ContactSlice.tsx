import { createSlice }  from '@reduxjs/toolkit';
import { ContactSliderImg } from '../../components/ContactSliderImg';


export type contactSlideShow = {
        contactSlider: {
            leftImg: string
            rightImg: string
            leftDesc: string
            rightDesc: string
            serviceLeft: string
            serviceRight: string
        }[],
        current: number
}

const initialState: contactSlideShow = {
    contactSlider: ContactSliderImg,
    current: 0
}

const ContactSlice = createSlice({
    name: 'ContactSlice',
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

export const {increase, decrease} = ContactSlice.actions
export default ContactSlice.reducer