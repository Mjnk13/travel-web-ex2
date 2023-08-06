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

const initialTripState:trip = {
    date: "",
    numPeople: 0,
    cardImg: "",
    shortDescription: "",
    detailDescription: "",
    country: "",
    location: "",
    price: 0,
    rate: 0,
    departure: "",
    departureTime: "",
    returnTime: "",
    dressCode: "",
    notIncluded: [],
    included: [],
    gallery: []
}

export const tripSlice = createSlice({
    name: "trip",
    initialState: initialTripState,
    reducers: {

    }
});

export const tripReducer = tripSlice.reducer;