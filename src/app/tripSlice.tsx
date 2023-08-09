import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface trip {
    date: string,
    numPeople: number,
    cardImg: string,
    shortDescription: string,
    detailDescription: string,
    country: string,
    location: string,
    price: number,
    rate: number,
    departure: string,
    departureTime: string,
    returnTime: string,
    dressCode: string,
    notIncluded: [string?],
    included: [string?],
    gallery: [string?]
}

const initialTripState:trip[] = []

export const tripSlice = createSlice({
    name: "trip",
    initialState: initialTripState,
    reducers: {
        getTrips(state, action){
            action.payload.map((tripItem:trip) => {
                state.push(tripItem);
            });
        }
    }
});

export const { getTrips }  = tripSlice.actions;
export const tripReducer = tripSlice.reducer;