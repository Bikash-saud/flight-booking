import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    searchFilter : {
        departure : "",
        arrival : "",
        departureTime : "",
        arrivalTime : ""
    },
    filteredFlights: [],
}

const searchSlice = createSlice({
    name : "flight",
    initialState,
    reducers : {
        setFlightFiltered :(state,action)=>{
            state.searchFilter = {...state.searchFilter, ...action.payload}
        },
        setFilteredFlight : (state,action)=>{
            state.filteredFlights = action.payload
        }

    }
})

export const {setFilteredFlight,setFlightFiltered} = searchSlice.actions
export default searchSlice.reducer