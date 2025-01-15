import React, { useEffect, useState } from 'react';
import {useGetFlightsQuery,useRandomFlightQuery} from "../redux/api/flightApiSlice"
import {setFilteredFlight,setFlightFiltered} from "../redux/features/search/searchSlice"
import MovieCard from '../pages/admin/flight/Flightss';
import { useDispatch, useSelector } from 'react-redux';
const Search = () => {
 
  const dispatch = useDispatch()
  const{data,isLoading,error} = useGetFlightsQuery()
  const {data : randomflights} = useRandomFlightQuery()
  const {searchFilter,filteredFlights} = useSelector(state=>state.flight)
  useEffect(()=>{
    dispatch(setFilteredFlight(data || []))
  },[data, dispatch])
  const handleSearch1 = async (e) => {
    dispatch(setFlightFiltered({departure : e.target.value}))  
    const filteredFlight = data.filter((flight) =>
      flight.departure.toLowerCase().includes(e.target.value.toLowerCase())
  );
  dispatch(setFilteredFlight(filteredFlight))
  
  };

  const handleSearch2 = async(e)=>{
    dispatch(setFlightFiltered({arrival : e.target.value}))

    const filteredFlight = data.filter((flight)=> flight.arrival.toLowerCase().includes(e.target.value.toLowerCase()))
    dispatch(setFilteredFlight(filteredFlight()))
  }
  return (
    <div className="max-w-screen-md gap-3 mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Search Flights</h2>
      <div className=' flex justify-center items-center'>
        <div className="mb-4 p-2">
          <label className="block text-gray-700">Departure:</label>
          <input
            type="text"
            value={searchFilter.departure}
            onChange={handleSearch1}
            className="w-full  border rounded-lg p-2 px-3"
          />
        </div>
        <div className="mb-4 p-2">
          <label className="block text-gray-700">Arrival:</label>
          <input
            type="text"
            value={searchFilter.arrival}
            onChange={handleSearch2}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        {/* <div className="mb-4 p-2">
          <label className="block text-gray-700">Departure Date:</label>
          <input
            type="date"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            className="w-full px-7 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Arrival Date:</label>
          <input
            type="date"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div> */}
       
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
      {filteredFlights?.map((flight) => (
              <MovieCard key={flight._id} flight={flight}/>
            ))}

    </div>
  );
};
export default Search;